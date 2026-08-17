import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useAuth } from "./use-auth-C-9LPYQj.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Bell, Et as ArrowRight, O as Package, V as ListTodo, X as HeartHandshake, bt as CalendarDays, c as TrendingUp, ft as CircleCheckBig, gt as ChefHat, i as Users, s as TriangleAlert, ut as Clock } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel } from "./primitives-Bj6SDeqU.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, s as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.dashboard-TDvHGjE1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useDashboardController() {
	const { user } = useAuth();
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchDashboard = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			setError(null);
			const res = await api.get("/api/dashboard");
			setData(res);
		} catch (err) {
			setError(err.message || "Failed to load dashboard");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchDashboard();
	}, [fetchDashboard]);
	const hour = (/* @__PURE__ */ new Date()).getHours();
	return {
		data,
		loading,
		error,
		refresh: fetchDashboard,
		greeting: hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening",
		userName: data?.user?.name || user?.name || "there",
		profilePicture: data?.user?.profilePicture || user?.profilePicture,
		today: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		})
	};
}
var PRIORITY_ICONS = {
	AlertTriangle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
	HeartHandshake: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4" }),
	Package: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }),
	CalendarDays: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" }),
	Bell: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
	CheckCircle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" })
};
var ACTIVITY_EMOJIS = {
	inventory: "📦",
	donation: "❤️",
	meal: "🍳"
};
function timeAgo(dateStr) {
	const diff = Date.now() - new Date(dateStr).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "just now";
	if (mins < 60) return `${mins}m ago`;
	const hours = Math.floor(mins / 60);
	if (hours < 24) return `${hours}h ago`;
	const days = Math.floor(hours / 24);
	if (days < 7) return `${days}d ago`;
	return new Date(dateStr).toLocaleDateString();
}
function SkeletonBlock({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `animate-pulse rounded-2xl bg-foreground/5 ${className}` });
}
function EmptyState({ icon, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-foreground/5 text-foreground/30",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base font-semibold",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: description
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: action
			})
		]
	});
}
function QuickActionButton({ to, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm font-semibold transition hover:bg-secondary hover:shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white",
			children: icon
		}), label]
	});
}
function DashboardView({ data, loading, error, refresh, greeting, userName, profilePicture, today }) {
	if (loading && !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBlock, { className: "h-10 w-72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBlock, { className: "h-5 w-96" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBlock, { className: "h-28" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBlock, { className: "mt-4 h-80" })
		]
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6" }),
		title: "Could not load dashboard",
		description: error,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: refresh,
			className: "rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
			children: "Try again"
		})
	}) });
	if (!data) return null;
	const d = data;
	const isNewUser = d.onboardingSteps.every((s) => !s.done) || d.completionScore === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profilePicture,
						alt: userName,
						className: "h-14 w-14 rounded-full object-cover shadow-soft"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-xl font-bold text-white shadow-soft",
						children: userName.charAt(0).toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: [
							greeting,
							", ",
							userName,
							"!"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: today
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden text-sm italic text-muted-foreground md:block",
					children: "Let's reduce food waste together today."
				})]
			}),
			isNewUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTodo, { className: "h-6 w-6" }),
				title: "Welcome to FoodNest!",
				description: "Complete the steps below to get started."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: d.onboardingSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .08 },
					className: `rounded-2xl border p-4 text-center ${step.done ? "border-success/30 bg-success/5" : "border-border bg-background/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl text-lg font-bold ${step.done ? "bg-success/15 text-success" : "bg-foreground/5 text-foreground/30"}`,
						children: step.done ? "✓" : i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-sm font-semibold ${step.done ? "text-success" : "text-foreground/60"}`,
						children: step.label
					})]
				}, step.key))
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionButton, {
						to: "/app/inventory",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }),
						label: "Add Inventory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionButton, {
						to: "/app/donations",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4" }),
						label: "List Donation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionButton, {
						to: "/app/planner",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" }),
						label: "Create Meal Plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionButton, {
						to: "/app/community",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
						label: "Community Post"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
				children: [
					{
						label: "Inventory Items",
						value: d.stats.inventoryCount,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" }),
						tone: "primary"
					},
					{
						label: "Active Donations",
						value: d.stats.donationCount,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-5 w-5" }),
						tone: "success"
					},
					{
						label: "Meals Planned",
						value: d.stats.mealPlanCount,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" }),
						tone: "warning"
					},
					{
						label: "Unread",
						value: d.stats.unreadCount,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }),
						tone: "danger"
					},
					{
						label: "Profile",
						value: `${d.completionScore}%`,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5" }),
						tone: "primary"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .35,
						delay: i * .05
					},
					className: "glass-card rounded-3xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary/10 text-primary",
							children: s.icon
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-2xl font-bold tracking-tight",
						children: String(s.value)
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: "Today's Priorities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: d.priorities.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -8
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: i * .05 },
							className: `flex items-center gap-3 rounded-2xl px-4 py-3 ${p.type === "all_good" ? "bg-success/5" : "bg-background/60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-8 w-8 place-items-center rounded-xl ${p.type === "all_good" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`,
								children: PRIORITY_ICONS[p.icon] || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "flex-1 text-sm font-medium",
								children: p.text
							})]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-bold",
					children: "Today's Meals"
				}), d.todayMeals && (d.todayMeals.Breakfast || d.todayMeals.Lunch || d.todayMeals.Dinner) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: [
						"Breakfast",
						"Lunch",
						"Dinner"
					].map((slot) => {
						const meal = d.todayMeals[slot];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl bg-background/60 px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary/10 text-base",
								children: meal?.emoji || "🍽️"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: slot
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: meal?.name || "Not planned"
								})]
							})]
						}, slot);
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-6 w-6" }),
					title: "No meals planned today",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/planner",
						className: "inline-flex items-center gap-1 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:shadow-lift",
						children: ["Create Meal Plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold",
							children: "Recent Activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-muted-foreground" })]
					}), d.recentActivity.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: d.recentActivity.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -8
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: i * .03 },
							className: "flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-background/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg",
									children: a.emoji || ACTIVITY_EMOJIS[a.type] || "📌"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-sm font-medium",
									children: a.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-xs text-muted-foreground",
									children: timeAgo(a.createdAt)
								})
							]
						}, `${a.type}-${a.createdAt}-${i}`))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-6 w-6" }),
						title: "No recent activity",
						description: "Your actions will appear here."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: "Activity (7 Days)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Items added to inventory"
					}),
					d.activityChart.some((p) => p.count > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: d.activityChart,
								margin: {
									top: 6,
									right: 4,
									left: -16,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "gChart",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "oklch(0.72 0.18 145)",
											stopOpacity: .5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "oklch(0.72 0.18 145)",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "oklch(0.92 0.01 240)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "day",
										stroke: "oklch(0.55 0.03 250)",
										fontSize: 11,
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "oklch(0.55 0.03 250)",
										fontSize: 11,
										tickLine: false,
										axisLine: false,
										allowDecimals: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										borderRadius: 12,
										border: "1px solid oklch(0.92 0.01 240)"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "count",
										stroke: "oklch(0.72 0.18 145)",
										strokeWidth: 2,
										fill: "url(#gChart)"
									})
								]
							})
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-center justify-center text-xs text-muted-foreground",
						children: "No data yet"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold",
							children: "Inventory Preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/inventory",
							className: "flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
							children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})]
					}), d.inventoryPreview.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-left text-xs font-medium text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 pr-4",
										children: "Food"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 pr-4",
										children: "Qty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 pr-4",
										children: "Expires"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 pr-4",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 text-right",
										children: "Action"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: d.inventoryPreview.slice(0, 5).map((item) => {
								const expiresIn = item.expires;
								const expiringSoon = expiresIn <= 3;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 pr-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 font-medium",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.emoji }),
													" ",
													item.name
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 pr-4 text-muted-foreground",
											children: item.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 pr-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-2 py-0.5 text-xs font-semibold ${expiresIn <= 1 ? "bg-destructive/15 text-destructive" : expiringSoon ? "bg-warning/15 text-warning" : "bg-success/15 text-success"}`,
												children: expiresIn === 0 ? "Today" : `${expiresIn}d`
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 pr-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-2 py-0.5 text-xs font-semibold ${expiringSoon ? "bg-warning/15 text-warning" : "bg-success/15 text-success"}`,
												children: expiringSoon ? "Expiring" : "Fresh"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/app/inventory",
												className: "text-xs font-semibold text-primary hover:underline",
												children: "View"
											})
										})
									]
								}, item.id);
							}) })]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-6 w-6" }),
						title: "No inventory items",
						description: "Add your first food item to get started."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: "Notifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/notifications",
						className: "flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
						children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})]
				}), d.notifications.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: d.notifications.slice(0, 5).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center gap-3 rounded-2xl px-4 py-3 ${!n.isRead ? "bg-primary/5" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-7 w-7 place-items-center rounded-xl text-xs ${!n.isRead ? "bg-primary/15 text-primary" : "bg-foreground/5 text-foreground/40"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `truncate text-sm ${!n.isRead ? "font-semibold" : "text-muted-foreground"}`,
								children: n.message
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: timeAgo(n.createdAt)
							})]
						})]
					}, n.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-6 w-6" }),
					title: "No notifications",
					description: "You're all caught up."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: "Donation Preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/donations",
						className: "flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
						children: ["View Marketplace ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})]
				}), d.donationPreview.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: d.donationPreview.slice(0, 3).map((don) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl bg-background/60 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: don.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: don.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										don.qty,
										" · ",
										don.cat,
										" · ",
										don.pickup
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${don.status === "Available" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`,
								children: don.status
							})
						]
					}, don.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-6 w-6" }),
					title: "No donations yet",
					description: "List surplus food to help your community."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold",
							children: "Completion Score"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-bold",
							children: [d.completionScore, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 h-2 overflow-hidden rounded-full bg-foreground/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-gradient-primary transition-all duration-500",
							style: { width: `${d.completionScore}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: d.onboardingSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl bg-background/60 px-4 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-7 w-7 place-items-center rounded-lg text-xs font-bold ${step.done ? "bg-success/15 text-success" : "bg-foreground/5 text-foreground/30"}`,
								children: step.done ? "✓" : step.key === "profile" ? "1" : step.key === "inventory" ? "2" : step.key === "meal_plan" ? "3" : "4"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `flex-1 text-sm ${step.done ? "text-success line-through" : "text-foreground/60"}`,
								children: step.label
							})]
						}, step.key))
					})
				] })]
			})
		]
	});
}
function DashboardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardView, { ...useDashboardController() });
}
//#endregion
export { DashboardPage as component };
