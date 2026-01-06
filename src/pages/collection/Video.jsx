import NavbarProgress from "../../components/navbar/NavbarProgress";
import Media from "/etc/media.png";
import Avatar1 from "/avatar/Avatar-1.png";
import FooterProgress from "../../components/footer/FooterProgress";
import AsideProgress from "../../components/asideCollection/AsideProgress";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { apiClient } from "../../../library/apiClient";

function Video() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        <Loading />;
    }

    return (
        <>
            <NavbarProgress data={data && data?.detail_class} />
            {!error ? (
                <main className="grid grid-cols-3 ">
                    <section className="flex flex-col col-span-2">
                        <img src={Media} alt="" />
                        <section className="flex flex-col py-9 px-30 gap-6">
                            <div className="flex flex-col gap-6">
                                <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                    Praktikkan Skill dengan Technical Book
                                </h1>
                                <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    Pelajari dan praktikkan skill teknis dalam
                                    berbagai industri dengan Technical Book
                                    Riselearn
                                </p>
                            </div>
                            <div className="flex gap-2.5">
                                <img
                                    className="w-10 h-10 rounded-[10px]"
                                    src={Avatar1}
                                />
                                <div className="">
                                    <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                                        Jenna Ortega
                                    </p>
                                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                        Senior Accountant di{" "}
                                        <span className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                            Gojek
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
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

                                    <div className="flex font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333ad] underline decoration-solid">
                                        <p>3.5 (86)</p>
                                    </div>
                                </div>
                            </div>
                        </section>
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
export default Video;
