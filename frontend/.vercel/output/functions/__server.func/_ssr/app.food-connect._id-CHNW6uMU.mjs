import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { Dt as ArrowLeft, F as MapPin, I as Mail, X as HeartHandshake, _t as CheckCheck, a as User, dt as CircleX, it as ExternalLink, o as Truck, ut as Clock, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Route } from "./app.food-connect._id-DBgQzxCf.mjs";
import { t as useFoodConnectController } from "./food-connect.controller-lpxStvIN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.food-connect._id-CHNW6uMU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FoodConnectMap({ donorLat, donorLng, claimantLat, claimantLng }) {
	const mapRef = (0, import_react.useRef)(null);
	const mapInstance = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!mapRef.current || typeof window === "undefined") return;
		const initMap = async () => {
			const L = (await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
			await Promise.resolve({});
			if (mapInstance.current) {
				mapInstance.current.remove();
				mapInstance.current = null;
			}
			const center = donorLat && donorLng ? [donorLat, donorLng] : [27.7172, 85.324];
			mapInstance.current = L.map(mapRef.current, {
				center,
				zoom: 13,
				zoomControl: true
			});
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "&copy; OpenStreetMap",
				maxZoom: 18
			}).addTo(mapInstance.current);
			if (donorLat && donorLng) {
				const greenIcon = L.divIcon({
					className: "",
					html: `<div style="width:20px;height:20px;background:#22c55e;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
					iconSize: [20, 20],
					iconAnchor: [10, 10]
				});
				L.marker([donorLat, donorLng], { icon: greenIcon }).addTo(mapInstance.current).bindPopup("<b>Donor</b><br/>Pickup location");
			}
			if (claimantLat && claimantLng) {
				const blueIcon = L.divIcon({
					className: "",
					html: `<div style="width:20px;height:20px;background:#3b82f6;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
					iconSize: [20, 20],
					iconAnchor: [10, 10]
				});
				L.marker([claimantLat, claimantLng], { icon: blueIcon }).addTo(mapInstance.current).bindPopup("<b>Recipient</b>");
			}
			if (donorLat && donorLng && claimantLat && claimantLng) L.polyline([[donorLat, donorLng], [claimantLat, claimantLng]], {
				color: "#22c55e",
				weight: 2,
				dashArray: "6, 6"
			}).addTo(mapInstance.current);
		};
		initMap();
		return () => {
			if (mapInstance.current) {
				mapInstance.current.remove();
				mapInstance.current = null;
			}
		};
	}, [
		donorLat,
		donorLng,
		claimantLat,
		claimantLng
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mapRef,
		className: "h-64 w-full rounded-2xl overflow-hidden border border-border"
	});
}
function FoodConnectView({ data, loading, isDonor, isClaimant, handleComplete, handleCancel, handleBack, handleProposeDelivery, handleAcceptDelivery, handleRejectDelivery, fetchData }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid place-items-center h-[80vh] text-muted-foreground text-sm",
		children: "Loading food connect…"
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid place-items-center h-[80vh] text-muted-foreground text-sm",
		children: "Food connect not found."
	});
	const f = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
	const PARTNERS = data.pickupLocation.country === "Nepal" ? [
		{
			label: "Yango",
			url: "https://yango.com/",
			logo: f("yango.com")
		},
		{
			label: "InDrive",
			url: "https://indrive.com/delivery",
			logo: f("indrive.com")
		},
		{
			label: "Pathao",
			url: "https://pathao.com/delivery",
			logo: f("pathao.com")
		}
	] : [
		{
			label: "Grab",
			url: "https://www.grab.com/my/delivery",
			logo: f("grab.com")
		},
		{
			label: "InDrive",
			url: "https://indrive.com/delivery",
			logo: f("indrive.com")
		},
		{
			label: "Maxim",
			url: "https://maxim.com/",
			logo: f("maxim.com")
		},
		{
			label: "Air Asia Ride",
			url: "https://www.airasia.com/ride",
			logo: f("airasia.com")
		}
	];
	const chosenPartner = PARTNERS.find((p) => p.label === data.deliveryPartner);
	const ds = data.deliveryStatus;
	const dm = data.deliveryMethod;
	const pollingRef = (0, import_react.useRef)(null);
	const pollCountRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (ds === "proposed" && isClaimant) pollingRef.current = setInterval(() => {
			pollCountRef.current += 1;
			if (pollCountRef.current >= 24) {
				if (pollingRef.current) clearInterval(pollingRef.current);
				pollingRef.current = null;
				return;
			}
			fetchData();
		}, 5e3);
		return () => {
			if (pollingRef.current) {
				clearInterval(pollingRef.current);
				pollingRef.current = null;
			}
			pollCountRef.current = 0;
		};
	}, [
		ds,
		isClaimant,
		fetchData
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: handleBack,
			className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Donations"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-3xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
								children: data.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: data.image,
									alt: "",
									className: "h-full w-full rounded-2xl object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-6 w-6 text-emerald-500" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: data.foodName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: data.category
							})] })]
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
										data.quantity,
										" ",
										data.unit
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: data.status
								})] }),
								data.pickupDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Pickup date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: data.pickupDate
								})] }),
								data.pickupTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Pickup time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: data.pickupTime
								})] })
							]
						}),
						data.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: data.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border/40 pt-3 space-y-2 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data.pickupLocation.address || `${data.pickupLocation.city}, ${data.pickupLocation.country}` })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/40 pt-3 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Delivery"
								}),
								ds === "none" && isClaimant && data.status === "Reserved" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleProposeDelivery("self_pickup"),
											className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4" }), " Self Pickup"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-center text-xs text-muted-foreground",
											children: "— or choose a delivery partner —"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2",
											children: PARTNERS.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleProposeDelivery("third_party", partner.label),
												className: "inline-flex items-center justify-center gap-1.5 rounded-2xl border border-border px-3 py-2.5 text-xs font-medium hover:bg-secondary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: partner.logo,
													alt: "",
													className: "h-4 w-4 rounded"
												}), partner.label]
											}, partner.label))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground",
											children: "You'll send a request to the donor for confirmation."
										})
									]
								}),
								ds === "proposed" && isClaimant && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-2xl bg-amber-500/10 px-4 py-3 text-sm text-amber-600",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
										"Waiting for donor to confirm ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: data.deliveryPartner }),
										" delivery…"
									]
								}),
								ds === "proposed" && isDonor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm",
										children: ["Claimant proposes delivery via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: data.deliveryPartner })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: handleAcceptDelivery,
											className: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Accept"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: handleRejectDelivery,
											className: "flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), " Reject"]
										})]
									})]
								}),
								ds === "accepted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: dm === "self_pickup" ? "Self Pickup" : `Delivery via ${data.deliveryPartner}`
										})]
									}), dm === "third_party" && data.status !== "Cancelled" && chosenPartner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: chosenPartner.url,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-90",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: chosenPartner.logo,
														alt: "",
														className: "h-5 w-5 rounded"
													}),
													"Open ",
													chosenPartner.label,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
												className: "group",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
													className: "cursor-pointer text-[11px] text-muted-foreground hover:text-foreground",
													children: "Other delivery partners"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 flex flex-wrap gap-2",
													children: PARTNERS.filter((p) => p.label !== data.deliveryPartner).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: link.url,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "inline-flex items-center gap-1.5 rounded-2xl border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: link.logo,
																alt: "",
																className: "h-3.5 w-3.5 rounded"
															}),
															link.label,
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
														]
													}, link.label))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Opens external site. No booking or payment handled here."
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/40 pt-3 space-y-2",
							children: [
								ds === "accepted" && isDonor && data.status === "Reserved" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleComplete,
									className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Complete Delivery"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleCancel,
									className: "flex w-full items-center justify-center gap-2 rounded-2xl border border-border px-5 py-2.5 text-sm font-semibold text-destructive hover:bg-destructive/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), " Cancel"]
								})] }),
								data.status === "Completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-center gap-2 rounded-2xl bg-green-500/10 px-5 py-2.5 text-sm font-semibold text-green-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Completed"]
								}),
								data.status === "Cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-center gap-2 rounded-2xl bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), " Cancelled"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-3xl p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " Pickup Location"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [data.pickupLocation.address && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: data.pickupLocation.address }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								data.pickupLocation.city,
								", ",
								data.pickupLocation.country
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodConnectMap, {
							donorLat: data.pickupLocation.latitude,
							donorLng: data.pickupLocation.longitude
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-3xl p-5 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-primary" }), " People"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-sm font-bold text-emerald-600",
										children: data.donor.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: data.donor.profilePicture,
											alt: "",
											className: "h-full w-full rounded-full object-cover"
										}) : data.donor.name.charAt(0).toUpperCase()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: data.donor.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Donor"
										}),
										isDonor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-primary font-semibold",
											children: "You"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `mailto:${data.donor.email}`,
											className: "mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }),
												" ",
												data.donor.email
											]
										})
									] })]
								}),
								data.claimant && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-sm font-bold text-blue-600",
										children: data.claimant.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: data.claimant.profilePicture,
											alt: "",
											className: "h-full w-full rounded-full object-cover"
										}) : data.claimant.name.charAt(0).toUpperCase()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: data.claimant.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Recipient"
										}),
										isClaimant && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-primary font-semibold",
											children: "You"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `mailto:${data.claimant.email}`,
											className: "mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }),
												" ",
												data.claimant.email
											]
										})
									] })]
								}),
								!data.claimant && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center py-4 text-sm text-muted-foreground",
									children: "No recipient yet"
								})
							]
						}),
						data.claimedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/40 pt-3 text-xs text-muted-foreground space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
									" Claimed ",
									new Date(data.claimedAt).toLocaleDateString()
								]
							}), data.completedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-3 w-3" }),
									" Completed ",
									new Date(data.completedAt).toLocaleDateString()
								]
							})]
						})
					]
				})
			]
		})]
	});
}
function FoodConnectPage() {
	const { id } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodConnectView, { ...useFoodConnectController(id) });
}
//#endregion
export { FoodConnectPage as component };
