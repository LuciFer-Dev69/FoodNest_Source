import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Pen, F as MapPin, J as ImageUp, T as Plus, Tt as ArrowUpDown, X as HeartHandshake, bt as CalendarDays, i as Users, o as Truck, t as X, u as Trash2, ut as Clock, x as Search } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.donations-DINPEOLA.js
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
		label: "Quantity ↑",
		value: "quantity"
	},
	{
		label: "Quantity ↓",
		value: "-quantity"
	}
];
var STATUS_BADGES = {
	Available: "bg-green-500/15 text-green-600 dark:text-green-400",
	Reserved: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
	Completed: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
	Expired: "bg-red-500/15 text-red-600 dark:text-red-400",
	Cancelled: "bg-gray-500/15 text-gray-600 dark:text-gray-400"
};
function useDonationsController() {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("-createdAt");
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editId, setEditId] = (0, import_react.useState)(null);
	const [detailId, setDetailId] = (0, import_react.useState)(null);
	const cats = CATEGORIES;
	const editingItem = (0, import_react.useMemo)(() => editId ? items.find((i) => i.id === editId) ?? null : null, [editId, items]);
	const detailItem = (0, import_react.useMemo)(() => detailId ? items.find((i) => i.id === detailId) ?? null : null, [detailId, items]);
	const fetchItems = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const params = new URLSearchParams();
			if (q) params.set("search", q);
			if (cat !== "All") params.set("category", cat);
			params.set("sort", sort);
			params.set("limit", "100");
			const data = await api.get(`/api/donations?${params}`);
			setItems(data.items);
		} catch (err) {
			toast.error(err.message || "Failed to load donations");
		} finally {
			setLoading(false);
		}
	}, [
		q,
		cat,
		sort
	]);
	(0, import_react.useEffect)(() => {
		fetchItems();
	}, [fetchItems]);
	const handleCreateOpen = () => {
		setEditId(null);
		setCreateOpen(true);
	};
	const handleEditOpen = (item) => {
		setEditId(item.id);
		setCreateOpen(true);
	};
	const handleCloseForm = () => {
		setCreateOpen(false);
		setEditId(null);
	};
	const handleDetailOpen = (item) => {
		setDetailId(item.id);
	};
	const handleDetailClose = () => {
		setDetailId(null);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const foodName = formData.get("foodName");
		const quantity = formData.get("quantity");
		if (!foodName || !quantity) {
			toast.error("Food name and quantity are required.");
			return;
		}
		const file = formData.get("image");
		if (!file || file.size === 0) formData.delete("image");
		formData.delete("shareToCommunity");
		const shareToCommunity = form.querySelector("[name=\"shareToCommunity\"]")?.checked ?? false;
		if (shareToCommunity) formData.append("shareToCommunity", "true");
		try {
			if (editId) {
				const updated = await api.putFormData(`/api/donations/${editId}`, formData);
				setItems((prev) => prev.map((i) => i.id === editId ? updated : i));
				toast.success(`${foodName} updated`);
			} else {
				const saved = await api.postFormData("/api/donations", formData);
				setItems((prev) => [saved, ...prev]);
				if (shareToCommunity) toast.success(`${foodName} published! Shared to community.`);
				else toast.success(`${foodName} published!`);
			}
			handleCloseForm();
		} catch (err) {
			toast.error(err.message || "Failed to save donation");
		}
	};
	const handleClaim = async (id) => {
		try {
			const updated = await api.put(`/api/donations/${id}/claim`);
			setItems((prev) => prev.map((i) => i.id === id ? updated : i));
			toast.success("Donation claimed! The owner will be notified.");
			handleDetailClose();
		} catch (err) {
			toast.error(err.message || "Failed to claim donation");
		}
	};
	const handleDelete = async (id) => {
		try {
			await api.delete(`/api/donations/${id}`);
			setItems((prev) => prev.filter((i) => i.id !== id));
			toast.success("Donation deleted");
		} catch (err) {
			toast.error(err.message || "Failed to delete donation");
		}
	};
	const handleCancel = async (id) => {
		try {
			const result = await api.put(`/api/donations/${id}/cancel`);
			setItems((prev) => prev.filter((i) => i.id !== id));
			toast.success(result.message || "Donation cancelled");
		} catch (err) {
			toast.error(err.message || "Failed to cancel donation");
		}
	};
	const handleOpenFoodConnect = (id) => {
		navigate({ to: `/app/food-connect/${id}` });
		handleDetailClose();
	};
	return {
		q,
		setQ,
		cat,
		setCat,
		sort,
		setSort,
		items,
		loading,
		createOpen,
		editId,
		editingItem,
		detailId,
		detailItem,
		cats,
		fetchItems,
		handleCreateOpen,
		handleEditOpen,
		handleCloseForm,
		handleDetailOpen,
		handleDetailClose,
		handleSubmit,
		handleClaim,
		handleDelete,
		handleCancel,
		handleOpenFoodConnect
	};
}
var CENTERS = {
	Nepal: [27.7172, 85.324],
	Malaysia: [3.139, 101.6869]
};
function LocationPicker({ country, latitude, longitude, onLocationChange }) {
	const mapRef = (0, import_react.useRef)(null);
	const mapInstance = (0, import_react.useRef)(null);
	const markerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!mapRef.current || typeof window === "undefined") return;
		const initMap = async () => {
			const L = (await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
			await Promise.resolve({});
			if (!mapInstance.current) {
				const center = CENTERS[country] || CENTERS.Nepal;
				mapInstance.current = L.map(mapRef.current, {
					center,
					zoom: 12,
					zoomControl: true
				});
				L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: "&copy; OpenStreetMap",
					maxZoom: 18
				}).addTo(mapInstance.current);
				mapInstance.current.on("click", (e) => {
					const { lat, lng } = e.latlng;
					onLocationChange(lat, lng);
					if (markerRef.current) markerRef.current.setLatLng([lat, lng]);
					else {
						markerRef.current = L.marker([lat, lng], { draggable: true }).addTo(mapInstance.current).bindPopup("Pickup location").openPopup();
						markerRef.current.on("dragend", (ev) => {
							const pos = ev.target.getLatLng();
							onLocationChange(pos.lat, pos.lng);
						});
					}
				});
			} else {
				const center = CENTERS[country] || CENTERS.Nepal;
				mapInstance.current.setView(center, 12);
			}
			if (latitude && longitude) {
				if (markerRef.current) markerRef.current.setLatLng([latitude, longitude]);
				else {
					markerRef.current = L.marker([latitude, longitude], { draggable: true }).addTo(mapInstance.current).bindPopup("Pickup location").openPopup();
					markerRef.current.on("dragend", (ev) => {
						const pos = ev.target.getLatLng();
						onLocationChange(pos.lat, pos.lng);
					});
				}
				mapInstance.current.setView([latitude, longitude], 14);
			}
		};
		initMap();
		return () => {
			if (mapInstance.current) {
				mapInstance.current.remove();
				mapInstance.current = null;
				markerRef.current = null;
			}
		};
	}, [country]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1 block text-sm font-medium",
				children: "Pickup Location (click on map)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: mapRef,
				className: "h-52 w-full rounded-2xl overflow-hidden border border-border"
			}),
			latitude && longitude ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary" }),
					latitude.toFixed(4),
					", ",
					longitude.toFixed(4)
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Click on the map to set pickup location"
			})
		]
	});
}
function timeAgo(dateStr) {
	const diff = Date.now() - new Date(dateStr).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "Just now";
	if (mins < 60) return `${mins}m ago`;
	const hrs = Math.floor(mins / 60);
	if (hrs < 24) return `${hrs}h ago`;
	return `${Math.floor(hrs / 24)}d ago`;
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
function DonationsView({ q, setQ, cat, setCat, sort, setSort, items, loading, createOpen, editId, editingItem, detailItem, cats, handleCreateOpen, handleEditOpen, handleCloseForm, handleDetailOpen, handleDetailClose, handleSubmit, handleClaim, handleDelete, handleCancel, handleOpenFoodConnect }) {
	const [pickupCountry, setPickupCountry] = (0, import_react.useState)("Nepal");
	const [pickupCity, setPickupCity] = (0, import_react.useState)("Kathmandu");
	const [pickupLat, setPickupLat] = (0, import_react.useState)(null);
	const [pickupLng, setPickupLng] = (0, import_react.useState)(null);
	const [pickupAddress, setPickupAddress] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (editingItem?.pickupLocation) {
			const pl = editingItem.pickupLocation;
			setPickupCountry(pl.country || "Nepal");
			setPickupCity(pl.city || "Kathmandu");
			setPickupLat(pl.latitude ?? null);
			setPickupLng(pl.longitude ?? null);
			setPickupAddress(pl.address || "");
		} else if (!editId) {
			setPickupCountry("Nepal");
			setPickupCity("Kathmandu");
			setPickupLat(null);
			setPickupLng(null);
			setPickupAddress("");
		}
	}, [editingItem, editId]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Donation marketplace",
		subtitle: "Surplus food, shared with neighbours."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
		children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card rounded-3xl p-4 animate-pulse",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 rounded-2xl bg-secondary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-4 w-3/4 rounded bg-secondary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-3 w-1/2 rounded bg-secondary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-3 w-2/3 rounded bg-secondary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-10 rounded-2xl bg-secondary" })
			]
		}, i))
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Donation marketplace",
			subtitle: "Surplus food, shared with neighbours.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleCreateOpen,
				className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " List a Donation"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-1 min-w-[200px] items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search donations…",
					className: "w-full bg-transparent text-sm outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPills, {
				label: "Category",
				options: CATEGORIES,
				current: cat,
				onChange: setCat
			})
		})] }),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-500 mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-12 w-12" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: "No donations available right now"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-xs text-sm text-muted-foreground",
					children: "Be the first to share surplus food with your community."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleCreateOpen,
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " List Your Donation"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: items.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: { opacity: 0 },
					transition: { delay: i * .03 },
					className: "glass-card hover-lift rounded-3xl overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-40 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center overflow-hidden",
						children: [d.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.image,
							alt: d.foodName,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-16 w-16 text-emerald-400/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${STATUS_BADGES[d.status]}`,
							children: d.status
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold truncate",
								children: d.foodName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: [
									d.quantity,
									" ",
									d.unit,
									" · ",
									d.category
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
											" ",
											d.pickupLocation?.city || d.city || "N/A"
										]
									}),
									d.pickupDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3 w-3" }),
											" ",
											d.pickupDate
										]
									}),
									d.pickupTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
											" ",
											d.pickupTime
										]
									}),
									d.expirationDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3 w-3 text-red-500/70" }),
											" Exp ",
											d.expirationDate
										]
									}),
									d.deliveryMethod && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3 w-3" }),
											" ",
											d.deliveryMethod === "self_pickup" ? "Self Pickup" : "Third-party"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 ml-auto",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
											" ",
											d.donor.name
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: timeAgo(d.createdAt)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1",
									children: d.isOwner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditOpen(d),
										className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-secondary text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete(d.id),
										className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-destructive/10 hover:text-destructive text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDetailOpen(d),
										className: "rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-semibold text-white shadow-soft hover:shadow-lift",
										children: "View Details"
									})
								})]
							})
						]
					})]
				}, d.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: createOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: handleCloseForm,
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
					className: "flex items-center justify-between mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold",
						children: editId ? "Edit donation" : "List a Donation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleCloseForm,
						className: "grid h-9 w-9 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					encType: "multipart/form-data",
					className: "space-y-3",
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
									placeholder: "e.g. Fresh Vegetables",
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
										placeholder: "5",
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
										placeholder: "kg, pcs, loaves",
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
									defaultValue: editingItem?.category ?? "Produce",
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
									children: "Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "description",
									defaultValue: editingItem?.description ?? "",
									rows: 3,
									placeholder: "Describe what you're donating…",
									className: "w-full resize-none rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-sm font-medium",
									children: "Expiration date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "expirationDate",
									defaultValue: editingItem?.expirationDate?.split("T")[0] ?? "",
									type: "date",
									className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-medium",
										children: "Pickup date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "pickupDate",
										defaultValue: editingItem?.pickupDate?.split("T")[0] ?? "",
										type: "date",
										className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-sm font-medium",
										children: "Pickup time"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "pickupTime",
										defaultValue: editingItem?.pickupTime ?? "",
										type: "text",
										placeholder: "e.g. 5–7pm",
										className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
									})]
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border/40 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-3 block text-sm font-bold",
									children: "Pickup Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mb-1 block text-sm font-medium",
												children: "Country"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: pickupCountry,
												onChange: (e) => {
													setPickupCountry(e.target.value);
													setPickupCity(e.target.value === "Nepal" ? "Kathmandu" : "Kuala Lumpur");
													setPickupLat(null);
													setPickupLng(null);
												},
												className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Nepal",
													children: "Nepal"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Malaysia",
													children: "Malaysia"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationPicker, {
											country: pickupCountry,
											latitude: pickupLat,
											longitude: pickupLng,
											onLocationChange: (lat, lng) => {
												setPickupLat(lat);
												setPickupLng(lng);
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mb-1 block text-sm font-medium",
												children: "Pickup address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: pickupAddress,
												onChange: (e) => setPickupAddress(e.target.value),
												placeholder: "e.g. Baneshwor, Kathmandu",
												className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "hidden",
											name: "pickupLocation",
											value: JSON.stringify({
												latitude: pickupLat,
												longitude: pickupLng,
												address: pickupAddress,
												country: pickupCountry,
												city: pickupCity
											})
										})
									]
								})]
							}),
							!editId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "shareToCommunity",
									type: "checkbox",
									className: "accent-primary"
								}), "Share to community feed after publishing"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCloseForm,
							className: "flex-1 rounded-2xl border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "flex-1 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
							children: editId ? "Save changes" : "Publish Donation"
						})]
					})]
				}, editId || "new")]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: detailItem && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm grid place-items-center p-4",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: handleDetailClose,
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
				transition: { duration: .2 },
				className: "glass-card w-full max-w-lg rounded-3xl overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-56 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center overflow-hidden",
					children: [
						detailItem.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: detailItem.image,
							alt: detailItem.foodName,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-24 w-24 text-emerald-400/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleDetailClose,
							className: "absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${STATUS_BADGES[detailItem.status]}`,
							children: detailItem.status
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: detailItem.foodName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: ["Donated by ", detailItem.donor.name]
						})] }),
						detailItem.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: detailItem.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Quantity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold",
									children: [
										detailItem.quantity,
										" ",
										detailItem.unit
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: detailItem.category
								})] }),
								detailItem.pickupLocation?.city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Pickup at"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold",
									children: [detailItem.pickupLocation.city, detailItem.pickupLocation.country ? `, ${detailItem.pickupLocation.country}` : ""]
								})] }),
								detailItem.pickupDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Pickup date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: detailItem.pickupDate
								})] }),
								detailItem.pickupTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Pickup time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: detailItem.pickupTime
								})] }),
								detailItem.expirationDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Expires"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-red-500/80",
									children: detailItem.expirationDate
								})] }),
								detailItem.deliveryMethod && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Delivery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: detailItem.deliveryMethod === "self_pickup" ? "Self Pickup" : "Third-party"
								})] })
							]
						}),
						detailItem.pickupLocation?.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Pickup address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: detailItem.pickupLocation.address
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleDetailClose,
									className: "flex-1 rounded-2xl border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary",
									children: "Close"
								}),
								detailItem.status === "Available" && !detailItem.isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleClaim(detailItem.id),
									className: "flex-1 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
									children: "Claim Donation"
								}),
								(detailItem.status === "Reserved" || detailItem.status === "Completed") && (detailItem.isOwner || detailItem.isClaimant) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleOpenFoodConnect(detailItem.id),
									className: "flex-1 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
									children: "Open Food Connect"
								}),
								detailItem.status === "Available" && detailItem.isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-center text-sm text-muted-foreground",
									children: "Your donation"
								})
							]
						})
					]
				})]
			})
		}) })
	] });
}
function DonationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationsView, { ...useDonationsController() });
}
//#endregion
export { DonationsPage as component };
