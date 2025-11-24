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
import Product from "../../components/Product";

function DetailProduct() {
    return (
        <>
            <Navbar account={true} />
            <main className="bg-[#FFFDF3] flex flex-col justify-center py-16 px-30 gap-9">
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
                <article className="grid grid-cols-3 gap-9">
                    <section className="flex flex-col col-span-2 gap-6">
                        <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
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
                        <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
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
                        <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-poppins font-semibold text-xl leading-[120%] text-[#222325]">
                                Kamu Akan Mempelajari
                            </p>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between">
                                        <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                                            Introduction to Course 1:
                                            Foundations of User Experience
                                            Design
                                        </p>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 16L12 9L19 16"
                                                stroke="#333333"
                                                stroke-opacity="0.68"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                        <p className="font-medium text-base text-[#222325] leading-[140%] tracking-[0.2%] ">
                                            The basics of user experience design
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="flex gap-2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M10 15V9L15 12L10 15Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                                    Video
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                                    12 Menit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                        <p className="font-medium text-base text-[#222325] leading-[140%] tracking-[0.2%] ">
                                            Jobs in the field of user experience
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="flex gap-2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M10 15V9L15 12L10 15Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                                    Video
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                                    12 Menit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                        <p className="font-medium text-base text-[#222325] leading-[140%] tracking-[0.2%] ">
                                            The product development life cycle
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="flex gap-2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M10 15V9L15 12L10 15Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                                    Video
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                                        stroke="#333333"
                                                        stroke-opacity="0.68"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                                    12 Menit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                                        Universal design, inclusive design, and
                                        equity-focused design
                                    </p>
                                    <div className="rotate-180">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 16L12 9L19 16"
                                                stroke="#333333"
                                                stroke-opacity="0.68"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                                        Introduction to design sprints
                                    </p>
                                    <div className="rotate-180">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 16L12 9L19 16"
                                                stroke="#333333"
                                                stroke-opacity="0.68"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                                        Introduction to UX research
                                    </p>
                                    <div className="rotate-180">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 16L12 9L19 16"
                                                stroke="#333333"
                                                stroke-opacity="0.68"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-poppins font-semibold text-xl leading-[120%] text-[#222325]">
                                Rating dan Review
                            </p>
                            <div className="bg-white flex gap-4">
                                <div className="flex flex-col border border-[#3A35411F] rounded-[10px] p-5 gap-4">
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex gap-2.5">
                                            <img
                                                className="w-10 h-10 rounded-[10px]"
                                                src="/avatar/Avatar-2.png"
                                            />
                                            <div className="flex flex-col">
                                                <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                                    Gregorius Edrik Lawanto
                                                </p>
                                                <div className="">
                                                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                                        Alumni Batch 2
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

                                                <div className="flex font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                                    <p>3.5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-5 gap-4">
                                    <div className="bg-white flex flex-col gap-2.5">
                                        <div className="flex gap-2.5">
                                            <img
                                                className="w-10 h-10 rounded-[10px]"
                                                src="/avatar/Avatar-2.png"
                                            />
                                            <div className="flex flex-col">
                                                <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                                    Gregorius Edrik Lawanto
                                                </p>
                                                <div className="">
                                                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                                        Alumni Batch 4
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

                                        <div className="flex font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                            <p>3.5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Product isDetailProduct />
                </article>

                <section className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2.5">
                        <p className="font-poppins font-semibold text-[32px] leading-[110%] text-[#222325]">
                            Koleksi Video Pembelajaran Unggulan
                        </p>
                        <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {Article.slice(0, 3).map((item, index) => (
                            <Card
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                avatar={item.user.avatar}
                                name={item.user.name}
                                position={item.user.position}
                                company={item.user.company}
                                rating={item.testimonial.rating}
                                review={item.testimonial.review}
                                price={item.price}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
export default DetailProduct;
