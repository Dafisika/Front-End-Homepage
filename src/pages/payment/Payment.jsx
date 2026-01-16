import Button from "../../components/button/Button";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/Product";
import BcaFull from "/bank/bca-full.png";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentProcedure from "../../components/PaymentProcedure";
import Card1 from "/cover/card-1.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { fetchHowToPaymentAsync } from "../../redux/howToPayment/slice";
import { fetchArticleByIdAsync } from "../../redux/article/slice";
import { fetchOrderDetailByIdAsync } from "../../redux/orderDetail/slice";
import { postTransactionAsync } from "../../redux/transaction/slice";

function Payment() {
    const dispatch = useDispatch();
    const [countDown, setCountdown] = useState("");
    const { data, error, isLoading } = useSelector(
        (state) => state.howToPayment
    );
    const { detail } = useSelector((state) => state.article);
    const { detail: payment } = useSelector((state) => state.orderDetail);

    useEffect(() => {
        dispatch(fetchHowToPaymentAsync());
        dispatch(fetchArticleByIdAsync());
        dispatch(fetchOrderDetailByIdAsync());
    }, [dispatch]);

    const onPayment = async (e) => {
        e.preventDefault();
        dispatch(postTransactionAsync());
    };
    console.log();

    const diffTime = () => {
        const currentDate = new Date();
        const exp = new Date(payment.data?.exp ?? "");

        if (isNaN(exp.getTime())) {
            return null;
        }

        const diff = Math.abs(exp.getTime() - currentDate.getTime());

        return {
            day: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hour: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minute: Math.floor((diff / (1000 * 60)) % 60),
            second: Math.floor((diff / 1000) % 60),
            expired: diff === 0,
        };
    };

    useEffect(() => {
        let timerId;

        const tick = () => {
            const time = diffTime();
            if (!time || time.expired) return;

            setCountdown(time);
            timerId = setTimeout(tick, 1000);
        };

        tick();

        return () => clearTimeout(timerId);
    }, [payment.data?.exp]);

    console.log(diffTime());

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar payment={true} />
            {!error ? (
                <main className="bg-[#FFFDF3]">
                    <section className="bg-[#FEE8D2CC] flex justify-center items-center py-3 gap-4">
                        <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#333333AD]">
                            Selesaikan pemesanan dalam
                        </p>
                        <div className="flex items-center font-bold text-base leading-[140%] tracking-[0.2px] text-white gap-2.5">
                            <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                                {countDown.hour}
                            </div>
                            <span className="text-[#333333AD]">:</span>
                            <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                                {countDown.minute}
                            </div>
                            <span className="text-[#333333AD]">:</span>
                            <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                                {countDown.second}
                            </div>
                        </div>
                    </section>
                    <article className="grid grid-cols-3 py-16 px-30 gap-9">
                        <section className="flex flex-col col-span-2">
                            <div className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-9">
                                <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                                    Metode Pembayaran
                                </p>
                                <div className="flex flex-col items-center border border-[#3A35411F] rounded-xl py-9 px-[18px] gap-3">
                                    <div className="">
                                        <img src="/bank/bca-full.png" />
                                    </div>
                                    <p className="font-medium text-lg leading-[140%] tracking-[0.2%] text-[#222325]">
                                        Bayar Melalui Virtual Account BCA
                                    </p>
                                    <div className="flex gap-3 items-center">
                                        <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                            11739 081234567890
                                        </p>
                                        <a className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#F64920]">
                                            Salin
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <OrderSummary>
                                        <div className="grid grid-cols-2 gap-6">
                                            <Button
                                                text="Ganti Metode Pembayaran"
                                                customStyle="bg-[#E2FCD9CC] text-[#3ecf4c]"
                                            />
                                            <Button
                                                onClick={onPayment}
                                                text="Bayar Sekarang"
                                                customStyle="bg-[#3ecf4c] text-white"
                                            />
                                        </div>
                                    </OrderSummary>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Product data={detail} image={Card1} />
                        </section>
                        <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                                Tata Cara Pembayaran
                            </p>
                            {data.data.map((item, index) => (
                                <PaymentProcedure
                                    data={item}
                                    key={index}
                                    title={item.title}
                                    item={item.item}
                                />
                            ))}
                        </section>
                    </article>
                </main>
            ) : (
                <Error />
            )}
        </>
    );
}
export default Payment;
