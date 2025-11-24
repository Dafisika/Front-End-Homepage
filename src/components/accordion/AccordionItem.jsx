function AccordionItem(props) {
    const { children, title } = props;
    return (
        <>
            <div className="flex justify-between">
                <p className="font-poppins font-semibold text-lg leading-[120%] text-[#222325]">
                    {title}
                </p>
                <div className="">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16L12 9L19 16"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                {children}
            </ol>
        </>
    );
}
export default AccordionItem;
