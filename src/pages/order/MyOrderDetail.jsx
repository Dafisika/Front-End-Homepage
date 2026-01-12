import Navbar from "../../components/navbar/Navbar";
import OrderDetail from "../../components/order/OrderDetail";
import Card1 from "/cover/card-1.png";
import Pagination from "../../components/Pagination";
import Footer from "../../components/footer/Footer";
import DropDownFilter from "../../components/productDropDown/DropDownFilter";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useEffect } from "react";
import { fetchOrderDetailAsync } from "../../redux/orderDetail/slice";

function MyOrderDetail() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector(
        (state) => state.orderDetail
    );

    useEffect(() => {
        dispatch(fetchOrderDetailAsync());
    }, [dispatch]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar account />
            {!error ? (
                <main className="bg-[#FFFDF3] flex flex-col justify-center py-16 px-30 gap-9">
                    <article className="grid grid-cols-3 gap-9">
                        <aside className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2.5">
                                <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                    Daftar Pesanan
                                </h1>
                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                    Informasi terperinci mengenai pembelian
                                </p>
                            </div>
                            <div className="bg-white flex flex-col border border-[#3A35411F] rounded-10 gap-2 p-6 ">
                                <div className="flex p-3 gap-3">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                            fill="#3A3541"
                                            fill-opacity="0.38"
                                        />
                                    </svg>
                                    <p className="font-bold text-lg text-[#3A354161] leading-[140%] tracking-[0.2px]">
                                        Profil Saya
                                    </p>
                                </div>
                                <div className="flex p-3 gap-3">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
                                            fill="#3A3541"
                                            fill-opacity="0.38"
                                        />
                                    </svg>

                                    <p className="font-bold text-lg text-[#3A354161] leading-[140%] tracking-[0.2px]">
                                        Kelas Saya
                                    </p>
                                </div>
                                <div className="flex p-3 border border-[#FFBD3A] rounded-sm gap-3">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 16.9995C10.9 16.9995 10 16.0995 10 14.9995C10 13.8995 10.9 12.9995 12 12.9995C13.1 12.9995 14 13.8995 14 14.9995C14 16.0995 13.1 16.9995 12 16.9995Z"
                                            fill="#FFBD3A"
                                        />
                                    </svg>

                                    <p className="font-bold text-lg text-[#FFBD3A] leading-[140%] tracking-[0.2px]">
                                        Pesanan Saya
                                    </p>
                                </div>
                            </div>
                        </aside>
                        <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-5 gap-8">
                            <div className="flex gap-8 ">
                                <div className="flex overflow-x-auto w-full gap-1.5 py-3 pe-9 font-medium text-base leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                    <div className="flex flex-col text-nowrap py-3 pe-9 gap-1.5">
                                        Semua Pesanan
                                        <hr className="w-[52px] h-1.5 border-none outline-none rounded-[10px] bg-[#f64920]" />
                                    </div>
                                    <div className="text-nowrap py-3 pe-9">
                                        Menunggu
                                    </div>
                                    <div className="text-nowrap py-3 pe-9">
                                        Berhasil
                                    </div>
                                    <div className="text-nowrap py-3 pe-9">
                                        Gagal
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 ">
                                    <DropDownFilter />
                                </div>
                            </div>
                            <section className="flex flex-col col-span-5 gap-6">
                                {data?.data?.map((item, index) => (
                                    <OrderDetail
                                        key={index}
                                        noInvoice={item.noInvoice}
                                        waktuPembayaran={item.waktuPembayaran}
                                        status={item.status}
                                        image={item?.orderDetail.image}
                                        detail={item.orderDetail.detail}
                                        harga={item.orderDetail.harga}
                                        totalPembayaran={item.totalPembayaran}
                                    />
                                ))}
                            </section>
                            <Pagination />
                        </section>
                    </article>
                </main>
            ) : (
                <Error />
            )}
            <Footer />
        </>
    );
}
export default MyOrderDetail;
