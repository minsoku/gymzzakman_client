export const Exercise = () => {
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
                            className="pt-[0.75rem] pb-[0.687rem] pr-[2.875rem] pl-[2.937rem] flex z-[4] border-[1px] border-solid rounded-3xl font-semibold mr-2 bg-white text-black">
                            헬스
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
