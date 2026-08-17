import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Dt as ArrowLeft, F as MapPin, ct as Crosshair, k as Navigation } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.community.donation-map-CUK6bTu3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DonationMapView() {
	const navigate = useNavigate();
	const [markers, setMarkers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedMarker, setSelectedMarker] = (0, import_react.useState)(null);
	const [userLocation, setUserLocation] = (0, import_react.useState)(null);
	const fetchDonations = (0, import_react.useCallback)(async (lat, lng) => {
		setLoading(true);
		try {
			const params = lat && lng ? `?lat=${lat}&lng=${lng}&maxDistance=50000` : "";
			const result = await api.get(`/api/community/posts/donation-map${params}`);
			setMarkers(result.markers);
		} catch {
			toast.error("Failed to load donation map");
		} finally {
			setLoading(false);
		}
	}, []);
	const getLocation = (0, import_react.useCallback)(() => {
		if (!navigator.geolocation) {
			fetchDonations(27.7172, 85.324);
			return;
		}
		navigator.geolocation.getCurrentPosition((pos) => {
			const loc = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};
			setUserLocation(loc);
			fetchDonations(loc.lat, loc.lng);
		}, () => {
			setUserLocation({
				lat: 27.7172,
				lng: 85.324
			});
			fetchDonations(27.7172, 85.324);
		});
	}, [fetchDonations]);
	(0, import_react.useEffect)(() => {
		getLocation();
	}, [getLocation]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-4xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/app/community" }),
					className: "rounded-full p-2 hover:bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Donation Pickup Map"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Find available donations near you"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: getLocation,
					className: "ml-auto flex items-center gap-1.5 rounded-2xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-3.5 w-3.5" }), " Center"]
				})
			]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-card rounded-3xl h-96 animate-pulse grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" })
		}) : markers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-card rounded-3xl h-96 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-10 w-10 text-muted-foreground mx-auto" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg font-semibold",
						children: "No donation posts found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Donation posts with locations will appear here."
					})
				]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_300px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-3xl h-96 overflow-hidden relative bg-secondary/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center pointer-events-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Google Maps will render here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: [markers.length, " donation markers loaded"]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-3 right-3 z-10 space-y-1",
					children: markers.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelectedMarker(m),
						className: "flex items-center gap-1.5 rounded-xl bg-card/90 backdrop-blur px-2.5 py-1.5 text-xs font-semibold shadow-soft hover:bg-card border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }),
							m.city || "Unknown",
							m.distance !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground font-normal",
								children: m.distance < 1 ? `${Math.round(m.distance * 1e3)}m` : `${m.distance.toFixed(1)}km`
							})
						]
					}, m.id))
				})]
			}), selectedMarker && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				className: "glass-card rounded-3xl p-5 h-fit",
				children: [
					selectedMarker.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: selectedMarker.image,
						alt: "",
						className: "w-full h-32 object-cover rounded-2xl mb-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-sm",
						children: selectedMarker.foodName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 space-y-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
								" ",
								selectedMarker.city || "Unknown location"
							]
						}), selectedMarker.distance !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-3 w-3" }), selectedMarker.distance < 1 ? `${Math.round(selectedMarker.distance * 1e3)}m away` : `${selectedMarker.distance.toFixed(1)}km away`]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate({ to: `/app/community?post=${selectedMarker.postId}` }),
						className: "mt-4 w-full rounded-2xl bg-gradient-primary py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90",
						children: "View Donation"
					})
				]
			})]
		})]
	});
}
var SplitComponent = DonationMapView;
//#endregion
export { SplitComponent as component };
