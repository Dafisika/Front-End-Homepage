import Button from "./button/Button";

function Product(props) {
    const { image, isDetailProduct } = props;
    return (
        <aside className="bg-white flex flex-col col-span-1 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
            {image && <img src={image} />}
            <div className="flex flex-col gap-4">
                <p className="font-semibold text-lg leading-[120%] text-text-dark-primary">
                    Gapai Karier Impianmu sebagai Seorang UI/UX Designer &
                    Product Manager.
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <p className="font-semibold text-lg leading-[120%] text-[#3ECF4C]">
                            Rp 250K
                        </p>
                        <p className="font-semibold text-lg leading-[120%] text-[#3A354161] line-through">
                            Rp 500K
                        </p>
                    </div>
                    <div className="bg-[#FFBD3A] flex border-none rounded-[10px] py-1 px-2.5 gap-1 ">
                        <p className="font-normal text-xs leading-[140%] tracking-[0.2%] text-white">
                            Diskon 50%
                        </p>
                    </div>
                </div>
                {isDetailProduct && (
                    <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#0980E2]">
                        Penawaran spesial tersisa 2 hari lagi!
                    </p>
                )}
            </div>
            <div className="w-full">
                {isDetailProduct && (
                    <Button
                        text="Bayar Sekarang"
                        customStyle="bg-[#3ecf4c] w-full text-white"
                    />
                )}
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-poppins font-semibold text-sm leading-[140%] tracking-[0.2%] text-text-dark-primary">
                    Kelas Ini Sudah Termasuk
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
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

                        <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                            Ujian Akhir
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
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

                        <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                            7 Dokumen
                        </p>
                    </div>
                    <div className="flex  items-center gap-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 11.0002V6.2002C6 5.08009 6 4.51962 6.21799 4.0918C6.40973 3.71547 6.71547 3.40973 7.0918 3.21799C7.51962 3 8.08009 3 9.2002 3H13.6747C13.7973 3 13.9045 3 14 3.00087M19.9991 9C20 9.09561 20 9.20296 20 9.32568V17.8036C20 18.9215 20 19.4805 19.7822 19.9079C19.5905 20.2842 19.2839 20.5905 18.9076 20.7822C18.4802 21 17.921 21 16.8031 21L13 21M19.9991 9C19.9963 8.71451 19.9857 8.53376 19.9443 8.36133C19.8953 8.15726 19.8142 7.96214 19.7046 7.7832C19.5809 7.58136 19.4089 7.40889 19.063 7.06298L15.9375 3.9375C15.5918 3.59182 15.4186 3.41857 15.2168 3.29492C15.0379 3.18526 14.8429 3.10425 14.6388 3.05526C14.4663 3.01385 14.2856 3.00347 14 3.00087M19.9991 9H20.0002M19.9991 9H17.1969C16.079 9 15.5192 9 15.0918 8.78223C14.7155 8.59048 14.4097 8.28392 14.218 7.90759C14 7.47977 14 6.9201 14 5.8V3.00087M9 14L11 16M4 21V18.5L11.5 11L14 13.5L6.5 21H4Z"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                            Preset
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
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
                                d="M15 10.0001L19.553 7.72412C19.8629 7.56926 20.2309 7.58583 20.5256 7.76792C20.8203 7.95002 20.9998 8.27168 21 8.61812V15.3821C20.9998 15.7286 20.8203 16.0502 20.5256 16.2323C20.2309 16.4144 19.8629 16.431 19.553 16.2761L15 14.0001V10.0001Z"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <rect
                                x="3"
                                y="6"
                                width="12"
                                height="12"
                                rx="2"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                            45 Video
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 3V7C14 7.55228 14.4477 8 15 8H19"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M5 8V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H12"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <circle
                                cx="6"
                                cy="14"
                                r="3"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M4.5 17L3 22L6 20.5L9 22L7.5 17"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                            Sertifikat
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-poppins font-semibold text-sm leading-[140%] tracking-[0.2%] text-[#222325]">
                    Bahasa Pengantar
                </p>
                <div className="flex items-center gap-2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3.6001 9H20.4001"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3.6001 15H20.4001"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.5002 3C8.0631 8.50778 8.0631 15.4922 11.5002 21"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.5 3C15.9371 8.50778 15.9371 15.4922 12.5 21"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333AD]">
                        Bahasa Indonesia
                    </p>
                </div>
            </div>
        </aside>
    );
}
export default Product;
