function Accordion(props) {
    const { children } = props;
    return (
        <>
            <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                <p className="font-poppins font-semibold text-xl leading-[120%] text-[#222325]">
                    Tata Cara Pembayaran
                </p>
                <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col border border-[#3A35411F] rounded-xl py-4 px-5 gap-4">
                        {children}
                    </div>
                    {/* <div className="flex flex-col border border-[#3A35411F] rounded-xl py-4 px-5 gap-4">
                        <div className="flex justify-between">
                            <p className="font-poppins font-semibold text-lg leading-[120%] text-[#222325]">
                                Mobiie Banking BCA
                            </p>
                            <div className="">
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
                        <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                            <li>Buka Aplikasi BCA Mobile</li>
                            <li>Pilih "m-BCA", kemudian pilih "m-Transfer"</li>
                            <li>Pilih "BCA Virtual Account"</li>
                            <li>
                                Masukkan nomor Virtual Account, lalu pilih "OK"
                            </li>
                            <li>
                                Klik tombol "Send" yang berada di sudut kanan
                                atas aplikasi untuk melakukan transfer
                            </li>
                            <li>Klik "OK" untuk melanjutkan pembayaran</li>
                            <li>
                                Masukkan PIN Anda untuk meng-otorisasi transaksi
                            </li>
                            <li>Transaksi Anda telah selesa</li>
                        </ol>
                    </div>
                    <div className="flex flex-col border border-[#3A35411F] rounded-xl py-4 px-5 gap-4">
                        <div className="flex justify-between">
                            <p className="font-poppins font-semibold text-lg leading-[120%] text-[#222325]">
                                Internet Banking BCA
                            </p>
                            <div className="">
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
                        <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                            <li>Login ke KlikBCA Individual</li>
                            <li>
                                Pilih "Transfer", kemudian pilih "Transfer ke
                                BCA Virtual Account
                            </li>
                            <li>Masukkan nomor Virtual Account</li>
                            <li>
                                Pilih "Lanjutkan" untuk melanjutkan pembayaran
                            </li>
                            <li>
                                Masukkan "RESPON KEYBCA APPLI 1" yang muncul
                                pada Token BCA Anda, lalu klik tombol "Kirim
                            </li>
                            <li>Pembayaran telah selesai</li>
                        </ol>
                    </div> */}
                </div>
            </section>
        </>
    );
}
export default Accordion;
