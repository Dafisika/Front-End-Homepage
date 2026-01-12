import AsideProgress from "../../components/asideCollection/AsideProgress";
import Button from "../../components/button/Button";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import Rule from "/etc/rules.png";
import AsideProgressData from "../../components/asideCollection/AsideProgressData";
import Class from "../../data/Class.json";
import { useEffect } from "react";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchClassByIdAsync } from "../../redux/class/slice";
import { useDispatch, useSelector } from "react-redux";

function Rules() {
    const question = Class;
    function onStoreData() {
        const quiz = localStorage.getItem("quiz");
        if (!quiz) {
            localStorage.setItem(
                "quiz",
                JSON.stringify(question.map((q) => ({ ...q, answered: "" })))
            );
        }
    }

    const dispatch = useDispatch();
    const { detail, error, isLoading } = useSelector((state) => state.class);

    useEffect(() => {
        dispatch(fetchClassByIdAsync());
    }, [dispatch]);

    if (isLoading) {
        <Loading />;
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <NavbarProgress data={detail && detail?.data?.detail_class} />
            {!error ? (
                <main className="grid grid-cols-3">
                    <section className="flex flex-col col-span-2">
                        <img src={Rule} alt="" />
                        <section className="flex flex-col py-9 px-30 gap-6">
                            <div className="flex flex-col gap-6">
                                <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                    Aturan
                                </h1>
                                <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    Pelajari dan praktikkan skill teknis dalam
                                    berbagai industri dengan Technical Book
                                    Riselearn
                                </p>
                                <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    Syarat Nilai Kelulusan: -
                                </p>
                                <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    Durasi Ujian: 5 Menit
                                </p>
                                <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    Jangan khawatir, total skor tidak akan
                                    memengaruhi kelulusan dan penilaian akhirmu
                                    dalam rangkaian kelas ini
                                </p>
                            </div>
                            <div className="">
                                <Button
                                    onClick={onStoreData}
                                    text="Mulai Pre-Test"
                                    customStyle="bg-[#3ecf4c] text-white"
                                />
                            </div>
                        </section>
                    </section>
                    <AsideProgress
                        data={detail && detail?.data?.detail_class}
                    />
                </main>
            ) : (
                <Error />
            )}
            <FooterProgress />
        </>
    );
}
export default Rules;
