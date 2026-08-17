import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as Save, St as BookMarked, T as Plus, Y as Heart, g as ShoppingCart, h as Sparkles, ht as ChevronDown, lt as Copy, mt as ChevronLeft, pt as ChevronRight, s as TriangleAlert, t as X, u as Trash2, x as Search } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.planner-CnIK7gxb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLANNER_DAYS = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
var PLANNER_SLOTS = [
	"Breakfast",
	"Lunch",
	"Dinner"
];
var FILTER_OPTIONS = [
	"All",
	"Breakfast",
	"Lunch",
	"Quick & Easy",
	"Vegetarian",
	"Healthy",
	"High Protein",
	"Budget"
];
function usePlannerController() {
	const [plan, setPlan] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [currentPlanId, setCurrentPlanId] = (0, import_react.useState)(null);
	const [currentPlanName, setCurrentPlanName] = (0, import_react.useState)("");
	const [savedPlans, setSavedPlans] = (0, import_react.useState)([]);
	const [plansPage, setPlansPage] = (0, import_react.useState)(1);
	const [plansTotalPages, setPlansTotalPages] = (0, import_react.useState)(1);
	const [plansLoading, setPlansLoading] = (0, import_react.useState)(false);
	const [suggestions, setSuggestions] = (0, import_react.useState)([]);
	const [suggestionsLoading, setSuggestionsLoading] = (0, import_react.useState)(false);
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	const [favoritesLoading, setFavoritesLoading] = (0, import_react.useState)(false);
	const [summary, setSummary] = (0, import_react.useState)(null);
	const [shoppingList, setShoppingList] = (0, import_react.useState)([]);
	const [shoppingLoading, setShoppingLoading] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [searchFilter, setSearchFilter] = (0, import_react.useState)("All");
	const [searchResults, setSearchResults] = (0, import_react.useState)([]);
	const [searching, setSearching] = (0, import_react.useState)(false);
	const [editingSlot, setEditingSlot] = (0, import_react.useState)(null);
	const [editName, setEditName] = (0, import_react.useState)("");
	const [editEmoji, setEditEmoji] = (0, import_react.useState)("");
	const [showSavedPlans, setShowSavedPlans] = (0, import_react.useState)(false);
	const [showShoppingList, setShowShoppingList] = (0, import_react.useState)(false);
	const [showFavorites, setShowFavorites] = (0, import_react.useState)(false);
	const [quickAddOpen, setQuickAddOpen] = (0, import_react.useState)(null);
	function getSlot(slotKey) {
		return plan.find((m) => m.slotKey === slotKey);
	}
	function setSlot(slotKey, data) {
		setPlan((prev) => {
			const idx = prev.findIndex((m) => m.slotKey === slotKey);
			if (idx >= 0) {
				const next = [...prev];
				next[idx] = {
					...next[idx],
					...data
				};
				return next;
			}
			return [...prev, {
				slotKey,
				name: "",
				emoji: "🍽️",
				status: "planned",
				...data
			}];
		});
	}
	function removeSlot(slotKey) {
		setPlan((prev) => prev.filter((m) => m.slotKey !== slotKey));
	}
	const loadCurrentPlan = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const data = await api.get("/api/meals");
			setPlan(data.meals || []);
			if (data.id) setCurrentPlanId(data.id);
			if (data.name) setCurrentPlanName(data.name);
		} catch {
			setPlan([]);
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadCurrentPlan();
	}, [loadCurrentPlan]);
	const savePlan = (0, import_react.useCallback)(async () => {
		try {
			setSaving(true);
			const validMeals = plan.filter((m) => m.name);
			const data = await api.post("/api/meals", { meals: validMeals });
			setCurrentPlanId(data.id);
			setCurrentPlanName(data.name || "");
			toast.success("✓ Meal plan saved successfully");
		} catch (err) {
			toast.error(err.message || "Failed to save meal plan");
		} finally {
			setSaving(false);
		}
	}, [plan]);
	const loadSavedPlans = (0, import_react.useCallback)(async (page = 1) => {
		try {
			setPlansLoading(true);
			const data = await api.get(`/api/meals/plans?page=${page}&limit=10`);
			setSavedPlans(data.plans);
			setPlansPage(data.pagination.page);
			setPlansTotalPages(data.pagination.pages);
		} catch {
			toast.error("Failed to load saved plans");
		} finally {
			setPlansLoading(false);
		}
	}, []);
	const loadPlanById = (0, import_react.useCallback)(async (id) => {
		try {
			const data = await api.get(`/api/meals/plans/${id}`);
			setPlan(data.meals);
			setCurrentPlanId(data.id);
			setCurrentPlanName(data.name || "");
			toast.success("Plan loaded");
		} catch (err) {
			toast.error(err.message || "Failed to load plan");
		}
	}, []);
	const deleteSavedPlan = (0, import_react.useCallback)(async (id) => {
		try {
			await api.delete(`/api/meals/plans/${id}`);
			setSavedPlans((prev) => prev.filter((p) => p.id !== id));
			toast.success("Plan deleted");
		} catch (err) {
			toast.error(err.message || "Failed to delete plan");
		}
	}, []);
	const duplicateSavedPlan = (0, import_react.useCallback)(async (id) => {
		try {
			const data = await api.post(`/api/meals/plans/${id}/duplicate`);
			setSavedPlans((prev) => [data, ...prev]);
			toast.success("Plan duplicated");
		} catch (err) {
			toast.error(err.message || "Failed to duplicate plan");
		}
	}, []);
	const handleAddMeal = (0, import_react.useCallback)((slotKey, meal) => {
		setSlot(slotKey, {
			name: meal.name,
			emoji: meal.emoji,
			status: "planned"
		});
		setQuickAddOpen(null);
		toast.success(`Meal added for ${slotKey}`);
	}, []);
	const handleEditMeal = (0, import_react.useCallback)((slotKey) => {
		const meal = getSlot(slotKey);
		setEditingSlot(slotKey);
		setEditName(meal?.name || "");
		setEditEmoji(meal?.emoji || "🍽️");
	}, [plan]);
	const handleSaveEdit = (0, import_react.useCallback)(() => {
		if (!editingSlot) return;
		if (!editName.trim()) {
			toast.error("Meal name is required");
			return;
		}
		setSlot(editingSlot, {
			name: editName.trim(),
			emoji: editEmoji || "🍽️"
		});
		setEditingSlot(null);
		toast.success("Meal updated");
	}, [
		editingSlot,
		editName,
		editEmoji
	]);
	const handleDeleteMeal = (0, import_react.useCallback)((slotKey) => {
		removeSlot(slotKey);
		toast.success("Meal deleted");
	}, []);
	const clearAllMeals = (0, import_react.useCallback)(() => {
		setPlan([]);
		toast.success("Meal plan cleared");
	}, []);
	const handleDuplicateMeal = (0, import_react.useCallback)((sourceKey) => {
		const meal = getSlot(sourceKey);
		if (!meal || !meal.name) return;
		const emptySlot = plan.find((m) => !m.name) || PLANNER_DAYS.flatMap((d) => PLANNER_SLOTS.map((s) => `${d}-${s}`)).find((k) => !plan.some((m) => m.slotKey === k));
		if (!emptySlot) {
			toast.error("No empty slots available");
			return;
		}
		setSlot(typeof emptySlot === "string" ? emptySlot : emptySlot.slotKey, {
			name: meal.name,
			emoji: meal.emoji,
			status: "planned"
		});
		toast.success("Meal duplicated");
	}, [plan]);
	const handleClearMeal = (0, import_react.useCallback)((slotKey) => {
		setSlot(slotKey, {
			name: "",
			emoji: "🍽️",
			status: "planned"
		});
		toast.success("Meal cleared");
	}, []);
	const handleMoveMeal = (0, import_react.useCallback)((fromKey, toKey) => {
		if (fromKey === toKey) return;
		const meal = getSlot(fromKey);
		if (!meal || !meal.name) return;
		const targetMeal = getSlot(toKey);
		setSlot(toKey, {
			name: meal.name,
			emoji: meal.emoji,
			status: "planned"
		});
		if (targetMeal?.name) setSlot(fromKey, {
			name: targetMeal.name,
			emoji: targetMeal.emoji,
			status: "planned"
		});
		else removeSlot(fromKey);
		toast.success("Meal moved");
	}, [plan]);
	const handleStatusChange = (0, import_react.useCallback)((slotKey, status) => {
		setSlot(slotKey, { status });
		const label = {
			completed: "completed",
			skipped: "skipped",
			cancelled: "cancelled"
		}[status];
		toast.success(`Meal ${label}`);
	}, []);
	const generateRandomPlan = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const data = await api.post("/api/meals/generate");
			setPlan(data.meals);
			setCurrentPlanId(data.id);
			setCurrentPlanName(data.name || "");
			toast.success(`Generated: ${data.name || "Random Plan"}`);
		} catch (err) {
			toast.error(err.message || "Failed to generate plan");
		} finally {
			setLoading(false);
		}
	}, []);
	const loadSuggestions = (0, import_react.useCallback)(async () => {
		try {
			setSuggestionsLoading(true);
			const data = await api.get("/api/meals/suggestions");
			setSuggestions(data.suggestions);
		} catch {
			setSuggestions([]);
		} finally {
			setSuggestionsLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadSuggestions();
	}, [loadSuggestions]);
	const loadSummary = (0, import_react.useCallback)(async () => {
		try {
			const data = await api.get("/api/meals/summary");
			setSummary(data);
		} catch {
			setSummary(null);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadSummary();
	}, [loadSummary]);
	const loadShoppingList = (0, import_react.useCallback)(async () => {
		try {
			setShoppingLoading(true);
			const data = await api.get("/api/meals/shopping-list");
			setShoppingList(data.items);
		} catch {
			setShoppingList([]);
		} finally {
			setShoppingLoading(false);
		}
	}, []);
	const loadFavorites = (0, import_react.useCallback)(async () => {
		try {
			setFavoritesLoading(true);
			const data = await api.get("/api/meals/favorites");
			setFavorites(data.favorites);
		} catch {
			setFavorites([]);
		} finally {
			setFavoritesLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadFavorites();
	}, [loadFavorites]);
	return {
		plan,
		loading,
		saving,
		currentPlanId,
		currentPlanName,
		savedPlans,
		plansPage,
		plansTotalPages,
		plansLoading,
		suggestions,
		suggestionsLoading,
		favorites,
		favoritesLoading,
		summary,
		shoppingList,
		shoppingLoading,
		searchQuery,
		setSearchQuery,
		searchFilter,
		setSearchFilter,
		searchResults,
		searching,
		editingSlot,
		setEditingSlot,
		editName,
		setEditName,
		editEmoji,
		setEditEmoji,
		showSavedPlans,
		setShowSavedPlans,
		showShoppingList,
		setShowShoppingList,
		showFavorites,
		setShowFavorites,
		quickAddOpen,
		setQuickAddOpen,
		days: PLANNER_DAYS,
		slots: PLANNER_SLOTS,
		getSlot,
		savePlan,
		loadSavedPlans,
		loadPlanById,
		deleteSavedPlan,
		duplicateSavedPlan,
		handleAddMeal,
		handleEditMeal,
		handleSaveEdit,
		handleDeleteMeal,
		clearAllMeals,
		handleDuplicateMeal,
		handleClearMeal,
		handleMoveMeal,
		handleStatusChange,
		generateRandomPlan,
		loadSuggestions,
		loadShoppingList,
		toggleFavorite: (0, import_react.useCallback)(async (name, emoji) => {
			const existing = favorites.find((f) => f.name === name);
			if (existing) try {
				await api.delete(`/api/meals/favorites/${existing.id}`);
				setFavorites((prev) => prev.filter((f) => f.id !== existing.id));
				toast.success("Removed from favorites");
			} catch (err) {
				toast.error(err.message || "Failed to remove favorite");
			}
			else try {
				const data = await api.post("/api/meals/favorites", {
					name,
					emoji
				});
				setFavorites((prev) => [{
					id: data.id,
					name,
					emoji
				}, ...prev]);
				toast.success("Added to favorites");
			} catch (err) {
				toast.error(err.message || "Failed to add favorite");
			}
		}, [favorites]),
		searchRecipes: (0, import_react.useCallback)(async (q, filter) => {
			if (!q.trim() && filter === "All") {
				setSearchResults([]);
				return;
			}
			try {
				setSearching(true);
				const params = new URLSearchParams();
				if (q) params.set("q", q);
				if (filter !== "All") params.set("filter", filter);
				const data = await api.get(`/api/meals/search?${params}`);
				setSearchResults(data.recipes);
			} catch {
				setSearchResults([]);
			} finally {
				setSearching(false);
			}
		}, []),
		isFavorite: (0, import_react.useCallback)((name) => {
			return favorites.some((f) => f.name === name);
		}, [favorites])
	};
}
var STATUS_ICONS = {
	planned: "",
	completed: "✓",
	skipped: "→",
	cancelled: "✕"
};
var STATUS_BG = {
	planned: "",
	completed: "bg-green-500/10 border-green-500/30",
	skipped: "bg-amber-500/10 border-amber-500/30",
	cancelled: "bg-red-500/10 border-red-500/30"
};
function QuickActions({ onEdit, onDuplicate, onDelete, onMove, onFavorite, isFav }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute right-1 top-1 z-10 flex gap-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onEdit();
				},
				className: "grid h-6 w-6 place-items-center rounded-lg bg-background/80 text-muted-foreground hover:bg-secondary",
				title: "Edit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onDuplicate();
				},
				className: "grid h-6 w-6 place-items-center rounded-lg bg-background/80 text-muted-foreground hover:bg-secondary",
				title: "Duplicate",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onDelete();
				},
				className: "grid h-6 w-6 place-items-center rounded-lg bg-background/80 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
				title: "Delete",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onFavorite();
				},
				className: `grid h-6 w-6 place-items-center rounded-lg bg-background/80 hover:bg-secondary ${isFav ? "text-red-500" : "text-muted-foreground"}`,
				title: "Favorite",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-3 w-3 ${isFav ? "fill-current" : ""}` })
			})
		]
	});
}
function MealCard({ slotKey, meal, onEdit, onDuplicate, onDelete, onStatusChange, onFavorite, isFav, onMoveTo, onDragStart }) {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	if (!meal || !meal.name) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		layout: true,
		draggable: true,
		onDragStart: (e) => {
			e.dataTransfer.setData("text/plain", slotKey);
			e.dataTransfer.effectAllowed = "move";
			onDragStart?.(slotKey);
		},
		initial: {
			scale: .9,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		className: `relative flex h-full flex-col rounded-xl bg-gradient-emerald p-2 text-white ${STATUS_BG[meal.status]} border ${meal.status !== "planned" ? "border-current" : "border-transparent"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActions, {
				onEdit,
				onDuplicate,
				onDelete,
				onFavorite,
				isFav
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl",
				children: meal.emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-auto text-[11px] font-semibold leading-tight",
				children: meal.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 flex items-center gap-1",
				children: meal.status !== "planned" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] opacity-80",
					children: [
						STATUS_ICONS[meal.status],
						" ",
						meal.status
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 flex gap-1",
				children: [
					"completed",
					"skipped",
					"cancelled"
				].map((s) => s !== meal.status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						onStatusChange(s);
					},
					className: `rounded px-1 py-0.5 text-[9px] ${s === "completed" ? "bg-green-500/30" : s === "skipped" ? "bg-amber-500/30" : "bg-red-500/30"} hover:opacity-80`,
					children: STATUS_ICONS[s]
				}, s))
			})
		]
	});
}
function EmptySlot({ slotKey, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => onAdd(slotKey),
		className: "grid h-full w-full place-items-center text-[11px] text-muted-foreground hover:text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
	});
}
function PlannerView({ plan, loading, saving, currentPlanName, savedPlans, plansPage, plansTotalPages, plansLoading, suggestions, suggestionsLoading, favorites, favoritesLoading, summary, shoppingList, shoppingLoading, searchQuery, setSearchQuery, searchFilter, setSearchFilter, searchResults, searching, editingSlot, setEditingSlot, editName, setEditName, editEmoji, setEditEmoji, showSavedPlans, setShowSavedPlans, showShoppingList, setShowShoppingList, showFavorites, setShowFavorites, quickAddOpen, setQuickAddOpen, days, slots, savePlan, loadSavedPlans, loadPlanById, deleteSavedPlan, duplicateSavedPlan, handleAddMeal, handleEditMeal, handleSaveEdit, handleDeleteMeal, clearAllMeals, handleDuplicateMeal, handleClearMeal, handleMoveMeal, handleStatusChange, generateRandomPlan, loadShoppingList, toggleFavorite, searchRecipes, isFavorite }) {
	const [moveFrom, setMoveFrom] = (0, import_react.useState)(null);
	const [moveTo, setMoveTo] = (0, import_react.useState)(null);
	const [showMovePicker, setShowMovePicker] = (0, import_react.useState)(false);
	const [showClearConfirm, setShowClearConfirm] = (0, import_react.useState)(false);
	const [showEmptyGrid, setShowEmptyGrid] = (0, import_react.useState)(false);
	const [pendingReplace, setPendingReplace] = (0, import_react.useState)(null);
	function getSlot(slotKey) {
		return plan.find((m) => m.slotKey === slotKey);
	}
	function onAddMealWithCheck(slotKey, meal) {
		if (getSlot(slotKey)?.name) {
			setPendingReplace({
				slotKey,
				...meal
			});
			return;
		}
		handleAddMeal(slotKey, meal);
	}
	function getSlot(slotKey) {
		return plan.find((m) => m.slotKey === slotKey);
	}
	function handleOpenMove(slotKey) {
		setMoveFrom(slotKey);
		setShowMovePicker(true);
	}
	function handleConfirmMove(targetKey) {
		if (moveFrom && moveFrom !== targetKey) handleMoveMeal(moveFrom, targetKey);
		setShowMovePicker(false);
		setMoveFrom(null);
	}
	function handleQuickSearch(q) {
		setSearchQuery(q);
		if (q.trim().length >= 1 || searchFilter !== "All") searchRecipes(q, searchFilter);
		else searchRecipes("", "All");
	}
	function handleFilterChange(f) {
		setSearchFilter(f);
		searchRecipes(searchQuery, f);
	}
	const filteredSearchResults = searchResults;
	const plannedCount = plan.filter((m) => m.name).length;
	21 - plannedCount;
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Meal planner",
		subtitle: "Plan your weekly meals."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1fr_320px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			className: "overflow-x-auto p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-[820px] grid-cols-[100px_repeat(7,1fr)] gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
					days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 rounded-2xl bg-secondary/50 animate-pulse" }, d)),
					slots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contents",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 rounded-2xl bg-secondary/30" }), days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-[88px] rounded-2xl bg-secondary/20 animate-pulse" }, `${d}-${s}`))]
					}, s))
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-32 rounded bg-secondary/50 animate-pulse mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: [
				1,
				2,
				3,
				4
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-14 rounded-2xl bg-secondary/30 animate-pulse" }, i))
		})] })]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Meal planner",
			subtitle: currentPlanName ? `Current: ${currentPlanName}` : "Plan your weekly meals",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							loadShoppingList();
							setShowShoppingList(true);
						},
						className: "inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-semibold text-foreground shadow-soft hover:shadow-lift border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), " Shopping List"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							loadSavedPlans();
							setShowSavedPlans(true);
						},
						className: "inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-semibold text-foreground shadow-soft hover:shadow-lift border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "h-4 w-4" }), " Saved Plans"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: generateRandomPlan,
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Generate Random Plan"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowClearConfirm(true),
						className: "inline-flex items-center gap-2 rounded-full border border-destructive/30 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Clear All"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: savePlan,
						disabled: saving,
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift disabled:opacity-50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }),
							" ",
							saving ? "Saving..." : "Save"
						]
					})
				]
			})
		}),
		plannedCount === 0 && !loading && !showEmptyGrid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-500 mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-12 w-12" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "No meal plan created yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-xs text-sm text-muted-foreground",
					children: "Create a meal plan to organize your weekly meals."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: generateRandomPlan,
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Generate Random Plan"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowEmptyGrid(true),
						className: "inline-flex items-center gap-2 rounded-full bg-background/70 px-6 py-3 text-sm font-semibold text-foreground shadow-soft hover:shadow-lift border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create Manually"]
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "overflow-x-auto p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [plannedCount, "/21 meals planned"] }), summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-green-500",
								children: [summary.mealsCompleted, " completed"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-amber-500",
								children: [summary.mealsSkipped, " skipped"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [summary.recipesUsed, " recipes"] })
						] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-w-[820px] grid-cols-[100px_repeat(7,1fr)] gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-background/60 p-2 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: d
						}, d)),
						slots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contents",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: s
							}), days.map((d) => {
								const key = `${d}-${s}`;
								const meal = getSlot(key);
								const isEmpty = !meal || !meal.name;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onDragOver: (e) => {
										e.preventDefault();
										e.dataTransfer.dropEffect = "move";
									},
									onDrop: (e) => {
										e.preventDefault();
										const src = e.dataTransfer.getData("text/plain");
										if (src && src !== key) handleMoveMeal(src, key);
									},
									className: `relative min-h-[100px] rounded-2xl border border-dashed p-2 transition ${moveFrom === key ? "border-primary bg-primary/10" : moveTo === key ? "border-emerald-500 bg-emerald-500/10" : isEmpty ? "border-border bg-background/40" : "border-border/60 bg-background/60"} hover:border-primary/60`,
									children: [isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptySlot, {
										slotKey: key,
										onAdd: (sk) => {
											setQuickAddOpen(sk);
										}
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MealCard, {
										slotKey: key,
										meal,
										isFav: isFavorite(meal.name),
										onEdit: () => handleEditMeal(key),
										onDuplicate: () => handleDuplicateMeal(key),
										onDelete: () => handleDeleteMeal(key),
										onStatusChange: (s) => handleStatusChange(key, s),
										onFavorite: () => toggleFavorite(meal.name, meal.emoji),
										onMoveTo: () => handleOpenMove(key)
									}), showMovePicker && moveFrom !== key && !isEmpty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleConfirmMove(key),
										className: "absolute inset-0 z-20 grid place-items-center rounded-2xl bg-primary/20 text-xs font-bold text-primary opacity-0 hover:opacity-100",
										children: "Move here"
									})]
								}, key);
							})]
						}, s))
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: searchQuery,
								onChange: (e) => handleQuickSearch(e.target.value),
								placeholder: "Search recipes...",
								className: "w-full bg-transparent text-sm outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1",
							children: FILTER_OPTIONS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleFilterChange(f),
								className: `rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${searchFilter === f ? "bg-gradient-primary text-white" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
								children: f
							}, f))
						}),
						searching && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Searching..."
						}),
						filteredSearchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-1 max-h-48 overflow-y-auto",
							children: filteredSearchResults.map((r) => {
								plan.find((m) => m.name === r.name);
								const isFav = isFavorite(r.name);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-2xl bg-background/50 p-2 text-sm hover:bg-background/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg",
											children: r.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1 font-semibold",
											children: r.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => toggleFavorite(r.name, r.emoji || "🍽️"),
											className: `grid h-7 w-7 place-items-center rounded-lg ${isFav ? "text-red-500" : "text-muted-foreground"} hover:bg-secondary`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-3.5 w-3.5 ${isFav ? "fill-current" : ""}` })
										})
									]
								}, r.name);
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold",
							children: "Smart suggestions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Based on your inventory"
						}),
						suggestionsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-2",
							children: [
								1,
								2,
								3
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-14 rounded-2xl bg-secondary/30 animate-pulse" }, i))
						}) : suggestions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-center text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No recipe suggestions available." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Add inventory items to receive meal recommendations." })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-2 max-h-80 overflow-y-auto",
							children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-background/70 p-3 text-sm hover:bg-background/90 cursor-pointer transition",
								onClick: () => {
									if (quickAddOpen) onAddMealWithCheck(quickAddOpen, {
										name: s.name,
										emoji: s.emoji
									});
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-emerald text-base text-white",
											children: s.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold truncate",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] text-muted-foreground",
												children: [
													s.availableCount,
													"/",
													s.ingredientsTotal,
													" ingredients",
													s.missingCount > 0 && ` · Missing: ${s.itemsMissing.slice(0, 2).join(", ")}${s.missingCount > 2 ? ` +${s.missingCount - 2}` : ""}`
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: s.difficulty
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground",
												children: s.time
											})]
										})
									]
								}), s.availableCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1.5 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-green-600",
										children: [
											"✓ ",
											s.availableCount,
											" ingredient",
											s.availableCount !== 1 ? "s" : "",
											" available"
										]
									}), s.missingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-amber-600",
										children: ["· Missing ", s.missingCount]
									})]
								})]
							}, s.name))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowFavorites(!showFavorites),
						className: "flex w-full items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold",
							children: "Favorite Recipes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: favorites.length
						})]
					}), showFavorites && (favoritesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 rounded-2xl bg-secondary/30 animate-pulse" }, i))
					}) : favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "No favorites yet"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-1 max-h-40 overflow-y-auto",
						children: favorites.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-2xl bg-background/50 p-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg",
									children: f.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 font-semibold truncate",
									children: f.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => toggleFavorite(f.name, f.emoji),
									className: "grid h-7 w-7 place-items-center rounded-lg text-red-500 hover:bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-current" })
								})
							]
						}, f.id))
					}))] })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: editingSlot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setEditingSlot(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				onClick: (e) => e.stopPropagation(),
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md glass-card rounded-3xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold",
						children: ["Edit meal — ", editingSlot]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setEditingSlot(null),
						className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block text-sm font-medium",
								children: "Meal name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: editName,
								onChange: (e) => setEditName(e.target.value),
								placeholder: "e.g. Tomato Soup",
								className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block text-sm font-medium",
								children: "Emoji"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: editEmoji,
								onChange: (e) => setEditEmoji(e.target.value),
								placeholder: "🍲",
								className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									handleClearMeal(editingSlot);
									setEditingSlot(null);
								},
								className: "flex-1 rounded-2xl border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary",
								children: "Clear"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									handleDeleteMeal(editingSlot);
									setEditingSlot(null);
								},
								className: "flex-1 rounded-2xl border border-destructive/30 px-4 py-2.5 text-sm font-semibold text-destructive hover:bg-destructive/10",
								children: "Delete"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSaveEdit,
							className: "w-full rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
							children: "Save changes"
						})
					]
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: quickAddOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setQuickAddOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				onClick: (e) => e.stopPropagation(),
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md glass-card rounded-3xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-bold",
							children: ["Add meal — ", quickAddOpen]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setQuickAddOpen(null),
							className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAddMakeOwn, { onAdd: (name, emoji) => onAddMealWithCheck(quickAddOpen, {
						name,
						emoji
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Type a recipe name...",
							className: "w-full bg-transparent text-sm outline-none",
							onChange: (e) => handleQuickSearch(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1 mb-3",
						children: FILTER_OPTIONS.slice(0, 6).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleFilterChange(f),
							className: `rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${searchFilter === f ? "bg-gradient-primary text-white" : "bg-secondary text-muted-foreground"}`,
							children: f
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 max-h-48 overflow-y-auto",
						children: [searchResults.length === 0 && suggestions.length > 0 ? suggestions.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onAddMealWithCheck(quickAddOpen, {
								name: s.name,
								emoji: s.emoji
							}),
							className: "flex w-full items-center gap-2 rounded-2xl bg-background/50 p-2 text-sm hover:bg-background/80 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg",
									children: s.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 font-semibold",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-muted-foreground",
									children: [
										s.availableCount,
										"/",
										s.ingredientsTotal
									]
								})
							]
						}, s.name)) : searchResults.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onAddMealWithCheck(quickAddOpen, {
								name: r.name,
								emoji: r.emoji || "🍽️"
							}),
							className: "flex w-full items-center gap-2 rounded-2xl bg-background/50 p-2 text-sm hover:bg-background/80 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: r.emoji
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-semibold",
								children: r.name
							})]
						}, r.name)), searchResults.length === 0 && searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onAddMealWithCheck(quickAddOpen, {
								name: searchQuery.trim(),
								emoji: "🍽️"
							}),
							className: "flex w-full items-center gap-2 rounded-2xl bg-primary/10 p-2 text-sm hover:bg-primary/20 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: [
									"Add \"",
									searchQuery.trim(),
									"\""
								]
							})]
						})]
					}),
					searchResults.length === 0 && !searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySection, {
						title: "🌿 Vegetarian",
						items: VEGETARIAN_ITEMS,
						onSelect: (name, emoji) => onAddMealWithCheck(quickAddOpen, {
							name,
							emoji
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySection, {
						title: "💪 Healthy",
						items: HEALTHY_ITEMS,
						onSelect: (name, emoji) => onAddMealWithCheck(quickAddOpen, {
							name,
							emoji
						})
					})] })
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showClearConfirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-50 grid place-items-center bg-foreground/30 backdrop-blur-sm",
			onClick: () => setShowClearConfirm(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				transition: { duration: .18 },
				className: "glass-card mx-4 max-w-sm rounded-3xl p-6 text-center",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mx-auto h-10 w-10 text-destructive" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg font-bold",
						children: "Clear all meals?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							"This will remove ",
							plannedCount,
							" meal",
							plannedCount !== 1 ? "s" : "",
							" from this week's plan. You can undo this by not saving before leaving."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowClearConfirm(false),
							className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								clearAllMeals();
								setShowClearConfirm(false);
							},
							className: "rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-white",
							children: "Yes, clear all"
						})]
					})
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: pendingReplace && (() => {
			const existing = getSlot(pendingReplace.slotKey);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 grid place-items-center bg-foreground/30 backdrop-blur-sm",
				onClick: () => setPendingReplace(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .95,
						opacity: 0
					},
					transition: { duration: .18 },
					className: "glass-card mx-4 max-w-sm rounded-3xl p-6 text-center",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mx-auto h-10 w-10 text-amber-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: "Replace existing meal?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"This slot already has ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: existing?.name || "a meal" }),
								". Replace it?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPendingReplace(null),
								className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									handleAddMeal(pendingReplace.slotKey, {
										name: pendingReplace.name,
										emoji: pendingReplace.emoji
									});
									setPendingReplace(null);
								},
								className: "rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-white",
								children: "Replace"
							})]
						})
					]
				})
			});
		})() }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showSavedPlans && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setShowSavedPlans(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				onClick: (e) => e.stopPropagation(),
				initial: { x: 480 },
				animate: { x: 0 },
				exit: { x: 480 },
				transition: {
					type: "spring",
					stiffness: 260,
					damping: 30
				},
				className: "fixed right-3 top-3 bottom-3 w-[92vw] max-w-md glass-card rounded-3xl p-6 overflow-y-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: "Saved Meal Plans"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowSavedPlans(false),
							className: "grid h-9 w-9 place-items-center rounded-xl hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					plansLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 rounded-3xl bg-secondary/30 animate-pulse" }, i))
					}) : savedPlans.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-12 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No saved meal plans yet." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: "Create and save a plan to see it here."
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: savedPlans.map((sp) => {
							const mealCount = sp.meals.filter((m) => m.name).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-background/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold",
										children: sp.name || "Week"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											mealCount,
											" meals · ",
											new Date(sp.createdAt).toLocaleDateString()
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													loadPlanById(sp.id);
													setShowSavedPlans(false);
												},
												className: "rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-white",
												children: "Load"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => duplicateSavedPlan(sp.id),
												className: "rounded-full bg-background/70 px-3 py-1 text-xs font-semibold border border-border hover:bg-secondary",
												children: "Duplicate"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => deleteSavedPlan(sp.id),
												className: "rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-destructive border border-destructive/30 hover:bg-destructive/10",
												children: "Delete"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-1",
									children: [sp.meals.filter((m) => m.name).slice(0, 6).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-background/80 px-2 py-0.5 text-[10px]",
										children: [
											m.emoji,
											" ",
											m.name
										]
									}, m.slotKey)), mealCount > 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-background/80 px-2 py-0.5 text-[10px] text-muted-foreground",
										children: [
											"+",
											mealCount - 6,
											" more"
										]
									})]
								})]
							}, sp.id);
						})
					}),
					plansTotalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: plansPage <= 1,
								onClick: () => loadSavedPlans(plansPage - 1),
								className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary disabled:opacity-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									plansPage,
									" / ",
									plansTotalPages
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: plansPage >= plansTotalPages,
								onClick: () => loadSavedPlans(plansPage + 1),
								className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary disabled:opacity-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showShoppingList && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setShowShoppingList(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				onClick: (e) => e.stopPropagation(),
				initial: { x: 480 },
				animate: { x: 0 },
				exit: { x: 480 },
				transition: {
					type: "spring",
					stiffness: 260,
					damping: 30
				},
				className: "fixed right-3 top-3 bottom-3 w-[92vw] max-w-md glass-card rounded-3xl p-6 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold",
						children: "Shopping List"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowShoppingList(false),
						className: "grid h-9 w-9 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}), shoppingLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: [
						1,
						2,
						3,
						4,
						5
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 rounded-2xl bg-secondary/30 animate-pulse" }, i))
				}) : shoppingList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-12 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your shopping list is empty." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: "All required ingredients are in your inventory!"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: shoppingList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-2xl bg-background/50 px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: ["x", item.count]
						})]
					}, item.name))
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showMovePicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => {
				setShowMovePicker(false);
				setMoveFrom(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				onClick: (e) => e.stopPropagation(),
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-lg glass-card rounded-3xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold mb-3",
						children: "Move meal to..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-muted-foreground mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d }, d))]
					}),
					slots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-7 gap-1 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold text-muted-foreground flex items-center",
							children: s
						}), days.map((d) => {
							const key = `${d}-${s}`;
							const meal = getSlot(key);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleConfirmMove(key),
								disabled: key === moveFrom,
								className: `min-h-[40px] rounded-xl text-[10px] p-1 transition ${key === moveFrom ? "bg-primary/20 text-primary" : meal?.name ? "bg-background/70 hover:bg-primary/20" : "bg-background/40 border border-dashed border-border hover:border-primary/60"} disabled:opacity-50`,
								children: meal?.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "truncate block",
									children: [
										meal.emoji,
										" ",
										meal.name
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 mx-auto text-muted-foreground" })
							}, key);
						})]
					}, s))
				]
			})
		}) })
	] });
}
var VEGETARIAN_ITEMS = [
	{
		name: "Garden Salad",
		emoji: "🥗"
	},
	{
		name: "Veggie Pasta",
		emoji: "🍝"
	},
	{
		name: "Lentil Soup",
		emoji: "🫘"
	},
	{
		name: "Broccoli Stir-fry",
		emoji: "🥦"
	},
	{
		name: "Falafel Wrap",
		emoji: "🧆"
	},
	{
		name: "Vegetable Curry",
		emoji: "🍛"
	},
	{
		name: "Stuffed Peppers",
		emoji: "🫔"
	},
	{
		name: "Veggie Dumplings",
		emoji: "🥟"
	},
	{
		name: "Mushroom Risotto",
		emoji: "🍄"
	},
	{
		name: "Bean Burrito",
		emoji: "🌯"
	}
];
var HEALTHY_ITEMS = [
	{
		name: "Avocado Toast",
		emoji: "🥑"
	},
	{
		name: "Berry Smoothie",
		emoji: "🫐"
	},
	{
		name: "Kale Caesar",
		emoji: "🥬"
	},
	{
		name: "Grilled Chicken",
		emoji: "🥩"
	},
	{
		name: "Quinoa Bowl",
		emoji: "🥣"
	},
	{
		name: "Salmon Plate",
		emoji: "🐟"
	},
	{
		name: "Rainbow Salad",
		emoji: "🥕"
	},
	{
		name: "Brown Rice Bowl",
		emoji: "🍚"
	},
	{
		name: "Almond Crunch",
		emoji: "🥜"
	},
	{
		name: "Zucchini Noodles",
		emoji: "🥒"
	}
];
var QUICK_EMOJIS = [
	"🍽️",
	"🥗",
	"🍝",
	"🍛",
	"🌯",
	"🥪",
	"🥘",
	"🍲",
	"🥣",
	"🥗",
	"🥑",
	"🥬",
	"🥩",
	"🐟",
	"🫐",
	"🥟",
	"🧆",
	"🍄",
	"🥦",
	"🫘"
];
function QuickAddMakeOwn({ onAdd }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [emoji, setEmoji] = (0, import_react.useState)("🍽️");
	const handleAdd = () => {
		if (!name.trim()) return;
		onAdd(name.trim(), emoji);
		setName("");
		setEmoji("🍽️");
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "flex w-full items-center gap-2 rounded-2xl bg-secondary/50 px-3 py-2 text-sm font-semibold hover:bg-secondary/80",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition ${open ? "" : "-rotate-90"}` }), "Make Your Own Recipe"]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			className: "mt-2 space-y-2 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Recipe name",
						className: "w-full bg-transparent text-sm outline-none",
						onKeyDown: (e) => e.key === "Enter" && handleAdd()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: emoji,
							onChange: (e) => setEmoji(e.target.value || "🍽️"),
							className: "w-10 rounded-xl border border-border bg-background/70 px-2 py-2 text-center text-lg outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: "Pick an emoji"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleAdd,
							disabled: !name.trim(),
							className: "ml-auto inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:shadow-lift disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add to plan"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: QUICK_EMOJIS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setEmoji(e),
						className: `rounded-lg px-1.5 py-1 text-base transition hover:bg-secondary ${emoji === e ? "bg-secondary ring-2 ring-primary/40" : ""}`,
						children: e
					}, e))
				})
			]
		})]
	});
}
function CategorySection({ title, items, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 text-xs font-semibold text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-1.5",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onSelect(item.name, item.emoji),
				className: "flex flex-col items-center gap-0.5 rounded-xl bg-background/50 p-1.5 text-center hover:bg-background/80 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg",
					children: item.emoji
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-medium leading-tight text-foreground",
					children: item.name
				})]
			}, item.name))
		})]
	});
}
function CalendarPlus(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 2v4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 2v4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "18",
				height: "18",
				x: "3",
				y: "4",
				rx: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 10h18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 16h4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 14v4" })
		]
	});
}
function PlannerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlannerView, { ...usePlannerController() });
}
//#endregion
export { PlannerPage as component };
