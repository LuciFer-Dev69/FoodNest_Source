import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Dt as ArrowLeft, F as MapPin, N as MessageCircle, Y as Heart, ct as Crosshair, k as Navigation } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as DISTANCE_OPTIONS } from "./community.model-j9VM_BWD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.community.nearby-BdJVUhBL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function timeAgo(date) {
	const diff = Date.now() - new Date(date).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "Just now";
	if (mins < 60) return `${mins}m ago`;
	const hours = Math.floor(mins / 60);
	if (hours < 24) return `${hours}h ago`;
	const days = Math.floor(hours / 24);
	if (days < 7) return `${days}d ago`;
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
function NearbyView() {
	const navigate = useNavigate();
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [maxDistance, setMaxDistance] = (0, import_react.useState)(1e4);
	const [userLocation, setUserLocation] = (0, import_react.useState)(null);
	const [locationError, setLocationError] = (0, import_react.useState)(null);
	const fetchNearby = (0, import_react.useCallback)(async (lat, lng, dist) => {
		setLoading(true);
		try {
			const result = await api.get(`/api/community/posts/nearby?lat=${lat}&lng=${lng}&maxDistance=${dist}&limit=50`);
			setPosts(result.posts);
		} catch {
			toast.error("Failed to load nearby posts");
		} finally {
			setLoading(false);
		}
	}, []);
	const getLocation = (0, import_react.useCallback)(() => {
		if (!navigator.geolocation) {
			setLocationError("Geolocation not supported");
			return;
		}
		navigator.geolocation.getCurrentPosition((pos) => {
			const loc = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};
			setUserLocation(loc);
			setLocationError(null);
			fetchNearby(loc.lat, loc.lng, maxDistance);
		}, () => {
			setLocationError("Could not get location. Using default.");
			const defaultLoc = {
				lat: 27.7172,
				lng: 85.324
			};
			setUserLocation(defaultLoc);
			fetchNearby(defaultLoc.lat, defaultLoc.lng, maxDistance);
		});
	}, [maxDistance, fetchNearby]);
	(0, import_react.useEffect)(() => {
		getLocation();
	}, [getLocation]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/app/community" }),
					className: "rounded-full p-2 hover:bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Nearby"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Discover posts near you"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: maxDistance,
						onChange: (e) => setMaxDistance(Number(e.target.value)),
						className: "rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-primary/30",
						children: DISTANCE_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: d.value,
							children: d.label
						}, d.value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: getLocation,
						className: "flex items-center gap-1.5 rounded-2xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-3.5 w-3.5" }), " Refresh"]
					}),
					userLocation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground",
						children: [
							userLocation.lat.toFixed(4),
							", ",
							userLocation.lng.toFixed(4)
						]
					}),
					locationError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-amber-500",
						children: locationError
					})
				]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-card rounded-3xl p-5 animate-pulse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-32 rounded bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-full rounded bg-secondary" })]
						})]
					})
				}, i))
			}) : posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-20 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold",
						children: "No posts nearby"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Try increasing the distance or check back later."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "glass-card rounded-3xl p-5 hover-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-9 w-9 rounded-full bg-gradient-primary grid place-items-center text-white text-xs font-bold overflow-hidden shrink-0",
							children: post.userId?.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.userId.profilePicture,
								alt: "",
								className: "h-full w-full object-cover"
							}) : post.userId?.name?.charAt(0)?.toUpperCase() || "U"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: post.userId?.name || "Unknown"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: timeAgo(post.createdAt)
										})]
									}), post.distance && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-[10px] font-semibold text-primary shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-3 w-3" }), post.distance < 1 ? `${Math.round(post.distance * 1e3)}m` : `${post.distance.toFixed(1)}km`]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-bold",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5 line-clamp-2",
									children: post.content
								}),
								post.location?.city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-[11px] text-muted-foreground flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
										" ",
										post.location.city,
										post.location.district ? `, ${post.location.district}` : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-3 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3" }),
											" ",
											post.likeCount
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3 w-3" }),
											" ",
											post.commentCount
										]
									})]
								})
							]
						})]
					})
				}, post._id))
			})
		]
	});
}
var SplitComponent = NearbyView;
//#endregion
export { SplitComponent as component };
