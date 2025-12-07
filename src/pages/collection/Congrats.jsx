import AsideProgress from "../../components/asideCollection/AsideProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import congratulation from "/etc/congratulation.png";
import AsideProgressDone from "../../data/AsideProgressDone.json";
import QuestionIsDone from "../../components/collection/QuestionIsDone";
import ModalReview from "../../components/modal/ModalReview";

function Congrats() {
    return (
        <>
            <NavbarProgress notCompleted />
            <main className="grid grid-cols-3">
                <section className="flex flex-col col-span-2">
                    <img src={congratulation} alt="" />
                    <QuestionIsDone
                        title={AsideProgressDone.title}
                        date={AsideProgressDone.date}
                        data={AsideProgressDone.data}
                        type={AsideProgressDone.data.type}
                        score={AsideProgressDone.data.score}
                        status={AsideProgressDone.status}
                        description={AsideProgressDone.description}
                    />
                </section>
                <AsideProgress />
            </main>
            <FooterProgress />
            {/* <ModalReview /> */}
        </>
    );
}
export default Congrats;
