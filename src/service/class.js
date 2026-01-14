import { apiClient } from "../../library/apiClient";

export const fetchClass = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/class"
        );
        console.log(response);
        if (!response.status === 200) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        console.log("Fetch Modern (console): Data Berhasil Di Ambil", data);
        return { data: data };
    } catch (err) {
        console.error("Fetch Modern (console): Tejadi Kesalahan", err.message);
        return { eror: err.message };
    }
};
export const fetchClassById = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/class"
        );
        console.log(response);
        if (!response.status === 200) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        return { data: data.find((item) => item.id === "C-001") };
    } catch (err) {
        console.error("Fetch Modern (console): Tejadi Kesalahan", err.message);
        return { eror: err.message };
    }
};

export const createHandleSubmit = async () => {
    try {
        const response = await apiClient.post(
            import.meta.env.VITE_API_URL + "/class",
            JSON.stringify(JSON.parse(localStorage.getItem("quiz")))
        );

        if (!response.status === 201) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        console.log("Sukses:", data);
    } catch (err) {
        console.error("Tejadi Kesalahan", err.message);
        return { error: err.message };
    }
};
