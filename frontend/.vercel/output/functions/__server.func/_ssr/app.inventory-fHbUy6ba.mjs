import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as List, C as Refrigerator, D as Pen, J as ImageUp, T as Plus, Tt as ArrowUpDown, W as LayoutGrid, t as X, u as Trash2, x as Search } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.inventory-fHbUy6ba.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Produce",
	"Dairy",
	"Bakery",
	"Pantry",
	"Meat",
	"Other"
];
var STORAGE_LOCATIONS = [
	"All",
	"Fridge",
	"Freezer",
	"Pantry",
	"Counter",
	"Other"
];
var STATUS_FILTERS = [
	"All",
	"Fresh",
	"Expiring Soon",
	"Expired"
];
var SORT_OPTIONS = [
	{
		label: "Newest first",
		value: "-createdAt"
	},
	{
		label: "Oldest first",
		value: "createdAt"
	},
	{
		label: "Name A-Z",
		value: "foodName"
	},
	{
		label: "Name Z-A",
		value: "-foodName"
	},
	{
		label: "Expiring soonest",
		value: "expirationDate"
	},
	{
		label: "Expiring latest",
		value: "-expirationDate"
	},
	{
		label: "Category A-Z",
		value: "category"
	},
	{
		label: "Category Z-A",
		value: "-category"
	},
	{
		label: "Quantity ↑",
		value: "quantity"
	},
	{
		label: "Quantity ↓",
		value: "-quantity"
	}
];
function useInventoryController() {
	const [q, setQ] = (0, import_react.useState)("");
	const [view, setView] = (0, import_react.useState)("grid");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [loc, setLoc] = (0, import_react.useState)("All");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("-createdAt");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editId, setEditId] = (0, import_react.useState)(null);
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const cats = CATEGORIES;
	const editingItem = (0, import_react.useMemo)(() => editId ? items.find((i) => i.id === editId) ?? null : null, [editId, items]);
	const fetchItems = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const params = new URLSearchParams();
			if (q) params.set("search", q);
			if (cat !== "All") params.set("category", cat);
			if (loc !== "All") params.set("storageLocation", loc);
			if (statusFilter !== "All") params.set("status", statusFilter);
			params.set("sort", sort);
			params.set("limit", "200");
			const data = await api.get(`/api/inventory?${params}`);
			setItems(data.items);
		} catch (err) {
			toast.error(err.message || "Failed to load inventory");
		} finally {
			setLoading(false);
		}
	}, [
		q,
		cat,
		loc,
		sort,
		statusFilter
	]);
	(0, import_react.useEffect)(() => {
		fetchItems();
	}, [fetchItems]);
	const handleAddItem = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const foodName = formData.get("foodName");
		const quantity = formData.get("quantity");
		const expirationDate = formData.get("expirationDate");
		if (!foodName || !quantity || !expirationDate) {
			toast.error("Food name, quantity, and expiration date are required.");
			return;
		}
		const file = formData.get("image");
		if (!file || file.size === 0) formData.delete("image");
		try {
			if (editId) {
				const updated = await api.putFormData(`/api/inventory/${editId}`, formData);
				setItems((prev) => prev.map((i) => i.id === editId ? updated : i));
				toast.success(`${foodName} updated`);
			} else {
				const saved = await api.postFormData("/api/inventory", formData);
				setItems((prev) => [saved, ...prev]);
				toast.success(`${foodName} saved`);
			}
			setOpen(false);
			setEditId(null);
		} catch (err) {
			toast.error(err.message || "Failed to save item");
		}
	};
	const handleStartEdit = (item) => {
		setEditId(item.id);
		setOpen(true);
	};
	const handleOpenAdd = () => {
		setEditId(null);
		setOpen(true);
	};
	const handleCloseModal = () => {
		setOpen(false);
		setEditId(null);
	};
	const handleDeleteItem = async (id) => {
		try {
			await api.delete(`/api/inventory/${id}`);
			setItems((prev) => prev.filter((i) => i.id !== id));
			toast.success("Item removed");
		} catch (err) {
			toast.error(err.message || "Failed to delete item");
		}
	};
	return {
		q,
		setQ,
		view,
		setView,
		cat,
		setCat,
		loc,
		setLoc,
		statusFilter,
		setStatusFilter,
		sort,
		setSort,
		open,
		setOpen,
		editId,
		setEditId,
		editingItem,
		cats,
		items,
		loading,
		fetchItems,
		handleAddItem,
		handleStartEdit,
		handleOpenAdd,
		handleCloseModal,
		handleDeleteItem
	};
}
var statusLabel = {
	Fresh: {
		label: "Fresh",
		cls: "bg-green-500/15 text-green-600 dark:text-green-400"
	},
	"Expiring Soon": {
		label: "Expiring Soon",
		cls: "bg-amber-500/15 text-amber-600 dark:text-amber-400"
	},
	Expired: {
		label: "Expired",
		cls: "bg-red-500/15 text-red-600 dark:text-red-400"
	}
};
function EmptyState({ onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-500 mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Refrigerator, { className: "h-12 w-12" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold",
				children: "Your kitchen is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-xs text-sm text-muted-foreground",
				children: "Add your first food item to start tracking what's in your kitchen."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onAdd,
				className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Inventory"]
			})
		]
	});
}
function FilterPills({ label, options, current, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-1 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
			children: label
		}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(o),
			className: `rounded-full px-3 py-1 text-xs font-semibold transition ${current === o ? "bg-gradient-primary text-white shadow-soft" : "bg-secondary text-foreground/70 hover:text-foreground"}`,
			children: o
		}, o))]
	});
}
function getStatusInfo(item) {
	return statusLabel[item.status] ?? {
		label: item.status,
		cls: "bg-muted text-muted-foreground"
	};
}
function InventoryView({ q, setQ, view, setView, cat, setCat, loc, setLoc, statusFilter, setStatusFilter, sort, setSort, open, editId, editingItem, items, loading, handleAddItem, handleStartEdit, handleOpenAdd, handleCloseModal, handleDeleteItem }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Inventory",
		subtitle: "Everything in your kitchen, calmly organised."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
		children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card rounded-3xl p-4 animate-pulse",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 rounded-2xl bg-secondary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-4 w-3/4 rounded bg-secondary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-3 w-1/2 rounded bg-secondary" })
			]
		}, i))
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Inventory",
			subtitle: "Everything in your kitchen, calmly organised.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleOpenAdd,
				className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add item"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex flex-1 min-w-[200px] items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search inventory…",
						className: "w-full bg-transparent text-sm outline-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 rounded-2xl border border-border bg-background/70 px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "bg-transparent text-sm outline-none",
						children: SORT_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o.value,
							children: o.label
						}, o.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center rounded-2xl border border-border bg-background/70 p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setView("list"),
						className: `grid h-8 w-8 place-items-center rounded-xl ${view === "list" ? "bg-gradient-primary text-white" : "text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setView("grid"),
						className: `grid h-8 w-8 place-items-center rounded-xl ${view === "grid" ? "bg-gradient-primary text-white" : "text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPills, {
					label: "Category",
					options: CATEGORIES,
					current: cat,
					onChange: setCat
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPills, {
					label: "Location",
					options: STORAGE_LOCATIONS,
					current: loc,
					onChange: setLoc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPills, {
					label: "Status",
					options: STATUS_FILTERS,
					current: statusFilter,
					onChange: setStatusFilter
				})
			]
		})] }),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onAdd: handleOpenAdd }) : view === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "overflow-hidden p-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-12 border-b border-border/60 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-4",
							children: "Item"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2",
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2",
							children: "Expires"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2 text-right",
							children: "Actions"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					initial: false,
					children: items.map((it, i) => {
						const info = getStatusInfo(it);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							transition: {
								duration: .25,
								delay: i * .02
							},
							className: "grid grid-cols-12 items-center border-b border-border/40 px-5 py-3 text-sm hover:bg-background/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-4 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-secondary",
										children: it.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: it.image,
											alt: it.foodName,
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Refrigerator, { className: "h-5 w-5 text-muted-foreground" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-semibold",
											children: it.foodName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												it.quantity,
												" ",
												it.unit
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 text-muted-foreground",
									children: it.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 text-muted-foreground",
									children: it.storageLocation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-1 text-[11px] font-semibold ${info.cls}`,
										children: info.label
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 flex items-center justify-end gap-1 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleStartEdit(it),
										className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDeleteItem(it.id),
										className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-destructive/10 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})]
								})
							]
						}, it.id);
					})
				})]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: items.map((it, i) => {
					const info = getStatusInfo(it);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 6
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						transition: { delay: i * .03 },
						className: "glass-card hover-lift rounded-3xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-gradient-emerald",
								children: it.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: it.image,
									alt: it.foodName,
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Refrigerator, { className: "h-12 w-12 text-white/60" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-bold",
										children: it.foodName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: [
											it.quantity,
											" ",
											it.unit,
											" · ",
											it.storageLocation
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${info.cls}`,
									children: info.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex items-center justify-between text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it.category })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-end gap-1 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleStartEdit(it),
									className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleDeleteItem(it.id),
									className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-destructive/10 hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})]
							})
						]
					}, it.id);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: handleCloseModal,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
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
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold",
						children: editId ? "Edit inventory item" : "Add inventory item"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleCloseModal,
						className: "grid h-9 w-9 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					id: "inventory-form",
					className: "mt-5 space-y-3",
					onSubmit: handleAddItem,
					encType: "multipart/form-data",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-sm font-medium",
									children: "Food name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "foodName",
									defaultValue: editingItem?.foodName ?? "",
									type: "text",
									placeholder: "e.g. Greek yogurt",
									className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-medium",
										children: "Quantity *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "quantity",
										defaultValue: editingItem?.quantity ?? "",
										type: "number",
										min: "0",
										step: "any",
										placeholder: "2",
										className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-medium",
										children: "Unit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "unit",
										defaultValue: editingItem?.unit ?? "",
										type: "text",
										placeholder: "pcs, g, L",
										className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-sm font-medium",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									name: "category",
									defaultValue: editingItem?.category ?? "Other",
									className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40",
									children: CATEGORIES.filter((c) => c !== "All").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: c
									}, c))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-sm font-medium",
									children: "Storage location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									name: "storageLocation",
									defaultValue: editingItem?.storageLocation ?? "Fridge",
									className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40",
									children: STORAGE_LOCATIONS.filter((l) => l !== "All").map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: l,
										children: l
									}, l))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-medium",
										children: "Purchase date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "purchaseDate",
										defaultValue: editingItem?.purchaseDate?.split("T")[0] ?? "",
										type: "date",
										className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-medium",
										children: "Expiration date *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "expirationDate",
										defaultValue: editingItem?.expirationDate?.split("T")[0] ?? "",
										type: "date",
										className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-sm font-medium",
									children: "Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "notes",
									defaultValue: editingItem?.notes ?? "",
									rows: 3,
									placeholder: "Optional notes…",
									className: "w-full resize-none rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-sm font-medium",
									children: "Image"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm text-muted-foreground cursor-pointer hover:border-primary/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-4 w-4" }),
										editingItem?.image ? "Change photo" : "Upload photo",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "image",
											type: "file",
											accept: "image/jpeg,image/png,image/webp,image/gif",
											className: "hidden"
										})
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-2 w-full rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
						children: editId ? "Save changes" : "Save item"
					})]
				}, editId || "new")]
			})
		}) })
	] });
}
function InventoryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryView, { ...useInventoryController() });
}
//#endregion
export { InventoryPage as component };
