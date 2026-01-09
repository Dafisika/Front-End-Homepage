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
import { apiClient } from "../../../library/apiClient";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function Question() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [body, setBody] = useState(true);
    const [message, setMessage] = useState(null);

    const number = 10;
    const question = JSON.parse(localStorage.getItem("quiz"));
    const selectedQuestion = question.find((q) => q.number === number);
    const [answer, setAnswer] = useState(selectedQuestion.answered ?? "");

    const [modal, setModal] = useState(false);

    const fetchData = async () => {
        try {
            const response = await apiClient.get(
                import.meta.env.VITE_API_URL + "/class"
            );
            console.log(response);
            if (!response.status === 200) {
                throw new Error(`HTTP Error! Status: $(response.status)`);
            }
            const data = await response.data;

            console.log("Fetch Modern (console): Data Berhasil Di Ambil", data);
            setData(data.find((item) => item.id === "C-001"));
        } catch (err) {
            console.error(
                "Fetch Modern (console): Tejadi Kesalahan",
                err.message
            );
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSumbit = async (e) => {
        e.preventDefault();
        setMessage("Mengirim");

        try {
            const response = await apiClient.post(
                import.meta.env.VITE_API_URL + "/class",
                JSON.stringify(JSON.parse(localStorage.getItem("quiz")))
            );

            if (!response.status === 201) {
                throw new Error(`HTTP Error! Status: $(response.status)`);
            }
            const data = await response.data;

            console.log("Sukses:", data);
        } catch (err) {
            console.error("Tejadi Kesalahan", err.message);
            setMessage(err.message);
        } finally {
            setBody(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(body);
    console.log(message);

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

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavbarProgress data={data && data?.detail_class} />
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
                    <AsideProgress data={data && data?.detail_class} />
                </main>
            ) : (
                <Error />
            )}
            <FooterProgress />
            {modal && (
                <Modal
                    ModalImage={ModalImage}
                    onClose={onModal}
                    onSubmit={handleSumbit}
                />
            )}
        </>
    );
}
export default Question;
