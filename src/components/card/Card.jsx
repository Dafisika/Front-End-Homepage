function Card(props) {
    const {
        image,
        title,
        description,
        avatar,
        name,
        position,
        company,
        rating,
        review,
        price,
    } = props;

    const convertIdr = price > 1000 ? price / 1000 + "K" : price;

    return (
        <div className="flex flex-col w-full bg-white border border-[#3A35411F] rounded-[10px] p-5 gap-4">
            <img className="w-full h-[193px]" src={image} />
            <h3 className="font-DMSans font-semibold text-lg text-text-dark-primary leading-[120%]">
                {title}
            </h3>
            <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-[#333333ad]">
                {description}
            </p>
            <div className="flex gap-2.5">
                <img className="w-10 h-10 rounded-[10px]" src={avatar} />
                <div className="">
                    <p className="font-medium text-base leading-[140%] tracking-[0.2%] text-text-dark-primary">
                        {name}
                    </p>
                    <p className="font-normal text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                        {position}{" "}
                        <span className="font-bold text-sm leading-[140%] tracking-[0.2%] text-[#333333ad]">
                            {company}
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
                            {rating} {review}
                        </p>
                    </div>
                </div>
                <div className="font-semibold text-2xl leading-[120%] text-[#3ecf4c]">
                    <p>Rp {convertIdr}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;
