import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.help-jWn8OETv.js
var import_jsx_runtime = require_jsx_runtime();
function Help() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Help & resources",
		subtitle: "We're here when you need us."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4",
		children: [
			["How do I add an item?", "Tap the + button in the Inventory page or the floating + everywhere."],
			["How is expiry calculated?", "Based on the expiry date you enter or the average for that category."],
			["Who sees my donations?", "Only neighbours within your chosen radius."],
			["Is my data private?", "Yes. End-to-end encrypted backups and 2FA-ready accounts."]
		].map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: q
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: a
		})] }, q))
	})] });
}
//#endregion
export { Help as component };
