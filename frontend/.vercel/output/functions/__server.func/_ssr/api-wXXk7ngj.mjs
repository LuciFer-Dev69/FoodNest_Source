import { n as getStoredToken } from "./auth-storage-CqihHLXV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-wXXk7ngj.js
async function apiFetch(endpoint, options = {}) {
	const token = typeof window !== "undefined" ? getStoredToken() : null;
	const headers = new Headers(options.headers || {});
	if (token) headers.set("Authorization", `Bearer ${token}`);
	if (!(options.body instanceof FormData)) headers.set("Content-Type", "application/json");
	const normalizedEndpoint = endpoint.replace(/^https?:\/\/[^/]+/i, "").replace(/^\/api\//i, "/api/");
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 3e4);
	const response = await fetch(normalizedEndpoint, {
		...options,
		headers,
		signal: controller.signal
	}).finally(() => clearTimeout(timeout));
	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		throw new Error(errorData.message || `API error: ${response.status}`);
	}
	return response.json();
}
var api = {
	get: (endpoint, options) => apiFetch(endpoint, {
		...options,
		method: "GET"
	}),
	post: (endpoint, body, options) => apiFetch(endpoint, {
		...options,
		method: "POST",
		body: JSON.stringify(body)
	}),
	put: (endpoint, body, options) => apiFetch(endpoint, {
		...options,
		method: "PUT",
		body: JSON.stringify(body)
	}),
	patch: (endpoint, body, options) => apiFetch(endpoint, {
		...options,
		method: "PATCH",
		body: body ? JSON.stringify(body) : void 0
	}),
	delete: (endpoint, options) => apiFetch(endpoint, {
		...options,
		method: "DELETE"
	}),
	postFormData: (endpoint, formData, options) => apiFetch(endpoint, {
		...options,
		method: "POST",
		body: formData
	}),
	putFormData: (endpoint, formData, options) => apiFetch(endpoint, {
		...options,
		method: "PUT",
		body: formData
	})
};
//#endregion
export { api as t };
