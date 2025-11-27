import Button from "../../components/button/Button";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/Product";
import BcaFull from "/bank/bca-full.png";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentProcedure from "../../components/PaymentProcedure";

function Payment() {
    const accordionItem = [
        { name: "Buka Aplikasi BCA Mobile" },
        { name: 'Pilih "m-BCA", kemudian pilih "m-Transfer"' },
        { name: 'Pilih "BCA Virtual Account"' },
        { name: 'Masukkan nomor Virtual Account, lalu pilih "OK"' },
        {
            name: 'Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer',
        },
        { name: 'Klik "OK" untuk melanjutkan pembayaran' },
        { name: "Masukkan PIN Anda untuk meng-otorisasi transaksi" },
        { name: "Transaksi Anda telah selesai" },
    ];
    return (
        <>
            <Navbar payment={true} />
            <main className="bg-[#FFFDF3]">
                <section className="bg-[#FEE8D2CC] flex justify-center items-center py-3 gap-4">
                    <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#333333AD]">
                        Selesaikan pemesanan dalam
                    </p>
                    <div className="flex items-center font-bold text-base leading-[140%] tracking-[0.2px] text-white gap-2.5">
                        <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                            00
                        </div>
                        <span className="text-[#333333AD]">:</span>
                        <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                            50
                        </div>
                        <span className="text-[#333333AD]">:</span>
                        <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                            55
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
                                            text="Bayar Sekarang"
                                            customStyle="bg-[#3ecf4c] text-white"
                                        />
                                    </div>
                                </OrderSummary>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Product />
                    </section>
                    <PaymentProcedure />
                    <Accordion>
                        <AccordionItem title="ATM BCA">
                            {accordionItem.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </AccordionItem>
                    </Accordion>
                </article>
            </main>
        </>
    );
}
export default Payment;
