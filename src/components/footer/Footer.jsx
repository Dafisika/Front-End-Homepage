import { useEffect } from "react";
import { useState } from "react";

function Footer() {
    const [accordion, setAccordion] = useState({ isOpen: false, id: "" });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.innerWidth;
        if (media < 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [setIsMobile]);

    return (
        <footer className="flex flex-col w-full  bg-white  border-t border-[#3a35411f] xl:py-15  xl:px-30 gap-4 xl:gap-5 p-5 ">
            <div className="flex max-md:flex-col xl:justify-between gap-4 ">
                <section className="flex flex-col h-full gap-4">
                    <img
                        className="w-60 h-auto"
                        src="/logo/videobelajar.png"
                        alt=""
                    />
                    <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                        Gali Potensi Anda Melalui Pembelajaran Video di
                        hariesok.id
                    </p>
                    <p className="font-normal text-base leading-[140%] tracking-[0.2%] text-[3a3541ad]">
                        Jl. Usman Effendi No. 50 Lowokwaru, Malang
                    </p>
                    <p className="number">+62-877-7123-1234</p>
                </section>

                <section className="flex max-md:flex-col xl:gap-12 gap-3">
                    <div className="flex flex-col xl:gap-[15px] gap-3">
                        <div
                            onClick={() =>
                                setAccordion({ isOpen: true, id: "kategori" })
                            }
                            className="flex justify-between items-center"
                        >
                            <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                                Kategori
                            </p>
                            {isMobile && (
                                <svg
                                    className={
                                        accordion.isOpen === true &&
                                        accordion.id === "kategori"
                                            ? "rotate-90"
                                            : null
                                    }
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                                        fill="#3A3541"
                                        fill-opacity="0.54"
                                    />
                                </svg>
                            )}
                        </div>
                        {accordion.isOpen === true &&
                        accordion.id === "kategori" &&
                        isMobile ? (
                            <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                                <a href="">Digital & Teknologi</a>
                                <a href="">Pemasaran</a>
                                <a href="">Manajemen Bisnis</a>
                                <a href="">Pengembangan Diri</a>
                                <a href="">Desain</a>
                            </div>
                        ) : null}

                        {!isMobile && (
                            <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                                <a href="">Digital & Teknologi</a>
                                <a href="">Pemasaran</a>
                                <a href="">Manajemen Bisnis</a>
                                <a href="">Pengembangan Diri</a>
                                <a href="">Desain</a>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col xl:gap-[15px] gap-3">
                        <div
                            onClick={() =>
                                setAccordion({ isOpen: true, id: "perusahaan" })
                            }
                            className="flex justify-between items-center"
                        >
                            <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                                Perusahaan
                            </p>
                            {isMobile && (
                                <svg
                                    className={
                                        accordion.isOpen === true &&
                                        accordion.id === "perusahaan"
                                            ? "rotate-90"
                                            : null
                                    }
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                                        fill="#3A3541"
                                        fill-opacity="0.54"
                                    />
                                </svg>
                            )}
                        </div>
                        {accordion.isOpen === true &&
                        accordion.id === "perusahaan" &&
                        isMobile ? (
                            <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                                <a href="">Tentang Kami</a>
                                <a href="">FAQ</a>
                                <a href="">Kebijakan Privasi</a>
                                <a href="">Ketentuan Layanan</a>
                                <a href="">Bantuan</a>
                            </div>
                        ) : null}

                        {!isMobile && (
                            <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                                <a href="">Tentang Kami</a>
                                <a href="">FAQ</a>
                                <a href="">Kebijakan Privasi</a>
                                <a href="">Ketentuan Layanan</a>
                                <a href="">Bantuan</a>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col xl:gap-[15px] gap-3">
                        <div
                            onClick={() =>
                                setAccordion({ isOpen: true, id: "komunitas" })
                            }
                            className="flex justify-between items-center"
                        >
                            <p className="flex font-bold text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                                Komunitas
                            </p>
                            {isMobile && (
                                <svg
                                    className={
                                        accordion.isOpen === true &&
                                        accordion.id === "komunitas"
                                            ? "rotate-90"
                                            : null
                                    }
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                                        fill="#3A3541"
                                        fill-opacity="0.54"
                                    />
                                </svg>
                            )}
                        </div>
                        {accordion.isOpen === true &&
                        accordion.id === "komunitas" &&
                        isMobile ? (
                            <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                                <a href="">Tips Sukses</a>
                                <a href="">Blog</a>
                            </div>
                        ) : null}
                        {!isMobile && (
                            <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                                <a href="">Tips Sukses</a>
                                <a href="">Blog</a>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <section className="mt-2.5 border-none text-[#3A35411F]">
                <hr />
            </section>

            <section className="flex max-md:flex-col-reverse justify-between gap-3">
                <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                    {" "}
                    @2023 Gerobak Sayur All Rights Reserved.
                </p>

                <div className="flex gap-[15px]">
                    <div className="w-5 h-5 ">
                        <img src="/icon/linkedin.png" alt="" />
                    </div>
                    <div className="w-5 h-5">
                        <img src="/icon/fb.png" alt="" />
                    </div>
                    <div className="w-5 h-5">
                        <img src="/icon/ig.png" alt="" />
                    </div>
                    <div className="w-5 h-5">
                        <img src="/icon/twitter.png" alt="" />
                    </div>
                </div>
            </section>
        </footer>
    );
}
export default Footer;
