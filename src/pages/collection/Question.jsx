import AsideProgress from "../../components/asideCollection/AsideProgress";
import Answer from "../../components/asideCollection/Answer";
import AsideQuestion from "../../components/asideCollection/AsideQuestion";
import ButtonProgress from "../../components/button/ButtonProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import Questions from "../../data/Question.json";
import ModalImage from "/etc/modal_image.png";
import Modal from "../../components/modal/Modal";

function Question() {
    const question = Questions[2];

    return (
        <>
            <NavbarProgress />
            <main className="grid grid-cols-4">
                <AsideQuestion number={question.number} />
                <section className="flex flex-col justify-between col-span-2 py-9 px-16">
                    <section className="flex flex-col gap-6">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                Pertanyaan {question.number}
                            </h1>
                            <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                {question.question}
                            </p>
                        </div>
                        {question.answer.map((item, index) => (
                            <Answer key={index} answer={item} />
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
            {/* <Modal ModalImage={ModalImage} /> */}
        </>
    );
}
export default Question;
