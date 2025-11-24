import Logo from "/logo/videobelajar.png";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import BankBca from "/bank/bca.png";
import BankBni from "/bank/bni.png";
import BankBri from "/bank/bri.png";
import BankMandiri from "/bank/mandiri.png";
import Dana from "/bank/dana.png";
import Ovo from "/bank/ovo.png";
import linkAja from "/bank/linkaja.png";
import Shopee from "/bank/shopee.png";
import MasterCard from "/bank/mastercard.png";
import Visa from "/bank/visa.png";
import Jcb from "/bank/jcb.png";
import Product from "../components/Product";
import Card1 from "/cover/card-1.png";

function PaymentMethod() {
    return (
        <>
            <Navbar payment={true} />

            <main className="bg-[#FFFDF3] flex flex-col justify-center py-16 px-30 gap-9">
                <article className="grid grid-cols-3 gap-9">
                    <section className="bg-white flex flex-col col-span-2 gap-6">
                        <div className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-poppins! font-semibold text-xl leading-[120%] text-text-dark-primary">
                                Metode Pembayaran
                            </p>
                            <div className="flex justify-between border border-[#3A35411F] rounded-[10px]  py-4 px-5">
                                <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                    Transfer Bank
                                </p>
                                <div className="rotate-180">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 16L12 9L19 16"
                                            stroke="#333333"
                                            stroke-opacity="0.68"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/bca.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Bank BCA
                                        </p>
                                    </div>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                                            fill="#F64920"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/bni.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Bank BNI
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/bri.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Bank BRI
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/mandiri.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Bank Mandiri
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between border border-[#3A35411F] rounded-[10px]  py-4 px-5">
                                <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                    E-Wallet
                                </p>
                                <div className="rotate-180">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 16L12 9L19 16"
                                            stroke="#333333"
                                            stroke-opacity="0.68"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/dana.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Dana
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/ovo.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Ovo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/linkaja.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            link Aja
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <img src="/bank/shopee.png" alt="" />
                                        <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                            Shopee Pay
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between border border-[#3A35411F] rounded-[10px]  py-4 px-5">
                                <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#1D2433]">
                                    Kartu Kredit/Debit
                                </p>
                                <div className="rotate-180">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 16L12 9L19 16"
                                            stroke="#333333"
                                            stroke-opacity="0.68"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="flex gap-3">
                                            <img
                                                src="/bank/mastercard.png"
                                                alt=""
                                            />
                                            <img src="/bank/visa.png" alt="" />
                                            <img src="/bank/jcb.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                            <p className="font-poppins font-semibold text-xl leading-[120%] text-[#222325]">
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
                                <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-[#222325]">
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
                        <Product image={Card1} />
                    </div>
                </article>
            </main>
        </>
    );
}
export default PaymentMethod;
