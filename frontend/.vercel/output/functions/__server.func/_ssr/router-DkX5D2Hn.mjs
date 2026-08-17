import { n as getStoredToken } from "./auth-storage-CqihHLXV.mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { M as redirect, b as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$20 } from "./app.food-connect._id-DBgQzxCf.mjs";
import { t as Route$21 } from "./login-BxK-Ovzb.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DkX5D2Hn.js
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-BTXLyke2.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-hero px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for has been composted."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift transition",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-hero px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lift transition",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-accent/30 transition",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FoodNest — Reduce Food Waste. Feed More People." },
			{
				name: "description",
				content: "FoodNest helps households track food, plan meals, and donate surplus to reduce waste and feed more people."
			},
			{
				name: "author",
				content: "FoodNest"
			},
			{
				property: "og:title",
				content: "FoodNest — Reduce Food Waste. Feed More People."
			},
			{
				property: "og:description",
				content: "FoodNest helps households track food, plan meals, and donate surplus to reduce waste and feed more people."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "FoodNest — Reduce Food Waste. Feed More People."
			},
			{
				name: "twitter:description",
				content: "FoodNest helps households track food, plan meals, and donate surplus to reduce waste and feed more people."
			},
			{
				property: "og:image",
				content: "/og-image.png"
			},
			{
				name: "twitter:image",
				content: "/og-image.png"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$17 = () => import("./register-__URFs4A.mjs");
var Route$18 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "Create account — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./forgot-password-tfX6VUuB.mjs");
var Route$17 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Reset password — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./app-D5xevWSX.mjs");
var Route$16 = createFileRoute("/app")({
	beforeLoad: () => {
		if (!(typeof window !== "undefined" ? getStoredToken() : null)) throw redirect({
			to: "/login",
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./routes-BEjb6ypI.mjs");
var Route$15 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "FoodNest — Reduce Food Waste. Feed More People." },
		{
			name: "description",
			content: "FoodNest helps households track food, plan meals, and donate surplus to reduce waste and feed more people."
		},
		{
			property: "og:title",
			content: "FoodNest — Reduce Food Waste. Feed More People."
		},
		{
			property: "og:description",
			content: "Intelligent food inventory, donations, and meal planning."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var Route$14 = createFileRoute("/app/")({ beforeLoad: () => {
	throw redirect({ to: "/app/dashboard" });
} });
var $$splitComponentImporter$13 = () => import("./app.settings-Bh6ddcZ0.mjs");
var Route$13 = createFileRoute("/app/settings")({
	head: () => ({ meta: [{ title: "Settings — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./app.profile-4GVWV489.mjs");
var Route$12 = createFileRoute("/app/profile")({
	head: () => ({ meta: [{ title: "Profile — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./app.planner-CnIK7gxb.mjs");
var Route$11 = createFileRoute("/app/planner")({
	head: () => ({ meta: [{ title: "Meal planner — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./app.notifications-CPScRGvK.mjs");
var Route$10 = createFileRoute("/app/notifications")({
	head: () => ({ meta: [{ title: "Notifications — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./app.inventory-fHbUy6ba.mjs");
var Route$9 = createFileRoute("/app/inventory")({
	head: () => ({ meta: [{ title: "Inventory — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./app.help-jWn8OETv.mjs");
var Route$8 = createFileRoute("/app/help")({
	head: () => ({ meta: [{ title: "Help — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./app.donations-DINPEOLA.mjs");
var Route$7 = createFileRoute("/app/donations")({
	head: () => ({ meta: [{ title: "Donations — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./app.dashboard-TDvHGjE1.mjs");
var Route$6 = createFileRoute("/app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./app.community-By5v_GUD.mjs");
var Route$5 = createFileRoute("/app/community")({
	head: () => ({ meta: [{ title: "Community — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./app.analytics-CrsTE_b_.mjs");
var Route$4 = createFileRoute("/app/analytics")({
	head: () => ({ meta: [{ title: "Analytics — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./app.food-connect.index-DP4P8PKt.mjs");
var Route$3 = createFileRoute("/app/food-connect/")({
	head: () => ({ meta: [{ title: "Food Connect — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./app.community.saved-DQso9LNq.mjs");
var Route$2 = createFileRoute("/app/community/saved")({
	head: () => ({ meta: [{ title: "Saved Posts — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./app.community.nearby-BdJVUhBL.mjs");
var Route$1 = createFileRoute("/app/community/nearby")({
	head: () => ({ meta: [{ title: "Nearby — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./app.community.donation-map-CUK6bTu3.mjs");
var Route = createFileRoute("/app/community/donation-map")({
	head: () => ({ meta: [{ title: "Donation Map — FoodNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RegisterRoute = Route$18.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$19
});
var LoginRoute = Route$21.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$19
});
var ForgotPasswordRoute = Route$17.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$19
});
var AppRoute = Route$16.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$19
});
var IndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AppIndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$13.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppProfileRoute = Route$12.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppPlannerRoute = Route$11.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => AppRoute
});
var AppNotificationsRoute = Route$10.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AppRoute
});
var AppInventoryRoute = Route$9.update({
	id: "/inventory",
	path: "/inventory",
	getParentRoute: () => AppRoute
});
var AppHelpRoute = Route$8.update({
	id: "/help",
	path: "/help",
	getParentRoute: () => AppRoute
});
var AppDonationsRoute = Route$7.update({
	id: "/donations",
	path: "/donations",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppCommunityRoute = Route$5.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => AppRoute
});
var AppAnalyticsRoute = Route$4.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AppRoute
});
var AppFoodConnectIndexRoute = Route$3.update({
	id: "/food-connect/",
	path: "/food-connect/",
	getParentRoute: () => AppRoute
});
var AppFoodConnectIdRoute = Route$20.update({
	id: "/food-connect/$id",
	path: "/food-connect/$id",
	getParentRoute: () => AppRoute
});
var AppCommunitySavedRoute = Route$2.update({
	id: "/saved",
	path: "/saved",
	getParentRoute: () => AppCommunityRoute
});
var AppCommunityNearbyRoute = Route$1.update({
	id: "/nearby",
	path: "/nearby",
	getParentRoute: () => AppCommunityRoute
});
var AppCommunityRouteChildren = {
	AppCommunityDonationMapRoute: Route.update({
		id: "/donation-map",
		path: "/donation-map",
		getParentRoute: () => AppCommunityRoute
	}),
	AppCommunityNearbyRoute,
	AppCommunitySavedRoute
};
var AppRouteChildren = {
	AppAnalyticsRoute,
	AppCommunityRoute: AppCommunityRoute._addFileChildren(AppCommunityRouteChildren),
	AppDashboardRoute,
	AppDonationsRoute,
	AppHelpRoute,
	AppInventoryRoute,
	AppNotificationsRoute,
	AppPlannerRoute,
	AppProfileRoute,
	AppSettingsRoute,
	AppIndexRoute,
	AppFoodConnectIdRoute,
	AppFoodConnectIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	ForgotPasswordRoute,
	LoginRoute,
	RegisterRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
