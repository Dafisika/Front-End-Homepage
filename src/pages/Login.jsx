import Button from "./../components/button/Button";
function Login() {
    return (
        <>
            <div className="py-3 px-30 border border-[#f1f1f1]">
                <img src="public/logo/videobelajar.png" />
            </div>
            <div className="flex justify-center items-center min-h-screen h-full py-16 px-30 gap-8">
                <div className="w-[590px] h-full p-9 gap-9 border border-[#f1f1f1] rounded-sm">
                    <div className="text-center items-center w-full h-full gap-2.5 font-semibold ">
                        <h1 className="font-DMSans font-semibold text-[32px]">
                            Masuk Ke Akun
                        </h1>
                        <p className="font-DMSans font-normal text-base ">
                            Yuk, lanjutin belajarmu di videobelajar.
                        </p>
                    </div>
                    <form className=" flex flex-col gap-6 ">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col w-full h-full font-normal text-base gap-4">
                                <label for="email">
                                    E-Mail{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                    id="email"
                                    type="email"
                                />
                                <div className="flex flex-col">
                                    <label for="kata-sandi">
                                        Kata Sandi{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                        id="kata-sandi"
                                        type="password"
                                    />
                                    <button
                                        className="absolute bg-transparent right-2.5 bottom-2 border-none outline-none"
                                        id="button-eye"
                                        type="button"
                                    ></button>
                                </div>
                                <a className="text-end" href="">
                                    Lupa Password?
                                </a>
                            </div>

                            <Button text="Masuk" />

                            <button className="bg-[#E2FCD9CC] w-[518px] h-full text-[#3ecf4c] text-center outline-none rounded-[10px] py-2.5 px-[26px] pointer font-bold text-base ">
                                Daftar
                            </button>
                        </div>
                        <div className="flex justify-center items-center text-center gap-2.5 w-full mt-2.5 mb-2.5">
                            <hr className="w-[40%] border border-[#f1f1f1]" />
                            <p className="font-normal text-base">Atau</p>
                            <hr className="w-[40%] border border-[#f1f1f1]" />
                        </div>
                        <div class="log-google">
                            <button className="flex justify-center items-center w-[518px] h-[42px] border border-[#f1f1f1] text-[#333333ad] text-center outline-none rounded-2.5 py-2.5 px-25 pointer font-bold text-base gap-2">
                                <img
                                    class="logo-google"
                                    src="public/button/logo-google.png"
                                />
                                Masuk dengan Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;
