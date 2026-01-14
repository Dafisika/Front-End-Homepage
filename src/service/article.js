import { apiClient } from "../../library/apiClient";

export const fetchArticle = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/article"
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
export const fetchArticleById = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/article"
        );

        if (!response.status === 200) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        return { data: data.find((item) => item.id === "A-001") };
    } catch (err) {
        return { data: [], error: err.message };
    }
};
