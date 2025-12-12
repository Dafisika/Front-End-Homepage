import AsideProgress from "../../components/asideCollection/AsideProgress";
import Answer from "../../components/asideCollection/Answer";
import AsideQuestion from "../../components/asideCollection/AsideQuestion";
import ButtonProgress from "../../components/button/ButtonProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import ModalImage from "/etc/modal_image.png";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

function Question() {
    const number = 5;
    const question = JSON.parse(localStorage.getItem("quiz"));
    const selectedQuestion = question.find((q) => q.number === number);
    const [answer, setAnswer] = useState(selectedQuestion.answered ?? "");

    function onAnswerChange(e) {
        setAnswer(e.target.value);
    }

    function onNextQuestion() {
        if (answer) {
            const updateAnswer = { ...selectedQuestion, answered: answer };
            const filteredQuestion = question.filter(
                (q) => q.number !== number
            );
            filteredQuestion.push(updateAnswer);

            localStorage.setItem("quiz", JSON.stringify(filteredQuestion));
        }
    }
    return (
        <>
            <NavbarProgress />
            <main className="grid grid-cols-4">
                <AsideQuestion
                    number={selectedQuestion.number}
                    questions={question}
                />
                <section className="flex flex-col justify-between col-span-2 py-9 px-16">
                    <section className="flex flex-col gap-6">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                Pertanyaan {selectedQuestion.number}
                            </h1>
                            <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                {selectedQuestion.question}
                            </p>
                        </div>
                        {selectedQuestion.answer.map((item, index) => (
                            <Answer
                                onChange={onAnswerChange}
                                key={index}
                                answer={item}
                                value={answer}
                            />
                        ))}
                    </section>
                    <ButtonProgress
                        onNext={onNextQuestion}
                        number={selectedQuestion.number}
                        totalQuestion={question.length}
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
