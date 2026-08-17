import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Package, X as HeartHandshake, _t as CheckCheck, a as User, dt as CircleX, o as Truck, ut as Clock } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as useFoodConnectListController } from "./food-connect.controller-lpxStvIN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.food-connect.index-DP4P8PKt.js
var import_jsx_runtime = require_jsx_runtime();
var STATUS_COLORS = {
	Reserved: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
	Completed: "bg-green-500/15 text-green-600 dark:text-green-400",
	Cancelled: "bg-gray-500/15 text-gray-600 dark:text-gray-400"
};
var STATUS_ICONS = {
	Reserved: Clock,
	Completed: CheckCheck,
	Cancelled: CircleX
};
function FoodConnectList({ active, history, loading, userId, handleOpen }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid place-items-center h-[60vh] text-muted-foreground text-sm",
		children: "Loading food connects…"
	});
	if (active.length === 0 && history.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center h-[60vh] text-center space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-16 w-16 text-primary/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold",
				children: "Food Connect"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground max-w-md",
				children: "No food connects yet. Claim a donation or have someone claim yours to get started."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/app/donations",
				className: "rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
				children: "Go to Donations"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-8",
		children: [active.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-4 flex items-center gap-2 text-lg font-bold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-amber-500" }),
				"Active (",
				active.length,
				")"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: active.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodConnectCard, {
				item,
				userId,
				onClick: handleOpen
			}, item.id))
		})] }), history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-4 flex items-center gap-2 text-lg font-bold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-muted-foreground/40" }),
				"History (",
				history.length,
				")"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodConnectCard, {
				item,
				userId,
				onClick: handleOpen
			}, item.id))
		})] })]
	});
}
function FoodConnectCard({ item, userId, onClick }) {
	const isDonor = userId ? item.donor.id === userId : false;
	const otherPerson = isDonor ? item.claimant : item.donor;
	const StatusIcon = STATUS_ICONS[item.status] || HeartHandshake;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		onClick: () => onClick(item.id),
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "glass-card w-full space-y-3 rounded-3xl p-4 text-left transition hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
						children: item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5 text-emerald-500" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-bold",
							children: item.foodName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: item.category
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${STATUS_COLORS[item.status] || ""}`,
						children: item.status
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: otherPerson ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						isDonor ? "Claimed by" : "Donated by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: otherPerson.name })
					] }) : "No recipient yet"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.status === "Reserved" && item.claimedAt ? `Claimed ${new Date(item.claimedAt).toLocaleDateString()}` : item.status === "Completed" && item.completedAt ? `Completed ${new Date(item.completedAt).toLocaleDateString()}` : `Created ${new Date(item.createdAt).toLocaleDateString()}` })]
			}),
			item.deliveryMethod && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.deliveryMethod === "self_pickup" ? "Self Pickup" : `Third-party${item.deliveryPartner ? ` · ${item.deliveryPartner}` : ""}`, item.deliveryStatus === "proposed" && " (pending)"] })]
			})
		]
	});
}
function FoodConnectIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodConnectList, { ...useFoodConnectListController() });
}
//#endregion
export { FoodConnectIndex as component };
