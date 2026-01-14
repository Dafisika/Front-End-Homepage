import { apiClient } from "../../library/apiClient";

export const createReview = async (data) => {
    try {
        const response = await apiClient.post(
            import.meta.env.VITE_API_URL + "/review",
            data
        );

        if (!response.status === 201) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
    } catch (err) {
        console.error("Fetch Modern (console): Tejadi Kesalahan", err.message);
        return { error: err.message };
    }
};
