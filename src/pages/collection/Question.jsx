import AsideProgress from "../../components/aside/AsideProgress";
import AsideQuestion from "../../components/aside/AsideQuestion";
import Button from "../../components/button/Button";
import ButtonProgress from "../../components/button/ButtonProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import Questions from "../../data/Question.json";

function Question() {
    const question = Questions[0];

    return (
        <>
            <NavbarProgress />
            <main className="grid grid-cols-4">
                <aside className="flex flex-col col-span-1 border border-[#3A35411F] px-9 pt-[18px] pb-6 gap-[18px]">
                    <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                        List Soal
                    </p>
                    <div className="flex justify-between ">
                        <div className="bg-[#FEE8D2CC] w-[46px] h-[46px] flex items-center justify-center border border-[#F64920] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                1
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                2
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                3
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                4
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                5
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                6
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                7
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                8
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                9
                            </button>
                        </div>
                        <div className="bg-white w-[46px] h-[46px] flex items-center justify-center border border-[#3A35411F] rounded-sm">
                            <button className=" font-bold text-base text-text-dark-primary leading-[140%] tracking-[0.2px] ">
                                10
                            </button>
                        </div>
                    </div>
                    <div className="py-4 px-4 bg-[#EBF9FE] border border-[#0980E2] rounded-[5px]">
                        <p className="font-poppins! font-normal text-sm text-[#0980E2] leading-5">
                            Selesaikan semua soal untuk mengakhiri quiz
                        </p>
                    </div>
                </aside>
                <section className="flex flex-col justify-between col-span-2 py-9 px-16">
                    <section className="flex flex-col gap-6">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                {question.number}
                            </h1>
                            <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                {question.question}
                            </p>
                        </div>
                        {question.answer.map((item, index) => (
                            <AsideQuestion key={index} answer={item} />
                        ))}
                    </section>
                    <ButtonProgress
                        number={question.number}
                        totalQuestion={Questions.length}
                    />
                </section>
                <AsideProgress />
            </main>
            <FooterProgress />
        </>
    );
}
export default Question;
