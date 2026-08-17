import { o as __toESM } from "../_runtime.mjs";
import { n as getStoredToken, r as isRemembered, t as clearToken } from "./auth-storage-CqihHLXV.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-auth-C-9LPYQj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function parseJwt(token) {
	try {
		const base64 = token.split(".")[1];
		const json = atob(base64.replace(/-/g, "+").replace(/_/g, "/"));
		return JSON.parse(json);
	} catch {
		return null;
	}
}
function useAuth() {
	const [, forceUpdate] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handler = () => forceUpdate((v) => v + 1);
		window.addEventListener("auth-changed", handler);
		return () => window.removeEventListener("auth-changed", handler);
	}, []);
	const token = typeof window !== "undefined" ? getStoredToken() : null;
	const user = (0, import_react.useMemo)(() => {
		if (!token) return null;
		return parseJwt(token);
	}, [token]);
	return {
		user,
		isAuthenticated: !!user,
		getInitials: (0, import_react.useCallback)(() => {
			if (!user?.name) return "U";
			return user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
		}, [user]),
		logout: (0, import_react.useCallback)(() => {
			clearToken();
			window.location.href = "/login";
		}, []),
		token,
		isRemembered: isRemembered()
	};
}
//#endregion
export { useAuth as t };
