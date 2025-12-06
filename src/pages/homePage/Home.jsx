import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Avatar from "/avatar/Avatar.png";
import Button from "../../components/button/Button";
import Logo from "/logo/videobelajar.png";
import IconFb from "/icon/fb.png";
import IconIg from "/icon/ig.png";
import IconLinkedin from "/icon/linkedin.png";
import IconTwitter from "/icon/twitter.png";
import Card1 from "/cover/card-1.png";
import Avatar1 from "/avatar/Avatar-1.png";
import Article from "../../data/Article.json";

function Home() {
    return (
        <>
            <Navbar account={true} />

            <main className="bg-[#FFFDF3] flex flex-col justify-center xl:py-16 py-7 px-5 xl:px-30 gap-6 xl:gap-16 w-dvw ">
                <div className="relative ">
                    <Banner>
                        <h1 className="font-poppins! font-bold text-2xl xl:text-5xl line leading-[110.00000000000001%] text-center text-white">
                            Revolusi Pembelajaran: Temukan Ilmu Baru melalui
                            Platform Video Interaktif!
                        </h1>
                        <p className="font-medium text-sm xl:text-base leading-[140%] text-center text-white">
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
                    </Banner>
                </div>
                <article className="flex flex-col gap-6 xl:gap-8">
                    <section className="flex flex-col w-full h-full gap-2.5 ">
                        <h2 className="font-poppins font-semibold text-2xl xl:text-[32px] leading-[110%] text-text-dark-primary">
                            Koleksi Video Pembelajaran Unggulan
                        </h2>
                        <p className="font-medium text-sm xl:text-base  text-[#333333ad] tracking-[0.2%]">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </section>
                    <section className="w-auto overflow-x-auto text-nowrap flex py-3 pe-9 gap-6 font-normal  text-base leading-[140%] tracking-[0.2%] text-[#333333ad] ">
                        <div className="flex flex-col gap-1.5">
                            Semua Kelas
                            <hr className="w-[52px] h-1.5 border-none outline-none rounded-[10px] bg-[#f64920]" />
                        </div>
                        <div className="">Pemasaran</div>
                        <div className="feature">Desain</div>
                        <div className="feature">Pengembangan Diri</div>
                        <div className="feature">Bisnis</div>
                    </section>
                    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {Article.map((item, index) => (
                            <Card
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                avatar={item.user.avatar}
                                name={item.user.name}
                                position={item.user.position}
                                company={item.user.company}
                                rating={item.testimonial.rating}
                                review={item.testimonial.review}
                                price={item.price}
                            />
                        ))}
                    </section>
                </article>

                <div className="relative">
                    <Banner>
                        <div className="flex flex-col items-center justify-center w-full h-[118px] gap-10">
                            <div className="flex flex-col items-center justify-center w-full h-[118px] gap-1 text-white">
                                <p className="font-medium text-base xl:text-lg leading-[140%] tracking-[0.2%] text-[#C1C2C4]">
                                    NEWSLETTER
                                </p>
                                <div className="flex flex-col gap-2.5">
                                    <p className="font-poppins! font-semibold text-2xl xl:text-[32px] leading-[110.00000000000001%] text-center text-white">
                                        Mau Belajar Lebih Banyak?
                                    </p>
                                    <p className="font-medium text-sm xl:text-base tracking-[0.2%] text-[#F4F5FA] text-center">
                                        Daftarkan dirimu untuk mendapatkan
                                        informasi terbaru dan penawaran spesial
                                        dari program-program terbaik hariesok.id
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row w-full xl:relative border-none rounded-[10px]  xl:py-2.5  xl:pe-2 xl:ps-8 gap-4 items-center">
                                <input
                                    className="py-2.5 ps-3 xl:ps-8 xl:py-[18px] max-md:text-center px-2 rounded-[10px] text-sm bg-white w-full"
                                    id="email"
                                    type="email"
                                    placeholder="Masukkan Emailmu"
                                />
                                <button
                                    className=" xl:absolute xl:right-4 xl:w-fit bg-[#FFBD3A] border-none rounded-[10px] xl:px-[26px] text-white max-md:text-center py-2.5 px-2  text-sm w-full"
                                    id="subscribe"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </Banner>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
