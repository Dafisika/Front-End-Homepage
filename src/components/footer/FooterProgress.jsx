function FooterProgress() {
    return (
        <footer className="bg-[#3ECF4C]  flex justify-between py-[18px] px-9">
            <div className="flex gap-4">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.77 3.77L16 2L6 12L16 22L17.77 20.23L9.54 12L17.77 3.77Z"
                        fill="white"
                    />
                </svg>

                <p className="font-bold text-lg text-white leading-[140%] tracking-[0.2px]">
                    Foundations of User Experience Design
                </p>
            </div>
            <div className="flex gap-4">
                <p className="font-bold text-lg text-white leading-[140%] tracking-[0.2px]">
                    Foundations of User Experience Design
                </p>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.23047 20.23L8.00047 22L18.0005 12L8.00047 2L6.23047 3.77L14.4605 12L6.23047 20.23Z"
                        fill="white"
                    />
                </svg>
            </div>
        </footer>
    );
}
export default FooterProgress;
