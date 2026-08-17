import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Bell, M as MessageSquare, X as HeartHandshake, _t as CheckCheck, bt as CalendarDays, mt as ChevronLeft, pt as ChevronRight, q as Info, s as TriangleAlert, u as Trash2, ut as Clock, x as Search } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.notifications-CPScRGvK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useNotificationsController() {
	const navigate = useNavigate();
	const [items, setItems] = (0, import_react.useState)([]);
	const [unreadCount, setUnreadCount] = (0, import_react.useState)(0);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [filterType, setFilterType] = (0, import_react.useState)("All");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [filterSort, setFilterSort] = (0, import_react.useState)("-createdAt");
	const [page, setPage] = (0, import_react.useState)(1);
	const [totalPages, setTotalPages] = (0, import_react.useState)(1);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [dropdownOpen, setDropdownOpen] = (0, import_react.useState)(false);
	const [toastQueue, setToastQueue] = (0, import_react.useState)([]);
	const fetchNotifications = (0, import_react.useCallback)(async (p = 1) => {
		try {
			setLoading(true);
			const params = new URLSearchParams();
			if (filterType !== "All") {
				let typeParam = filterType;
				if (filterType === "Inventory") typeParam = "inventory_expiring";
				else if (filterType === "Donation") typeParam = "donation_created";
				else if (filterType === "Meal Planner") typeParam = "meal_saved";
				else if (filterType === "Community") typeParam = "community_like";
				params.set("type", typeParam);
			}
			if (filterStatus === "unread" || filterStatus === "read") params.set("status", filterStatus);
			params.set("sort", filterSort);
			params.set("page", String(p));
			params.set("limit", "20");
			const data = await api.get(`/api/notifications?${params}`);
			setItems(data.items);
			setUnreadCount(data.unreadCount);
			setPage(data.pagination.page);
			setTotalPages(data.pagination.pages);
		} catch {
			setItems([]);
		} finally {
			setLoading(false);
		}
	}, [
		filterType,
		filterStatus,
		filterSort
	]);
	(0, import_react.useEffect)(() => {
		fetchNotifications(1);
	}, [fetchNotifications]);
	const pollUnread = (0, import_react.useCallback)(async () => {
		try {
			const data = await api.get("/api/notifications/unread");
			setUnreadCount(data.unreadCount);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(pollUnread, 3e4);
		return () => clearInterval(interval);
	}, [pollUnread]);
	const checkExpiryNotifications = (0, import_react.useCallback)(async () => {
		try {
			await api.post("/api/notifications/check-expiry");
			pollUnread();
		} catch {}
	}, [pollUnread]);
	(0, import_react.useEffect)(() => {
		checkExpiryNotifications();
	}, [checkExpiryNotifications]);
	const markAsRead = (0, import_react.useCallback)(async (id) => {
		try {
			await api.patch(`/api/notifications/${id}/read`);
			setItems((prev) => prev.map((n) => n.id === id ? {
				...n,
				isRead: true
			} : n));
			setUnreadCount((prev) => Math.max(0, prev - 1));
		} catch {}
	}, []);
	return {
		items,
		unreadCount,
		loading,
		filterType,
		setFilterType,
		filterStatus,
		setFilterStatus,
		filterSort,
		setFilterSort,
		page,
		totalPages,
		searchQuery,
		setSearchQuery,
		dropdownOpen,
		setDropdownOpen,
		toastQueue,
		setToastQueue,
		fetchNotifications,
		markAsRead,
		markAllRead: (0, import_react.useCallback)(async () => {
			try {
				await api.patch("/api/notifications/read-all");
				setItems((prev) => prev.map((n) => ({
					...n,
					isRead: true
				})));
				setUnreadCount(0);
				toast.success("All notifications marked as read");
			} catch (err) {
				toast.error(err.message || "Failed to mark all as read");
			}
		}, []),
		deleteNotification: (0, import_react.useCallback)(async (id) => {
			try {
				await api.delete(`/api/notifications/${id}`);
				setItems((prev) => prev.filter((n) => n.id !== id));
				const deleted = items.find((n) => n.id === id);
				if (deleted && !deleted.isRead) setUnreadCount((prev) => Math.max(0, prev - 1));
				toast.success("Notification deleted");
			} catch (err) {
				toast.error(err.message || "Failed to delete notification");
			}
		}, [items]),
		clearReadNotifications: (0, import_react.useCallback)(async () => {
			try {
				await api.delete("/api/notifications/read");
				setItems((prev) => prev.filter((n) => !n.isRead));
				toast.success("Read notifications cleared");
			} catch (err) {
				toast.error(err.message || "Failed to clear notifications");
			}
		}, []),
		getFilteredItems: (0, import_react.useCallback)(() => {
			let filtered = items;
			if (searchQuery) {
				const q = searchQuery.toLowerCase();
				filtered = filtered.filter((n) => n.title.toLowerCase().includes(q) || n.message.toLowerCase().includes(q) || n.type.toLowerCase().includes(q));
			}
			return filtered;
		}, [items, searchQuery]),
		navigateToNotification: (0, import_react.useCallback)((item) => {
			if (!item.isRead) markAsRead(item.id);
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
				community_reply: "/app/community",
				system: "/app/notifications"
			}[item.type] || "/app/notifications";
			navigate({ to: path });
		}, [markAsRead, navigate]),
		checkExpiryNotifications,
		pollUnread
	};
}
var NOTIFICATION_FILTERS = [
	"All",
	"Unread",
	"Read",
	"Inventory",
	"Donation",
	"Meal Planner",
	"Community",
	"System"
];
var NOTIFICATION_ICONS = {
	inventory_expiring: {
		icon: TriangleAlert,
		color: "bg-warning/15 text-warning"
	},
	inventory_expired: {
		icon: TriangleAlert,
		color: "bg-destructive/15 text-destructive"
	},
	donation_created: {
		icon: HeartHandshake,
		color: "bg-success/15 text-success"
	},
	donation_claimed: {
		icon: HeartHandshake,
		color: "bg-primary/15 text-primary"
	},
	donation_completed: {
		icon: HeartHandshake,
		color: "bg-success/15 text-success"
	},
	meal_reminder: {
		icon: CalendarDays,
		color: "bg-primary/15 text-primary"
	},
	meal_saved: {
		icon: CalendarDays,
		color: "bg-success/15 text-success"
	},
	community_like: {
		icon: MessageSquare,
		color: "bg-primary/15 text-primary"
	},
	community_comment: {
		icon: MessageSquare,
		color: "bg-primary/15 text-primary"
	},
	community_reply: {
		icon: MessageSquare,
		color: "bg-primary/15 text-primary"
	},
	system: {
		icon: Info,
		color: "bg-primary/15 text-primary"
	}
};
function timeAgo(dateStr) {
	const diff = Date.now() - new Date(dateStr).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "Just now";
	if (mins < 60) return `${mins}m ago`;
	const hours = Math.floor(mins / 60);
	if (hours < 24) return `${hours}h ago`;
	const days = Math.floor(hours / 24);
	if (days < 7) return `${days}d ago`;
	return new Date(dateStr).toLocaleDateString();
}
function NotificationCard({ item, onOpen, onDelete, onMarkRead }) {
	const meta = NOTIFICATION_ICONS[item.type] || NOTIFICATION_ICONS.system;
	const Icon = meta.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			height: 0,
			marginBottom: 0
		},
		transition: { duration: .25 },
		className: `flex items-start gap-3 border-b border-border/40 px-5 py-4 last:border-0 cursor-pointer transition ${!item.isRead ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-background/60"}`,
		onClick: onOpen,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${meta.color}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-sm ${!item.isRead ? "font-bold" : "font-medium"}`,
						children: item.title
					}),
					item.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: item.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
							" ",
							timeAgo(item.createdAt)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-1 shrink-0",
				children: [
					!item.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onMarkRead();
						},
						className: `grid h-7 w-7 place-items-center rounded-lg hover:bg-secondary ${item.isRead ? "opacity-0" : ""}`,
						title: "Mark as read",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-3.5 w-3.5 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onDelete();
						},
						className: "grid h-7 w-7 place-items-center rounded-lg hover:bg-destructive/10 hover:text-destructive",
						title: "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
					})
				]
			})
		]
	});
}
function NotificationsView({ items, unreadCount, loading, filterType, setFilterType, filterStatus, setFilterStatus, filterSort, setFilterSort, page, totalPages, searchQuery, setSearchQuery, markAllRead, deleteNotification, clearReadNotifications, fetchNotifications, getFilteredItems, navigateToNotification }) {
	const readCount = items.filter((n) => n.isRead).length;
	const filtered = getFilteredItems();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Notifications",
		subtitle: `${unreadCount} unread · ${readCount} read`,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: markAllRead,
				className: "inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-semibold border border-border hover:bg-secondary shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Mark All Read"]
			}), readCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: clearReadNotifications,
				className: "inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-semibold border border-border hover:bg-destructive/10 hover:text-destructive shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Clear Read"]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1fr_280px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			className: "p-0 overflow-hidden",
			children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 p-5",
				children: [
					1,
					2,
					3,
					4,
					5
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 animate-pulse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-2xl bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-3/4 rounded bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/2 rounded bg-secondary/60" })]
					})]
				}, i))
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-500 mb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-12 w-12" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold",
						children: "You're all caught up!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "No new notifications."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationCard, {
					item,
					onOpen: () => navigateToNotification(item),
					onMarkRead: () => {
						if (!item.isRead) fetchNotifications(page);
					},
					onDelete: () => deleteNotification(item.id)
				}, item.id))
			}), totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-2 border-t border-border/40 px-5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: page <= 1,
						onClick: () => fetchNotifications(page - 1),
						className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary disabled:opacity-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground",
						children: [
							page,
							" / ",
							totalPages
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: page >= totalPages,
						onClick: () => fetchNotifications(page + 1),
						className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary disabled:opacity-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					})
				]
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold mb-3",
					children: "Filters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Search notifications...",
						className: "w-full bg-transparent text-sm outline-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted-foreground mb-1.5",
						children: "Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: [
							"All",
							"Unread",
							"Read"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setFilterStatus(s);
								fetchNotifications(1);
							},
							className: `rounded-full px-3 py-1 text-xs font-semibold transition ${filterStatus === s ? "bg-gradient-primary text-white" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: s
						}, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted-foreground mb-1.5",
						children: "Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: NOTIFICATION_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setFilterType(f);
								fetchNotifications(1);
							},
							className: `rounded-full px-3 py-1 text-xs font-semibold transition ${filterType === f ? "bg-gradient-primary text-white" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: f
						}, f))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-muted-foreground mb-1.5",
					children: "Sort"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: [{
						label: "Newest",
						value: "-createdAt"
					}, {
						label: "Oldest",
						value: "oldest"
					}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setFilterSort(s.value);
							fetchNotifications(1);
						},
						className: `rounded-full px-3 py-1 text-xs font-semibold transition ${filterSort === s.value ? "bg-gradient-primary text-white" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
						children: s.label
					}, s.value))
				})] })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-bold",
				children: "Summary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: items.length
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Unread"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-primary",
							children: unreadCount
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Read"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: readCount
						})]
					})
				]
			})] })]
		})]
	})] });
}
function NotificationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsView, { ...useNotificationsController() });
}
//#endregion
export { NotificationsPage as component };
