import { o as __toESM } from "../_runtime.mjs";
import { t as clearToken } from "./auth-storage-CqihHLXV.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useAuth } from "./use-auth-C-9LPYQj.mjs";
import { Ct as Bell, D as Pen, E as Phone, I as Mail, L as LogOut, O as Package, R as Lock, U as Leaf, X as HeartHandshake, Z as Globe, a as User, et as FingerprintPattern, p as Sun, r as Utensils, s as TriangleAlert, t as X, u as Trash2, ut as Clock, yt as Camera } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel, r as StatCard } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.profile-4GVWV489.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE_ICONS = {
	inventory_added: "📦",
	donation_created: "❤️",
	donation_claimed: "🤝",
	donation_completed: "✅",
	meal_planned: "🍽️",
	meal_completed: "🍳",
	community_post: "💬",
	password_changed: "🔐",
	profile_updated: "✏️",
	avatar_updated: "🖼️",
	badge_unlocked: "🏅",
	joined: "👋"
};
function timeAgo(dateStr) {
	const diff = Date.now() - new Date(dateStr).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "Just now";
	if (mins < 60) return `${mins}m ago`;
	const hours = Math.floor(mins / 60);
	if (hours < 24) return `${hours}h ago`;
	const days = Math.floor(hours / 24);
	if (days < 30) return `${days}d ago`;
	return new Date(dateStr).toLocaleDateString();
}
function formatNumber(n) {
	if (n >= 1e3) return (n / 1e3).toFixed(1) + "k";
	return n.toString();
}
function getInitials(name) {
	if (!name) return "U";
	return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
function EditModal({ ctrl }) {
	if (!ctrl.editing || !ctrl.profile) return null;
	const { editForm, setEditForm } = ctrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/30 backdrop-blur-sm p-4",
		onClick: ctrl.handleCancelEdit,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			transition: { duration: .18 },
			onClick: (e) => e.stopPropagation(),
			className: "glass-card w-full max-w-lg overflow-hidden rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Edit Profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.handleCancelEdit,
						className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Full Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: editForm.name || "",
							onChange: (e) => setEditForm((f) => ({
								...f,
								name: e.target.value
							})),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Username"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: editForm.username || "",
							onChange: (e) => setEditForm((f) => ({
								...f,
								username: e.target.value
							})),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground",
								children: "Country"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: editForm.country || "",
								onChange: (e) => setEditForm((f) => ({
									...f,
									country: e.target.value
								})),
								className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground",
								children: "City"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: editForm.city || "",
								onChange: (e) => setEditForm((f) => ({
									...f,
									city: e.target.value
								})),
								className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Phone (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: editForm.phone || "",
							onChange: (e) => setEditForm((f) => ({
								...f,
								phone: e.target.value
							})),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Bio (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: editForm.bio || "",
							onChange: (e) => setEditForm((f) => ({
								...f,
								bio: e.target.value
							})),
							rows: 3,
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 resize-none"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3 border-t border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.handleCancelEdit,
						className: "rounded-xl px-4 py-2 text-sm font-medium hover:bg-secondary",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.handleSaveProfile,
						disabled: ctrl.saving,
						className: "flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
						children: ctrl.saving ? "Saving..." : "Save Changes"
					})]
				})
			]
		})
	});
}
function EmailModal({ ctrl }) {
	if (!ctrl.emailModal) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/30 backdrop-blur-sm p-4",
		onClick: () => ctrl.setEmailModal(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			transition: { duration: .18 },
			onClick: (e) => e.stopPropagation(),
			className: "glass-card w-full max-w-md overflow-hidden rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Change Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setEmailModal(false),
						className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-6",
					children: [
						ctrl.profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: ["Current email: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: ctrl.profile.user.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "New Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: ctrl.newEmail,
							onChange: (e) => ctrl.setNewEmail(e.target.value),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40",
							placeholder: "new@email.com"
						})] }),
						ctrl.isGoogleUser ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Confirm Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: ctrl.emailPassword,
							onChange: (e) => ctrl.setEmailPassword(e.target.value),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40",
							placeholder: "Enter your password"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3 border-t border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setEmailModal(false),
						className: "rounded-xl px-4 py-2 text-sm font-medium hover:bg-secondary",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.handleChangeEmail,
						disabled: ctrl.saving,
						className: "flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
						children: ctrl.saving ? "Updating..." : "Update Email"
					})]
				})
			]
		})
	});
}
function PasswordModal({ ctrl }) {
	if (!ctrl.passwordModal) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/30 backdrop-blur-sm p-4",
		onClick: () => ctrl.setPasswordModal(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			transition: { duration: .18 },
			onClick: (e) => e.stopPropagation(),
			className: "glass-card w-full max-w-md overflow-hidden rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Change Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setPasswordModal(false),
						className: "grid h-8 w-8 place-items-center rounded-xl hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Current Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: ctrl.currentPassword,
							onChange: (e) => ctrl.setCurrentPassword(e.target.value),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "New Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: ctrl.newPassword,
							onChange: (e) => ctrl.setNewPassword(e.target.value),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Confirm New Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: ctrl.confirmPassword,
							onChange: (e) => ctrl.setConfirmPassword(e.target.value),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
						})] }),
						ctrl.passwordErrors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-destructive/10 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "list-inside list-disc space-y-1 text-xs text-destructive",
								children: ctrl.passwordErrors.map((err, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: err }, i))
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3 border-t border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setPasswordModal(false),
						className: "rounded-xl px-4 py-2 text-sm font-medium hover:bg-secondary",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.handleChangePassword,
						disabled: ctrl.saving,
						className: "flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
						children: ctrl.saving ? "Changing..." : "Change Password"
					})]
				})
			]
		})
	});
}
function DeleteModal({ ctrl }) {
	if (!ctrl.deleteModal) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/30 backdrop-blur-sm p-4",
		onClick: () => ctrl.setDeleteModal(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: -20,
				opacity: 0,
				scale: .98
			},
			transition: { duration: .18 },
			onClick: (e) => e.stopPropagation(),
			className: "glass-card w-full max-w-md overflow-hidden rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-2xl bg-destructive/15 text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Delete Account"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "This action cannot be undone."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-destructive/10 p-3 text-xs text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "What will be deleted:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-1 list-inside list-disc space-y-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your profile and personal information" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "All inventory items and meal plans" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "All donations and community posts" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Comments, bookmarks, likes, and notifications" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "All achievements and activity history" })
								]
							})]
						}),
						ctrl.isGoogleUser ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							children: "Enter your password to confirm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: ctrl.deletePassword,
							onChange: (e) => ctrl.setDeletePassword(e.target.value),
							className: "mt-1 w-full rounded-xl border border-border bg-background/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-destructive/40",
							placeholder: "Your password"
						})] }),
						ctrl.deleteError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-destructive",
							children: ctrl.deleteError
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3 border-t border-border/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setDeleteModal(false),
						className: "rounded-xl px-4 py-2 text-sm font-medium hover:bg-secondary",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.handleDeleteAccount,
						disabled: ctrl.saving,
						className: "flex items-center gap-2 rounded-xl bg-destructive px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
						children: ctrl.saving ? "Deleting..." : "Delete My Account"
					})]
				})
			]
		})
	});
}
function ProfileView({ ctrl }) {
	const { profile, loading, isGoogleUser } = ctrl;
	if (loading && !profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" })
	});
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-32 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mb-3 h-12 w-12 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Failed to load profile. Pull to refresh." })]
	});
	const { user, stats, timeline, badges } = profile;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight md:text-4xl",
				children: "Your profile"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Personal details and lifetime impact."
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "lg:col-span-1 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto h-24 w-24 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "cursor-pointer",
							children: [
								user.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: user.profilePicture,
									alt: user.name,
									className: "h-24 w-24 rounded-full object-cover shadow-lift"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-24 w-24 place-items-center rounded-full bg-gradient-primary text-3xl font-bold text-white shadow-lift",
									children: getInitials(user.name)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "mx-auto h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-[11px] font-semibold",
											children: "Change photo"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (e) => {
										const file = e.target.files?.[0];
										if (file) ctrl.handleUploadAvatar(file);
									}
								})
							]
						}), user.profilePicture && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: ctrl.handleRemoveAvatar,
							className: "absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-destructive text-white shadow-soft hover:bg-destructive/80 transition",
							title: "Remove photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: user.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: ctrl.openEdit,
							className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" })
						})]
					}),
					user.username && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: ["@", user.username]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							user.email,
							" · joined ",
							new Date(user.createdAt).getFullYear()
						]
					}),
					user.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm italic text-muted-foreground",
						children: [
							"\"",
							user.bio,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success",
							children: "Verified"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full px-2.5 py-1 text-xs font-semibold ${isGoogleUser ? "bg-blue-100 text-blue-700" : "bg-primary/15 text-primary"}`,
							children: isGoogleUser ? "Google Account" : "Local Account"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 text-left text-sm",
						children: [
							user.country && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [user.country, user.city ? `, ${user.city}` : ""] })]
							}),
							user.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: user.phone })]
							}),
							user.lastLogin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Last login: ", new Date(user.lastLogin).toLocaleDateString()] })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 0,
						label: "Lifetime saved",
						value: `${formatNumber(stats.lifetimeSaved)} kg`,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 1,
						label: "Donations",
						value: formatNumber(stats.donations),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-5 w-5" }),
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 2,
						label: "Meals planned",
						value: formatNumber(stats.mealsPlanned),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "h-5 w-5" }),
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 3,
						label: "Items tracked",
						value: formatNumber(stats.itemsTracked),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: "Current Inventory"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-bold",
					children: stats.currentInventory
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: "Active Donations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-bold",
					children: stats.activeDonations
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: "Food Claimed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-bold",
					children: stats.foodClaimed
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: "Waste Prevented"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-2xl font-bold",
					children: [formatNumber(stats.wastePrevented), " kg"]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: "Community Posts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-bold",
					children: stats.communityPosts
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: "Recipes Created"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-bold",
					children: stats.recipesCreated
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 text-lg font-bold",
				children: "Activity Timeline"
			}), timeline.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No activity yet. Start using FoodNest to see your timeline!"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: timeline.slice(0, 15).map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -8
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: i * .02 },
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 text-lg",
						children: TIMELINE_ICONS[entry.type] || "📌"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: entry.description
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: timeAgo(entry.createdAt)
						})]
					})]
				}, `${entry.createdAt}-${i}`))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 text-lg font-bold",
				children: "Achievement Badges"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl p-3 text-center transition ${badge.unlocked ? "bg-gradient-to-br from-success/10 to-success/5 ring-1 ring-success/20" : "bg-background/40 opacity-50"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							children: badge.emoji
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs font-semibold",
							children: badge.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground",
							children: badge.unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Earned ", new Date(badge.unlockedAt).toLocaleDateString()] }) : badge.desc
						})
					]
				}, badge.key))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-lg font-bold",
					children: "Change Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-sm text-muted-foreground",
					children: ["Current: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: user.email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => ctrl.setEmailModal(true),
					className: "flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Change Email"]
				})
			] }), !isGoogleUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-lg font-bold",
					children: "Change Password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted-foreground",
					children: "Update your password regularly to keep your account secure."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => ctrl.setPasswordModal(true),
					className: "flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), "Change Password"]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 text-lg font-bold",
				children: "Password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "You're using Google Sign-In. Password management is handled by Google."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 text-lg font-bold",
				children: "Account Information"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Account Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: isGoogleUser ? "Google" : "Local"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Member Since"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: new Date(user.createdAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Last Login"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric"
							}) : "N/A"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "mr-1 inline h-3 w-3" }), "Language"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold uppercase",
							children: profile.settings.language
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "mr-1 inline h-3 w-3" }), "Theme"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold capitalize",
							children: profile.settings.theme
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mr-1 inline h-3 w-3" }), "Notifications"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Active"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-background/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, { className: "mr-1 inline h-3 w-3" }), "Two Factor"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Disabled"
						})]
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 text-lg font-bold",
				children: "Danger Zone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Logout"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Sign out of your account on this device."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								clearToken();
								window.location.href = "/login";
							},
							className: "mt-3 flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Logout"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-destructive",
							children: "Delete Account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Permanently delete your account and all associated data."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => ctrl.setDeleteModal(true),
							className: "mt-3 flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), "Delete Account"]
						})
					]
				})]
			})] })]
		})
	] });
}
function notifyTokenChange() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("auth-changed"));
}
function useProfileController() {
	const { user: authUser } = useAuth();
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [editForm, setEditForm] = (0, import_react.useState)({});
	const [emailModal, setEmailModal] = (0, import_react.useState)(false);
	const [newEmail, setNewEmail] = (0, import_react.useState)("");
	const [emailPassword, setEmailPassword] = (0, import_react.useState)("");
	const [passwordModal, setPasswordModal] = (0, import_react.useState)(false);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [passwordErrors, setPasswordErrors] = (0, import_react.useState)([]);
	const [deleteModal, setDeleteModal] = (0, import_react.useState)(false);
	const [deletePassword, setDeletePassword] = (0, import_react.useState)("");
	const [deleteError, setDeleteError] = (0, import_react.useState)("");
	const fetchProfile = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const data = await api.get("/api/profile");
			setProfile(data);
		} catch (err) {
			toast.error(err.message || "Failed to load profile");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchProfile();
	}, [fetchProfile]);
	const openEdit = (0, import_react.useCallback)(() => {
		if (!profile) return;
		setEditForm({
			name: profile.user.name,
			username: profile.user.username || "",
			country: profile.user.country,
			city: profile.user.city,
			phone: profile.user.phone,
			bio: profile.user.bio
		});
		setEditing(true);
	}, [profile]);
	const handleSaveProfile = (0, import_react.useCallback)(async () => {
		if (!editForm.name?.trim()) {
			toast.error("Name is required");
			return;
		}
		setSaving(true);
		try {
			const res = await api.put("/api/profile", editForm);
			if (res.token) localStorage.setItem("token", res.token);
			setProfile((prev) => prev ? {
				...prev,
				user: res.user
			} : prev);
			toast.success("Profile updated!");
			setEditing(false);
		} catch (err) {
			toast.error(err.message || "Failed to update profile");
		} finally {
			setSaving(false);
		}
	}, [editForm]);
	const handleCancelEdit = (0, import_react.useCallback)(() => {
		setEditing(false);
		setEditForm({});
	}, []);
	const handleChangeEmail = (0, import_react.useCallback)(async () => {
		if (!newEmail.trim()) {
			toast.error("New email is required");
			return;
		}
		if (!emailPassword) {
			toast.error("Password confirmation required");
			return;
		}
		setSaving(true);
		try {
			const res = await api.put("/api/profile/email", {
				newEmail,
				password: emailPassword
			});
			if (res.token) localStorage.setItem("token", res.token);
			setProfile((prev) => prev ? {
				...prev,
				user: {
					...prev.user,
					email: res.email
				}
			} : prev);
			toast.success("Email updated successfully!");
			setEmailModal(false);
			setNewEmail("");
			setEmailPassword("");
		} catch (err) {
			toast.error(err.message || "Failed to change email");
		} finally {
			setSaving(false);
		}
	}, [newEmail, emailPassword]);
	const validatePassword = (0, import_react.useCallback)((pw) => {
		const errors = [];
		if (pw.length < 8) errors.push("Minimum 8 characters");
		if (!/[A-Z]/.test(pw)) errors.push("Uppercase letter required");
		if (!/[a-z]/.test(pw)) errors.push("Lowercase letter required");
		if (!/[0-9]/.test(pw)) errors.push("Number required");
		if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw)) errors.push("Special character required");
		return errors;
	}, []);
	const handleChangePassword = (0, import_react.useCallback)(async () => {
		const errors = [];
		if (!currentPassword) errors.push("Current password is required");
		const pwErrors = validatePassword(newPassword);
		errors.push(...pwErrors);
		if (newPassword !== confirmPassword) errors.push("Passwords do not match");
		setPasswordErrors(errors);
		if (errors.length > 0) return;
		setSaving(true);
		try {
			await api.put("/api/profile/password", {
				currentPassword,
				newPassword,
				confirmPassword
			});
			toast.success("Password changed successfully");
			setPasswordModal(false);
			setCurrentPassword("");
			setNewPassword("");
			setConfirmPassword("");
			setPasswordErrors([]);
		} catch (err) {
			toast.error(err.message || "Failed to change password");
		} finally {
			setSaving(false);
		}
	}, [
		currentPassword,
		newPassword,
		confirmPassword,
		validatePassword
	]);
	const handleUploadAvatar = (0, import_react.useCallback)(async (file) => {
		const formData = new FormData();
		formData.append("avatar", file);
		setSaving(true);
		try {
			const res = await api.postFormData("/api/profile/avatar", formData);
			if (res.token) {
				localStorage.setItem("token", res.token);
				notifyTokenChange();
			}
			setProfile((prev) => prev ? {
				...prev,
				user: {
					...prev.user,
					profilePicture: res.profilePicture
				}
			} : prev);
			toast.success("Profile picture uploaded!");
		} catch (err) {
			toast.error(err.message || "Failed to upload picture");
		} finally {
			setSaving(false);
		}
	}, []);
	const handleRemoveAvatar = (0, import_react.useCallback)(async () => {
		setSaving(true);
		try {
			const res = await api.delete("/api/profile/avatar");
			if (res.token) {
				localStorage.setItem("token", res.token);
				notifyTokenChange();
			}
			setProfile((prev) => prev ? {
				...prev,
				user: {
					...prev.user,
					profilePicture: null
				}
			} : prev);
			toast.success("Profile picture removed");
		} catch (err) {
			toast.error(err.message || "Failed to remove picture");
		} finally {
			setSaving(false);
		}
	}, []);
	const handleDeleteAccount = (0, import_react.useCallback)(async () => {
		setDeleteError("");
		if (!deletePassword) {
			setDeleteError("Password is required");
			return;
		}
		setSaving(true);
		try {
			await api.delete("/api/profile/account", {
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password: deletePassword })
			});
			toast.success("Account deleted successfully");
			clearToken();
			window.location.href = "/";
		} catch (err) {
			setDeleteError(err.message || "Failed to delete account");
		} finally {
			setSaving(false);
		}
	}, [deletePassword]);
	return {
		profile,
		loading,
		saving,
		editing,
		editForm,
		setEditForm,
		emailModal,
		setEmailModal,
		newEmail,
		setNewEmail,
		emailPassword,
		setEmailPassword,
		passwordModal,
		setPasswordModal,
		currentPassword,
		setCurrentPassword,
		newPassword,
		setNewPassword,
		confirmPassword,
		setConfirmPassword,
		passwordErrors,
		deleteModal,
		setDeleteModal,
		deletePassword,
		setDeletePassword,
		deleteError,
		isGoogleUser: profile?.user?.provider === "google" || authUser?.provider === "google",
		refresh: fetchProfile,
		openEdit,
		handleSaveProfile,
		handleCancelEdit,
		handleChangeEmail,
		handleChangePassword,
		handleUploadAvatar,
		handleRemoveAvatar,
		handleDeleteAccount
	};
}
function Profile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileView, { ctrl: useProfileController() });
}
//#endregion
export { Profile as component };
