import { o as __toESM } from "../_runtime.mjs";
import { i as storeToken } from "./auth-storage-CqihHLXV.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.controller-Bucdce6a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useAuthController() {
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const [pendingUserId, setPendingUserId] = (0, import_react.useState)(null);
	const [pendingCode, setPendingCode] = (0, import_react.useState)(null);
	const [forgotEmail, setForgotEmail] = (0, import_react.useState)("");
	const [forgotOtp, setForgotOtp] = (0, import_react.useState)(null);
	const clearErrors = () => setFieldErrors({});
	const validateEmail = (email) => {
		if (!email) return "Email is required.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
		return null;
	};
	const validatePassword = (password) => {
		if (!password) return "Password is required.";
		return null;
	};
	const validateName = (name) => {
		if (!name) return "Name is required.";
		return null;
	};
	const handleRegister = async (e) => {
		e.preventDefault();
		clearErrors();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		const errors = {};
		const nameErr = validateName(name);
		const emailErr = validateEmail(email);
		const passwordErr = validatePassword(password);
		if (nameErr) errors.name = nameErr;
		if (emailErr) errors.email = emailErr;
		if (passwordErr) errors.password = passwordErr;
		if (Object.keys(errors).length > 0) {
			setFieldErrors(errors);
			return;
		}
		try {
			setLoading(true);
			const res = await api.post("/api/auth/register", {
				name,
				email,
				password
			});
			if (res.requires2FA && res.userId) {
				setPendingUserId(res.userId);
				setPendingCode(res.code || null);
				setLoading(false);
				return;
			}
		} catch (err) {
			const msg = err.message || "Something went wrong. Please try again later.";
			if (msg.toLowerCase().includes("email already exists")) setFieldErrors({ email: "An account with this email already exists." });
			else toast.error(msg);
			setLoading(false);
			return;
		}
	};
	const handleVerify2FA = async (e) => {
		e.preventDefault();
		clearErrors();
		const code = new FormData(e.currentTarget).get("code");
		if (!code) {
			setFieldErrors({ code: "Verification code is required." });
			return;
		}
		try {
			setLoading(true);
			const res = await api.post("/api/auth/register/verify-2fa", {
				userId: pendingUserId,
				code
			});
			if (res.token) {
				storeToken(res.token, true);
				toast.success("Welcome to FoodNest!");
				setPendingUserId(null);
				setPendingCode(null);
				setLoading(false);
				navigate({ to: "/app/dashboard" });
			}
		} catch (err) {
			setFieldErrors({ code: err.message || "Invalid verification code" });
			setLoading(false);
		}
	};
	const handleLogin = async (e, rememberMe) => {
		e.preventDefault();
		clearErrors();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");
		const errors = {};
		const emailErr = validateEmail(email);
		const passwordErr = validatePassword(password);
		if (emailErr) errors.email = emailErr;
		if (passwordErr) errors.password = passwordErr;
		if (Object.keys(errors).length > 0) {
			setFieldErrors(errors);
			return;
		}
		let token;
		let userName;
		try {
			setLoading(true);
			const res = await api.post("/api/auth/login", {
				email,
				password
			});
			token = res.token;
			userName = res.user?.name;
		} catch (err) {
			const msg = (err.message || "").toLowerCase();
			if (msg.includes("user not found") || msg.includes("account not found")) setFieldErrors({ email: "Account not found. We couldn't find an account with this email. Please create a new account." });
			else if (msg.includes("invalid email or password") || msg.includes("incorrect password")) setFieldErrors({ password: "Incorrect password. Please try again." });
			else if (msg.includes("google sign-in") || msg.includes("google")) setFieldErrors({ email: "This account uses Google Sign-In. Please continue with Google." });
			else toast.error(msg || "Something went wrong. Please try again later.");
			setLoading(false);
			return;
		}
		if (token) {
			storeToken(token, rememberMe ?? false);
			toast.success(`Welcome back, ${userName}!`);
			setLoading(false);
			navigate({ to: "/app/dashboard" });
		}
	};
	const handleForgotPassword = async (email) => {
		clearErrors();
		const emailErr = validateEmail(email);
		if (emailErr) {
			setFieldErrors({ email: emailErr });
			return false;
		}
		try {
			setLoading(true);
			const res = await api.post("/api/auth/forgot-password", { email });
			setForgotEmail(email);
			setForgotOtp(res.otp || null);
			toast.success("Reset code generated!");
			setLoading(false);
			return true;
		} catch (err) {
			if ((err.message || "").toLowerCase().includes("no account found")) toast.warning("No account found with this email address.");
			else toast.error(err.message || "Something went wrong");
			setLoading(false);
			return false;
		}
	};
	const handleResetPassword = async (otp, password) => {
		clearErrors();
		if (!otp) {
			setFieldErrors({ otp: "OTP code is required." });
			return;
		}
		if (!password) {
			setFieldErrors({ password: "New password is required." });
			return;
		}
		try {
			setLoading(true);
			await api.post("/api/auth/reset-password", {
				email: forgotEmail,
				otp,
				password
			});
			toast.success("Password reset successful! You can now login.");
			setForgotEmail("");
			setForgotOtp(null);
			setLoading(false);
			navigate({
				to: "/login",
				search: { mode: "login" }
			});
		} catch (err) {
			toast.error(err.message || "Failed to reset password");
			setLoading(false);
		}
	};
	const reset2FA = () => {
		setPendingUserId(null);
		setPendingCode(null);
		clearErrors();
	};
	const resetForgot = () => {
		setForgotEmail("");
		setForgotOtp(null);
		clearErrors();
	};
	return {
		loading,
		fieldErrors,
		pendingUserId,
		pendingCode,
		forgotEmail,
		forgotOtp,
		clearErrors,
		handleRegister,
		handleVerify2FA,
		handleLogin,
		handleForgotPassword,
		handleResetPassword,
		reset2FA,
		resetForgot
	};
}
//#endregion
export { useAuthController as t };
