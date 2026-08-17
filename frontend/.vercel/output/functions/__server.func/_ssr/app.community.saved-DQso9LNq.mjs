import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Dt as ArrowLeft, N as MessageCircle, Y as Heart, xt as Bookmark } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.community.saved-DQso9LNq.js
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
function SavedPostsView() {
	const navigate = useNavigate();
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		(async () => {
			try {
				const result = await api.get("/api/community/bookmarks");
				setPosts(result.posts);
			} catch {
				toast.error("Failed to load saved posts");
			} finally {
				setLoading(false);
			}
		})();
	}, []);
	const removeBookmark = (0, import_react.useCallback)(async (postId) => {
		try {
			await api.post(`/api/community/posts/${postId}/bookmark`);
			setPosts((prev) => prev.filter((p) => p._id !== postId));
			toast.success("Bookmark removed");
		} catch {
			toast.error("Failed to remove bookmark");
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => navigate({ to: "/app/community" }),
				className: "rounded-full p-2 hover:bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Saved Posts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Your bookmarked community posts"
			})] })]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-10 w-10 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold",
					children: "No saved posts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Bookmark posts to save them for later."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/app/community" }),
					className: "rounded-2xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90",
					children: "Browse Community"
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
								className: "flex items-center gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: post.userId?.name || "Unknown"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: timeAgo(post.createdAt)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: post.title || post.content.slice(0, 100)
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeBookmark(post._id),
								className: "mt-2 rounded-xl border border-border px-3 py-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground",
								children: "Remove Bookmark"
							})
						]
					})]
				})
			}, post._id))
		})]
	});
}
var SplitComponent = SavedPostsView;
//#endregion
export { SplitComponent as component };
