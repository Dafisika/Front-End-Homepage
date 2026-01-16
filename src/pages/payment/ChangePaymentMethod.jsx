import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import PaymentProcedure from "../../components/PaymentProcedure";
import Product from "../../components/Product";
import ShoppingSummary from "../../components/order/ShoppingSummary";
import Card1 from "/cover/card-1.png";
import PaymentMethodDropDown from "../../components/productDropDown/PaymentMethodDropDown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { fetchArticleByIdAsync } from "../../redux/article/slice";

function ChangePaymentMethod() {
    const dispatch = useDispatch();
    const { detail, error, isLoading } = useSelector((state) => state.article);
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
                <main className="bg-[#FFFDF3]">
                    <article className="grid grid-cols-3 py-16 px-30 gap-9">
                        <section className="flex flex-col col-span-2 gap-9">
                            <ShoppingSummary />
                            <PaymentMethodDropDown />
                        </section>
                        <Product data={detail} isDetailProduct />
                    </article>
                </main>
            ) : null}
        </>
    );
}
export default ChangePaymentMethod;
