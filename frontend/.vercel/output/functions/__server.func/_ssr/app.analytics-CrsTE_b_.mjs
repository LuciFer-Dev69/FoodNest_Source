import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { O as Package, X as HeartHandshake, bt as CalendarDays, ft as CircleCheckBig, i as Users, s as TriangleAlert, st as Download, tt as FileText, u as Trash2, w as RefreshCw } from "../_libs/lucide-react.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.analytics-CrsTE_b_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useAnalyticsController() {
	const [period, setPeriod] = (0, import_react.useState)("30d");
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [activityMetric, setActivityMetric] = (0, import_react.useState)("total");
	const fetchAnalytics = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const result = await api.get(`/api/analytics?period=${period}`);
			setData(result);
		} catch (err) {
			toast.error(err.message || "Failed to load analytics");
		} finally {
			setLoading(false);
		}
	}, [period]);
	(0, import_react.useEffect)(() => {
		fetchAnalytics();
	}, [fetchAnalytics]);
	return {
		period,
		setPeriod,
		data,
		loading,
		activityMetric,
		setActivityMetric,
		refetch: fetchAnalytics
	};
}
var PERIOD_OPTIONS = [
	{
		label: "Last 7 Days",
		value: "7d"
	},
	{
		label: "Last 30 Days",
		value: "30d"
	},
	{
		label: "Last 90 Days",
		value: "90d"
	},
	{
		label: "This Year",
		value: "year"
	}
];
var HEATMAP_LEVELS = [
	"bg-gray-100 dark:bg-gray-800",
	"bg-green-200 dark:bg-green-900",
	"bg-green-400 dark:bg-green-700",
	"bg-green-500 dark:bg-green-600",
	"bg-green-700 dark:bg-green-500"
];
var DAYS = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function PeriodFilter({ current, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1 rounded-2xl border border-border bg-background/70 p-1",
		children: PERIOD_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(o.value),
			className: `rounded-xl px-3 py-1.5 text-xs font-semibold transition ${current === o.value ? "bg-gradient-primary text-white shadow-soft" : "text-muted-foreground hover:text-foreground"}`,
			children: o.label
		}, o.value))
	});
}
function StatCard({ label, value, trend, icon, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-card rounded-2xl p-4 hover-lift",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-bold",
					children: value
				}),
				trend ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[11px] text-muted-foreground",
					children: trend
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[11px] text-muted-foreground",
					children: "No trend yet"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-10 w-10 place-items-center rounded-xl",
				style: {
					backgroundColor: `${color}20`,
					color
				},
				children: icon
			})]
		})
	});
}
function CircularProgress({ value, size = 120, strokeWidth = 10 }) {
	const r = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * r;
	const offset = circumference - value / 100 * circumference;
	const color = value >= 80 ? "oklch(0.72 0.18 145)" : value >= 50 ? "oklch(0.78 0.16 70)" : "oklch(0.6 0.18 35)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		className: "-rotate-90",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: "oklch(0.92 0.01 240)",
				strokeWidth
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: color,
				strokeWidth,
				strokeDasharray: circumference,
				strokeDashoffset: offset,
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: size / 2,
				y: size / 2,
				textAnchor: "middle",
				dominantBaseline: "central",
				fontSize: 28,
				fontWeight: 700,
				fill: color,
				transform: "rotate(90, 60, 60)",
				children: value
			})
		]
	});
}
function ChartTooltip({ active, payload, label }) {
	if (!active || !payload) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card px-3 py-2 text-xs shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 font-semibold",
			children: label
		}), payload.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			style: { color: p.color },
			children: [
				p.name,
				": ",
				p.value
			]
		}, i))]
	});
}
function HeatmapCell({ level, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		title,
		className: `h-3 w-3 rounded-sm ${HEATMAP_LEVELS[level] || HEATMAP_LEVELS[0]}`
	});
}
function downloadCSV(data) {
	const rows = [[
		"Metric",
		"Value",
		"Period"
	]];
	const add = (m, v) => rows.push([
		m,
		String(v),
		data.period
	]);
	add("Inventory Items", data.dashboardSummary.inventoryItems);
	add("Active Donations", data.dashboardSummary.activeDonations);
	add("Completed Donations", data.dashboardSummary.completedDonations);
	add("Meals Planned", data.dashboardSummary.mealsPlanned);
	add("Community Posts", data.dashboardSummary.communityPosts);
	add("Food Waste %", data.foodWasteAnalysis.wastePercentage);
	add("Fresh Food", data.foodWasteAnalysis.fresh);
	add("Expiring Soon", data.foodWasteAnalysis.expiringSoon);
	add("Expired Food", data.foodWasteAnalysis.expired);
	add("Total Donations", data.donationStats.total);
	add("Completed Donations", data.donationStats.completed);
	add("Claim Rate %", data.donationStats.claimRate);
	add("Completion Rate %", data.donationStats.completionRate);
	add("Donation Success Rate %", data.sustainability.donationSuccessRate);
	add("Food Saved", data.sustainability.foodSaved);
	add("Meals Shared", data.sustainability.mealsShared);
	add("CO₂ Reduction", data.sustainability.co2Reduction);
	add("Health Score", data.healthScore.overall);
	add("Items Saved", data.monthlyOverview.foodDonated);
	const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `foodnest-analytics-${data.period}.csv`;
	a.click();
	URL.revokeObjectURL(url);
}
function AnalyticsView({ period, setPeriod, data, loading, activityMetric, setActivityMetric, refetch }) {
	const ad = data;
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Analytics",
			subtitle: "Business intelligence for your kitchen."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
			children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-2xl p-4 animate-pulse",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-16 rounded bg-secondary mb-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-12 rounded bg-secondary mb-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-20 rounded bg-secondary" })
				]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-3xl p-5 animate-pulse lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-36 rounded bg-secondary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 rounded bg-secondary" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-3xl p-5 animate-pulse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-28 rounded bg-secondary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 rounded bg-secondary" })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-3xl p-5 animate-pulse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-32 rounded bg-secondary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 rounded bg-secondary" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-3xl p-5 animate-pulse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-24 rounded bg-secondary mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 rounded bg-secondary" })]
			})]
		})
	] });
	if (!ad) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center gap-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-10 w-10 text-amber-500" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold",
				children: "Could not load analytics"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "The data may be temporarily unavailable."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: refetch,
				className: "mt-2 flex items-center gap-2 rounded-2xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), " Retry"]
			})
		]
	});
	const wastePct = ad.foodWasteAnalysis.wastePercentage ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight md:text-4xl",
				children: "Analytics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Business intelligence for your kitchen."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeriodFilter, {
						current: period,
						onChange: setPeriod
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => downloadCSV(ad),
						className: "flex items-center gap-1.5 rounded-2xl border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " CSV"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => downloadCSV(ad),
						className: "flex items-center gap-1.5 rounded-2xl border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => downloadCSV(ad),
						className: "flex items-center gap-1.5 rounded-2xl border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Excel"]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Inventory Items",
					value: String(ad.dashboardSummary.inventoryItems),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }),
					color: "oklch(0.72 0.18 145)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Active Donations",
					value: String(ad.dashboardSummary.activeDonations),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4" }),
					color: "oklch(0.65 0.16 160)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Completed Donations",
					value: String(ad.dashboardSummary.completedDonations),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" }),
					color: "oklch(0.6 0.15 220)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Meals Planned",
					value: String(ad.dashboardSummary.mealsPlanned),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" }),
					color: "oklch(0.78 0.16 70)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Community Posts",
					value: String(ad.dashboardSummary.communityPosts),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
					color: "oklch(0.7 0.15 280)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: `Food Waste`,
					value: `${wastePct}%`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }),
					color: "oklch(0.6 0.18 35)"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: "Weekly Activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-0.5 rounded-lg border border-border bg-background/70 p-0.5",
						children: [
							"total",
							"inventory",
							"donations",
							"meals",
							"posts"
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActivityMetric(m),
							className: `rounded-md px-2 py-0.5 text-[10px] font-semibold transition ${activityMetric === m ? "bg-gradient-primary text-white" : "text-muted-foreground hover:text-foreground"}`,
							children: m === "total" ? "All" : m.charAt(0).toUpperCase() + m.slice(1)
						}, m))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: ad.weeklyActivity,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "oklch(0.92 0.01 240)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tickLine: false,
								axisLine: false,
								fontSize: 12
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tickLine: false,
								axisLine: false,
								fontSize: 12,
								allowDecimals: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ChartTooltip }),
							activityMetric === "total" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "total",
								stroke: "oklch(0.65 0.16 160)",
								strokeWidth: 2.5,
								dot: { r: 3 },
								name: "Total"
							}),
							activityMetric === "inventory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "inventory",
								stroke: "oklch(0.72 0.18 145)",
								strokeWidth: 2.5,
								dot: { r: 3 },
								name: "Inventory"
							}),
							activityMetric === "donations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "donations",
								stroke: "oklch(0.65 0.16 160)",
								strokeWidth: 2.5,
								dot: { r: 3 },
								name: "Donations"
							}),
							activityMetric === "meals" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "meals",
								stroke: "oklch(0.78 0.16 70)",
								strokeWidth: 2.5,
								dot: { r: 3 },
								name: "Meals"
							}),
							activityMetric === "posts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "posts",
								stroke: "oklch(0.6 0.15 220)",
								strokeWidth: 2.5,
								dot: { r: 3 },
								name: "Posts"
							})
						]
					}) })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Inventory Categories"
			}), ad.inventoryBreakdown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-72 items-center justify-center text-xs text-muted-foreground",
				children: "No inventory yet"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: ad.inventoryBreakdown,
					dataKey: "value",
					cx: "50%",
					cy: "50%",
					outerRadius: 70,
					innerRadius: 40,
					paddingAngle: 2,
					children: ad.inventoryBreakdown.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: e.color }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ChartTooltip })] }) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground",
				children: ad.inventoryBreakdown.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: c.color }
						}),
						c.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: c.value
						})
					]
				}, c.name))
			})] })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Monthly Donations"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: ad.donationStats.monthlyChart.length > 0 ? ad.donationStats.monthlyChart : [{
						month: "No data",
						count: 0
					}],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "oklch(0.92 0.01 240)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							tickLine: false,
							axisLine: false,
							fontSize: 11
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tickLine: false,
							axisLine: false,
							fontSize: 11,
							allowDecimals: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ChartTooltip }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "count",
							fill: "oklch(0.65 0.16 160)",
							radius: [
								6,
								6,
								0,
								0
							],
							name: "Donations"
						})
					]
				}) })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Food Status"
			}), ad.foodWasteAnalysis.pieData.every((p) => p.value === 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-64 items-center justify-center text-xs text-muted-foreground",
				children: "No data"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-52",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: ad.foodWasteAnalysis.pieData,
					dataKey: "value",
					cx: "50%",
					cy: "50%",
					outerRadius: 80,
					innerRadius: 45,
					paddingAngle: 3,
					children: ad.foodWasteAnalysis.pieData.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: e.color }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ChartTooltip })] }) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center gap-6 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { backgroundColor: "oklch(0.72 0.18 145)" }
							}),
							" Fresh ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ad.foodWasteAnalysis.fresh })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { backgroundColor: "oklch(0.78 0.16 70)" }
							}),
							" Expiring ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ad.foodWasteAnalysis.expiringSoon })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { backgroundColor: "oklch(0.6 0.18 35)" }
							}),
							" Expired ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ad.foodWasteAnalysis.expired })
						]
					})
				]
			})] })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-bold",
					children: "Activity Calendar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Last 6 weeks · GitHub-style contribution heatmap"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0.5",
						style: { minWidth: 700 },
						children: Array.from({ length: 7 }).map((_, dayIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] text-muted-foreground h-3 mb-0.5",
								children: DAYS[dayIdx]
							}), Array.from({ length: 6 }).map((_, weekIdx) => {
								const cell = ad.heatmap[weekIdx * 7 + dayIdx];
								if (!cell) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-sm bg-gray-100 dark:bg-gray-800" }, weekIdx);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeatmapCell, {
									level: cell.level,
									title: `${cell.date}: ${cell.count} activities`
								}, weekIdx);
							})]
						}, dayIdx))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-end gap-1 text-[10px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Less" }),
						HEATMAP_LEVELS.map((cls, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-3 w-3 rounded-sm ${cls}` }, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "More" })
					]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Smart Insights"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: ad.insights.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground col-span-full",
					children: "No insights available. Data will generate insights as you use FoodNest."
				}) : ad.insights.map((insight, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-secondary/40 p-4 border border-border/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-500 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold uppercase tracking-wider text-amber-600",
								children: insight.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mt-0.5 font-medium",
								children: insight.problem
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: insight.recommendation
							})
						] })]
					})
				}, i))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
							children: "Waste %"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-2xl font-bold",
							children: [wastePct, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 w-full rounded-full bg-secondary overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-green-500 to-red-500",
								style: { width: `${Math.min(wastePct, 100)}%` }
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "Expired Items"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-bold text-red-600",
						children: ad.foodWasteAnalysis.expired
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "Items Saved"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-bold text-green-600",
						children: ad.monthlyOverview.foodDonated
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "Donation Success"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-2xl font-bold",
						children: [ad.sustainability.donationSuccessRate, "%"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "CO₂ Saved"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-bold text-blue-600",
						children: ad.sustainability.co2Reduction
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Top Categories"
			}), ad.inventoryBreakdown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "No inventory categories yet"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2.5",
				children: ad.inventoryBreakdown.sort((a, b) => b.value - a.value).map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 text-xs font-medium text-muted-foreground",
							children: cat.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 h-5 rounded-lg bg-secondary overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-lg transition-all",
								style: {
									width: `${Math.min(cat.value / Math.max(...ad.inventoryBreakdown.map((c) => c.value)) * 100, 100)}%`,
									backgroundColor: cat.color
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 text-right text-xs font-semibold",
							children: cat.value
						})
					]
				}, cat.name))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Recent Activity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-0 max-h-80 overflow-y-auto",
				children: ad.recentActivity.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground py-4",
					children: "No recent activity"
				}) : ad.recentActivity.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 border-b border-border/30 py-2.5 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-7 w-7 shrink-0 place-items-center rounded-lg ${entry.type === "inventory" ? "bg-green-500/10 text-green-600" : entry.type === "donation" ? "bg-blue-500/10 text-blue-600" : entry.type === "meal" ? "bg-amber-500/10 text-amber-600" : "bg-purple-500/10 text-purple-600"}`,
						children: entry.type === "inventory" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5" }) : entry.type === "donation" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3.5 w-3.5" }) : entry.type === "meal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm truncate",
							children: entry.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: entry.createdAt ? new Date(entry.createdAt).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								hour: "2-digit",
								minute: "2-digit"
							}) : ""
						})]
					})]
				}, i))
			})] })
		}),
		ad.problems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold",
				children: "Problem Detection"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3",
				children: ad.problems.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-2xl border p-4 ${p.priority === "High" ? "border-red-500/20 bg-red-500/5" : p.priority === "Medium" ? "border-amber-500/20 bg-amber-500/5" : "border-blue-500/20 bg-blue-500/5"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: `h-4 w-4 ${p.priority === "High" ? "text-red-500" : p.priority === "Medium" ? "text-amber-500" : "text-blue-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: p.problem
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid gap-2 text-xs sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Reason:"
										}),
										" ",
										p.reason
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Impact:"
										}),
										" ",
										p.impact
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Recommendation:"
										}),
										" ",
										p.recommendation
									] })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${p.priority === "High" ? "bg-red-500/15 text-red-600" : p.priority === "Medium" ? "bg-amber-500/15 text-amber-600" : "bg-blue-500/15 text-blue-600"}`,
							children: p.priority
						})]
					})
				}, i))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, {
						value: ad.healthScore.overall,
						size: 130,
						strokeWidth: 12
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted-foreground",
						children: "FoodNest Score"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-3 min-w-[200px]",
					children: ad.healthScore.breakdown.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: b.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: b.score
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 rounded-full bg-secondary overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all",
							style: { width: `${b.score}%` }
						})
					})] }, b.category))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted-foreground",
				children: ad.healthScore.explanation
			})] })
		})
	] });
}
function AnalyticsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsView, { ...useAnalyticsController() });
}
//#endregion
export { AnalyticsPage as component };
