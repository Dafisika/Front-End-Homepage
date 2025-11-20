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

function All() {
    return (
        <>
            <Navbar account={true} />
            <main className="flex flex-col justify-center py-16 px-30 gap-9 ">
                <header className="flex flex-col w-full h-full gap-2.5 ">
                    <h1 className="font-poppins font-semibold text-[32px] leading-[110%] text-[#222325]">
                        Koleksi Video Pembelajaran Unggulan
                    </h1>
                    <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                    </p>
                </header>
                <div className="w-full flex gap-[42px]">
                    <aside className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-5 gap-4">
                        <div className="flex justify-between">
                            <p className="font-poppins font-semibold text-[18px] leading-[120%] text-[#333333AD]">
                                Filter
                            </p>
                            <p className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B]">
                                Reset
                            </p>
                        </div>
                        <div className="flex flex-col border border-[#3A35411F] rounded-[10px] py-3 px-4 gap-[18px]">
                            <div className="flex gap-4 text-[#3ECF4C] items-center">
                                <div className="w-6 h-6">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                            {" "}
                                            <path
                                                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
                                                stroke="#3ECF4C"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                </div>

                                <p className="w-[214px] h-[22px] font-medium text-base leading-[140%] tracing-[0.2%]">
                                    Bidang Studi
                                </p>
                                <div className="-rotate-90">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        className="arrow"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                                d="M9 6L15 12L9 18"
                                                stroke="#3ECF4C"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Pemasaran
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Digital & Teknologi
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Pengembangan Diri
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Bisnis Manajemen
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-[#3A35411F] rounded-[10px] py-3 px-4 gap-[18px]">
                            <div className="flex gap-4 text-[#3ECF4C] items-center">
                                <div className="w-6 h-6">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8M3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8036C21 17.9215 21 18.4805 20.7822 18.9079C20.5905 19.2842 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20H6.19691C5.07899 20 4.5192 20 4.0918 19.7822C3.71547 19.5905 3.40973 19.2842 3.21799 18.9079C3 18.4801 3 17.9203 3 16.8002Z"
                                            stroke="#3ECF4C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <p className="w-[214px] h-[22px] font-medium text-base leading-[140%] tracing-[0.2%]">
                                    Harga
                                </p>
                                <div className="-rotate-90">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        className="arrow"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                                d="M9 6L15 12L9 18"
                                                stroke="#3ECF4C"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Pemasaran
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Digital & Teknologi
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Pengembangan Diri
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-sm"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Bisnis Manajemen
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-[#3A35411F] rounded-[10px] py-3 px-4 gap-[18px]">
                            <div className="flex gap-4 text-[#3ECF4C] items-center">
                                <div className="w-6 h-6">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                            stroke="#3ECF4C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <p className="w-[214px] h-[22px] font-medium text-base leading-[140%] tracing-[0.2%]">
                                    Durasi
                                </p>
                                <div className="-rotate-90">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        className="arrow"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                                d="M9 6L15 12L9 18"
                                                stroke="#3ECF4C"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-full"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Kurang dari 4 Jam
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-full"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        4 - 8 Jam
                                    </label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-6 h-6 items-center justify-center">
                                        <input
                                            className="w-[18px] h-[18px] appearance-none border border-[#3ECF4C] rounded-full"
                                            type="checkbox"
                                        />
                                    </div>

                                    <label
                                        className="font-normal text-base text-[#333333AD] leading-[140%] tracing-[0.2%]"
                                        htmlFor=""
                                    >
                                        Lebih dari 8 Jam
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article className="w-full flex flex-col gap-8">
                        <div className="w-full flex justify-end gap-4 items-center">
                            <div className="flex gap-3 ">
                                <div className="flex h-12 border border-[#3A35411F] rounded-[10px] py-3 px-3 gap-2">
                                    <button className="flex items-center text-[#333333AD] rounded-[10px]  gap-2">
                                        Urutkan
                                        <svg
                                            className=""
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                {" "}
                                                <title>drop-down</title>{" "}
                                                <desc>
                                                    Created with sketchtool.
                                                </desc>{" "}
                                                <g
                                                    id="directional"
                                                    stroke="none"
                                                    stroke-width="1"
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                >
                                                    {" "}
                                                    <g
                                                        id="drop-down"
                                                        fill="#333333AD"
                                                    >
                                                        {" "}
                                                        <polygon
                                                            id="Shape"
                                                            points="5 8 12 16 19 8"
                                                        >
                                                            {" "}
                                                        </polygon>{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex  gap-[3px]">
                                <div className="flex h-12 border border-[#3A35411F] rounded-[10px] py-3 px-3 gap-2">
                                    <input
                                        className="flex items-center placeholder:text-[#333333AD] gap-2"
                                        type="text"
                                        placeholder="Cari Kelas"
                                    />
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                            {" "}
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                                                fill="#333333AD"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <section></section>
                    </article>
                </div>
            </main>
        </>
    );
}
export default All;
