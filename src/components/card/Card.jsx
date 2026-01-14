import { currencyFormat } from "../../utils/number.utils";

function Card(props) {
    const { data } = props;

    return (
        <div className="flex flex-col w-full bg-white border border-[#3A35411F] rounded-[10px] p-5 gap-4">
            {data.image && <img src={data.image} />}

            <h3 className="font-DMSans font-semibold text-lg text-text-dark-primary leading-[120%]">
                {data.title}
            </h3>
            <p className="font-medium text-base line-clamp-2 leading-[140%] tracking-[0.2%] text-[#333333ad]">
                {data.description}
            </p>
            <div className="flex gap-2.5">
                <img
                    className="w-10 h-10 rounded-[10px]"
                    src={data.user.avatar}
                />
                <div className="">
                    <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                        {data.user.name}
                    </p>
                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                        {data.user.position}{" "}
                        <span className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                            {data.user.company}
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex gap-2">
                    <div className="flex ">
                        <div className="flex">
                            <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="w-[18px] h-[18px]"
                                preserveAspectRatio="xMidYMid meet"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                        fill="#ffce31"
                                    ></path>
                                </g>
                            </svg>
                            <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="w-[18px] h-[18px]"
                                preserveAspectRatio="xMidYMid meet"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                        fill="#ffce31"
                                    ></path>
                                </g>
                            </svg>
                            <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="w-[18px] h-[18px]"
                                preserveAspectRatio="xMidYMid meet"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                        fill="#ffce31"
                                    ></path>
                                </g>
                            </svg>
                            <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="w-[18px] h-[18px]"
                                preserveAspectRatio="xMidYMid meet"
                                fill="#c4c4c4"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                        fill="#c4c4c4"
                                    ></path>
                                </g>
                            </svg>
                            <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="w-[18px] h-[18px]"
                                preserveAspectRatio="xMidYMid meet"
                                fill="#c4c4c4"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                        fill="#c4c4c4"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="flex font-medium text-sm leading-[140%] tracking-[0.2%] text-[#333333ad] underline decoration-solid">
                        <p>
                            {data.testimonial.rating} {data.testimonial.review}
                        </p>
                    </div>
                </div>
                <div className="font-semibold text-2xl leading-[120%] text-[#3ecf4c]">
                    <p>Rp {currencyFormat(data.price_normal)}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;
