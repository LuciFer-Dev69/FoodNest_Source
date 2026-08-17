import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Et as ArrowRight, I as Mail, R as Lock, _t as CheckCheck } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as useAuthController } from "./auth.controller-Bucdce6a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-tfX6VUuB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Forgot() {
	const { loading, fieldErrors, forgotOtp, forgotEmail, handleForgotPassword, handleResetPassword, resetForgot } = useAuthController();
	const [step, setStep] = (0, import_react.useState)("email");
	const [emailInput, setEmailInput] = (0, import_react.useState)("");
	const [otpInput, setOtpInput] = (0, import_react.useState)("");
	const [newPass, setNewPass] = (0, import_react.useState)("");
	const onSendCode = async (e) => {
		e.preventDefault();
		if (!emailInput) return;
		if (await handleForgotPassword(emailInput)) setStep("otp");
	};
	const onReset = (e) => {
		e.preventDefault();
		handleResetPassword(otpInput, newPass);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid min-h-dvh bg-hero",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: step === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -14
					},
					className: "glass-card w-full max-w-md rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-extrabold tracking-tight",
							children: "Reset your password"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Enter your email to receive a reset code."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6 space-y-4",
							onSubmit: onSendCode,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1.5 block text-sm font-medium",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `flex items-center gap-2 rounded-2xl border bg-background/70 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 ${fieldErrors.email ? "border-red-400" : "border-border"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: `h-4 w-4 ${fieldErrors.email ? "text-red-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: emailInput,
											onChange: (e) => setEmailInput(e.target.value),
											type: "email",
											placeholder: "you@kitchen.com",
											className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
										})]
									}),
									fieldErrors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs text-red-500",
										children: fieldErrors.email
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift transition disabled:opacity-50",
								children: [
									loading ? "Sending..." : "Send reset code",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Remembered it? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								search: { mode: "login" },
								className: "font-semibold text-primary hover:underline",
								children: "Back to sign in"
							})] })
						})
					]
				}, "email") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -14
					},
					className: "glass-card w-full max-w-md rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-extrabold tracking-tight",
							children: "Enter reset code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"A 6-digit code was sent to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: forgotEmail }),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-testid": "otp-code",
							className: "mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Your OTP code (testing):"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold tracking-widest text-primary",
								children: forgotOtp || "------"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6 space-y-4",
							onSubmit: onReset,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block text-sm font-medium",
											children: "OTP Code"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `flex items-center gap-2 rounded-2xl border bg-background/70 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 ${fieldErrors.otp ? "border-red-400" : "border-border"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: `h-4 w-4 ${fieldErrors.otp ? "text-red-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: otpInput,
												onChange: (e) => setOtpInput(e.target.value),
												placeholder: "000000",
												className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
											})]
										}),
										fieldErrors.otp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-red-500",
											children: fieldErrors.otp
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block text-sm font-medium",
											children: "New Password"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `flex items-center gap-2 rounded-2xl border bg-background/70 px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/40 ${fieldErrors.password ? "border-red-400" : "border-border"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: `h-4 w-4 ${fieldErrors.password ? "text-red-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: newPass,
												onChange: (e) => setNewPass(e.target.value),
												type: "password",
												placeholder: "New password",
												className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
											})]
										}),
										fieldErrors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-red-500",
											children: fieldErrors.password
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: loading,
									className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift transition disabled:opacity-50",
									children: [
										loading ? "Resetting..." : "Reset password",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: resetForgot,
									className: "font-semibold text-primary hover:underline",
									children: "Start over"
								}),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									search: { mode: "login" },
									className: "font-semibold text-primary hover:underline",
									children: "Back to sign in"
								})
							] })
						})
					]
				}, "otp")
			})
		})]
	});
}
//#endregion
export { Forgot as component };
