import Logo from "/logo/videobelajar.png";
import Avatar from "/avatar/Avatar.png";

function Navbar(props) {
    const { account, payment } = props;
    return (
        <nav className="flex justify-between items-center py-3 px-30 border-b border-[#3A35411F] gap-9">
            <img src={Logo} />

            {account ? (
                <div className=" flex items-center gap-6">
                    <a className="font-DMSans text-base font-medium tracking-[0.2%] text-[#3a3541ad;] ">
                        Kategori
                    </a>
                    <img className="" src={Avatar} alt="" />
                </div>
            ) : payment ? (
                <div className="flex items-center ">
                    <div className="flex items-center">
                        <div className="flex items-center gap-3 p-3">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26808_11783)">
                                    <rect
                                        x="1.5"
                                        y="1.5"
                                        width="27"
                                        height="27"
                                        rx="13.5"
                                        stroke="#3ECF4C"
                                        stroke-width="3"
                                    />
                                    <rect
                                        x="7"
                                        y="7"
                                        width="16"
                                        height="16"
                                        rx="8"
                                        fill="#3ECF4C"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26808_11783">
                                        <rect
                                            width="30"
                                            height="30"
                                            rx="15"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#222325]">
                                Pilih Metode
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-3">
                        <svg
                            width="75"
                            height="30"
                            viewBox="0 0 75 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="13.5"
                                width="74.5"
                                height="3"
                                fill="#3A3541"
                                fill-opacity="0.38"
                            />
                        </svg>
                        <div className="flex items-center gap-3">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26808_11791)">
                                    <rect
                                        x="1.5"
                                        y="1.5"
                                        width="27"
                                        height="27"
                                        rx="13.5"
                                        stroke="#3A3541"
                                        stroke-opacity="0.38"
                                        stroke-width="3"
                                    />
                                    <rect
                                        x="7"
                                        y="7"
                                        width="16"
                                        height="16"
                                        rx="8"
                                        fill="#3A3541"
                                        fill-opacity="0.38"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26808_11791">
                                        <rect
                                            width="30"
                                            height="30"
                                            rx="15"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#3A354161]">
                                Bayar
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-3">
                        <svg
                            width="75"
                            height="30"
                            viewBox="0 0 75 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="13.5"
                                width="74.5"
                                height="3"
                                fill="#3A3541"
                                fill-opacity="0.38"
                            />
                        </svg>
                        <div className="flex items-center gap-3">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26808_11791)">
                                    <rect
                                        x="1.5"
                                        y="1.5"
                                        width="27"
                                        height="27"
                                        rx="13.5"
                                        stroke="#3A3541"
                                        stroke-opacity="0.38"
                                        stroke-width="3"
                                    />
                                    <rect
                                        x="7"
                                        y="7"
                                        width="16"
                                        height="16"
                                        rx="8"
                                        fill="#3A3541"
                                        fill-opacity="0.38"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26808_11791">
                                        <rect
                                            width="30"
                                            height="30"
                                            rx="15"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#3A354161]">
                                Selesai
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
export default Navbar;
