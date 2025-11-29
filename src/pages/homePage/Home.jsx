import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner";
import Card from "../../components/card/Card";
import Footer from "../../components/Footer";
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

            <main className="bg-white flex flex-col justify-center py-16 px-30 gap-16 ">
                <div className="relative ">
                    <Banner>
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
                    </Banner>
                </div>
                <article className="flex flex-col gap-8">
                    <section className="flex flex-col w-full h-full gap-2.5 ">
                        <h2 className="font-poppins font-semibold text-[32px] leading-[110%] text-text-dark-primary">
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
                    <section className="grid grid-cols-3 gap-6">
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

                <div className="low-banner-img">
                    <div className="relative ">
                        <Banner>
                            <div className="flex flex-col items-center justify-center w-[525px] h-[118px] gap-10">
                                <div className="flex flex-col items-center justify-center w-[525px] h-[118px] gap-1 text-white">
                                    <p className="font-medium text-lg leading-[140%] tracking-[0.2%] text-[#C1C2C4]">
                                        NEWSLETTER
                                    </p>
                                    <div className="flex flex-col gap-2.5">
                                        <p className="font-poppins! font-semibold text-[32px] leading-[110.00000000000001%] text-center text-white">
                                            Mau Belajar Lebih Banyak?
                                        </p>
                                        <p className="font-medium text-base tracking-[0.2%] text-[#F4F5FA] text-center">
                                            Daftarkan dirimu untuk mendapatkan
                                            informasi terbaru dan penawaran
                                            spesial dari program-program terbaik
                                            hariesok.id
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full h-[58px] relative bg-white border-none rounded-[10px] py-2 pe-2 ps-8 gap-5 items-center">
                                    <input
                                        className="w-[525px] py-2 pe-2  gap-5"
                                        id="email"
                                        type="email"
                                        placeholder="Masukkan Emailmu"
                                    />
                                    <button
                                        className=" absolute right-2 bg-[#FFBD3A] border-none rounded-[10px]  py-2.5 px-[26px] text-white"
                                        id="subscribe"
                                        type="button"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </Banner>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
