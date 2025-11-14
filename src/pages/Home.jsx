import Navbar from "../components/navbar/Navbar";
import Avatar from "/avatar/Avatar.png";
import banner from "/banner/banner.jpg";
import Button from "../components/button/Button";
import Logo from "/logo/videobelajar.png";
import IconFb from "/icon/fb.png";
import IconIg from "/icon/ig.png";
import IconLinkedin from "/icon/linkedin.png";
import IconTwitter from "/icon/twitter.png";

function Home() {
    return (
        <>
            <Navbar account={true} />

            <main className="bg-[#fffdf3] flex flex-col justify-center py-16 px-30 gap-16 ">
                <div className="relative ">
                    <div className="bg-[url(/banner/banner.jpg)] w-full h-[400px] rounded-[10px] bg-center"></div>
                    <section className="bg-black/80 absolute top-0 left-0 w-full h-[400px] pt-20.5 px-35 pb-16 140px] gap-6 rounded-[10px] flex flex-col justify-center items-center ">
                        <h1 className="font-poppins! font-bold text-5xl line leading-[110.00000000000001%] text-center text-white">
                            Revolusi Pembelajaran: Temukan Ilmu Baru melalui
                            Platform Video Interaktif!
                        </h1>
                        <p className="font-medium text-base leading-[140%] text-center text-white">
                            Temukan ilmu baru yang menarik dan mendalam melalui
                            koleksi video pembelajaran berkualitas tinggi. Tidak
                            hanya itu, Anda juga dapat berpartisipasi dalam
                            latihan interaktif yang akan meningkatkan pemahaman
                            Anda.
                        </p>
                        <Button
                            text="Temukan Video Course Untuk Dipelajari!"
                            customStyle="bg-[#3ecf4c] text-white"
                        />
                    </section>
                </div>
                <article className="flex flex-col gap-8">
                    <section className="flex flex-col w-full h-full gap-2.5 ">
                        <h2 className="font-poppins font-semibold text-[32px] leading-[110%] text-[#222325]">
                            Koleksi Video Pembelajaran Unggulan
                        </h2>
                        <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </section>
                    <section className=" flex py-3 pe-9 gap-6 font-normal text-base leading-[140%] tracking-[0.2%] text-[#333333ad] ">
                        <div className="flex flex-col gap-1.5">
                            Semua Kelas
                            <hr className="w-[52px] h-1.5 border-none outline-none rounded-[10px] bg-[#f64920]" />
                        </div>
                        <div className="">Pemasaran</div>
                        <div className="feature">Desain</div>
                        <div className="feature">Pengembangan Diri</div>
                        <div className="feature">Bisnis</div>
                    </section>
                </article>

                <footer className="flex flex-col  bg-white  border-t border-red-600 py-15 px-30 gap-5 ">
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

                    <section className="pt-8 mt-2.5 border-none border-[#3a35411f]">
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
            </main>
        </>
    );
}

export default Home;
