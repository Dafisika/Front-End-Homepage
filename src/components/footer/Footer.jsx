function Footer() {
    return (
        <footer className="flex flex-col w-full  bg-white  border-t border-[#3a35411f] py-15 px-30 gap-5 ">
            <div className="flex justify-between ">
                <section className="flex flex-col h-full gap-4">
                    <img
                        className="w-60 h-auto"
                        src="/logo/videobelajar.png"
                        alt=""
                    />
                    <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                        Gali Potensi Anda Melalui Pembelajaran Video di
                        hariesok.id
                    </p>
                    <p className="font-normal text-base leading-[140%] tracking-[0.2%] text-[3a3541ad]">
                        Jl. Usman Effendi No. 50 Lowokwaru, Malang
                    </p>
                    <p className="number">+62-877-7123-1234</p>
                </section>

                <section className="flex  gap-12">
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                Kategori
                            </p>
                        </div>
                        <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                            <a href="">Digital & Teknologi</a>
                            <a href="">Pemasaran</a>
                            <a href="">Manajemen Bisnis</a>
                            <a href="">Pengembangan Diri</a>
                            <a href="">Desain</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                Perusahaan
                            </p>
                        </div>
                        <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                            <a href="">Tentang Kami</a>
                            <a href="">FAQ</a>
                            <a href="">Kebijakan Privasi</a>
                            <a href="">Ketentuan Layanan</a>
                            <a href="">Bantuan</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex flex-col  justify-between items-center">
                            <p className="flex font-bold text-base leading-[140%] tracking-[0.2%] text-[#222325]">
                                Komunitas
                            </p>
                        </div>
                        <div className="flex flex-col font-medium text-base  text-[#333333ad] leading-[140%] tracking-[0.2%] gap-[13px]">
                            <a href="">Tips Sukses</a>
                            <a href="">Blog</a>
                        </div>
                    </div>
                </section>
            </div>

            <section className="pt-8 mt-2.5 border-none text-[#3A35411F]">
                <hr />
            </section>

            <section className="flex justify-between">
                <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                    {" "}
                    @2023 Gerobak Sayur All Rights Reserved.
                </p>

                <div className="flex gap-[15px]">
                    <div className="w-5 h-5 ">
                        <img src="/icon/linkedin.png" alt="" />
                    </div>
                    <div className="w-5 h-5">
                        <img src="/icon/fb.png" alt="" />
                    </div>
                    <div className="w-5 h-5">
                        <img src="/icon/ig.png" alt="" />
                    </div>
                    <div className="w-5 h-5">
                        <img src="/icon/twitter.png" alt="" />
                    </div>
                </div>
            </section>
        </footer>
    );
}
export default Footer;
