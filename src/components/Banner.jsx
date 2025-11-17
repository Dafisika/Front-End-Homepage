function Banner(props) {
    const { children } = props;
    return (
        <>
            <div className="bg-[url(/banner/banner.jpg)] w-full h-[400px] rounded-[10px] bg-center"></div>
            <div className="bg-black/80 absolute top-0 left-0 w-full h-[400px] pt-20.5 px-35 pb-16 140px] gap-6 rounded-[10px] flex flex-col justify-center items-center ">
                {children}
            </div>
        </>
    );
}
export default Banner;
