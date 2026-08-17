import { o as __toESM } from "../_runtime.mjs";
import { n as getStoredToken, t as clearToken } from "./auth-storage-CqihHLXV.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as setLocale, r as useLocale, t as getLocale } from "./i18n-BTHhq3S9.mjs";
import { Ct as Bell, K as KeyRound, _ as ShieldCheck, a as User, h as Sparkles, nt as Eye, ot as Earth, s as TriangleAlert, st as Download, t as X } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel, t as PageHeader } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.settings-Bh6ddcZ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useSettingsController() {
	const [settings, setSettings] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [passwordModal, setPasswordModal] = (0, import_react.useState)(false);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showCurrent, setShowCurrent] = (0, import_react.useState)(false);
	const [showNew, setShowNew] = (0, import_react.useState)(false);
	const [showConfirm, setShowConfirm] = (0, import_react.useState)(false);
	const [passwordErrors, setPasswordErrors] = (0, import_react.useState)([]);
	const [deleteModal, setDeleteModal] = (0, import_react.useState)(false);
	const [deletePassword, setDeletePassword] = (0, import_react.useState)("");
	const [deleteError, setDeleteError] = (0, import_react.useState)("");
	const fetchSettings = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const [settingsData, profileData] = await Promise.all([api.get("/api/settings"), api.get("/api/settings/profile")]);
			setSettings(settingsData);
			setProfile(profileData);
			if (settingsData.language && settingsData.language !== getLocale()) setLocale(settingsData.language);
			if (settingsData.theme) {
				const root = document.documentElement;
				root.classList.toggle("dark", settingsData.theme === "dark");
				root.style.colorScheme = settingsData.theme;
				try {
					localStorage.setItem("foodnest-theme", settingsData.theme);
				} catch {}
			}
			if (settingsData.fontSize) {
				const root = document.documentElement;
				root.classList.remove("text-sm", "text-base", "text-lg");
				if (settingsData.fontSize === "small") root.classList.add("text-sm");
				else if (settingsData.fontSize === "large") root.classList.add("text-lg");
				else root.classList.add("text-base");
			}
			if (settingsData.animations === false) document.documentElement.classList.add("reduce-motion");
			else document.documentElement.classList.remove("reduce-motion");
		} catch {
			toast.error("Failed to load settings");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchSettings();
	}, [fetchSettings]);
	const updateSetting = (0, import_react.useCallback)(async (key, value) => {
		try {
			setSaving(true);
			const data = await api.put("/api/settings", { [key]: value });
			setSettings(data);
			if (key === "language") setLocale(value);
			if (key === "theme") {
				const root = document.documentElement;
				root.classList.toggle("dark", value === "dark");
				root.style.colorScheme = value;
				try {
					localStorage.setItem("foodnest-theme", value);
				} catch {}
			}
			if (key === "fontSize") {
				const root = document.documentElement;
				root.classList.remove("text-sm", "text-base", "text-lg");
				if (value === "small") root.classList.add("text-sm");
				else if (value === "large") root.classList.add("text-lg");
				else root.classList.add("text-base");
			}
			if (key === "animations") if (value === false) document.documentElement.classList.add("reduce-motion");
			else document.documentElement.classList.remove("reduce-motion");
			toast.success("Settings saved successfully.");
		} catch (err) {
			toast.error(err.message || "Failed to save setting");
		} finally {
			setSaving(false);
		}
	}, []);
	const validatePassword = (0, import_react.useCallback)((pw) => {
		const errors = [];
		if (pw.length < 8) errors.push("Minimum 8 characters");
		if (!/[A-Z]/.test(pw)) errors.push("Uppercase letter required");
		if (!/[a-z]/.test(pw)) errors.push("Lowercase letter required");
		if (!/[0-9]/.test(pw)) errors.push("Number required");
		if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw)) errors.push("Special character required");
		return errors;
	}, []);
	return {
		settings,
		profile,
		loading,
		saving,
		passwordModal,
		setPasswordModal,
		currentPassword,
		setCurrentPassword,
		newPassword,
		setNewPassword,
		confirmPassword,
		setConfirmPassword,
		showCurrent,
		setShowCurrent,
		showNew,
		setShowNew,
		showConfirm,
		setShowConfirm,
		passwordErrors,
		deleteModal,
		setDeleteModal,
		deletePassword,
		setDeletePassword,
		deleteError,
		fetchSettings,
		updateSetting,
		handleChangePassword: (0, import_react.useCallback)(async () => {
			const errors = [];
			if (!currentPassword) errors.push("Current password is required");
			const pwErrors = validatePassword(newPassword);
			errors.push(...pwErrors);
			if (newPassword !== confirmPassword) errors.push("Passwords do not match");
			setPasswordErrors(errors);
			if (errors.length > 0) return;
			try {
				await api.post("/api/settings/change-password", {
					currentPassword,
					newPassword
				});
				toast.success("Password changed successfully");
				setPasswordModal(false);
				setCurrentPassword("");
				setNewPassword("");
				setConfirmPassword("");
				setPasswordErrors([]);
			} catch (err) {
				toast.error(err.message || "Failed to change password");
			}
		}, [
			currentPassword,
			newPassword,
			confirmPassword,
			validatePassword
		]),
		handleDeleteAccount: (0, import_react.useCallback)(async () => {
			setDeleteError("");
			if (!deletePassword) {
				setDeleteError("Password is required");
				return;
			}
			try {
				await api.post("/api/settings/delete-account", { password: deletePassword });
				toast.success("Account deleted successfully");
				clearToken();
				window.location.href = "/login";
			} catch (err) {
				setDeleteError(err.message || "Failed to delete account");
			}
		}, [deletePassword]),
		handleExport: (0, import_react.useCallback)(async (type) => {
			try {
				const blob = await (await fetch(`/api/settings/export?type=${type}`, { headers: { Authorization: `Bearer ${getStoredToken()}` } })).blob();
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = `${type}.${type === "all" ? "json" : "csv"}`;
				a.click();
				URL.revokeObjectURL(url);
				toast.success(`${type} exported`);
			} catch {
				toast.error("Failed to export data");
			}
		}, [])
	};
}
var FONT_OPTIONS = [
	"small",
	"medium",
	"large"
];
var LANGUAGE_OPTIONS = [
	{
		code: "en",
		label: "lang.en"
	},
	{
		code: "ne",
		label: "lang.ne"
	},
	{
		code: "ms",
		label: "lang.ms"
	}
];
function Toggle({ on, set, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => !disabled && set(!on),
		disabled,
		className: `h-7 w-12 rounded-full p-0.5 transition ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${on ? "bg-gradient-primary" : "bg-muted"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-6 w-6 rounded-full bg-white shadow transition ${on ? "translate-x-5" : ""}` })
	});
}
function SelectRow({ label, desc, value, options, onChange }) {
	const { t } = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex items-center gap-3 rounded-2xl bg-background/60 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: desc
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "rounded-2xl border border-border bg-card px-3 py-1.5 text-sm font-semibold outline-none hover:bg-secondary",
			children: options.map((opt) => {
				const code = typeof opt === "string" ? opt : opt.code;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: code,
					children: typeof opt === "string" ? opt.charAt(0).toUpperCase() + opt.slice(1) : t(opt.label)
				}, code);
			})
		})]
	});
}
function SettingRow({ icon, title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex items-center gap-3 rounded-2xl bg-background/60 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: desc
				})]
			}),
			children
		]
	});
}
function SettingsView({ settings, profile, loading, saving, passwordModal, setPasswordModal, currentPassword, setCurrentPassword, newPassword, setNewPassword, confirmPassword, setConfirmPassword, showCurrent, setShowCurrent, showNew, setShowNew, showConfirm, setShowConfirm, passwordErrors, deleteModal, setDeleteModal, deletePassword, setDeletePassword, deleteError, updateSetting, handleChangePassword, handleDeleteAccount, handleExport }) {
	const { t, locale } = useLocale();
	if (loading || !settings) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("settings.title"),
		subtitle: t("settings.subtitle")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			1,
			2,
			3,
			4
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-40 rounded bg-secondary/50 animate-pulse mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: [
				1,
				2,
				3
			].map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-14 rounded-2xl bg-secondary/30 animate-pulse" }, j))
		})] }, i))
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("settings.title"),
			subtitle: t("settings.subtitle")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4" }),
							" ",
							t("settings.language")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
						label: t("settings.language"),
						desc: t("settings.languageDesc"),
						value: settings.language,
						options: LANGUAGE_OPTIONS,
						onChange: (v) => updateSetting("language", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
						label: t("settings.theme"),
						desc: t("settings.themeDesc"),
						value: settings.theme,
						options: [{
							code: "light",
							label: t("settings.light")
						}, {
							code: "dark",
							label: t("settings.dark")
						}],
						onChange: (v) => updateSetting("theme", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRow, {
						label: t("settings.fontSize"),
						desc: t("settings.fontSizeDesc"),
						value: settings.fontSize,
						options: FONT_OPTIONS,
						onChange: (v) => updateSetting("fontSize", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: settings.animations ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }),
						title: t("settings.animations"),
						desc: t("settings.animationsDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.animations,
							set: (v) => updateSetting("animations", v)
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }),
							" ",
							t("settings.security")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }),
						title: t("settings.twofa"),
						desc: t("settings.twofaDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground",
							children: t("settings.twofaComing")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4" }),
						title: t("settings.changePassword"),
						desc: t("settings.changePasswordDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPasswordModal(true),
							className: "rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold hover:bg-secondary",
							children: t("settings.update")
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
							" ",
							t("settings.notifications")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-1",
						children: t("settings.notificationsDesc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyInventory"),
						desc: t("settings.notifyInventoryDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyInventory,
							set: (v) => updateSetting("notifyInventory", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyDonations"),
						desc: t("settings.notifyDonationsDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyDonations,
							set: (v) => updateSetting("notifyDonations", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyCommunity"),
						desc: t("settings.notifyCommunityDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyCommunity,
							set: (v) => updateSetting("notifyCommunity", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyMeals"),
						desc: t("settings.notifyMealsDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyMeals,
							set: (v) => updateSetting("notifyMeals", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyWeekly"),
						desc: t("settings.notifyWeeklyDesc"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyWeekly,
							set: (v) => updateSetting("notifyWeekly", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyEmail"),
						desc: "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyEmail,
							set: (v) => updateSetting("notifyEmail", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						title: t("settings.notifyPush"),
						desc: "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.notifyPush,
							set: (v) => updateSetting("notifyPush", v)
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
							" ",
							t("settings.account")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-1",
						children: t("settings.accountDesc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-2xl bg-background/60 p-4 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: t("settings.name")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: profile?.name || "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: t("settings.email")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: profile?.email || "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: t("settings.joined")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: t("settings.verified")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-success",
									children: ["✓ ", t("common.success")]
								})]
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }),
							" ",
							t("settings.privacy")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-1",
						children: t("settings.privacyDesc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }),
						title: t("settings.publicProfile"),
						desc: "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.privacyPublicProfile,
							set: (v) => updateSetting("privacyPublicProfile", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }),
						title: t("settings.showDonations"),
						desc: "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.privacyShowDonations,
							set: (v) => updateSetting("privacyShowDonations", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }),
						title: t("settings.allowMessages"),
						desc: "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.privacyAllowMessages,
							set: (v) => updateSetting("privacyAllowMessages", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }),
						title: t("settings.showOnline"),
						desc: "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: settings.privacyShowOnline,
							set: (v) => updateSetting("privacyShowOnline", v)
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
							" ",
							t("settings.data")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-1",
						children: t("settings.dataDesc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleExport("all"),
								className: "rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
								children: t("settings.downloadAll")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleExport("inventory"),
								className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary",
								children: t("settings.exportInventory")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleExport("donations"),
								className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary",
								children: t("settings.exportDonations")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleExport("mealplans"),
								className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary",
								children: t("settings.exportMealPlans")
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "border border-destructive/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-bold flex items-center gap-2 text-destructive",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
								" ",
								t("settings.danger")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-1",
							children: t("settings.dangerDesc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setDeleteModal(true),
							className: "mt-3 rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/20 border border-destructive/30",
							children: t("settings.deleteAccount")
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: passwordModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm grid place-items-center",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setPasswordModal(false),
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
				className: "w-[92vw] max-w-md glass-card rounded-3xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: t("settings.changePassword")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setPasswordModal(false),
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
								children: t("settings.currentPassword")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: currentPassword,
									onChange: (e) => setCurrentPassword(e.target.value),
									type: showCurrent ? "text" : "password",
									className: "flex-1 bg-transparent text-sm outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setShowCurrent(!showCurrent),
									className: "text-xs text-muted-foreground hover:text-foreground",
									children: showCurrent ? t("settings.hide") : t("settings.show")
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block text-sm font-medium",
								children: t("settings.newPassword")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									type: showNew ? "text" : "password",
									className: "flex-1 bg-transparent text-sm outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setShowNew(!showNew),
									className: "text-xs text-muted-foreground hover:text-foreground",
									children: showNew ? t("settings.hide") : t("settings.show")
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block text-sm font-medium",
								children: t("settings.confirmPassword")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									type: showConfirm ? "text" : "password",
									className: "flex-1 bg-transparent text-sm outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setShowConfirm(!showConfirm),
									className: "text-xs text-muted-foreground hover:text-foreground",
									children: showConfirm ? t("settings.hide") : t("settings.show")
								})]
							})]
						}),
						passwordErrors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-destructive/10 p-3",
							children: passwordErrors.map((err, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-destructive",
								children: ["• ", err]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleChangePassword,
							className: "w-full rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
							children: t("settings.update")
						})
					]
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: deleteModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm grid place-items-center",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setDeleteModal(false),
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
				className: "w-[92vw] max-w-md glass-card rounded-3xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-bold text-destructive flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
								" ",
								t("settings.deleteAccount")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setDeleteModal(false),
							className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm mb-4",
						children: t("settings.deleteConfirm")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-sm font-medium",
							children: t("settings.deletePassword")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: deletePassword,
							onChange: (e) => setDeletePassword(e.target.value),
							type: "password",
							className: "w-full rounded-2xl border border-border bg-background/70 px-3 py-2.5 text-sm outline-none"
						})]
					}),
					deleteError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive mb-2",
						children: deleteError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleDeleteAccount,
						className: "w-full rounded-2xl bg-destructive px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-lift",
						children: t("settings.deleteAccount")
					})
				]
			})
		}) })
	] });
}
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, { ...useSettingsController() });
}
//#endregion
export { SettingsPage as component };
