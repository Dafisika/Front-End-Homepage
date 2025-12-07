import Questions from "../../data/Question.json";

function Answer(props) {
    const { answer } = props;
    return (
        <div className="flex items-center group active:border active:border-[#3ECF4C] focus:outline-1 focus:outline-[#3ECF4C] rounded-sm p-[18px] gap-3 ">
            <input
                type="radio"
                name="answer"
                id={answer.id}
                className="bg-[#E2FCD9CC] w-[18px] h-[18px] appearance-none border-[1.5px] border-[#3ECF4C] rounded-full required checked:bg-[#3ECF4C]"
            />

            <label
                htmlFor={answer.id}
                className="font-normal text-base group-hover:text-[#3ECF4C]  leading-[140%] tracking-[0.2px]"
            >
                {answer.answer}
            </label>
        </div>
    );
}
export default Answer;
