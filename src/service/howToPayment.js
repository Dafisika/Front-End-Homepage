import { apiClient } from "../../library/apiClient";

export const fetchHowToPayment = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/how-to-payment"
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
