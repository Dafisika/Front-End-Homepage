import Questions from "../../data/Question.json";

function AsideQuestion(props) {
    const { number } = props;

    return (
        <aside className="flex flex-col col-span-1 border border-[#3A35411F] px-9 pt-[18px] pb-6 gap-[18px]">
            <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                List Soal
            </p>
            <div className="grid grid-cols-5 ">
                {Questions.map((item, index) => (
                    <div
                        key={index}
                        className={`${
                            item.number === number
                                ? "bg-[#FEE8D2CC] border border-[#F64920]"
                                : "bg-white border border-[#3A35411F]"
                        } w-[46px] h-[46px] flex items-center justify-center relative rounded-sm`}
                    >
                        {item.number < number && (
                            <svg
                                className="absolute top-0 right-0"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5238 17.5238L0 0H13.1429C15.5624 0 17.5238 1.96142 17.5238 4.38095V17.5238Z"
                                    fill="#FFBD3A"
                                />
                            </svg>
                        )}
                        <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                            {item.number}
                        </button>
                    </div>
                ))}
            </div>

            <div className="py-4 px-4 bg-[#EBF9FE] border border-[#0980E2] rounded-[5px]">
                <p className="font-poppins! font-normal text-sm text-[#0980E2] leading-5">
                    Selesaikan semua soal untuk mengakhiri quiz
                </p>
            </div>
        </aside>
    );
}
export default AsideQuestion;
