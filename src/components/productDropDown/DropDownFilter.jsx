import { useState } from "react";

function DropDownFilter() {
    const [dropDownFilter, setDropDownFilter] = useState(false);

    return (
        <div className="w-full flex justify-end gap-4 items-center">
            <div className="flex gap-3 ">
                <div className="relative flex h-12 border border-[#3A35411F] rounded-[10px] py-3 px-3 gap-2">
                    <button
                        onClick={() => setDropDownFilter(!dropDownFilter)}
                        className="flex items-center text-[#333333AD] rounded-[10px]  gap-2"
                    >
                        Urutkan
                        <svg
                            className={`
                            ${dropDownFilter ? "" : "-rotate-90"}
                        transition-all duration-300`}
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>drop-down</title>{" "}
                                <desc>Created with sketchtool.</desc>{" "}
                                <g
                                    id="directional"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    {" "}
                                    <g id="drop-down" fill="#333333AD">
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
                    {dropDownFilter && (
                        <div className="absolute top-15 right-0 bg-white w-[156px] h-[248px] flex flex-col border border-[#3E434A26] rounded-[10px] py-3.5 px-1">
                            <p className=" bg-[#F4F5FA] h-10 px-3 py-2.5 font-medium text-sm leading-[140%] tracking-[0.2%] text-text-dark-primary">
                                Harga Rendah
                            </p>
                            <p className="h-10 px-3 py-2.5 font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                Harga Tinggi
                            </p>
                            <p className="h-10 px-3 py-2.5 font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                A to Z
                            </p>
                            <p className="h-10 px-3 py-2.5 font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                Z to A
                            </p>
                            <p className="h-10 px-3 py-2.5 font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                Rating Tertinggi
                            </p>
                            <p className="h-10 px-3 py-2.5 font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                Rating Terendah
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex gap-[3px]">
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
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
    );
}
export default DropDownFilter;
