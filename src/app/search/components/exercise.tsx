export const Exercise = ({selectOption}:any) => {
    return (
        <>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pt-10 pb-2">
                <b className="font-bold">운동종목</b>
            </div>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pb-12">
                <div className="flex mt-5">
                    <div className="self-stretch items-end justify-start gap-[1.875rem] max-w-full">
                        <button
                            className="pt-[0.75rem] pb-[0.687rem] pr-[2.875rem] pl-[2.937rem] flex z-[4] border-[1px] border-solid rounded-3xl font-semibold mr-2 bg-main text-white">
                            헬스
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="w-full items-start box-border p-5">
                <div
                    className="flex flex-row flex-wrap items-start justify-center gap-[0.625rem]">
                    <button
                        className="cursor-pointer py-[1.375rem] px-[5rem] bg-white text-black rounded-2xl flex flex-row items-start justify-start z-[4] border-gray-400 border">
                        <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                            취소하기
                        </b>
                    </button>
                    <button
                        onClick={() => selectOption("헬스")}
                        className="cursor-pointer [border:none] py-[1.375rem] px-[5rem] bg-main rounded-2xl flex flex-row items-start justify-start z-[4]">
                        <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-white text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                            적용하기
                        </b>
                    </button>
                </div>
            </div>

        </>
    )
}
