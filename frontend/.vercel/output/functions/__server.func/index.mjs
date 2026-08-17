// __foodnest_api_guard__
import { Readable as __foodnest_api_Readable } from "node:stream";
globalThis.__nitro_main__ = import.meta.url;
import { a as NodeResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_FBm4Ju = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_FBm4Ju
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/isr.mjs
var ISR_URL_PARAM = "__isr_route";
function isrRouteRewrite(reqUrl, xNowRouteMatches) {
	if (xNowRouteMatches) {
		const isrURL = new URLSearchParams(xNowRouteMatches).get(ISR_URL_PARAM);
		if (isrURL) return [decodeURIComponent(isrURL), ""];
	} else {
		const queryIndex = reqUrl.indexOf("?");
		if (queryIndex !== -1) {
			const params = new URLSearchParams(reqUrl.slice(queryIndex + 1));
			const isrURL = params.get(ISR_URL_PARAM);
			if (isrURL) {
				params.delete(ISR_URL_PARAM);
				return [decodeURIComponent(isrURL), params.toString()];
			}
		}
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/vercel.web.mjs
var nitroApp = useNitroApp();
var vercel_web_default = { fetch(req, context) {
//#region #foodnest-api
// FoodNest backend API dispatcher. Requests to /api/* and /uploads/* are
// served by the shared Express application (backend/) instead of the SSR
// renderer. Imported lazily so cold starts stay fast when no API is hit.
	// (node:stream is hoisted to the top of the file by the build script.)
	let __foodnest_api_app_promise = undefined;
function __foodnest_api_app() {
	if (!__foodnest_api_app_promise) {
		__foodnest_api_app_promise = import("../../../../../backend/server.js").then((m) => m.default);
	}
	return __foodnest_api_app_promise;
}
async function __foodnest_api_dispatch(req) {
	const app = await __foodnest_api_app();
	const url = new URL(req.url, "https://x");
	if (!url.pathname.startsWith("/api/") && !url.pathname.startsWith("/uploads") && url.pathname !== "/api") {
		return null; // not an API request – fall through to SSR
	}
	return new Promise((resolve) => {
		const headers = Object.fromEntries(req.headers.entries());
		const chunks = [];
		const reader = req.body ? req.body.getReader() : null;
		function drain() {
			if (!reader) return finish();
			reader.read().then(({ done, value }) => {
				if (done) return finish();
				chunks.push(value);
				drain();
			});
		}
		function finish() {
			const body = Buffer.concat(chunks.map((c) => (typeof c === "string" ? Buffer.from(c) : Buffer.from(c))));
			if (body.length) headers["content-length"] = String(body.length);
			const stream = body.length ? __foodnest_api_Readable.from([body]) : __foodnest_api_Readable.from([]);
			const nodeReq = Object.assign(stream, {
				method: req.method,
				url: url.pathname + url.search,
				headers,
				httpVersion: "1.1",
				httpVersionMajor: 1,
				httpVersionMinor: 1,
				on: stream.on.bind(stream),
			});
			let statusCode = 200;
			const resHeaders = {};
			const resChunks = [];
			const nodeRes = Object.create(null, {
				headersSent: { value: false, writable: true, configurable: true },
				statusCode: {
					get() { return statusCode; },
					set(v) { statusCode = v; },
					configurable: true,
				},
				setHeader: { value(k, v) { resHeaders[String(k).toLowerCase()] = v; } },
				getHeader: { value() { return undefined; } },
				removeHeader: { value() {} },
				writeHead: { value(code, h) { statusCode = code; if (h) Object.assign(resHeaders, h); nodeRes.headersSent = true; } },
				write: { value(chunk) { resChunks.push(Buffer.from(chunk)); return true; } },
				end: {
					value(chunk) {
						if (chunk !== undefined) resChunks.push(Buffer.from(chunk));
						nodeRes.headersSent = true;
						const bodyBuf = Buffer.concat(resChunks);
						const respHeaders = { ...resHeaders };
						resolve(
							new Response(bodyBuf.length ? bodyBuf : null, { status: statusCode, headers: respHeaders }),
						);
					},
				},
				on: { value() { return nodeRes; } },
			});
			void app(nodeReq, nodeRes);
		}
		drain();
	});
}
//#endregion

	const isrURL = isrRouteRewrite(req.url, req.headers.get("x-now-route-matches"));
	if (isrURL) {
		const { routeRules } = getRouteRules("", isrURL[0]);
		if (routeRules?.isr) req = new Request(new URL(isrURL[0] + (isrURL[1] ? `?${isrURL[1]}` : ""), req.url).href, req);
	}
	req.runtime ??= { name: "vercel" };
	req.runtime.vercel = { context };
	let ip;
	Object.defineProperty(req, "ip", { get() {
		const h = req.headers.get("x-forwarded-for");
		return ip ??= h?.split(",").shift()?.trim();
	} });
	req.waitUntil = context?.waitUntil;
	return __foodnest_api_dispatch(req).then((r) => r !== null ? r : nitroApp.fetch(req));
} };
//#endregion
export { vercel_web_default as default };
