import { useState } from "react";
import Button from "../button/Button";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { postReviewAsync } from "../../redux/review/slice";

function ModalReview(props) {
    const { onClose } = props;
    const [star, setStar] = useState(0);
    const [review, setReview] = useState("");

    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector((state) => state.review);

    const onChangeReview = (e) => {
        setReview(e.target.value);
    };

    const onReview = async (e) => {
        e.preventDefault();
        dispatch(
            postReviewAsync({
                star,
                review,
            })
        );
    };

    const onClickStar = (value) => {
        setStar(value);
    };
    if (isLoading) {
        return <Loading />;
    }
    return (
        <section className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center overflow-hidden absolute top-0 left-0 w-full h-full">
            <div className="bg-white flex flex-col rounded-[10px] p-9 gap-[18px]">
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold text-lg text-text-dark-primary leading-[140%] tracking-[0.2px]">
                        Tulis Review Terbaikmu!
                    </p>
                    <p className="font-normal text-base text-[#676767] leading-[140%] tracking-[0.2px]">
                        Apakah kamu yakin untuk menyelesaikan pretest ini?
                    </p>
                </div>
                <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onClickStar(index + 1)}
                        >
                            <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className={`w-[30px] h-[30px]`}
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
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
                                        fill={
                                            index + 1 <= star
                                                ? "#FFFF00"
                                                : "#c4c4c4"
                                        }
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    ))}
                </div>
                <textarea
                    rows={3}
                    onChange={onChangeReview}
                    className="border border-[#3A35411F] rounded-[10px] px-3 py-3 font-medium text-base text-[#333333AD] leading-[140%] tracking-[0.2px]"
                >
                    Masukkan Review
                </textarea>

                {error && !data ? <p>Error</p> : null}

                <div className="grid grid-cols-2 gap-4">
                    <Button
                        onClick={onClose}
                        text="Batal"
                        customStyle="bg-white border! border-[#3ECF4C] text-[#3ECF4C]"
                    />
                    <Button
                        onClick={onReview}
                        text="Selesai"
                        customStyle="bg-[#3ecf4c] text-white"
                    />
                </div>
            </div>
        </section>
    );
}

export default ModalReview;
