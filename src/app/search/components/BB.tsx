export const BB = () => {
    return (
        <section
            className="w-[72rem] flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[1.875rem] max-w-full text-left text-[0.938rem] text-black font-inter">
            <div
                className="self-stretch rounded-3xs bg-white flex flex-row flex-wrap items-end justify-start pt-[2.062rem] pb-[2.25rem] pr-[1.75rem] pl-[2.125rem] box-border max-w-full [row-gap:20px] z-[1]">
                <img
                    className="[border:none] bg-gainsboro-300 h-[8rem] w-[14.375rem] [outline:none] relative rounded-3xs z-[1]"
                    src={""}
                />
                <div
                    className="flex-1 flex flex-col items-end justify-start gap-[2.187rem] min-w-[35rem] max-w-full ml-[-0.188rem] mq750:min-w-full mq1050:ml-0 mq450:gap-[1.063rem]">
                    <div
                        className="w-[51.938rem] flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq1050:flex-wrap">
                        <h2 className="m-0 w-[14rem] relative text-[1.563rem] tracking-[-0.05em] font-semibold font-inherit inline-block z-[1] mq450:text-[1.25rem]">
                            피트니스연구소 용현점
                        </h2>
                        <div
                            className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] text-darkgray">
                            <div
                                className="relative tracking-[-0.05em] font-semibold inline-block min-w-[5.125rem] z-[1]">
                                [반경 600m]
                            </div>
                        </div>
                        <div
                            className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[15rem] max-w-full text-[0.813rem] text-darkgray">
                            <div className="self-stretch relative whitespace-pre-wrap shrink-0 z-[1]">
                                주소 l 인천광역시 용현동 123
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.5rem] pl-[0rem] box-border max-w-full text-center">
                        <div
                            className="flex-1 flex flex-row items-start justify-start gap-[0.125rem] max-w-full mq1050:flex-wrap">
                            <div className="h-[4.125rem] flex-1 relative min-w-[20.375rem] max-w-full">
                                <div
                                    className="absolute h-full top-[0rem] bottom-[0rem] left-[1.938rem] rounded-3xs bg-whitesmoke w-[27.5rem] z-[1]"/>
                                <div
                                    className="absolute top-[1.5rem] left-[0rem] inline-block w-[31.375rem] h-[1.188rem] z-[2]">
                                    BENEFIT. 운동복 무료 / 회원권 1개월 무료 / 최신 기구 보유
                                </div>
                            </div>
                            <div
                                className="w-[10.688rem] flex flex-col items-start justify-start pt-[0.937rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-left text-[1.875rem] text-lightgray-200">
                                <div
                                    className="relative tracking-[-0.1em] z-[1] mq1050:text-[1.5rem] mq450:text-[1.125rem]">
                                    <span className="font-semibold">2개월</span>
                                    <b className="text-red-500">
                                        <span> 1만원</span>
                                    </b>
                                </div>
                            </div>
                            <button
                                className="cursor-pointer [border:none] py-[1.125rem] px-[2.875rem] bg-main rounded-2xl flex flex-row items-start justify-start z-[1]">
                                <b className="relative text-[1.563rem] tracking-[-0.1em] inline-block font-inter text-white text-left min-w-[5.313rem] z-[2] mq450:text-[1.25rem]">
                                    문의하기
                                </b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
