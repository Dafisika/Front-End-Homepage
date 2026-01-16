import { useState } from "react";
import Button from "./button/Button";

function PaymentProcedure(props) {
    const { data } = props;
    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex flex-col gap-6">
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5"
            >
                <p className="font-poppins! font-bold text-base leading-[140%] tracking-[0.2px]  text-text-dark-primary">
                    {data.title}
                </p>
                <div>
                    <svg
                        className={`
                            ${open ? "" : "-rotate-180"}
                        transition-all duration-300`}
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
            {open && (
                <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                    {data.item.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}
export default PaymentProcedure;
