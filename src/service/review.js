import { apiClient } from "../../library/apiClient";

export const fetchData = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/review"
        );

        if (!response.status === 200) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        console.log("Fetch Modern (console): Data Berhasil Di Ambil", data);
        return { data: data };
    } catch (err) {
        console.error("Fetch Modern (console): Tejadi Kesalahan", err.message);
        return { error: err.message };
    }
};
