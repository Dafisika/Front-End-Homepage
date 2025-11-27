function Pagination() {
    return (
        <div className="flex border-none rounded-sm p-2 gap-1.5 justify-end">
            <div className="flex items-center bg-[#F4F5FA] w-10 h-10 p-2">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                        fill="#222325"
                    />
                </svg>
            </div>
            <div className="flex justify-center w-10 h-10 bg-[#FFBD3A] text-white border-none rounded-sm p-2">
                1
            </div>
            <div className="w-10 h-10 bg-white text-[#333333AD] border-none rounded-sm p-2">
                2
            </div>
            <div className="w-10 h-10 bg-white text-[#333333AD] border-none rounded-sm p-2">
                3
            </div>
            <div className="w-10 h-10 bg-white text-[#333333AD] border-none rounded-sm p-2">
                4
            </div>
            <div className="w-10 h-10 bg-white text-[#333333AD] border-none rounded-sm p-2">
                5
            </div>
            <div className="w-10 h-10 bg-white text-[#333333AD] border-none rounded-sm p-2">
                6
            </div>
            <div className="bg-[#F4F5FA] w-10 h-10 border-none rounded-sm p-2 items-center rotate-180">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                        fill="#222325"
                    />
                </svg>
            </div>
        </div>
    );
}
export default Pagination;
