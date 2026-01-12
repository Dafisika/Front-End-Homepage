import { apiClient } from "../../library/apiClient";

export const fetchOrderDetail = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/order-detail"
        );

        if (!response.status === 200) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        return { data: data, error: "" };
    } catch (err) {
        return { data: [], error: err.message };
    }
};
