import { o as __toESM } from "../_runtime.mjs";
import { n as getStoredToken } from "./auth-storage-CqihHLXV.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate, y as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { Et as ArrowRight, I as Mail, R as Lock, U as Leaf, Y as Heart, _ as ShieldCheck, a as User, l as TrendingDown } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useAuthController } from "./auth.controller-Bucdce6a.mjs";
import { t as Route } from "./login-BxK-Ovzb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Dn82iN9N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		icon: Leaf,
		value: "12 kg",
		label: "Food Saved"
	},
	{
		icon: Heart,
		value: "42",
		label: "Meals Shared"
	},
	{
		icon: TrendingDown,
		value: "86%",
		label: "Waste Reduced"
	}
];
function preloadImage(src) {
	const img = new Image();
	img.src = src;
}
function HeroCarousel({ slides, interval = 6e3 }) {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const timerRef = (0, import_react.useRef)();
	const goTo = (0, import_react.useCallback)((index) => {
		setCurrent(index);
		preloadImage(slides[(index + 1) % slides.length].image);
	}, [slides]);
	const next = (0, import_react.useCallback)(() => {
		setCurrent((prev) => (prev + 1) % slides.length);
	}, [slides.length]);
	(0, import_react.useEffect)(() => {
		preloadImage(slides[1].image);
	}, [slides]);
	(0, import_react.useEffect)(() => {
		timerRef.current = setInterval(next, interval);
		return () => clearInterval(timerRef.current);
	}, [next, interval]);
	const slide = slides[current];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col overflow-hidden rounded-[2rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: {
					duration: .5,
					ease: "easeInOut"
				},
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.image,
					alt: slide.title,
					loading: current === 0 ? "eager" : "lazy",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/10" })]
			}, current)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex h-full flex-col justify-between p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-start justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" }), "Live impact"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -12
						},
						transition: {
							duration: .4,
							ease: "easeOut"
						},
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold leading-tight text-white md:text-4xl",
							children: slide.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm text-white/80 md:text-base",
							children: slide.description
						})]
					}, current)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-2",
						children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => goTo(i),
							className: `h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"}`,
							"aria-label": `Go to slide ${i + 1}`
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: STATS.map((stat) => {
							const Icon = stat.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-card rounded-2xl p-3 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm font-bold text-white",
										children: stat.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/60",
										children: stat.label
									})
								]
							}, stat.label);
						})
					})]
				})
			]
		})]
	});
}
function GoogleSignIn({ onSuccess, text = "Continue with Google" }) {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [scriptLoaded, setScriptLoaded] = (0, import_react.useState)(false);
	(0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window.google !== "undefined") {
			setScriptLoaded(true);
			return;
		}
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		script.onload = () => setScriptLoaded(true);
		document.body.appendChild(script);
		return () => {
			if (script.parentNode) script.parentNode.removeChild(script);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (0, import_react.useCallback)(() => {
			toast.error("Google Sign-In is not configured. Please set VITE_GOOGLE_CLIENT_ID in .env");
		}, [scriptLoaded, (0, import_react.useCallback)(async (response) => {
			if (response.error) {
				if (response.error === "user_cancelled" || response.error === "access_denied" || response.error === "popup_closed") toast.error("Google sign-in was cancelled.");
				else toast.error("Unable to sign in with Google. Please try again.");
				setLoading(false);
				return;
			}
			const idToken = response.id_token;
			if (!idToken) {
				toast.error("Unable to sign in with Google. Please try again.");
				setLoading(false);
				return;
			}
			try {
				const res = await api.post("/api/auth/google", { credential: idToken });
				if (res.token) {
					localStorage.setItem("token", res.token);
					toast.success(res.message || "Welcome to FoodNest!");
					setLoading(false);
					if (onSuccess) onSuccess(res);
				}
			} catch (err) {
				if ((err.message || "").toLowerCase().includes("not configured")) toast.error("Google Sign-In is not configured on the server.");
				else toast.error("Unable to sign in with Google. Please try again.");
				setLoading(false);
			}
		}, [onSuccess])]),
		disabled: loading,
		className: "inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-soft transition hover:shadow-lift hover:bg-gray-50 disabled:opacity-50",
		children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 48 48",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#EA4335",
					d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#4285F4",
					d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FBBC04",
					d: "M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.87 7.35 2.56 10.56l7.97-5.97z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#34A853",
					d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.97C6.51 42.62 14.62 48 24 48z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "none",
					d: "M0 0h48v48H0z"
				})
			]
		}), loading ? "Authenticating..." : text]
	});
}
var HERO_SLIDES = [
	{
		image: "/images/login/fresh-ingredients.jpg",
		title: "Reduce Food Waste",
		description: "Track your food inventory and prevent unnecessary waste with FoodNest."
	},
	{
		image: "/images/login/sharing-meal.jpg",
		title: "Share With Your Community",
		description: "Donate surplus food and help people nearby while reducing waste."
	},
	{
		image: "/images/login/cooking-together.jpg",
		title: "Plan Smarter Meals",
		description: "Organize breakfast, lunch, and dinner while making the most of your inventory."
	},
	{
		image: "/images/hero-kitchen.jpg",
		title: "Monitor Your Progress",
		description: "Track food saved, donations, sustainability impact, and personal achievements."
	},
	{
		image: "/images/login/community-cooking.jpg",
		title: "Build Sustainable Habits",
		description: "Small daily actions create a healthier planet and a stronger community."
	}
];
function LoginPage() {
	const navigate = useNavigate();
	const { mode } = useSearch({ from: Route.id });
	const { loading, fieldErrors, pendingUserId, pendingCode, handleLogin, handleRegister, handleVerify2FA, reset2FA } = useAuthController();
	const isRegister = mode === "register";
	const switchMode = (newMode) => {
		reset2FA();
		navigate({
			to: "/login",
			search: { mode: newMode },
			replace: true
		});
	};
	const handleSubmit = (e) => {
		if (isRegister) handleRegister(e);
		else {
			const rememberMe = e.currentTarget.querySelector("[name=\"rememberMe\"]")?.checked ?? false;
			handleLogin(e, rememberMe);
		}
	};
	const onGoogleSuccess = () => {
		navigate({ to: "/app/dashboard" });
	};
	if (typeof window !== "undefined" ? getStoredToken() : null) {
		navigate({
			to: "/app/dashboard",
			replace: true
		});
		return null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid min-h-dvh lg:grid-cols-2 bg-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "absolute left-6 top-6 z-10 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo.png",
					alt: "FoodNest",
					className: "h-9 w-9 shrink-0 rounded-2xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold tracking-tight",
					children: "FoodNest"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center p-6 lg:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: pendingUserId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -16
						},
						className: "glass-card w-full max-w-md rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-extrabold tracking-tight",
								children: "Verify your account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Enter the 6-digit verification code to complete registration."
							}),
							pendingCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-testid": "2fa-code",
								className: "mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Your verification code (testing):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-bold tracking-widest text-primary",
									children: pendingCode
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-6 space-y-4",
								onSubmit: handleVerify2FA,
								noValidate: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block text-sm font-medium",
											children: "Verification Code"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `flex items-center gap-2 rounded-2xl border bg-background/70 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 ${fieldErrors.code ? "border-red-400" : "border-border"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: `h-4 w-4 ${fieldErrors.code ? "text-red-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												name: "code",
												placeholder: "000000",
												className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
											})]
										}),
										fieldErrors.code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-red-500",
											children: fieldErrors.code
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: loading,
									className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-lift disabled:opacity-50",
									children: [
										loading ? "Verifying..." : "Verify & Complete",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: reset2FA,
									className: "font-semibold text-primary hover:underline",
									children: "Start over"
								}) })
							})
						]
					}, "2fa") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -16
						},
						transition: {
							duration: .35,
							ease: "easeInOut"
						},
						className: "glass-card w-full max-w-md rounded-3xl p-8",
						children: isRegister ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-extrabold tracking-tight",
								children: "Create your nest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Free forever for households. Start reducing food waste today."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-6 space-y-4",
								onSubmit: handleSubmit,
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "name",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
										label: "Full name",
										placeholder: "Alex Carter",
										error: fieldErrors.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "email",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
										label: "Email",
										type: "email",
										placeholder: "you@kitchen.com",
										error: fieldErrors.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "password",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }),
										label: "Password",
										type: "password",
										placeholder: "Enter a strong password",
										error: fieldErrors.password
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-start gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											defaultChecked: true,
											className: "mt-0.5 accent-[color:var(--primary)]"
										}), "I agree to the Terms and acknowledge the Privacy policy."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: loading,
										className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-lift disabled:opacity-50",
										children: [
											loading ? "Creating..." : "Create account",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative my-4 text-center text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-card px-2",
									children: "OR"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleSignIn, { onSuccess: onGoogleSuccess }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Already with us?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => switchMode("login"),
										className: "font-semibold text-primary hover:underline",
										children: "Sign in"
									})
								] })
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-extrabold tracking-tight",
								children: "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Sign in to keep your kitchen kind to the planet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-6 space-y-4",
								onSubmit: handleSubmit,
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "email",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
										label: "Email",
										type: "email",
										placeholder: "you@kitchen.com",
										error: fieldErrors.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										name: "password",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }),
										label: "Password",
										type: "password",
										placeholder: "••••••••",
										error: fieldErrors.password
									}),
									fieldErrors.email?.includes("create a new account") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => switchMode("register"),
											className: "text-sm font-semibold text-primary hover:underline",
											children: "Create Account"
										})
									}),
									fieldErrors.email?.includes("Google Sign-In") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleSignIn, { onSuccess: onGoogleSuccess }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												name: "rememberMe",
												defaultChecked: true,
												className: "accent-[color:var(--primary)]"
											}), " Remember me"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/forgot-password",
											className: "font-medium text-primary hover:underline",
											children: "Forgot password?"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: loading,
										className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-lift disabled:opacity-50",
										children: [
											loading ? "Signing in..." : "Sign in",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative my-4 text-center text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-card px-2",
									children: "OR"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleSignIn, { onSuccess: onGoogleSuccess }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"New here?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => switchMode("register"),
										className: "font-semibold text-primary hover:underline",
										children: "Create an account"
									})
								] })
							})
						] })
					}, mode)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative hidden overflow-hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, { slides: HERO_SLIDES })
				})
			})
		]
	});
}
function Field({ icon, label, error, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1.5 block text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `flex items-center gap-2 rounded-2xl border bg-background/70 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 ${error ? "border-red-400" : "border-border"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: error ? "text-red-400" : "text-muted-foreground",
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					...props,
					className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-red-500",
				children: error
			})
		]
	});
}
//#endregion
export { Field, LoginPage as component };
