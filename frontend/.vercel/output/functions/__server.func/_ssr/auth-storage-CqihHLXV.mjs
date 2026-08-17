//#region node_modules/.nitro/vite/services/ssr/assets/auth-storage-CqihHLXV.js
var TOKEN_KEY = "token";
function getStoredToken() {
	return localStorage.getItem("token") || sessionStorage.getItem("token");
}
function notify() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("auth-changed"));
}
function storeToken(token, rememberMe) {
	if (rememberMe) {
		localStorage.setItem(TOKEN_KEY, token);
		sessionStorage.removeItem(TOKEN_KEY);
	} else {
		sessionStorage.setItem(TOKEN_KEY, token);
		localStorage.removeItem(TOKEN_KEY);
	}
	notify();
}
function clearToken() {
	localStorage.removeItem(TOKEN_KEY);
	sessionStorage.removeItem(TOKEN_KEY);
	notify();
}
function isRemembered() {
	return !!localStorage.getItem(TOKEN_KEY);
}
//#endregion
export { storeToken as i, getStoredToken as n, isRemembered as r, clearToken as t };
