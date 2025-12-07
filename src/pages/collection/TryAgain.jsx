import tryAgain from "/etc/try_again.png";
import QuestionIsFail from "../../components/collection/QuestionIsFail";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import AsideProgressFail from "../../data/AsideProgressFail.json";
import AsideProgress from "../../components/asideCollection/AsideProgress";
import FooterProgress from "../../components/footer/FooterProgress";

function TryAgain() {
    return (
        <>
            <NavbarProgress />
            <main className="grid grid-cols-3">
                <section className="flex flex-col col-span-2">
                    <img src={tryAgain} alt="" />
                    <QuestionIsFail
                        title={AsideProgressFail.title}
                        date={AsideProgressFail.date}
                        data={AsideProgressFail.data}
                        status={AsideProgressFail.status}
                        description={AsideProgressFail.description}
                    />
                </section>
                <AsideProgress />
            </main>
            <FooterProgress />
        </>
    );
}
export default TryAgain;
