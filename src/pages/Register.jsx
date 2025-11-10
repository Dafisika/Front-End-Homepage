import Button from "../components/button/Button";
function Register() {
    return (
        <>
            <div class="header-log">
                <img src="assets/Logo.png" />
            </div>
            <div class="log-container">
                <div class="log">
                    <div class="log-description">
                        <h1>Pendaftaran Akun</h1>
                        <p>Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>

                    <form class="log-input">
                        <div class="form-input">
                            <div class="log-id">
                                <label for="nama-lengkap">
                                    Nama Lengkap <span class="required">*</span>
                                </label>
                                <input
                                    class="input-id"
                                    id="nama-lengkap"
                                    type="text"
                                />
                            </div>
                            <div class="log-id">
                                <label for="email">
                                    E-Mail <span class="required">*</span>
                                </label>
                                <input
                                    class="input-id"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div class="log-id">
                                <label for="no">
                                    No. Hp<span class="required">*</span>
                                </label>
                                <div class="country-code">
                                    <input id="phone" type="tel" />
                                    <input
                                        class=" input-id"
                                        id="no"
                                        type="tel"
                                    />
                                </div>
                            </div>
                            <div class="log-id">
                                <div class="show-password">
                                    <label for="kata-sandi">
                                        Kata Sandi{" "}
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        class="input-id"
                                        id="kata-sandi"
                                        type="password"
                                    />
                                    <button
                                        class="button-eye"
                                        id="button-eye"
                                        type="button"
                                    ></button>
                                </div>
                            </div>
                            <div class="log-id">
                                <div class="show-password">
                                    <label for="konfirmasi-sandi">
                                        Konfirmasi Kata Sandi{" "}
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        class="input-id"
                                        id="konfirmasi-sandi"
                                        type="password"
                                    />
                                    <button
                                        class="konfirmasi-eye"
                                        id="konfirmasi-eye"
                                        type="button"
                                    ></button>
                                </div>
                                <a href="">Lupa Password?</a>
                            </div>

                            {/* <Button
                                text="Register"
                                customStyle="bg-[#3ecf4c] text-white"
                            />

                            <Button
                                text="Masuk"
                                customStyle="bg-[#E2FCD9CC] text-[#3ecf4c]"
                            /> */}
                        </div>
                    </form>

                    <div class="log-atau">
                        <hr />
                        <p>Atau</p>
                        <hr />
                    </div>

                    <div class="log-google">
                        <button class="masuk-dengan-google">
                            <img
                                class="logo-google"
                                src="assets/logo-google.png"
                            />
                            Masuk dengan Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Register;
