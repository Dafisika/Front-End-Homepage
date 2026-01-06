import Button from "../button/Button";

function Modal(props) {
    const { ModalImage, onSubmit, onClose } = props;
    return (
        <section className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center absolute overflow-hidden top-0 left-0 w-full h-full">
            <div className="bg-white flex flex-col rounded-[10px] pt-6 px-9 pb-9 gap-[18px]">
                <img src={ModalImage} alt="" />
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold text-lg text-text-dark-primary leading-[140%] tracking-[0.2px]">
                        Selesaikan Pretest
                    </p>
                    <p className="font-normal text-base text-[#676767] leading-[140%] tracking-[0.2px]">
                        Apakah kamu yakin untuk menyelesaikan pretest ini?
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        onClick={onClose}
                        text="Batal"
                        customStyle="bg-white border! border-[#3ECF4C] text-[#3ECF4C]"
                    />
                    <Button
                        onClick={onSubmit}
                        text="Selesai"
                        customStyle="bg-[#3ecf4c] text-white"
                    />
                </div>
            </div>
        </section>
    );
}
export default Modal;
