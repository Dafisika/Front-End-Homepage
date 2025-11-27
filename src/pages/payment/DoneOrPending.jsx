import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import PaymentStatus from "../../components/paymentStatus/PaymentStatus";

function DoneOrPending() {
    return (
        <>
            <Navbar paymentDone={true} />
            <main className="bg-[#FFFDF3]">
                <PaymentStatus status={true} />
            </main>
        </>
    );
}
export default DoneOrPending;
