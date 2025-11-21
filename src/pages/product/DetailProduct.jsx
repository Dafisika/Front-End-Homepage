import Logo from "/logo/videobelajar.png";
import Avatar from "/avatar/Avatar.png";
import IconFb from "/icon/fb.png";
import IconIg from "/icon/ig.png";
import IconLinkedin from "/icon/linkedin.png";
import IconTwitter from "/icon/twitter.png";
import Card1 from "/cover/card-1.png";
import Avatar1 from "/avatar/Avatar-1.png";
import Article from "../../data/Article.json";
import Footer from "../../components/Footer";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner";
import Button from "../../components/button/Button";

function DetailProduct() {
    return (
        <>
            <Navbar account={true} />
            <main className="flex flex-col justify-center py-16 px-30 gap-9">
                <header className="flex gap-1">
                    <a
                        className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%] "
                        href=""
                    >
                        Beranda
                    </a>
                    <p className="text-[#333333AD]">/</p>
                    <a
                        className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%] "
                        href=""
                    >
                        Desain
                    </a>
                    <p className="text-[#333333AD]">/</p>
                    <a className="font-normal text-base text-[#222325] leading-[140%] tracking-[0.2%] ">
                        Gapai Karier Impianmu sebagai Seorang UI/UX Designer &
                        Product Manager.
                    </a>
                </header>
                <div className="relative">
                    <Banner>
                        <div className="flex flex-col justify-start gap-3">
                            <div className="flex flex-col  gap-3">
                                <h1 className="font-poppins! font-semibold text-[40px] line leading-[110.00000000000001%] text-start text-white">
                                    Gapai Karier Impianmu sebagai Seorang UI/UX
                                    Designer & Product Manager.
                                </h1>
                                <p className="font-medium text-base leading-[140%] text-start text-white">
                                    Belajar bersama tutor profesional di Video{" "}
                                    <br />
                                    Course. Kapanpun, di manapun.
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <div className="flex gap-2">
                                    <div className="flex ">
                                        <div className="flex">
                                            <svg
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="w-[18px] h-[18px]"
                                                preserveAspectRatio="xMidYMid meet"
                                                fill="#000000"
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                                        fill="#ffce31"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <svg
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="w-[18px] h-[18px]"
                                                preserveAspectRatio="xMidYMid meet"
                                                fill="#000000"
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                                        fill="#ffce31"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <svg
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="w-[18px] h-[18px]"
                                                preserveAspectRatio="xMidYMid meet"
                                                fill="#000000"
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                                        fill="#ffce31"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <svg
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="w-[18px] h-[18px]"
                                                preserveAspectRatio="xMidYMid meet"
                                                fill="#c4c4c4"
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                                        fill="#c4c4c4"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <svg
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="w-[18px] h-[18px]"
                                                preserveAspectRatio="xMidYMid meet"
                                                fill="#c4c4c4"
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                                        fill="#c4c4c4"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex font-medium text-sm leading-[140%] tracking-[0.2%] text-[#C1C2C4] underline decoration-solid">
                                        <p>3.5 (86)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Banner>
                </div>
                <article className="grid grid-cols-3  gap-9">
                    <section className="flex flex-col col-span-2  gap-6">
                        <div className="flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-semibold text-xl leading-[120%] text-[#222325]">
                                Deskripsi
                            </p>
                            <p className="font-normal text-base leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                Foundations of User Experience (UX) Design
                                adalah yang pertama dari rangkaian tujuh kursus
                                yang akan membekali Anda dengan keterampilan
                                yang dibutuhkan untuk melamar pekerjaan tingkat
                                pemula dalam desain pengalaman pengguna.
                                Desainer UX fokus pada interaksi yang dilakukan
                                orang dengan produk seperti situs web, aplikasi
                                seluler, dan objek fisik. Desainer UX membuat
                                interaksi sehari-hari itu dapat digunakan,
                                menyenangkan, dan dapat diakses. Peran seorang
                                desainer UX tingkat pemula mungkin termasuk
                                berempati dengan pengguna, menentukan poin rasa
                                sakit mereka, memunculkan ide untuk solusi
                                desain, membuat wireframe, prototipe, dan maket,
                                dan menguji desain untuk mendapatkan umpan
                                balik.
                            </p>
                        </div>
                        <div className="flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-semibold text-xl leading-[120%] text-[#222325]">
                                Belajar bersama Tutor Profesional
                            </p>
                            <div className="flex gap-4">
                                <div className="flex flex-col border border-[#3A35411F] rounded-[10px] p-5 gap-4">
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex gap-2.5">
                                            <img
                                                className="w-10 h-10 rounded-[10px]"
                                                src="/avatar/Avatar-1.png"
                                            />
                                            <div className="flex flex-col">
                                                <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                                    Gregorius Edrik Lawanto
                                                </p>
                                                <div className="">
                                                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                                        Senior Talent
                                                        Acquisition di{" "}
                                                        <span className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                                            WingsGroup
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-normal text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                                Berkarier di bidang HR selama
                                                lebih dari 3 tahun. Saat ini
                                                bekerja sebagai Senior Talent
                                                Acquisition Specialist di Wings
                                                Group Indonesia (Sayap Mas
                                                Utama) selama hampir 1 tahun.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-[#3A35411F] rounded-[10px] p-5 gap-4">
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex gap-2.5">
                                            <img
                                                className="w-10 h-10 rounded-[10px]"
                                                src="/avatar/Avatar-1.png"
                                            />
                                            <div className="flex flex-col">
                                                <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                                    Gregorius Edrik Lawanto
                                                </p>
                                                <div className="">
                                                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                                        Senior Talent
                                                        Acquisition di{" "}
                                                        <span className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                                            WingsGroup
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-normal text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                                Berkarier di bidang HR selama
                                                lebih dari 3 tahun. Saat ini
                                                bekerja sebagai Senior Talent
                                                Acquisition Specialist di Wings
                                                Group Indonesia (Sayap Mas
                                                Utama) selama hampir 1 tahun.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-semibold text-xl leading-[120%] text-[#222325]">
                                Kamu Akan Mempelajari
                            </p>
                        </div>
                        <div className=""></div>
                    </section>

                    <aside className=" flex flex-col col-span-1 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                        <div className="">
                            <p className="font-semibold text-lg leading-[120%] text-[#222325]">
                                Gapai Karier Impianmu sebagai Seorang UI/UX
                                Designer & Product Manager.
                            </p>
                        </div>
                        <div className=""></div>
                        <Button
                            text="Beli Sekarang"
                            customStyle="bg-[#3ecf4c] text-white"
                        />
                        <div className=""></div>
                    </aside>
                </article>
            </main>
        </>
    );
}
export default DetailProduct;
