import Logo from "/logo/videobelajar.png";
import Avatar from "/avatar/Avatar.png";
import IconFb from "/icon/fb.png";
import IconIg from "/icon/ig.png";
import IconLinkedin from "/icon/linkedin.png";
import IconTwitter from "/icon/twitter.png";
import Card1 from "/cover/card-1.png";
import Avatar1 from "/avatar/Avatar-1.png";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/Pagination";
import AsideProductDropDown from "../../components/productDropDown/AsideProductDropDown";
import DropDownFilter from "../../components/productDropDown/DropDownFilter";
import { useEffect } from "react";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleAsync } from "../../redux/article/slice";

function All() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector((state) => state.article);

    useEffect(() => {
        dispatch(fetchArticleAsync());
    }, [dispatch]);
    console.log("State Data: ", data);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar account={true} />
            {!error ? (
                <main className="bg-[#FFFDF3] flex flex-col justify-center py-16 px-30 gap-9">
                    <header className="flex flex-col w-full h-full gap-2.5 ">
                        <h1 className="font-poppins font-semibold text-[32px] leading-[110%] text-text-dark-primary">
                            Koleksi Video Pembelajaran Unggulan
                        </h1>
                        <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </header>
                    <div className="flex gap-[42px]">
                        <AsideProductDropDown />
                        <article className="w-full flex flex-col gap-8">
                            <DropDownFilter />

                            <section className="grid grid-cols-2 grid-rows-1 gap-6">
                                {data?.data?.slice(0, 6).map((item, index) => (
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
                            <Pagination />
                        </article>
                    </div>
                </main>
            ) : (
                <Error />
            )}
            <Footer />
        </>
    );
}
export default All;
