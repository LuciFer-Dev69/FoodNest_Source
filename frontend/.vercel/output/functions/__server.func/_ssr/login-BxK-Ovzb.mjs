import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
require_jsx_runtime();
var $$splitComponentImporter = () => import("./login-Dn82iN9N.mjs");
var Route = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign in — FoodNest" }] }),
	validateSearch: (search) => ({ mode: search.mode || "login" }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
