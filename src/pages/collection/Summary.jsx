import AsideProgress from "../../components/asideCollection/AsideProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import Media from "/etc/media.png";

function Summary() {
    return (
        <>
            <NavbarProgress progress />
            <main className="grid grid-cols-3">
                <section className="flex flex-col col-span-2">
                    <img src={Media} alt="" />
                    <section className="flex flex-col py-9 px-30 gap-6">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                Download Rangkuman Modul
                            </h1>
                            <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                Silakan download rangkuman modul dari materi
                                yang telah kamu pelajari
                            </p>
                        </div>
                        <button className="w-fit flex items-center gap-2 border border-[#3ECF4C] rounded-[10px] py-2.5 px-[26px] font-bold text-base text-[#3ECF4C] leading-[140%] tracking-[0.2px]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM12 17L8 13H11V9.02L13 9V13H16L12 17Z"
                                    fill="#3ECF4C"
                                />
                            </svg>
                            Download Rangkuman
                        </button>
                    </section>
                </section>
                <AsideProgress />
            </main>
            <FooterProgress />
        </>
    );
}
export default Summary;
