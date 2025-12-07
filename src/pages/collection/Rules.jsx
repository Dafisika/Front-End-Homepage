import AsideProgress from "../../components/asideCollection/AsideProgress";
import Button from "../../components/button/Button";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import Rule from "/etc/rules.png";
import AsideData from "../../data/AsideProgress.json";
import AsideProgressData from "../../components/asideCollection/AsideProgressData";

function Rules() {
    return (
        <>
            <NavbarProgress />
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
                                text="Mulai Pre-Test"
                                customStyle="bg-[#3ecf4c] text-white"
                            />
                        </div>
                    </section>
                </section>
                <AsideProgress />
            </main>
            <FooterProgress />
        </>
    );
}
export default Rules;
