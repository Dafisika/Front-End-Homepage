import Logo from "/logo/videobelajar.png";
import Avatar from "/avatar/Avatar.png";

function NavbarProgress(props) {
    const { progress } = props;
    return (
        <nav className="relative flex justify-between items-center py-[18px] px-30 border-b border-[#3A35411F] gap-9">
            <div className="flex items-center gap-3">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill="#333333"
                        fill-opacity="0.68"
                    />
                </svg>
                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2px]">
                    Foundations of User Experience Design
                </p>
            </div>

            {progress ? (
                <div className="flex items-center gap-4">
                    <progress
                        max="12"
                        value="10"
                        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-[#FFF7D7CC] [&::-webkit-progress-value]:bg-[#FFBD3A] [&::-moz-progress-bar]:bg-violet-400"
                    >
                        {" "}
                    </progress>
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-base text-[#3ECF4C] leading-[140%] tracking-[0.2px]">
                            10/12
                        </p>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                                fill="#3ECF4C"
                            />
                        </svg>
                    </div>
                </div>
            ) : null}
            {/* <div
                className="absolute top-20 right-30 shadow-[0px_12px_25px_-10px_rgba(61,61,61,0.15)]
"
            >
                <div className="bg-white w-100 h-[193px] flex flex-col rounded-4px p-6 gap-3 ">
                    <p className="font-poppins! font-semibold text-lg text-text-dark-primary leading-[120%]">
                        25% Modul Telah Selesai
                    </p>
                    <hr className="border border-[#3A35411F]" />
                    <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
                    </p>
                    <button className="bg-[#BDBDBD] font-bold text-base text-[#3A354161] leading-[140%] tracking-[0.2px] rounded-[10px] py-2.5 px-[26px] ">
                        Ambil Sertifikat{" "}
                    </button>
                </div>
            </div> */}
        </nav>
    );
}
export default NavbarProgress;
