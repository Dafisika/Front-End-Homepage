function Button(props) {
    const { text, customStyle } = props;
    return (
        <button
            className={`${customStyle} h-full text-center outline-none rounded-[10px] py-2.5 px-[26px] pointer font-bold text-base font-DMSans`}
        >
            {text}
        </button>
    );
}
export default Button;
