function OrderDetail(props) {
    const {
        noInvoice,
        waktuPembayaran,
        status,
        image,
        detail,
        harga,
        totalPembayaran,
    } = props;
    return (
        <section className="border border-[#3A35411F] rounded-[10px]">
            <div className="bg-[#E2FCD933] flex justify-between border-b border-[#3A35411F] py-4 px-5">
                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#333333AD]">
                            No. Invoice:
                        </p>
                        <a
                            href=""
                            className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#0980E2] underline"
                        >
                            {noInvoice}
                        </a>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#333333AD]">
                            Waktu Pembayaran:
                        </p>
                        <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#333333AD]">
                            {waktuPembayaran}
                        </p>
                    </div>
                </div>
                <div
                    className={`border-none ${
                        status === "Berhasil"
                            ? "bg-[#E0FDDF] text-[#38D189]"
                            : status === "Gagal"
                            ? "bg-[#FCE3D1] text-[#FF5C2B]"
                            : status === "Belum Bayar"
                            ? "bg-[#FFF7D7CC] text-[#FFBD3A]"
                            : null
                    } rounded-[10px] py-1 px-2.5`}
                >
                    <p
                        className={`font-normal text-base  leading-[140%] tracking-[0.2px`}
                    >
                        {status}
                    </p>
                </div>
            </div>
            <section className="bg-white justify-between flex border-b border-[#3A35411F] p-4 ">
                <div className="flex items-center gap-4">
                    <img
                        className="border-none rounded-[10px] w-[52px] h-[52px]"
                        src={image}
                        alt=""
                    />
                    <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-text-dark-primary">
                        {detail}
                    </p>
                </div>
                <hr className="rotate-180 text-[#3A35411F]" />
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-[#333333ad]">
                        Harga
                    </p>
                    <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                        {harga}
                    </p>
                </div>
            </section>
            <div className="bg-[#E2FCD933] flex justify-between py-4 px-5 gap-9  ">
                <p className="font-medium text-base text-[#333333AD] leading-[140%] tracking-[0.2px] ">
                    Total Pembayaran
                </p>
                <p className="font-poppins! font-semibold text-lg text-[#3ECF4C] leading-[120%]">
                    {totalPembayaran}
                </p>
            </div>
        </section>
    );
}
export default OrderDetail;
