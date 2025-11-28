function ShoppingSummary() {
    return (
        <section className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] p-6 gap-9">
            <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                Ringkasan Belanja
            </p>
            <div className="flex justify-between items-baseline">
                <p className="font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD]">
                    Total Harga (3 barang)
                </p>
                <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] ">
                    Rp 767.500
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD]">
                    Ongkos Kirim
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
        </section>
    );
}
export default ShoppingSummary;
