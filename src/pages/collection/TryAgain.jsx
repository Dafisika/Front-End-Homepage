import tryAgain from "/etc/try_again.png";
import QuestionIsFail from "../../components/collection/QuestionIsFail";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import AsideProgressFail from "../../data/AsideProgressFail.json";
import AsideProgress from "../../components/asideCollection/AsideProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import { apiClient } from "../../../library/apiClient";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function TryAgain() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            const response = await apiClient.get(
                import.meta.env.VITE_API_URL + "/class"
            );
            console.log(response);
            if (!response.status === 200) {
                throw new Error(`HTTP Error! Status: $(response.status)`);
            }
            const data = await response.data;

            console.log("Fetch (console): Data Berhasil Di Ambil", data);
            setData(data.find((item) => item.id === "C-001"));
        } catch (err) {
            console.error(
                "Fetch Modern (console): Tejadi Kesalahan",
                err.message
            );
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <NavbarProgress data={data && data?.detail_class} />
            {!error ? (
                <main className="grid grid-cols-3">
                    <section className="flex flex-col col-span-2">
                        <img src={tryAgain} alt="" />
                        <QuestionIsFail
                            title={AsideProgressFail.title}
                            date={AsideProgressFail.date}
                            data={AsideProgressFail.data}
                            status={AsideProgressFail.status}
                            description={AsideProgressFail.description}
                        />
                    </section>
                    <AsideProgress data={data && data?.detail_class} />
                </main>
            ) : (
                <Error />
            )}
            <FooterProgress />
        </>
    );
}
export default TryAgain;
