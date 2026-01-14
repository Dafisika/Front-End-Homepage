import AsideProgress from "../../components/asideCollection/AsideProgress";
import Answer from "../../components/asideCollection/Answer";
import AsideQuestion from "../../components/asideCollection/AsideQuestion";
import ButtonProgress from "../../components/button/ButtonProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import ModalImage from "/etc/modal_image.png";
import Modal from "../../components/modal/Modal";
import { useEffect, useState } from "react";
import Class from "../../data/Class.json";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchClassByIdAsync, postHandleSubmit } from "../../redux/class/slice";
import { useDispatch, useSelector } from "react-redux";

function Question() {
    const number = 10;
    const question = JSON.parse(localStorage.getItem("quiz"));
    const selectedQuestion = question.find((q) => q.number === number);
    const [answer, setAnswer] = useState(selectedQuestion.answered ?? "");

    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const { detail, error, isLoading } = useSelector((state) => state.class);

    useEffect(() => {
        dispatch(fetchClassByIdAsync());
    }, [dispatch]);

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        dispatch(postHandleSubmit());
    };

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

    function onModal() {
        setModal(!modal);
        if (!modal) {
            window.scrollTo({ top: 0, left: 0 });
            document.body.style.overflow = "hidden";
        } else if (modal) {
            document.body.style.overflow = "";
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <NavbarProgress data={detail && detail?.data?.detail_class} />
            {!error ? (
                <main className="grid grid-cols-4">
                    <AsideQuestion
                        number={selectedQuestion.number}
                        questions={question}
                    />
                    <section className="flex flex-col col-span-2 py-9 px-16 gap-5 h-full">
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
                            onSubmit={onModal}
                            onNext={onNextQuestion}
                            number={selectedQuestion.number}
                            totalQuestion={question.length}
                        />
                    </section>
                    <AsideProgress
                        data={detail && detail?.data?.detail_class}
                    />
                </main>
            ) : (
                <Error />
            )}
            <FooterProgress />
            {modal && (
                <Modal
                    ModalImage={ModalImage}
                    onClose={onModal}
                    onSubmit={onHandleSubmit}
                />
            )}
        </>
    );
}
export default Question;
