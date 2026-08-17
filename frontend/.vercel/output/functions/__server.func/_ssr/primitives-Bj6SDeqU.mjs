import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-Bj6SDeqU.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .4 },
		className: "mb-6 flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-bold tracking-tight md:text-4xl",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: subtitle
		})] }), action]
	});
}
function StatCard({ label, value, delta, icon, tone = "primary", index = 0 }) {
	const tones = {
		primary: "from-[oklch(0.85_0.18_145)] to-[oklch(0.78_0.18_130)]",
		warning: "from-[oklch(0.88_0.16_85)] to-[oklch(0.78_0.16_70)]",
		success: "from-[oklch(0.85_0.15_165)] to-[oklch(0.72_0.16_160)]",
		danger: "from-[oklch(0.85_0.16_30)] to-[oklch(0.7_0.2_25)]"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .4,
			delay: index * .06
		},
		className: "glass-card hover-lift relative overflow-hidden rounded-3xl p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${tones[tone]} opacity-30 blur-2xl` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-3xl font-bold tracking-tight",
					children: value
				}),
				delta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success",
					children: delta
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${tones[tone]} text-white shadow-soft`,
				children: icon
			})]
		})]
	});
}
function Panel({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `glass-card rounded-3xl p-6 ${className}`,
		children
	});
}
//#endregion
export { Panel as n, StatCard as r, PageHeader as t };
