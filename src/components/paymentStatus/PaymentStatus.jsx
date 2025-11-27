import Button from "../button/Button";
import AvatarFemale from "/avatar/online-shopping-female.png";
import AvatarMale from "/avatar/online-shopping-male.png";

function PaymentStatus(props) {
    const { status } = props;
    return (
        <main className="bg-[#FFFDF3]">
            <section className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] pt-6 pb-16 px-9">
                <div className="flex flex-col items-center gap-6">
                    {status ? (
                        <img src={AvatarFemale} alt="" />
                    ) : (
                        <img src={AvatarMale} alt="" />
                    )}
                    <div className="flex flex-col items-center gap-3 ">
                        {status ? (
                            <h1 className="font-poppins! font-semibold text-2xl text-text-dark-primary leading-[120%]">
                                Pembayaran Berhasil!
                            </h1>
                        ) : (
                            <h1 className="font-poppins! font-semibold text-2xl text-text-dark-primary leading-[120%]">
                                Pembayaran Tertunda!
                            </h1>
                        )}
                        <p className="font-normal text-lg text-[#333333AD] leading-[120%] tracking-[0.2%]">
                            Silakan cek email kamu untuk informasi lebih lanjut.
                            Hubungi <br /> kami jika ada kendala.
                        </p>
                    </div>
                    <Button
                        text="Lihat Detail Pesanan"
                        customStyle="bg-[#3ecf4c] text-white"
                    />
                </div>
            </section>
        </main>
    );
}
export default PaymentStatus;
