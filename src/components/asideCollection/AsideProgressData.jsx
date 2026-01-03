function AsideProgressData(props) {
    const { category, description, isDone } = props;
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col bg-white hover:bg-[#E2FCD966] active:border active:border-[#3ECF4C]  rounded-[10px] pointer gap-1 p-4">
                <div className="flex gap-1.5">
                    {isDone ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                                fill="#3ECF4C"
                            />
                        </svg>
                    ) : !isDone && category === "Pre-Test" ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 15L11 17L15 13M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002"
                                stroke="#222325"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    ) : !isDone && category === "Video" ? (
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
                    ) : !isDone && category === "Rangkuman" ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19 4V20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H19Z"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M19 16H7C5.89543 16 5 16.8954 5 18"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9 8H15"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    ) : !isDone && category === "Quiz" ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 15L11 17L15 13M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    ) : !isDone && category === "Ujian Akhir" ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 15L11 17L15 13M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002"
                                stroke="#222325"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    ) : null}

                    <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2px]">
                        {category}: Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-text-dark-primary leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div>
            {/* <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] gap-1 p-4">
                <div className="flex gap-1.5">
                    <p className="font-medium text-base text-[#222325] leading-[140%] tracking-[0.2px]">
                        {category} Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] gap-1 p-4">
                <div className="flex gap-1.5">
                    <p className="font-medium text-base text-[#222325] leading-[140%] tracking-[0.2px]">
                        {category} Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] gap-1 p-4">
                <div className="flex gap-1.5">
                    <p className="font-medium text-base text-[#222325] leading-[140%] tracking-[0.2px]">
                        {category} Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] gap-1 p-4">
                <div className="flex gap-1.5">
                    <p className="font-medium text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {category} Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] gap-1 p-4">
                <div className="flex gap-1.5">
                    <p className="font-medium text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {category} Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] gap-1 p-4">
                <div className="flex gap-1.5">
                    <p className="font-medium text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {category} Introduction to HR
                    </p>
                </div>
                <div className="px-[30px]">
                    <p className="font-normal text-sm text-[#333333AD] leading-[140%] tracking-[0.2px]">
                        {description}
                    </p>
                </div>
            </div> */}
        </div>
    );
}
export default AsideProgressData;
