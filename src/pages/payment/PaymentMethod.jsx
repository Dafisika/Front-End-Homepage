import Logo from "/logo/videobelajar.png";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import BankBca from "/bank/bca.png";
import BankBni from "/bank/bni.png";
import BankBri from "/bank/bri.png";
import BankMandiri from "/bank/mandiri.png";
import Dana from "/bank/dana.png";
import Ovo from "/bank/ovo.png";
import Shopee from "/bank/shopee.png";
import MasterCard from "/bank/mastercard.png";
import Visa from "/bank/visa.png";
import Jcb from "/bank/jcb.png";
import Product from "../../components/Product";
import Card1 from "/cover/card-1.png";
import PaymentMethodDropDown from "../../components/productDropDown/PaymentMethodDropDown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchArticleByIdAsync } from "../../redux/article/slice";

function PaymentMethod() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector((state) => state.article);
    useEffect(() => {
        dispatch(fetchArticleByIdAsync());
    }, [dispatch]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar payment={true} />

            {!error ? (
                <main className="bg-[#FFFDF3] flex flex-col justify-center py-16 px-30 gap-9">
                    <article className="grid grid-cols-3 gap-9">
                        <section className="bg-white flex flex-col col-span-2 gap-6">
                            <PaymentMethodDropDown />
                            <section className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                                <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                                    Ringkasan Pesanan
                                </p>
                                <div className="flex justify-between items-baseline">
                                    <p className="font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                        Video Learning: Gapai Karier Impianmu
                                        sebagai Seorang <br />
                                        UI/UX Designer & Product Manager.
                                    </p>
                                    <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] ">
                                        Rp 767.500
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                        Biaya Admin
                                    </p>
                                    <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] ">
                                        Rp 7.000
                                    </p>
                                </div>
                                <hr className="text-[#3A35411F]" />
                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-text-dark-primary">
                                        Total Pembayaran
                                    </p>
                                    <p className="font-semibold text-xl leading-[120%] text-[#3ECF4C] ">
                                        Rp 774.500
                                    </p>
                                </div>
                                <Button
                                    text="Beli Sekarang"
                                    customStyle="bg-[#3ecf4c] text-white"
                                />
                            </section>
                        </section>
                        <div className="">
                            <Product data={data} />
                        </div>
                    </article>
                </main>
            ) : (
                <Error />
            )}
        </>
    );
}
export default PaymentMethod;
