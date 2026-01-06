import AsideProgress from "../../components/asideCollection/AsideProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import congratulation from "/etc/congratulation.png";
import AsideProgressDone from "../../data/AsideProgressDone.json";
import QuestionIsDone from "../../components/collection/QuestionIsDone";
import ModalReview from "../../components/modal/ModalReview";
import { apiClient } from "../../../library/apiClient";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Congrats() {
    const [modal, setModal] = useState(false);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchData = async () => {
        try {
            const response = await apiClient.get("/class");
            console.log(response);
            if (!response.status === 200) {
                throw new Error(`HTTP Error! Status: $(response.status)`);
            }
            const data = await response.data;

            console.log("Fetch Modern (console): Data Berhasil Di Ambil", data);
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

    function onModal() {
        setModal(!modal);
        if (!modal) {
            window.scrollTo({ top: 0, left: 0 });
            document.body.style.overflow = "hidden";
        } else if (modal) {
            document.body.style.overflow = "";
        }
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavbarProgress notCompleted />
            {!error ? (
                <main className="grid grid-cols-3">
                    <section className="flex flex-col col-span-2">
                        <img src={congratulation} alt="" />
                        <QuestionIsDone
                            title={AsideProgressDone.title}
                            date={AsideProgressDone.date}
                            data={AsideProgressDone.data}
                            type={AsideProgressDone.data.type}
                            score={AsideProgressDone.data.score}
                            status={AsideProgressDone.status}
                            description={AsideProgressDone.description}
                        />
                    </section>

                    <AsideProgress
                        data={data && data?.detail_class}
                        onReview={onModal}
                    />
                </main>
            ) : (
                <Error />
            )}
            <FooterProgress />
            {modal && <ModalReview onClose={onModal} onSubmit={onModal} />}
        </>
    );
}
export default Congrats;
