import { useState } from "react";

function PaymentMethodDropDown() {
    const [transferBank, setTransferBank] = useState(true);
    const [ewallet, setEwallet] = useState(false);
    const [kartuKredit, setKartuKredit] = useState(false);

    return (
        <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
            <p className="font-poppins! font-semibold text-xl leading-[120%] text-text-dark-primary">
                Metode Pembayaran
            </p>
            <div
                onClick={() => setTransferBank(true)}
                className="flex justify-between border border-[#3A35411F] rounded-[10px]  py-4 px-5"
            >
                <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#1D2433]">
                    Transfer Bank
                </p>
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
            {transferBank && (
                <div className="flex flex-col gap-6">
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
                </div>
            )}
            <div
                onClick={() => setEwallet(!ewallet)}
                className="flex justify-between border border-[#3A35411F] rounded-[10px]  py-4 px-5"
            >
                <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#1D2433]">
                    E-Wallet
                </p>
                <svg
                    className={`
                            ${ewallet ? "" : "-rotate-180"}
                        transition-all duration-300`}
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
            {ewallet && (
                <div className="flex flex-col gap-6">
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
                </div>
            )}
            <div
                onClick={() => setKartuKredit(!kartuKredit)}
                className="flex justify-between border border-[#3A35411F] rounded-[10px]  py-4 px-5"
            >
                <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#1D2433]">
                    Kartu Kredit/Debit
                </p>
                <svg
                    className={`
                            ${kartuKredit ? "" : "-rotate-180"}
                        transition-all duration-300`}
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
            {kartuKredit && (
                <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between border border-[#F1F1F1] rounded-[10px] py-4 px-5">
                        <div className="flex justify-between items-center gap-3">
                            <div className="flex gap-3">
                                <img src="/bank/mastercard.png" alt="" />
                                <img src="/bank/visa.png" alt="" />
                                <img src="/bank/jcb.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
export default PaymentMethodDropDown;
