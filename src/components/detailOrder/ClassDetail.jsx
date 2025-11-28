import Button from "../button/Button";

function ClassDetail(props) {
    const {
        modul,
        status,
        image,
        title,
        description,
        name,
        avatar,
        position,
        company,
        progress,
    } = props;
    return (
        <section className="border border-[#3A35411F] rounded-[10px]">
            <div className="bg-[#E2FCD933] flex items-center justify-between border-b border-[#3A35411F] py-4 px-5">
                <div className="flex gap-2">
                    <p className="font-medium text-base leading-[140%] tracking-[0.2px] text-text-dark-primary">
                        {modul}
                    </p>
                </div>
                <div
                    className={` border-none ${
                        status === "Selesai"
                            ? "bg-[#E0FDDF] text-[#38D189]"
                            : status === "Sedang Berjalan"
                            ? "bg-[#FFF7D7CC] text-[#FFBD3A]"
                            : null
                    } rounded-[10px] py-1 px-2.5`}
                >
                    <p className="font-normal text-base leading-[140%] tracking-[0.2px] rounded-[10px] py-1 px-2.5">
                        {status}
                    </p>
                </div>
            </div>
            <section className="bg-white flex border-b border-[#3A35411F] p-5 gap-9 ">
                <img
                    className="border-none rounded-[10px] w-[172px] h-[172px]"
                    src={image}
                    alt=""
                />
                <div className="flex flex-col gap-4">
                    <section className="flex flex-col gap-4">
                        <h2 className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                            {title}
                        </h2>
                        <p className="font-medium text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                            {description}
                        </p>
                    </section>
                    <section className="flex gap-2.5">
                        <img
                            className="w-10 h-10 rounded-[10px]"
                            src={avatar}
                            alt=""
                        />
                        <div className="flex flex-col">
                            <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%]">
                                {name}
                            </p>
                            <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                {position}{" "}
                                <span className="font-bold text-sm text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                    {company}
                                </span>
                            </p>
                        </div>
                    </section>
                    <section className="flex gap-4">
                        <div className="flex gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16"
                                    stroke="#333333"
                                    stroke-opacity="0.68"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                12 Modul
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
                                360 Menit
                            </p>
                        </div>
                    </section>
                </div>
            </section>
            <div className="bg-[#E2FCD933] flex items-center justify-between py-4 px-5 gap-9  ">
                <div className="w-full flex items-center gap-3">
                    <p className="flex text-nowrap font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2px] gap-1 ">
                        Progres Kelas:{" "}
                        <span className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%]">
                            {progress}%
                        </span>
                    </p>
                    <progress
                        max="100"
                        value="100"
                        className="bg-[#F64920] h-1 w-full"
                    >
                        {" "}
                    </progress>
                </div>
                <div className="flex text-nowrap gap-4">
                    {progress === 100 ? (
                        <>
                            <Button
                                text="Unduh Sertifikat"
                                customStyle="bg-white border! border-[#3ecf4c] text-[#3ecf4c]"
                            />
                            <Button
                                text="Lihat Detail Kelas"
                                customStyle="bg-[#3ecf4c] text-white"
                            />
                        </>
                    ) : (
                        <Button
                            text="Lanjutkan Pembelajaran"
                            customStyle="bg-[#3ecf4c] text-white"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
export default ClassDetail;
