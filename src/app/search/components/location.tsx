import KakaoMap from "@/app/search/components/kakaoMap";

export const Location = () => {
    return (
        <>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pt-10 pb-2">
                <b className="font-bold">지도에서 찾기</b>
            </div>
            <div className="self-stretch items-end justify-start gap-[1.875rem] max-w-full">
                <div className="self-stretch relative">
                    <KakaoMap/>
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
                            className="cursor-pointer [border:none] py-[1.375rem] px-[5rem] bg-main rounded-2xl flex flex-row items-start justify-start z-[4]">
                            <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-white text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                                적용하기
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
