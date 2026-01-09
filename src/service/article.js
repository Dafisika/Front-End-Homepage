import { useEffect, useState } from "react";
import { apiClient } from "../../library/apiClient";

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchData = async () => {
    try {
        const response = await apiClient.get(
            import.meta.env.VITE_API_URL + "/article"
        );

        if (!response.status === 200) {
            throw new Error(`HTTP Error! Status: $(response.status)`);
        }
        const data = await response.data;

        console.log("Fetch Modern (console): Data Berhasil Di Ambil", data);
        setData(data);
    } catch (err) {
        console.error("Fetch Modern (console): Tejadi Kesalahan", err.message);
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    fetchData();
}, []);
