import { o as __toESM } from "../_runtime.mjs";
import { i as storeToken, n as getStoredToken } from "./auth-storage-CqihHLXV.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useAuth } from "./use-auth-C-9LPYQj.mjs";
import { r as useLocale } from "./i18n-BTHhq3S9.mjs";
import { f as Outlet, g as Link, l as useLocation, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Moon, Ct as Bell, G as LayoutDashboard, H as LifeBuoy, L as LogOut, M as MessageSquare, O as Package, U as Leaf, X as HeartHandshake, a as User, bt as CalendarDays, o as Truck, p as Sun, q as Info, s as TriangleAlert, vt as ChartColumn, x as Search, y as Settings, yt as Camera } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-D5xevWSX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "foodnest-theme";
function getInitial() {
	if (typeof window === "undefined") return "light";
	const stored = window.localStorage.getItem(KEY);
	if (stored === "light" || stored === "dark") return stored;
	return "light";
}
function apply(theme) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
	root.style.colorScheme = theme;
}
function useTheme() {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const t = getInitial();
		setThemeState(t);
		apply(t);
	}, []);
	const setTheme = (0, import_react.useCallback)((t) => {
		setThemeState(t);
		apply(t);
		try {
			window.localStorage.setItem(KEY, t);
		} catch {}
	}, []);
	return {
		theme,
		setTheme,
		toggle: (0, import_react.useCallback)(() => {
			setTheme(theme === "dark" ? "light" : "dark");
		}, [theme, setTheme]),
		isDark: theme === "dark"
	};
}
function getMessage(kg) {
	if (kg <= 0) return "Start saving food today 🌱";
	if (kg <= 5) return "Great start! Keep going 🌿";
	if (kg <= 20) return "Amazing work! You're reducing waste ♻️";
	return "Community Hero! 🌍";
}
function WeeklyCard() {
	const [stats, setStats] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		api.get("/api/dashboard/weekly-stats").then(setStats).catch(() => {}).finally(() => setLoading(false));
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 rounded-2xl bg-gradient-emerald p-4 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs/5 opacity-90",
				children: "This week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-6 w-20 animate-pulse rounded bg-white/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-3 w-32 animate-pulse rounded bg-white/20" })
		]
	});
	if (!stats) return null;
	const { foodSavedKg, donationsCompleted, inventoryAdded, mealsPlanned, foodClaimed, weeklyGoalKg } = stats;
	const goalAchieved = foodSavedKg >= weeklyGoalKg;
	const progressPct = Math.min(Math.round(foodSavedKg / weeklyGoalKg * 100), 100);
	const displayKg = foodSavedKg % 1 === 0 ? foodSavedKg : foodSavedKg.toFixed(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 rounded-2xl bg-gradient-emerald p-4 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs/5 opacity-90",
				children: "This week"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-2xl font-bold",
				children: [displayKg, " kg"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs opacity-90",
				children: getMessage(foodSavedKg)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[10px] opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [progressPct, "%"] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 h-2 w-full overflow-hidden rounded-full bg-white/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-white transition-all duration-500",
							style: { width: `${progressPct}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center justify-between text-[10px] opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [displayKg, " kg saved"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [weeklyGoalKg, " kg goal"] })]
					})
				]
			}),
			goalAchieved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-xs font-semibold",
				children: "Goal achieved! 🎉"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-1.5 border-t border-white/20 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3 w-3" }), " Donations"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: donationsCompleted
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3 w-3" }), " Meals planned"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: mealsPlanned
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3 w-3" }), " Inventory added"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: inventoryAdded
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-3 w-3" }), " Food claimed"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: foodClaimed
						})]
					})
				]
			})
		]
	});
}
var NOTIF_ICON = {
	inventory_expiring: TriangleAlert,
	inventory_expired: TriangleAlert,
	donation_created: HeartHandshake,
	donation_claimed: HeartHandshake,
	donation_completed: HeartHandshake,
	meal_saved: CalendarDays,
	meal_reminder: CalendarDays,
	community_like: MessageSquare,
	community_comment: MessageSquare,
	community_reply: MessageSquare,
	system: Info
};
var NOTIF_COLOR = {
	inventory_expiring: "text-warning",
	inventory_expired: "text-destructive",
	donation_created: "text-success",
	donation_claimed: "text-primary",
	donation_completed: "text-success",
	meal_saved: "text-success",
	meal_reminder: "text-primary",
	community_like: "text-primary",
	community_comment: "text-primary",
	community_reply: "text-primary",
	system: "text-primary"
};
function timeAgo(dateStr) {
	const diff = Date.now() - new Date(dateStr).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "Just now";
	if (mins < 60) return `${mins}m`;
	const hours = Math.floor(mins / 60);
	if (hours < 24) return `${hours}h`;
	return `${Math.floor(hours / 24)}d`;
}
var nav = [
	{
		to: "/app/dashboard",
		labelKey: "nav.dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/app/inventory",
		labelKey: "nav.inventory",
		icon: Package
	},
	{
		to: "/app/donations",
		labelKey: "nav.donations",
		icon: HeartHandshake
	},
	{
		to: "/app/food-connect",
		labelKey: "nav.foodConnect",
		icon: Truck
	},
	{
		to: "/app/community",
		labelKey: "nav.community",
		icon: MessageSquare
	},
	{
		to: "/app/analytics",
		labelKey: "nav.analytics",
		icon: ChartColumn
	},
	{
		to: "/app/planner",
		labelKey: "nav.planner",
		icon: CalendarDays
	},
	{
		to: "/app/notifications",
		labelKey: "nav.notifications",
		icon: Bell
	},
	{
		to: "/app/settings",
		labelKey: "nav.settings",
		icon: Settings
	},
	{
		to: "/app/profile",
		labelKey: "nav.profile",
		icon: User
	}
];
function AppShell() {
	const loc = useLocation();
	const [paletteOpen, setPaletteOpen] = (0, import_react.useState)(false);
	const { isDark, toggle } = useTheme();
	const { getInitials, logout, user, token } = useAuth();
	const { t } = useLocale();
	const [profilePic, setProfilePic] = (0, import_react.useState)(null);
	const [notifOpen, setNotifOpen] = (0, import_react.useState)(false);
	const [notifItems, setNotifItems] = (0, import_react.useState)([]);
	const [notifCount, setNotifCount] = (0, import_react.useState)(0);
	const [profileOpen, setProfileOpen] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const profileRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		setProfilePic(user?.profilePicture || null);
	}, [user?.profilePicture]);
	(0, import_react.useEffect)(() => {
		const handler = () => {
			const t = getStoredToken();
			if (t) try {
				const base64 = t.split(".")[1];
				const json = atob(base64.replace(/-/g, "+").replace(/_/g, "/"));
				const payload = JSON.parse(json);
				setProfilePic(payload.profilePicture || null);
			} catch {}
		};
		window.addEventListener("auth-changed", handler);
		return () => window.removeEventListener("auth-changed", handler);
	}, []);
	const handleNavAvatarUpload = (0, import_react.useCallback)(async (file) => {
		const formData = new FormData();
		formData.append("avatar", file);
		try {
			const res = await api.postFormData("/api/profile/avatar", formData);
			if (res.token) {
				const remembered = !!localStorage.getItem("token");
				storeToken(res.token, remembered);
			}
			navigate({ to: "/app/profile" });
		} catch {}
	}, [navigate]);
	const fetchNotifs = (0, import_react.useCallback)(async () => {
		try {
			const [listRes, countRes] = await Promise.all([api.get("/api/notifications?limit=5"), api.get("/api/notifications/unread")]);
			setNotifItems(listRes.items);
			setNotifCount(listRes.unreadCount);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (user) fetchNotifs();
	}, [user, fetchNotifs]);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		const interval = setInterval(fetchNotifs, 3e4);
		return () => clearInterval(interval);
	}, [user, fetchNotifs]);
	(0, import_react.useEffect)(() => {
		if (!notifOpen) return;
		fetchNotifs();
	}, [notifOpen, fetchNotifs]);
	const handleNotifClick = (0, import_react.useCallback)((item) => {
		setNotifOpen(false);
		const path = {
			inventory_expiring: "/app/inventory",
			inventory_expired: "/app/inventory",
			donation_created: "/app/donations",
			donation_claimed: "/app/donations",
			donation_completed: "/app/donations",
			meal_saved: "/app/planner",
			meal_reminder: "/app/planner",
			community_like: "/app/community",
			community_comment: "/app/community",
			community_reply: "/app/community"
		}[item.type] || "/app/notifications";
		if (!item.isRead) {
			api.patch(`/api/notifications/${item.id}/read`).catch(() => {});
			setNotifCount((prev) => Math.max(0, prev - 1));
		}
		navigate({ to: path });
	}, [navigate]);
	const handleMarkAllRead = (0, import_react.useCallback)(async () => {
		try {
			await api.patch("/api/notifications/read-all");
			setNotifCount(0);
			setNotifItems((prev) => prev.map((n) => ({
				...n,
				isRead: true
			})));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		const h = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setPaletteOpen((v) => !v);
			} else if (e.key === "Escape") {
				setPaletteOpen(false);
				setProfileOpen(false);
			}
		};
		window.addEventListener("keydown", h);
		const click = (e) => {
			if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
		};
		document.addEventListener("mousedown", click);
		return () => {
			window.removeEventListener("keydown", h);
			document.removeEventListener("mousedown", click);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "fixed inset-y-3 left-3 z-40 hidden w-64 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card flex h-full flex-col rounded-3xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mb-6 flex items-center gap-2 px-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/logo.png",
								alt: "FoodNest",
								className: "h-9 w-9 shrink-0 rounded-2xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-bold tracking-tight",
								children: "FoodNest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex-1 space-y-1",
							children: nav.map((n) => {
								const active = loc.pathname.startsWith(n.to);
								const Icon = n.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: n.to,
									className: `group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-gradient-primary text-white shadow-soft" : "text-foreground/70 hover:bg-secondary hover:text-foreground"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(n.labelKey) }),
										active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											layoutId: "active-pill",
											className: "absolute inset-0 -z-10 rounded-2xl"
										})
									]
								}, n.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/help",
							className: "mt-2 flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-4 w-4" }), "Help & resources"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: logout,
							className: "mt-1 flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sign out"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-3 z-30 mx-3 lg:ml-[17.5rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex items-center gap-2 rounded-2xl px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPaletteOpen(true),
							className: "flex flex-1 items-center gap-2 rounded-xl bg-background/60 px-3 py-2 text-left text-sm text-muted-foreground hover:bg-background",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }),
								t("nav.search"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "ml-auto rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-semibold text-foreground/70",
									children: "⌘K"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggle,
							"aria-label": "Toggle theme",
							className: "grid h-9 w-9 place-items-center rounded-xl bg-background/60 hover:bg-background",
							children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setNotifOpen((v) => !v),
								className: "relative grid h-9 w-9 place-items-center rounded-xl bg-background/60 hover:bg-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), notifCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: { scale: 0 },
									animate: { scale: 1 },
									className: "absolute -right-1 -top-1 grid min-w-[18px] px-1 h-[18px] place-items-center rounded-full bg-destructive text-[9px] font-bold text-white",
									children: notifCount > 99 ? "99+" : notifCount
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: notifOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: -8,
									scale: .97
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: -8,
									scale: .97
								},
								transition: { duration: .15 },
								className: "absolute right-0 top-full mt-2 w-[380px] glass-card rounded-3xl overflow-hidden shadow-lift z-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between px-4 py-3 border-b border-border/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-bold",
											children: "Notifications"
										}), notifCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleMarkAllRead,
											className: "text-xs text-primary font-semibold hover:underline",
											children: "Mark all read"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "max-h-80 overflow-y-auto",
										children: notifItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center py-8 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-8 w-8 mb-2 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No notifications" })]
										}) : notifItems.map((item) => {
											const Icon = NOTIF_ICON[item.type] || Info;
											const color = NOTIF_COLOR[item.type] || "text-primary";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleNotifClick(item),
												className: `flex w-full items-start gap-3 px-4 py-3 text-left text-sm transition hover:bg-background/60 border-b border-border/30 last:border-0 ${!item.isRead ? "bg-primary/5" : ""}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-background/80 ${color}`,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: `truncate ${!item.isRead ? "font-bold" : "font-medium"}`,
															children: item.title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[11px] text-muted-foreground",
															children: timeAgo(item.createdAt)
														})]
													}),
													!item.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" })
												]
											}, item.id);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/notifications",
										onClick: () => setNotifOpen(false),
										className: "flex items-center justify-center gap-2 border-t border-border/40 px-4 py-3 text-sm font-semibold text-primary hover:bg-background/60",
										children: "View All Notifications"
									})
								]
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: profileRef,
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setProfileOpen((v) => !v),
									className: "group relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-sm font-bold text-white overflow-hidden",
									children: profilePic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: profilePic,
										alt: "",
										className: "h-full w-full object-cover"
									}) : getInitials()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (e) => {
										const f = e.target.files?.[0];
										if (f) handleNavAvatarUpload(f);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: profileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: -8,
										scale: .97
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: 0,
										y: -8,
										scale: .97
									},
									transition: { duration: .15 },
									className: "absolute right-0 top-full mt-2 w-52 glass-card rounded-2xl overflow-hidden shadow-lift z-50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "px-3 py-2.5 border-b border-border/40 text-xs text-muted-foreground",
											children: user?.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setProfileOpen(false);
												navigate({ to: "/app/profile" });
											},
											className: "flex w-full items-center gap-2 px-3 py-2.5 text-sm hover:bg-background/60 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), " View Profile"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												fileRef.current?.click();
												setProfileOpen(false);
											},
											className: "flex w-full items-center gap-2 px-3 py-2.5 text-sm hover:bg-background/60 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-4 w-4" }), " Change Photo"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: logout,
											className: "flex w-full items-center gap-2 px-3 py-2.5 text-sm text-destructive hover:bg-destructive/5 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
										})
									]
								}) })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "px-3 pb-24 pt-4 lg:ml-[17.5rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklyCard, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: paletteOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 grid place-items-start justify-center bg-foreground/30 backdrop-blur-sm pt-32",
				onClick: () => setPaletteOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						y: -20,
						opacity: 0,
						scale: .98
					},
					animate: {
						y: 0,
						opacity: 1,
						scale: 1
					},
					exit: {
						y: -20,
						opacity: 0,
						scale: .98
					},
					transition: { duration: .18 },
					onClick: (e) => e.stopPropagation(),
					className: "glass-card w-[92vw] max-w-xl overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-border/60 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								placeholder: t("nav.searchPlaceholder"),
								className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-semibold",
								children: "ESC"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "max-h-80 overflow-y-auto p-2 text-sm",
						children: nav.map((n) => {
							const Icon = n.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								onClick: () => setPaletteOpen(false),
								className: "flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("nav.goTo"),
									" ",
									t(n.labelKey)
								] })]
							}) }, n.to);
						})
					})]
				})
			}) })
		]
	});
}
var SplitComponent = AppShell;
//#endregion
export { SplitComponent as component };
