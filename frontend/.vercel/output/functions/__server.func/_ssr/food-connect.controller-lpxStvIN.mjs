import { o as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-wXXk7ngj.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useAuth } from "./use-auth-C-9LPYQj.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/food-connect.controller-lpxStvIN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useFoodConnectController(donationId) {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const userId = user?.id;
	const isDonor = (0, import_react.useMemo)(() => data && userId ? data.donor.id === userId : false, [data, userId]);
	const isClaimant = (0, import_react.useMemo)(() => data && userId ? data.claimant?.id === userId : false, [data, userId]);
	const fetchData = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const result = await api.get(`/api/food-connect/${donationId}`);
			setData(result);
		} catch (err) {
			toast.error(err.message || "Failed to load food connect");
			navigate({ to: "/app/donations" });
		} finally {
			setLoading(false);
		}
	}, [donationId, navigate]);
	(0, import_react.useEffect)(() => {
		fetchData();
	}, [fetchData]);
	const handleComplete = async () => {
		if (!data) return;
		try {
			await api.put(`/api/food-connect/${donationId}/complete`);
			toast.success("Delivery completed! Thank you.");
			fetchData();
		} catch (err) {
			toast.error(err.message || "Failed to complete delivery");
		}
	};
	const handleCancel = async () => {
		if (!data) return;
		try {
			await api.put(`/api/food-connect/${donationId}/cancel`);
			toast.success("Food connect cancelled.");
			navigate({ to: "/app/donations" });
		} catch (err) {
			toast.error(err.message || "Failed to cancel");
		}
	};
	const handleProposeDelivery = async (deliveryMethod, deliveryPartner) => {
		if (!data) return;
		try {
			const result = await api.post(`/api/food-connect/${donationId}/propose-delivery`, {
				deliveryMethod,
				deliveryPartner
			});
			setData(result);
			if (deliveryMethod === "self_pickup") toast.success("Self pickup chosen");
			else toast.success(`${deliveryPartner} proposed to donor`);
		} catch (err) {
			toast.error(err.message || "Failed to propose delivery");
		}
	};
	const handleAcceptDelivery = async () => {
		if (!data) return;
		try {
			await api.post(`/api/food-connect/${donationId}/respond-delivery`, { accept: true });
			toast.success("Delivery accepted");
			fetchData();
		} catch (err) {
			toast.error(err.message || "Failed to accept delivery");
		}
	};
	const handleRejectDelivery = async () => {
		if (!data) return;
		try {
			await api.post(`/api/food-connect/${donationId}/respond-delivery`, { accept: false });
			toast.success("Delivery rejected, claim cancelled");
			navigate({ to: "/app/donations" });
		} catch (err) {
			toast.error(err.message || "Failed to reject delivery");
		}
	};
	const handleBack = () => {
		navigate({ to: "/app/donations" });
	};
	return {
		data,
		loading,
		isDonor,
		isClaimant,
		handleComplete,
		handleCancel,
		handleProposeDelivery,
		handleAcceptDelivery,
		handleRejectDelivery,
		handleBack,
		fetchData
	};
}
function useFoodConnectListController() {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const userId = user?.id;
	const active = (0, import_react.useMemo)(() => items.filter((i) => i.status === "Reserved"), [items]);
	const history = (0, import_react.useMemo)(() => items.filter((i) => i.status === "Completed" || i.status === "Cancelled"), [items]);
	const fetchItems = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const result = await api.get("/api/food-connect");
			setItems(result.items);
		} catch (err) {
			toast.error(err.message || "Failed to load food connects");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchItems();
	}, [fetchItems]);
	const handleOpen = (id) => {
		navigate({ to: `/app/food-connect/${id}` });
	};
	return {
		items,
		active,
		history,
		loading,
		userId,
		handleOpen,
		fetchItems
	};
}
//#endregion
export { useFoodConnectListController as n, useFoodConnectController as t };
