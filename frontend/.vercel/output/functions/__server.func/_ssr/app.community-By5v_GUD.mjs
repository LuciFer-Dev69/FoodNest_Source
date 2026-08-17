import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useAuth } from "./use-auth-C-9LPYQj.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Flame, F as MapPin, M as MessageSquare, N as MessageCircle, Ot as Activity, Q as Funnel, T as Plus, X as HeartHandshake, Y as Heart, Z as Globe, _t as CheckCheck, at as Ellipsis, b as Send, c as TrendingUp, d as ThumbsUp, f as ThumbsDown, i as Users, n as Video, rt as EyeOff, s as TriangleAlert, t as X, u as Trash2, v as Share2, wt as Award, x as Search, xt as Bookmark, yt as Camera } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Panel } from "./primitives-Bj6SDeqU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as SORT_OPTIONS, r as REPORT_REASONS, t as CATEGORIES } from "./community.model-j9VM_BWD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.community-By5v_GUD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCommunityController() {
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [page, setPage] = (0, import_react.useState)(1);
	const [hasMore, setHasMore] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadingMore, setLoadingMore] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [category, setCategory] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("newest");
	const [search, setSearch] = (0, import_react.useState)("");
	const [showCreateModal, setShowCreateModal] = (0, import_react.useState)(false);
	const [showDetailPost, setShowDetailPost] = (0, import_react.useState)(null);
	const [showUserProfile, setShowUserProfile] = (0, import_react.useState)(null);
	const [showReportModal, setShowReportModal] = (0, import_react.useState)(null);
	const [detailComments, setDetailComments] = (0, import_react.useState)([]);
	const [detailLoading, setDetailLoading] = (0, import_react.useState)(false);
	const [profileData, setProfileData] = (0, import_react.useState)(null);
	const [stats, setStats] = (0, import_react.useState)(null);
	const [trendingTopics, setTrendingTopics] = (0, import_react.useState)([]);
	const [newestMembers, setNewestMembers] = (0, import_react.useState)([]);
	const [popularCategories, setPopularCategories] = (0, import_react.useState)([]);
	const [recentDonations, setRecentDonations] = (0, import_react.useState)([]);
	const fetchPosts = (0, import_react.useCallback)(async (pageNum, replace = false) => {
		try {
			if (pageNum === 1) setLoading(true);
			else setLoadingMore(true);
			setError(null);
			const params = new URLSearchParams({
				page: String(pageNum),
				limit: "10",
				sort
			});
			if (category) params.set("category", category);
			if (search) params.set("search", search);
			const result = await api.get(`/api/community/posts?${params}`);
			if (replace) setPosts(result.posts);
			else setPosts((prev) => [...prev, ...result.posts]);
			setHasMore(result.pagination.hasMore);
			setPage(pageNum);
		} catch (err) {
			setError(err.message || "Failed to load posts");
			toast.error(err.message || "Failed to load posts");
		} finally {
			setLoading(false);
			setLoadingMore(false);
		}
	}, [
		category,
		sort,
		search
	]);
	const loadMore = (0, import_react.useCallback)(() => {
		if (!loadingMore && hasMore) fetchPosts(page + 1);
	}, [
		loadingMore,
		hasMore,
		page,
		fetchPosts
	]);
	(0, import_react.useEffect)(() => {
		fetchPosts(1, true);
	}, [fetchPosts]);
	const loadSidebar = (0, import_react.useCallback)(async () => {
		try {
			const [statsRes, topicsRes, membersRes, categoriesRes, donationsRes] = await Promise.all([
				api.get("/api/community/posts/stats").catch(() => null),
				api.get("/api/community/posts/trending-topics").catch(() => null),
				api.get("/api/community/posts/newest-members").catch(() => null),
				api.get("/api/community/posts/popular-categories").catch(() => null),
				api.get("/api/community/posts/recent-donations").catch(() => null)
			]);
			if (statsRes) setStats(statsRes);
			if (topicsRes) setTrendingTopics(topicsRes);
			if (membersRes) setNewestMembers(membersRes);
			if (categoriesRes) setPopularCategories(categoriesRes);
			if (donationsRes) setRecentDonations(donationsRes);
		} catch {}
	}, []);
	const refreshSidebar = (0, import_react.useCallback)(() => {
		loadSidebar();
	}, [loadSidebar]);
	(0, import_react.useEffect)(() => {
		if (!loading) loadSidebar();
	}, [loading, loadSidebar]);
	const createPost = (0, import_react.useCallback)(async (data) => {
		try {
			let result;
			if (data instanceof FormData) result = await api.postFormData("/api/community/posts", data);
			else result = await api.post("/api/community/posts", data);
			setPosts((prev) => [result, ...prev]);
			setShowCreateModal(false);
			toast.success("Post created!");
			refreshSidebar();
		} catch (err) {
			toast.error(err.message || "Failed to create post");
		}
	}, [refreshSidebar]);
	const updatePost = (0, import_react.useCallback)(async (postId, data) => {
		try {
			const result = await api.put(`/api/community/posts/${postId}`, data);
			setPosts((prev) => prev.map((p) => p._id === postId ? {
				...p,
				...result
			} : p));
			if (showDetailPost?._id === postId) setShowDetailPost({
				...showDetailPost,
				...result
			});
			toast.success("Post updated");
		} catch (err) {
			toast.error(err.message || "Failed to update post");
		}
	}, [showDetailPost]);
	const deletePost = (0, import_react.useCallback)(async (postId) => {
		try {
			await api.delete(`/api/community/posts/${postId}`);
			setPosts((prev) => prev.filter((p) => p._id !== postId));
			if (showDetailPost?._id === postId) setShowDetailPost(null);
			toast.success("Post deleted");
			refreshSidebar();
		} catch (err) {
			toast.error(err.message || "Failed to delete post");
		}
	}, [showDetailPost, refreshSidebar]);
	const toggleLike = (0, import_react.useCallback)(async (postId) => {
		try {
			const result = await api.post(`/api/community/posts/${postId}/like`);
			setPosts((prev) => prev.map((p) => p._id === postId ? {
				...p,
				isLiked: result.liked,
				likeCount: result.likeCount
			} : p));
			if (showDetailPost?._id === postId) setShowDetailPost({
				...showDetailPost,
				isLiked: result.liked,
				likeCount: result.likeCount
			});
			refreshSidebar();
		} catch (err) {
			toast.error(err.message || "Failed to like post");
		}
	}, [showDetailPost, refreshSidebar]);
	const toggleBookmark = (0, import_react.useCallback)(async (postId) => {
		try {
			const result = await api.post(`/api/community/posts/${postId}/bookmark`);
			setPosts((prev) => prev.map((p) => p._id === postId ? {
				...p,
				isBookmarked: result.bookmarked,
				bookmarkCount: result.bookmarkCount
			} : p));
			if (showDetailPost?._id === postId) setShowDetailPost({
				...showDetailPost,
				isBookmarked: result.bookmarked,
				bookmarkCount: result.bookmarkCount
			});
			toast.success(result.bookmarked ? "Bookmarked!" : "Bookmark removed");
			refreshSidebar();
		} catch (err) {
			toast.error(err.message || "Failed to bookmark post");
		}
	}, [showDetailPost, refreshSidebar]);
	const sharePost = (0, import_react.useCallback)(async (postId) => {
		try {
			const result = await api.post(`/api/community/posts/${postId}/share`);
			await navigator.clipboard.writeText(result.shareUrl);
			toast.success("Link copied to clipboard!");
			setPosts((prev) => prev.map((p) => p._id === postId ? {
				...p,
				shareCount: (p.shareCount || 0) + 1
			} : p));
		} catch {
			toast.error("Failed to copy link");
		}
	}, []);
	const toggleNotInterested = (0, import_react.useCallback)(async (postId) => {
		try {
			const result = await api.post(`/api/community/posts/${postId}/not-interested`);
			if (result.notInterested) {
				setPosts((prev) => prev.filter((p) => p._id !== postId));
				toast.success("Post hidden");
			}
			return result.notInterested;
		} catch (err) {
			toast.error(err.message || "Failed to hide post");
			return false;
		}
	}, []);
	const reportPost = (0, import_react.useCallback)(async (postId, reason, description) => {
		try {
			await api.post(`/api/community/posts/${postId}/report`, {
				reason,
				description
			});
			setShowReportModal(null);
			toast.success("Report submitted");
		} catch (err) {
			toast.error(err.message || "Failed to submit report");
		}
	}, []);
	const loadComments = (0, import_react.useCallback)(async (postId) => {
		setDetailLoading(true);
		try {
			const comments = await api.get(`/api/community/posts/${postId}/comments`);
			setDetailComments(comments);
		} catch {
			toast.error("Failed to load comments");
		} finally {
			setDetailLoading(false);
		}
	}, []);
	const createComment = (0, import_react.useCallback)(async (postId, text, parentId) => {
		try {
			const comment = await api.post(`/api/community/posts/${postId}/comments`, {
				text,
				parentId
			});
			if (parentId) setDetailComments((prev) => prev.map((c) => c._id === parentId ? {
				...c,
				replies: [...c.replies || [], comment]
			} : c));
			else setDetailComments((prev) => [...prev, comment]);
			setPosts((prev) => prev.map((p) => p._id === postId ? {
				...p,
				commentCount: p.commentCount + 1
			} : p));
			if (showDetailPost?._id === postId) setShowDetailPost({
				...showDetailPost,
				commentCount: showDetailPost.commentCount + 1
			});
			refreshSidebar();
		} catch (err) {
			toast.error(err.message || "Failed to comment");
		}
	}, [showDetailPost, refreshSidebar]);
	const deleteComment = (0, import_react.useCallback)(async (commentId, postId) => {
		try {
			await api.delete(`/api/community/comments/${commentId}`);
			setDetailComments((prev) => prev.filter((c) => c._id !== commentId));
			setPosts((prev) => prev.map((p) => p._id === postId ? {
				...p,
				commentCount: Math.max(0, p.commentCount - 1)
			} : p));
			refreshSidebar();
		} catch (err) {
			toast.error(err.message || "Failed to delete comment");
		}
	}, [refreshSidebar]);
	const loadProfile = (0, import_react.useCallback)(async (userId) => {
		try {
			const profile = await api.get(`/api/community/users/${userId}/profile`);
			setProfileData(profile);
		} catch {
			toast.error("Failed to load profile");
		}
	}, []);
	return {
		posts,
		loading,
		loadingMore,
		hasMore,
		error,
		page,
		category,
		sort,
		search,
		showCreateModal,
		showDetailPost,
		showUserProfile,
		showReportModal,
		detailComments,
		detailLoading,
		profileData,
		stats,
		trendingTopics,
		newestMembers,
		popularCategories,
		recentDonations,
		setCategory,
		setSort,
		setSearch,
		setShowCreateModal,
		setShowDetailPost,
		setShowUserProfile,
		setShowReportModal,
		setDetailComments,
		setProfileData,
		fetchPosts,
		loadMore,
		clearFilters: (0, import_react.useCallback)(() => {
			setCategory("");
			setSearch("");
			setSort("newest");
		}, []),
		createPost,
		updatePost,
		deletePost,
		toggleLike,
		toggleBookmark,
		sharePost,
		reportPost,
		toggleNotInterested,
		loadComments,
		createComment,
		deleteComment,
		loadProfile,
		refreshSidebar
	};
}
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
function PostCard({ post, ctrl }) {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [showConfirm, setShowConfirm] = (0, import_react.useState)(false);
	const [accepting, setAccepting] = (0, import_react.useState)(false);
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const textTruncated = post.content.length > 200 && !expanded;
	const isOwner = user?.id === post.userId._id;
	const handleAcceptDonation = async () => {
		if (!post.donationId) return;
		setShowConfirm(false);
		setAccepting(true);
		try {
			await api.put(`/api/donations/${post.donationId}/claim`);
			toast.success("Donation claimed! Taking you to Food Connect.");
			navigate({ to: `/app/food-connect/${post.donationId}` });
		} catch (err) {
			toast.error(err.message || "Failed to claim donation");
		} finally {
			setAccepting(false);
		}
	};
	const allMedia = [...post.images.map((u) => ({
		url: u,
		type: "image"
	})), ...(post.videos || []).map((u) => ({
		url: u,
		type: "video"
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "glass-card rounded-3xl overflow-hidden hover-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-10 w-10 shrink-0 rounded-full bg-gradient-primary grid place-items-center text-white text-sm font-bold cursor-pointer overflow-hidden",
					onClick: () => {
						ctrl.loadProfile(post.userId._id);
						ctrl.setShowUserProfile(post.userId._id);
					},
					children: post.userId.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.userId.profilePicture,
						alt: "",
						className: "h-full w-full object-contain bg-black/5"
					}) : post.userId.name?.charAt(0).toUpperCase() || "U"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									ctrl.loadProfile(post.userId._id);
									ctrl.setShowUserProfile(post.userId._id);
								},
								className: "text-sm font-semibold hover:underline truncate",
								children: post.userId.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary/60 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground",
										children: post.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground whitespace-nowrap",
										children: timeAgo(post.createdAt)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setMenuOpen((v) => !v),
											className: "rounded-full p-1 text-muted-foreground hover:bg-secondary/50",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
										}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute right-0 top-full mt-1 z-40 min-w-[160px] rounded-2xl bg-card border border-border shadow-xl py-1 overflow-hidden",
											onMouseLeave: () => setMenuOpen(false),
											children: isOwner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													ctrl.deletePost(post._id);
													setMenuOpen(false);
												},
												className: "flex w-full items-center gap-2 px-4 py-2 text-xs font-semibold text-red-500 hover:bg-destructive/10",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete Post"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => {
														ctrl.toggleNotInterested(post._id);
														setMenuOpen(false);
													},
													className: "flex w-full items-center gap-2 px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-secondary/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, { className: "h-4 w-4" }), " Not Interested"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border/40 my-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => {
														ctrl.setShowReportModal(post._id);
														setMenuOpen(false);
													},
													className: "flex w-full items-center gap-2 px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-secondary/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), " Report Post"]
												})
											] })
										})]
									})
								]
							})]
						}),
						post.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-bold",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-sm leading-relaxed",
							children: [textTruncated ? post.content.slice(0, 200) + "..." : post.content, textTruncated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setExpanded(true),
								className: "ml-1 text-xs font-semibold text-primary hover:underline",
								children: "See more"
							})]
						}),
						post.tags?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1",
							children: post.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary",
								children: ["#", tag]
							}, tag))
						}),
						allMedia.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-1 grid-cols-2 rounded-2xl overflow-hidden",
							children: allMedia.slice(0, 5).map((media, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative ${allMedia.length === 3 && i === 0 ? "row-span-2" : ""}`,
								children: [media.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: media.url,
									controls: true,
									className: "w-full h-36 object-contain bg-black/5"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: media.url,
									alt: "",
									className: "w-full h-36 object-contain bg-black/5",
									loading: "lazy"
								}), i === 4 && allMedia.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-black/50 grid place-items-center text-white text-lg font-bold",
									children: ["+", allMedia.length - 5]
								})]
							}, i))
						}),
						post.location?.displayName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), post.location.city || post.location.displayName]
						}),
						post.donationId && post.category === "Donation" && !isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "mt-0.5 h-5 w-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-emerald-700 dark:text-emerald-300",
											children: "Food Donation"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-xs text-muted-foreground",
											children: post.title
										}),
										post.donationClaimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 flex items-center gap-1.5 rounded-xl bg-gray-500/10 px-4 py-2 text-xs font-semibold text-gray-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Claimed"]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setShowConfirm(true),
											disabled: accepting,
											className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
											children: accepting ? "Claiming..." : "Accept Donation"
										})
									]
								})]
							})
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between border-t border-border/40 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => ctrl.toggleLike(post._id),
							className: `flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${post.isLiked ? "bg-red-500/10 text-red-500" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${post.isLiked ? "fill-current" : ""}` }), post.likeCount || 0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								ctrl.setShowDetailPost(post);
								ctrl.loadComments(post._id);
							},
							className: "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), post.commentCount || 0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => ctrl.toggleBookmark(post._id),
							className: `flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${post.isBookmarked ? "text-amber-500" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: `h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}` })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.sharePost(post._id),
						className: "rounded-xl px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setShowReportModal(post._id),
						className: "rounded-xl px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" })
					})]
				})]
			})]
		}), showConfirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] grid place-items-center bg-black/40 backdrop-blur-sm p-4",
			onClick: () => setShowConfirm(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm rounded-3xl bg-card border border-border shadow-2xl p-6",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Accept Donation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Do you really want to accept this donation?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 rounded-2xl bg-emerald-500/10 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-5 w-5" }),
								" ",
								post.title || post.content.slice(0, 60)
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowConfirm(false),
							className: "flex-1 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleAcceptDonation,
							disabled: accepting,
							className: "flex-1 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
							children: accepting ? "Claiming..." : "Confirm"
						})]
					})
				]
			})
		})]
	});
}
function CreatePostModal({ ctrl }) {
	const [title, setTitle] = (0, import_react.useState)("");
	const [content, setContent] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Other");
	const [tags, setTags] = (0, import_react.useState)("");
	const [imageFiles, setImageFiles] = (0, import_react.useState)([]);
	const [videoFiles, setVideoFiles] = (0, import_react.useState)([]);
	const [imagePreviews, setImagePreviews] = (0, import_react.useState)([]);
	const [videoPreviews, setVideoPreviews] = (0, import_react.useState)([]);
	const [pickupAvailable, setPickupAvailable] = (0, import_react.useState)(false);
	const [visibility, setVisibility] = (0, import_react.useState)("public");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const imageRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const handleImageSelect = (e) => {
		const files = Array.from(e.target.files || []);
		const remaining = 5 - imageFiles.length;
		const toAdd = files.slice(0, remaining);
		setImageFiles((prev) => [...prev, ...toAdd]);
		for (const f of toAdd) setImagePreviews((prev) => [...prev, URL.createObjectURL(f)]);
		e.target.value = "";
	};
	const handleVideoSelect = (e) => {
		const files = Array.from(e.target.files || []);
		const remaining = 5 - videoFiles.length;
		const toAdd = files.slice(0, remaining);
		setVideoFiles((prev) => [...prev, ...toAdd]);
		for (const f of toAdd) setVideoPreviews((prev) => [...prev, URL.createObjectURL(f)]);
		e.target.value = "";
	};
	const removeImage = (i) => {
		URL.revokeObjectURL(imagePreviews[i]);
		setImageFiles((prev) => prev.filter((_, j) => j !== i));
		setImagePreviews((prev) => prev.filter((_, j) => j !== i));
	};
	const removeVideo = (i) => {
		URL.revokeObjectURL(videoPreviews[i]);
		setVideoFiles((prev) => prev.filter((_, j) => j !== i));
		setVideoPreviews((prev) => prev.filter((_, j) => j !== i));
	};
	const resetForm = () => {
		setTitle("");
		setContent("");
		setCategory("Other");
		setTags("");
		setImageFiles([]);
		setVideoFiles([]);
		imagePreviews.forEach(URL.revokeObjectURL);
		videoPreviews.forEach(URL.revokeObjectURL);
		setImagePreviews([]);
		setVideoPreviews([]);
		setPickupAvailable(false);
		setVisibility("public");
	};
	const handleSubmit = async () => {
		if (!content.trim()) return toast.error("Content is required");
		setSubmitting(true);
		if (imageFiles.length > 0 || videoFiles.length > 0) {
			const fd = new FormData();
			fd.append("title", title);
			fd.append("content", content);
			fd.append("category", category);
			fd.append("tags", JSON.stringify(tags.split(",").map((t) => t.trim()).filter(Boolean)));
			fd.append("pickupAvailable", String(pickupAvailable));
			fd.append("visibility", visibility);
			for (const f of imageFiles) fd.append("media", f);
			for (const f of videoFiles) fd.append("media", f);
			await ctrl.createPost(fd);
		} else await ctrl.createPost({
			title,
			content,
			category,
			tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
			pickupAvailable,
			visibility
		});
		setSubmitting(false);
		resetForm();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: ctrl.showCreateModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4",
		onClick: () => {
			ctrl.setShowCreateModal(false);
			resetForm();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				y: 20
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .95,
				y: 20
			},
			className: "w-full max-w-lg rounded-3xl bg-card border border-border shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 pt-6 pb-3 border-b border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Create Post"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							ctrl.setShowCreateModal(false);
							resetForm();
						},
						className: "rounded-full p-1.5 hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-4 space-y-3 max-h-[70vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground mb-1 block",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground mb-1 block",
							children: "Title (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "Post title...",
							className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground mb-1 block",
							children: "Content *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: content,
							onChange: (e) => setContent(e.target.value),
							placeholder: "Share something with the community...",
							rows: 4,
							className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground mb-1 block",
							children: "Tags (comma separated)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: tags,
							onChange: (e) => setTags(e.target.value),
							placeholder: "sustainable, recipe, vegan...",
							className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground mb-1 block",
							children: [
								"Photos (",
								imageFiles.length,
								"/5)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								imagePreviews.map((preview, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-16 w-16 rounded-xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: preview,
										alt: "",
										className: "h-full w-full object-contain bg-black/5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => removeImage(i),
										className: "absolute top-0.5 right-0.5 rounded-full bg-black/60 p-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 text-white" })
									})]
								}, i)),
								imageFiles.length < 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => imageRef.current?.click(),
									className: "h-16 w-16 rounded-xl border-2 border-dashed border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: imageRef,
									type: "file",
									accept: "image/*",
									multiple: true,
									className: "hidden",
									onChange: handleImageSelect
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold text-muted-foreground mb-1 block",
							children: [
								"Videos (",
								videoFiles.length,
								"/5)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								videoPreviews.map((preview, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-16 w-16 rounded-xl overflow-hidden bg-black grid place-items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											src: preview,
											className: "h-full w-full object-contain bg-black/5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 grid place-items-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5 text-white/70" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => removeVideo(i),
											className: "absolute top-0.5 right-0.5 rounded-full bg-black/60 p-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 text-white" })
										})
									]
								}, i)),
								videoFiles.length < 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => videoRef.current?.click(),
									className: "h-16 w-16 rounded-xl border-2 border-dashed border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: videoRef,
									type: "file",
									accept: "video/mp4,video/quicktime,video/webm",
									multiple: true,
									className: "hidden",
									onChange: handleVideoSelect
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: pickupAvailable,
									onChange: (e) => setPickupAvailable(e.target.checked),
									className: "rounded border-border text-primary focus:ring-primary/30"
								}), "Pickup Available"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [visibility === "public" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: visibility,
									onChange: (e) => setVisibility(e.target.value),
									className: "rounded-lg border border-border bg-background px-2 py-1 text-xs outline-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "public",
										children: "Public"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "community",
										children: "Community Only"
									})]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2 px-6 pb-6 pt-3 border-t border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							ctrl.setShowCreateModal(false);
							resetForm();
						},
						className: "rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSubmit,
						disabled: submitting || !content.trim(),
						className: "rounded-xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-50",
						children: submitting ? "Publishing..." : "Publish"
					})]
				})
			]
		})
	}) });
}
function PostDetailModal({ ctrl }) {
	const post = ctrl.showDetailPost;
	const [commentText, setCommentText] = (0, import_react.useState)("");
	const [replyTo, setReplyTo] = (0, import_react.useState)(null);
	if (!post) return null;
	const handleComment = async () => {
		if (!commentText.trim()) return;
		await ctrl.createComment(post._id, commentText, replyTo || void 0);
		setCommentText("");
		setReplyTo(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: ctrl.showDetailPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4",
		onClick: () => {
			ctrl.setShowDetailPost(null);
			ctrl.setDetailComments([]);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				y: 20
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .95,
				y: 20
			},
			className: "w-full max-w-2xl rounded-3xl bg-card border border-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-6 pt-6 pb-3 border-b border-border/40 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "Post"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						ctrl.setShowDetailPost(null);
						ctrl.setDetailComments([]);
					},
					className: "rounded-full p-1.5 hover:bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto px-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-9 w-9 shrink-0 rounded-full bg-gradient-primary grid place-items-center text-white text-xs font-bold overflow-hidden",
							children: post.userId.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.userId.profilePicture,
								alt: "",
								className: "h-full w-full object-contain bg-black/5"
							}) : post.userId.name?.charAt(0)?.toUpperCase() || "U"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold",
											children: post.userId.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: timeAgo(post.createdAt)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-secondary/60 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground",
											children: post.category
										})
									]
								}),
								post.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-bold",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed",
									children: post.content
								}),
								(post.images?.length > 0 || post.videos?.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-1 grid-cols-2 rounded-2xl overflow-hidden",
									children: [post.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img,
										alt: "",
										className: "w-full object-contain bg-black/5 h-36",
										loading: "lazy"
									}, `img-${i}`)), (post.videos || []).map((vid, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
										src: vid,
										controls: true,
										className: "w-full object-contain bg-black/5 h-36"
									}, `vid-${i}`))]
								}),
								post.location?.displayName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
										" ",
										post.location.displayName
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3 border-t border-border/30 pt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => ctrl.toggleLike(post._id),
								className: `flex items-center gap-1 text-xs font-semibold ${post.isLiked ? "text-red-500" : "text-muted-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${post.isLiked ? "fill-current" : ""}` }),
									" ",
									post.likeCount || 0
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => ctrl.toggleBookmark(post._id),
								className: `flex items-center gap-1 text-xs font-semibold ${post.isBookmarked ? "text-amber-500" : "text-muted-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: `h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}` })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => ctrl.sharePost(post._id),
								className: "flex items-center gap-1 text-xs font-semibold text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Share"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border/30 pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold mb-3",
								children: [
									"Comments (",
									ctrl.detailComments.length,
									")"
								]
							}),
							ctrl.detailLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: [
									1,
									2,
									3
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "animate-pulse flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-7 rounded-full bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-24 rounded bg-secondary mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-full rounded bg-secondary" })]
									})]
								}, i))
							}) : ctrl.detailComments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground py-4 text-center",
								children: "No comments yet. Be the first!"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: ctrl.detailComments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentItem, {
									comment,
									ctrl,
									onReply: (id) => setReplyTo(id)
								}, comment._id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-start gap-2 border-t border-border/30 pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: commentText,
										onChange: (e) => setCommentText(e.target.value),
										placeholder: replyTo ? "Write a reply..." : "Write a comment...",
										onKeyDown: (e) => e.key === "Enter" && handleComment(),
										className: "flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
									}),
									replyTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setReplyTo(null),
										className: "rounded-xl p-2 text-xs text-muted-foreground hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleComment,
										disabled: !commentText.trim(),
										className: "rounded-xl bg-gradient-primary px-3 py-2 text-white disabled:opacity-50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
									})
								]
							})
						]
					})
				]
			})]
		})
	}) });
}
function CommentItem({ comment, ctrl, onReply }) {
	const [showReplies, setShowReplies] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-7 w-7 shrink-0 rounded-full bg-gradient-primary grid place-items-center text-white text-[10px] font-bold overflow-hidden",
			children: comment.userId?.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: comment.userId.profilePicture,
				alt: "",
				className: "h-full w-full object-contain bg-black/5"
			}) : comment.userId?.name?.charAt(0)?.toUpperCase() || "U"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-secondary/40 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold",
					children: comment.userId?.name || "Unknown"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm mt-0.5",
					children: comment.text
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mt-1 ml-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-muted-foreground",
					children: timeAgo(comment.createdAt)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onReply(comment._id),
					className: "text-[10px] font-semibold text-muted-foreground hover:text-foreground",
					children: "Reply"
				})]
			})]
		})]
	}), comment.replies && comment.replies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ml-8 mt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setShowReplies(!showReplies),
			className: "text-[11px] font-semibold text-primary mb-2",
			children: [
				showReplies ? "Hide" : "Show",
				" ",
				comment.replies.length,
				" ",
				comment.replies.length === 1 ? "reply" : "replies"
			]
		}), showReplies && comment.replies.map((reply) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2.5 mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-6 w-6 shrink-0 rounded-full bg-gradient-primary grid place-items-center text-white text-[9px] font-bold overflow-hidden",
				children: reply.userId?.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: reply.userId.profilePicture,
					alt: "",
					className: "h-full w-full object-contain bg-black/5"
				}) : reply.userId?.name?.charAt(0)?.toUpperCase() || "U"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-secondary/40 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold",
						children: reply.userId?.name || "Unknown"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm mt-0.5",
						children: reply.text
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-muted-foreground ml-2 mt-0.5",
					children: timeAgo(reply.createdAt)
				})]
			})]
		}, reply._id))]
	})] });
}
function ReportModal({ ctrl }) {
	const [reason, setReason] = (0, import_react.useState)("Spam");
	const [description, setDescription] = (0, import_react.useState)("");
	if (!ctrl.showReportModal) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4",
		onClick: () => ctrl.setShowReportModal(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				y: 20
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .95,
				y: 20
			},
			className: "w-full max-w-sm rounded-3xl bg-card border border-border shadow-2xl p-6",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold mb-4",
					children: "Report Post"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: reason,
						onChange: (e) => setReason(e.target.value),
						className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30",
						children: REPORT_REASONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: r,
							children: r
						}, r))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: description,
						onChange: (e) => setDescription(e.target.value),
						placeholder: "Additional details (optional)...",
						rows: 3,
						className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2 mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setShowReportModal(null),
						className: "rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.reportPost(ctrl.showReportModal, reason, description),
						className: "rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600",
						children: "Submit Report"
					})]
				})
			]
		})
	}) });
}
function UserProfileModal({ ctrl }) {
	const profile = ctrl.profileData;
	if (!ctrl.showUserProfile || !profile) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4",
		onClick: () => {
			ctrl.setShowUserProfile(null);
			ctrl.setProfileData(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				y: 20
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .95,
				y: 20
			},
			className: "w-full max-w-md rounded-3xl bg-card border border-border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gradient-primary p-6 pb-16 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						ctrl.setShowUserProfile(null);
						ctrl.setProfileData(null);
					},
					className: "absolute top-4 right-4 rounded-full bg-black/20 p-1.5 text-white hover:bg-black/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-20 w-20 rounded-full border-4 border-white/30 overflow-hidden bg-white/20 grid place-items-center text-white text-3xl font-bold",
							children: profile.user.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.user.profilePicture,
								alt: "",
								className: "h-full w-full object-contain bg-black/5"
							}) : profile.user.name?.charAt(0)?.toUpperCase() || "U"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg font-bold text-white",
							children: profile.user.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-white/70",
							children: ["Joined ", timeAgo(profile.stats.joinedDate)]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 pb-6 -mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-2xl p-4 grid grid-cols-3 gap-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold",
								children: profile.stats.postCount
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Posts"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold",
								children: profile.stats.totalLikes
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Likes"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold",
								children: profile.stats.donations
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Donations"
							})] })
						]
					}),
					profile.stats.badges.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-muted-foreground mb-2",
							children: "Badges"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: profile.stats.badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-amber-500/10 text-amber-600 px-3 py-1 text-xs font-semibold flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3 w-3" }),
									" ",
									badge
								]
							}, badge))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: profile.stats.foodSaved
						}), " food saved"]
					}),
					profile.recentPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-muted-foreground mb-2",
							children: "Recent Posts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: profile.recentPosts.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-secondary/40 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold truncate",
									children: p.title || p.content.slice(0, 60)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] text-muted-foreground",
									children: [
										p.category,
										" · ",
										timeAgo(p.createdAt)
									]
								})]
							}, p._id))
						})]
					})
				]
			})]
		})
	}) });
}
function Sidebar({ ctrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold mb-3 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-primary" }), " Community Stats"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5" }),
							label: "Posts",
							value: ctrl.stats?.totalPosts || 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }),
							label: "Comments",
							value: ctrl.stats?.totalComments || 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "h-3.5 w-3.5" }),
							label: "Likes",
							value: ctrl.stats?.totalLikes || 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5" }),
							label: "Bookmarks",
							value: ctrl.stats?.totalBookmarks || 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
							label: "Active Users",
							value: ctrl.stats?.activeUsers || 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5" }),
							label: "Today",
							value: ctrl.stats?.todayPosts || 0
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-3 border-t border-border/30 flex justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "This week" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold text-foreground",
						children: [ctrl.stats?.weekPosts || 0, " posts"]
					})]
				}),
				ctrl.stats?.userStats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-3 border-t border-border/30 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Your posts: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: ctrl.stats.userStats.postCount
					})] }), ctrl.stats.userStats.achievements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1 mt-1.5",
						children: ctrl.stats.userStats.achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-amber-500/10 text-amber-600 px-2 py-0.5 text-[9px] font-semibold",
							children: a.badge
						}, a.badge))
					})]
				})
			] }),
			ctrl.trendingTopics.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-sm font-bold mb-3 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-primary" }), " Trending Topics"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: ctrl.trendingTopics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => ctrl.setSearch(topic.tag),
					className: "flex items-center justify-between w-full text-xs hover:bg-secondary/40 rounded-lg px-2 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: ["#", topic.tag]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [topic.count, " posts"]
					})]
				}, topic.tag))
			})] }),
			ctrl.popularCategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-sm font-bold mb-3 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-primary" }), " Categories"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1.5",
				children: ctrl.popularCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => ctrl.setCategory(cat.category),
					className: `flex items-center justify-between w-full text-xs rounded-lg px-2 py-1.5 hover:bg-secondary/40 ${ctrl.category === cat.category ? "bg-primary/10 text-primary font-semibold" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: cat.count
					})]
				}, cat.category))
			})] }),
			ctrl.newestMembers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-sm font-bold mb-3 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" }), " Newest Members"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: ctrl.newestMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						ctrl.loadProfile(member._id);
						ctrl.setShowUserProfile(member._id);
					},
					className: "flex items-center gap-2 w-full text-xs hover:bg-secondary/40 rounded-lg px-2 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-6 w-6 rounded-full bg-gradient-primary grid place-items-center text-white text-[9px] font-bold overflow-hidden shrink-0",
						children: member.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: member.profilePicture,
							alt: "",
							className: "h-full w-full object-contain bg-black/5"
						}) : member.name.charAt(0).toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium truncate",
							children: member.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] text-muted-foreground",
							children: [member.postCount, " posts"]
						})]
					})]
				}, member._id))
			})] }),
			ctrl.recentDonations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-sm font-bold mb-3 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-primary" }), " Recent Donations"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: ctrl.recentDonations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 text-xs",
					children: [d.images?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.images[0],
						alt: "",
						className: "h-8 w-8 rounded-lg object-contain bg-black/5 shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium truncate",
							children: d.title || d.content.slice(0, 40)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] text-muted-foreground",
							children: [
								d.userId?.name,
								" · ",
								timeAgo(d.createdAt)
							]
						})]
					})]
				}, d._id))
			})] })
		]
	});
}
function StatItem({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 rounded-xl bg-secondary/30 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[9px] text-muted-foreground",
			children: label
		})] })]
	});
}
function CommunityView(ctrl) {
	const observerRef = (0, import_react.useRef)(null);
	const sentinelRef = (0, import_react.useCallback)((node) => {
		if (observerRef.current) observerRef.current.disconnect();
		if (!node || !ctrl.hasMore || ctrl.loadingMore) return;
		observerRef.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) ctrl.loadMore();
		}, { threshold: .1 });
		observerRef.current.observe(node);
	}, [
		ctrl.hasMore,
		ctrl.loadingMore,
		ctrl.loadMore
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight md:text-4xl",
				children: "Community"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Share, learn, and connect with fellow food-savers."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => ctrl.setShowCreateModal(true),
				className: "flex items-center gap-2 rounded-2xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create Post"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 min-w-[200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: ctrl.search,
							onChange: (e) => ctrl.setSearch(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") ctrl.fetchPosts(1, true);
							},
							placeholder: "Search posts...",
							className: "w-full rounded-2xl border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: ctrl.category,
						onChange: (e) => ctrl.setCategory(e.target.value),
						className: "rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-primary/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All Categories"
						}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: ctrl.sort,
						onChange: (e) => ctrl.setSort(e.target.value),
						className: "rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-primary/30",
						children: SORT_OPTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.value,
							children: s.label
						}, s.value))
					}),
					(ctrl.category || ctrl.search) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: ctrl.clearFilters,
						className: "rounded-2xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground",
						children: "Clear"
					})
				]
			}), ctrl.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-3xl p-5 animate-pulse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full bg-secondary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-32 rounded bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-full rounded bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3/4 rounded bg-secondary" })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-48 rounded-2xl bg-secondary" })]
				}, i))
			}) : ctrl.error && ctrl.posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-20 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-10 w-10 text-amber-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold",
						children: "Could not load posts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: ctrl.error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.fetchPosts(1, true),
						className: "rounded-2xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90",
						children: "Retry"
					})
				]
			}) : ctrl.posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-20 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold",
						children: "No posts yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Be the first to share with the community!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => ctrl.setShowCreateModal(true),
						className: "rounded-2xl bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90",
						children: "Create Post"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					ctrl.posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, {
						post,
						ctrl
					}, post._id)),
					ctrl.loadingMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" })
					}),
					ctrl.hasMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: sentinelRef,
						className: "h-4"
					}),
					!ctrl.hasMore && ctrl.posts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground py-4",
						children: "You've reached the end"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, { ctrl })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePostModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostDetailModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserProfileModal, { ctrl }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportModal, { ctrl })
	] });
}
function CommunityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityView, { ...useCommunityController() });
}
//#endregion
export { CommunityPage as component };
