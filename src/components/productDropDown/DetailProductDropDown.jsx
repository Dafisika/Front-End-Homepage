import { useState } from "react";

function DetailProductDropDown() {
    const [courseOne, setCourseOne] = useState(false);
    const [courseTwo, setCourseTwo] = useState(false);
    const [courseThree, setCourseThree] = useState(false);
    const [courseFour, setCourseFour] = useState(false);
    return (
        <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
            <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                Kamu Akan Mempelajari
            </p>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <div
                        onClick={() => setCourseOne(!courseOne)}
                        className="flex justify-between"
                    >
                        <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                            Introduction to Course 1: Foundations of User
                            Experience Design
                        </p>
                        <svg
                            className={`
                            ${courseOne ? "" : "-rotate-180"}
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
                    {courseOne && (
                        <div className="flex flex-col gap-3">
                            <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <div
                        onClick={() => setCourseTwo(!courseTwo)}
                        className="flex justify-between"
                    >
                        <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                            Universal design, inclusive design, and
                            equity-focused design
                        </p>
                        <div>
                            <svg
                                className={`
                            ${courseTwo ? "" : "-rotate-180"}
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
                    </div>
                    {courseTwo && (
                        <div className="flex flex-col gap-3">
                            <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <div
                        onClick={() => setCourseThree(!courseThree)}
                        className="flex justify-between"
                    >
                        <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                            Introduction to design sprints
                        </p>
                        <div>
                            <svg
                                className={`
                            ${courseThree ? "" : "-rotate-180"}
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
                    </div>
                    {courseThree && (
                        <div className="flex flex-col gap-3">
                            <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <div
                        onClick={() => setCourseFour(!courseFour)}
                        className="flex justify-between"
                    >
                        <p className="font-poppins font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                            Introduction to UX research
                        </p>
                        <div>
                            <svg
                                className={`
                            ${courseFour ? "" : "-rotate-180"}
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
                    </div>
                    {courseFour && (
                        <div className="flex flex-col gap-3">
                            <div className="bg-white flex justify-between border border-[#3A35411F] rounded-[10px] p-5 ">
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2%] ">
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
                    )}
                </div>
            </div>
        </div>
    );
}
export default DetailProductDropDown;
