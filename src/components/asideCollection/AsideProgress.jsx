import { useState } from "react";
import AsideProgressData from "./AsideProgressData";
import Class from "../../data/Class.json";

function AsideProgress(props) {
    const { data, onReview } = props;

    const [open, setOpen] = useState(true);

    return (
        <aside className=" flex-col col-span-1  border border-[#3A35411F]">
            <section className="border border-[#3A35411F] pt-6 pb-5 ps-[30px] pe-[34px]">
                <p className="font-poppins! font-semibold text-lg text-text-dark-primary leading-[120%]">
                    Daftar Modul
                </p>
            </section>
            <section className="py-6 px-9">
                <div className="flex flex-col gap-6">
                    <div
                        onClick={() => setOpen(!open)}
                        className="flex items-center justify-between"
                    >
                        <p className="font-poppins! font-semibold text-lg text-text-dark-primary leading-[120%]">
                            Introduction to HR
                        </p>
                        <svg
                            className={`
                            ${open ? "" : "-rotate-180"}
                        transition-all duration-300`}
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
                    {open &&
                        data?.map((item, index) => (
                            <AsideProgressData
                                key={index}
                                title={item.title}
                                category={item.category}
                                description={item.description}
                                isDone={item.isDone}
                            />
                        ))}
                    <div className="flex items-center justify-between">
                        <p className="font-poppins! font-semibold text-lg text-text-dark-primary leading-[120%]">
                            Introduction to HR
                        </p>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 9L12 16L5 9"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </section>
            <button
                onClick={onReview}
                className="bg-[#FFBD3A] w-full bottom-0 right-0 flex border border-[#3A35411F] py-4 px-9 gap-2"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99986 14.7917L4.85653 17.4958L5.83903 11.7683L1.67236 7.7125L7.42236 6.87917L9.99403 1.66833L12.5657 6.87917L18.3157 7.7125L14.149 11.7683L15.1315 17.4958L9.99986 14.7917Z"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <p className="font-bold text-base text-white leading-[120%]">
                    Beri Review & Rating
                </p>
            </button>
        </aside>
    );
}
export default AsideProgress;
