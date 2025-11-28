import Footer from "../../components/Footer";
import Navbar from "../../components/navbar/Navbar";
import Card6 from "/cover/card-6.png";
import Avatar1 from "/avatar/Avatar-1.png";
import Pagination from "../../components/Pagination";
import Button from "../../components/button/Button";
import ClassDetail from "../../components/detailOrder/ClassDetail";
import Class from "../../data/Class.json";

function MyClassDetail() {
    return (
        <>
            <Navbar account />
            <main className="bg-[#FFFDF3] flex flex-col justify-center py-16 px-30 gap-9">
                <article className="grid grid-cols-3 gap-9">
                    <aside className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2.5">
                            <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                Daftar Kelas
                            </h1>
                            <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2%]">
                                Akses Materi Belajar dan Mulailah Meningkatkan
                                Pengetahuan Anda!
                            </p>
                        </div>
                        <div className="bg-white flex flex-col border border-[#3A35411F] rounded-10 gap-2 p-6 ">
                            <div className="flex p-3 gap-3">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                        fill="#3A3541"
                                        fill-opacity="0.38"
                                    />
                                </svg>
                                <p className="font-bold text-lg text-[#3A354161] leading-[140%] tracking-[0.2px]">
                                    Profil Saya
                                </p>
                            </div>
                            <div className="flex p-3 gap-3">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
                                        fill="#3A3541"
                                        fill-opacity="0.38"
                                    />
                                </svg>

                                <p className="font-bold text-lg text-[#3A354161] leading-[140%] tracking-[0.2px]">
                                    Kelas Saya
                                </p>
                            </div>
                            <div className="flex p-3 border border-[#FFBD3A] rounded-sm gap-3">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 16.9995C10.9 16.9995 10 16.0995 10 14.9995C10 13.8995 10.9 12.9995 12 12.9995C13.1 12.9995 14 13.8995 14 14.9995C14 16.0995 13.1 16.9995 12 16.9995Z"
                                        fill="#FFBD3A"
                                    />
                                </svg>

                                <p className="font-bold text-lg text-[#FFBD3A] leading-[140%] tracking-[0.2px]">
                                    Pesanan Saya
                                </p>
                            </div>
                        </div>
                    </aside>
                    <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-5 gap-8">
                        <div className="flex gap-8 ">
                            <div className="flex  w-full gap-1.5 py-3 pe-9 font-medium text-base leading-[140%] tracking-[0.2%] text-[#333333ad]">
                                <div className="flex flex-col text-nowrap py-3 pe-9 gap-1.5">
                                    Semua Kelas
                                    <hr className="w-[52px] h-1.5 border-none outline-none rounded-[10px] bg-[#f64920]" />
                                </div>
                                <div className="text-nowrap py-3 pe-9">
                                    Sedang Berjalan
                                </div>
                                <div className="text-nowrap py-3 pe-9">
                                    Selesai
                                </div>
                            </div>
                            <div className="flex items-center gap-4 ">
                                <div className="flex gap-[3px]">
                                    <div className="flex items-center h-12 border border-[#3A35411F] rounded-[10px] px-3">
                                        <input
                                            className="flex items-center placeholder:text-[#333333AD] gap-2"
                                            type="text"
                                            placeholder="Cari Kelas"
                                        />
                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                id="SVGRepo_bgCarrier"
                                                stroke-width="0"
                                            ></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                                                    fill="#333333AD"
                                                ></path>{" "}
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="flex flex-col col-span-5 gap-6">
                            {Class.map((item, index) => (
                                <ClassDetail
                                    key={index}
                                    modul={item.modul}
                                    status={item.status}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    name={item.user.name}
                                    avatar={item.user.avatar}
                                    position={item.user.position}
                                    company={item.user.company}
                                    progress={item.progress}
                                />
                            ))}
                        </section>
                        <Pagination />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
export default MyClassDetail;
