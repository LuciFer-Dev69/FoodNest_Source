import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-__URFs4A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function RegisterRedirect() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		navigate({
			to: "/login",
			search: { mode: "register" },
			replace: true
		});
	}, [navigate]);
	return null;
}
//#endregion
export { RegisterRedirect as component };
