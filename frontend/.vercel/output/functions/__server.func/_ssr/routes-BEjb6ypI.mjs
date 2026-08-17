import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Bell, Et as ArrowRight, O as Package, P as Menu, T as Plus, X as HeartHandshake, _ as ShieldCheck, bt as CalendarDays, h as Sparkles, j as Minus, m as Star, ot as Earth, t as X, vt as ChartColumn } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEjb6ypI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	["Features", "#features"],
	["How it works", "#how"],
	["Community", "#community"],
	["FAQ", "#faq"]
];
function GlassNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		className: "fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `glass grid w-full max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full px-2 py-2 transition-all sm:px-3 sm:py-2.5 ${scrolled ? "shadow-soft" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex min-w-0 items-center gap-2 pl-2 sm:pl-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.png",
						alt: "FoodNest",
						className: "h-8 w-8 shrink-0 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm font-bold tracking-tight sm:text-base",
						children: "FoodNest"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center justify-center gap-1 md:flex",
					children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-all duration-300 hover:scale-[1.04] hover:bg-secondary hover:text-foreground",
						children: label
					}) }, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "md:hidden" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "hidden rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:scale-[1.04] hover:text-foreground sm:inline-flex",
							children: "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "hidden rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.04] hover:shadow-lift sm:inline-flex",
							children: "Get started"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							className: "grid h-9 w-9 place-items-center rounded-full bg-background/60 md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			transition: { duration: .2 },
			className: "glass-card absolute left-3 right-3 top-[68px] rounded-3xl p-3 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					onClick: () => setOpen(false),
					className: "block rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary",
					children: label
				}) }, label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-2 gap-2 border-t border-border/60 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					onClick: () => setOpen(false),
					className: "rounded-full border border-border bg-card px-4 py-2 text-center text-sm font-semibold",
					children: "Sign in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					onClick: () => setOpen(false),
					className: "rounded-full bg-gradient-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-soft",
					children: "Get started"
				})]
			})]
		}) })]
	});
}
var IMG = {
	hero: "/images/home-page/home-page1.jpg",
	features: "/images/home-page/home-page2.jpg",
	how: "/images/home-page/home-page3.jpg",
	cta: "/images/home-page/home-page4.jpg"
};
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveStats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function BgSection({ image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: "",
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.95_0.03_145/0.15)] via-transparent to-[oklch(0.9_0.05_130/0.1)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				children
			})
		]
	});
}
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const handler = (e) => setReduced(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	return reduced;
}
function Hero() {
	const reducedMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-dvh items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.hero,
					alt: "",
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[oklch(0.95_0.03_145/0.15)] via-transparent to-[oklch(0.9_0.05_130/0.1)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 py-32 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "New · AI meal suggestions from what's already in your kitchen"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl",
							children: [
								"Reduce food waste. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "Feed more people."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl",
							children: "FoodNest is the intelligent kitchen co-pilot that tracks what you own, plans meals around it, and connects surplus food to neighbours who need it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/register",
								className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:scale-[1.03] hover:shadow-xl",
								children: ["Start saving food free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								className: "rounded-full border border-border/60 bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground/90 backdrop-blur transition-all duration-300 hover:bg-white/90 hover:shadow-soft",
								children: "See how it works"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
				href: "#stats",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.5,
					duration: .8
				},
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/60 hover:text-muted-foreground transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-medium uppercase tracking-widest",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-8 w-5 rounded-full border-2 border-current",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: reducedMotion ? {} : { y: [
							0,
							10,
							0
						] },
						transition: {
							duration: 1.8,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "mx-auto mt-1.5 h-2 w-1 rounded-full bg-current"
					})
				})]
			})
		]
	});
}
function LiveStats({ stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		className: "mx-auto max-w-6xl px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-card grid grid-cols-2 gap-2 rounded-3xl p-2 md:grid-cols-4",
			children: (stats || [
				{
					value: "2.4M",
					label: "Meals saved"
				},
				{
					value: "180T",
					label: "Food rescued"
				},
				{
					value: "48K",
					label: "Active households"
				},
				{
					value: "92%",
					label: "Less weekly waste"
				}
			]).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: .05 * i },
				className: "rounded-2xl p-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-bold tracking-tight gradient-text",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: s.label
				})]
			}, i))
		})
	});
}
function Features() {
	const items = [
		{
			i: Package,
			t: "Smart inventory",
			d: "Add items in seconds. Expiry badges, storage location, categories and bulk actions out of the box."
		},
		{
			i: CalendarDays,
			t: "Weekly meal planner",
			d: "Drag and drop recipes. We reserve ingredients you already own automatically."
		},
		{
			i: HeartHandshake,
			t: "Donation marketplace",
			d: "List surplus food. Neighbours nearby claim it. A pickup window keeps it organised."
		},
		{
			i: ChartColumn,
			t: "Impact analytics",
			d: "Track waste trends, money saved and carbon avoided week over week."
		},
		{
			i: Bell,
			t: "Gentle reminders",
			d: "Real-time notifications before food expires — never harsh, always helpful."
		},
		{
			i: ShieldCheck,
			t: "Privacy & 2FA",
			d: "JWT auth, bcrypt and TOTP-based two-factor. Your kitchen stays yours."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BgSection, {
		image: IMG.features,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "features",
			className: "mx-auto max-w-6xl px-6 py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Features",
				title: "Everything your kitchen needs.",
				subtitle: "One calm, fast, beautifully designed surface for your food."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "glass-card hover-lift rounded-3xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.i, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: f.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted-foreground",
							children: f.d
						})
					]
				}, i))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BgSection, {
		image: IMG.how,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "how",
			className: "mx-auto max-w-6xl px-6 py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "How it works",
				title: "From fridge to fork — without the waste."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Stock your nest",
						d: "Add or scan your groceries. Categories, expiry dates and quantities — all auto-filled where possible."
					},
					{
						n: "02",
						t: "Plan & cook",
						d: "Get meal ideas that match what you already own. Drag them onto your weekly calendar."
					},
					{
						n: "03",
						t: "Donate the surplus",
						d: "List anything you can't use. Neighbours nearby claim it for pickup, with everyone in the loop."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .1
					},
					className: "glass-card relative overflow-hidden rounded-3xl p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold tracking-wider text-primary",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl font-bold",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.d
						})
					]
				}, i))
			})]
		})
	});
}
function Community() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "community",
		className: "mx-auto max-w-6xl px-6 py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			eyebrow: "Donation community",
			title: "Surplus, shared.",
			subtitle: "A real-time, neighbourhood-scale marketplace for food that would otherwise be thrown away."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4",
			children: [
				{
					img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=70",
					t: "Sourdough loaves",
					who: "Mia · 0.4 km",
					tag: "Bakery",
					pill: "Available"
				},
				{
					img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=70",
					t: "Organic spinach",
					who: "Lucas · 1.2 km",
					tag: "Produce",
					pill: "Reserved"
				},
				{
					img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=70",
					t: "Almond milk x3",
					who: "Priya · 0.8 km",
					tag: "Dairy alt.",
					pill: "Available"
				},
				{
					img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=70",
					t: "Apples (1 kg)",
					who: "Noah · 2.0 km",
					tag: "Produce",
					pill: "Available"
				},
				{
					img: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=800&q=70",
					t: "Pasta (sealed)",
					who: "Sofia · 1.6 km",
					tag: "Pantry",
					pill: "Claimed"
				},
				{
					img: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=800&q=70",
					t: "Heirloom carrots",
					who: "Aida · 0.9 km",
					tag: "Produce",
					pill: "Available"
				}
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .45,
					delay: i * .04
				},
				className: "glass-card break-inside-avoid overflow-hidden rounded-3xl p-3 hover-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-40 overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.img,
						alt: c.t,
						loading: "lazy",
						className: "h-full w-full object-cover transition duration-500 hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold backdrop-blur ${c.pill === "Available" ? "bg-success/80 text-white" : c.pill === "Reserved" ? "bg-warning/80 text-white" : "bg-foreground/60 text-white"}`,
						children: c.pill
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "truncate font-bold",
								children: c.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: c.who
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium",
							children: c.tag
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-3 w-full rounded-full bg-gradient-primary px-3 py-2 text-xs font-semibold text-white shadow-soft hover:shadow-lift",
						children: "Claim"
					})]
				})]
			}, i))
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-6 py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			eyebrow: "Loved by kitchens",
			title: "Real people. Less waste."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 md:grid-cols-3",
			children: [
				{
					n: "Amelia R.",
					r: "Household of 4",
					q: "We cut our weekly food waste in half. The meal planner alone paid for itself.",
					a: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=200&h=200&q=70"
				},
				{
					n: "Jared P.",
					r: "Restaurant owner",
					q: "Our surplus reaches families within an hour. FoodNest is the bridge we always needed.",
					a: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=200&h=200&q=70"
				},
				{
					n: "Hana M.",
					r: "Single, busy",
					q: "Beautiful, calming app. Reminds me without nagging. My fridge has never been cleaner.",
					a: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=3&w=200&h=200&q=70"
				}
			].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: .06 * i
				},
				className: "glass-card rounded-3xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 text-warning",
						children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-[15px] leading-relaxed",
						children: [
							"\"",
							x.q,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: x.a,
							alt: x.n,
							loading: "lazy",
							className: "h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: x.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: x.r
							})]
						})]
					})
				]
			}, i))
		})]
	});
}
function FAQ() {
	const items = [
		{
			q: "Is FoodNest free to use?",
			a: "Yes — the core household plan is free. Premium features for shared homes and small businesses are optional."
		},
		{
			q: "Do you support 2FA?",
			a: "Yes. We use TOTP-based two-factor authentication, bcrypt password hashing and JWT sessions."
		},
		{
			q: "How are donations matched?",
			a: "We surface listings within your chosen radius. Claiming reserves it for a pickup window you control."
		},
		{
			q: "Can I export my data?",
			a: "Absolutely. You own your kitchen — export inventory, meal history and impact reports anytime."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "mx-auto max-w-3xl px-6 py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			eyebrow: "FAQ",
			title: "Questions, answered."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-3",
			children: items.map((it, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					className: "glass-card rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: it.q
						}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 text-primary" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: false,
						animate: {
							height: isOpen ? "auto" : 0,
							opacity: isOpen ? 1 : 0
						},
						className: "overflow-hidden px-5 text-sm text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-5",
							children: it.a
						})
					})]
				}, i);
			})
		})]
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BgSection, {
		image: IMG.cta,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-6 py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card relative overflow-hidden rounded-[2rem] p-10 md:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-primary opacity-90" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(255,255,255,0.35),transparent)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-8 w-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl font-extrabold leading-tight md:text-5xl",
								children: "Your kitchen, but kinder to the planet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-white/90",
								children: "Join thousands of households cutting food waste, saving money and feeding neighbours every week."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/register",
									className: "rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-lift hover:translate-y-[-1px] transition",
									children: "Create your free account"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20",
									children: "Sign in"
								})]
							})
						]
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 bg-background/60 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo.png",
					alt: "FoodNest",
					className: "h-8 w-8 shrink-0 rounded-2xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold",
					children: "FoodNest"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Reduce waste. Feed people. Cook better."
			})] }), [
				{
					t: "Product",
					l: [
						"Features",
						"Inventory",
						"Donations",
						"Meal planner"
					]
				},
				{
					t: "Company",
					l: [
						"About",
						"Community",
						"Sustainability",
						"Contact"
					]
				},
				{
					t: "Legal",
					l: [
						"Privacy",
						"Terms",
						"Security",
						"Cookies"
					]
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-sm font-bold",
				children: c.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2 text-sm text-muted-foreground",
				children: c.l.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "hover:text-foreground",
					children: x
				}) }, x))
			})] }, c.t))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 py-6 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" FoodNest. Crafted with care for a less wasteful world."
			]
		})]
	});
}
function SectionTitle({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					opacity: 0,
					y: 6
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "mt-3 text-3xl font-extrabold tracking-tight md:text-5xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: subtitle
			})
		]
	});
}
//#endregion
export { Landing as component };
