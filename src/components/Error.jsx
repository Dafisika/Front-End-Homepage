function Error() {
    return (
        <section className="flex items-center justify-center h-[80vh]">
            <section className="flex items-center justify-center gap-5 py-4 px-8 bg-[#E2FCD9CC] border border-[#3ECF4C] rounded-[5px]">
                <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#ff0000"
                    stroke="#ff0000"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>error-filled</title>{" "}
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            {" "}
                            <g
                                id="add"
                                fill="#ff0000"
                                transform="translate(42.666667, 42.666667)"
                            >
                                {" "}
                                <path
                                    d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M262.250667,134.250667 L213.333333,183.168 L164.416,134.250667 L134.250667,164.416 L183.168,213.333333 L134.250667,262.250667 L164.416,292.416 L213.333333,243.498667 L262.250667,292.416 L292.416,262.250667 L243.498667,213.333333 L292.416,164.416 L262.250667,134.250667 Z"
                                    id="Combined-Shape"
                                >
                                    {" "}
                                </path>{" "}
                            </g>{" "}
                        </g>{" "}
                    </g>
                </svg>
                <p className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                    Error
                </p>
            </section>
        </section>
    );
}
export default Error;
