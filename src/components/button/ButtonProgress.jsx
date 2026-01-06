function ButtonProgress(props) {
    const { number, totalQuestion, onNext, onSubmit } = props;
    return (
        <div className="grid grid-cols-2 justify-center gap-4">
            <button
                className={`${
                    number === 1
                        ? "bg-[#EEEEEE] border-[#3A354161] text-[#3A354161]"
                        : number > 1
                        ? "bg-white border border-[#3ECF4C] text-[#3ECF4C]"
                        : null
                } flex h-full text-center outline-none rounded-[10px] py-2.5 justify-center gap-2 pointer font-bold text-base font-DMSans`}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill="#3ECF4C"
                    />
                </svg>
                Sebelumnya
            </button>
            <button
                onClick={totalQuestion >= number + 1 ? onNext : onSubmit}
                className={`${
                    number + 1 <= totalQuestion
                        ? "bg-[#3ECF4C] text-white"
                        : "bg-[#FFBD3A] text-white"
                } h-full text-center outline-none rounded-[10px] justify-center pointer font-bold text-base font-DMSans flex items-end gap-2 py-2.5`}
            >
                {totalQuestion >= number + 1 ? "Selanjutnya" : "Selesai"}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
}
export default ButtonProgress;
