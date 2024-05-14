export const FrameComponent = () => {
    return (
        <div
            className="self-stretch flex flex-col items-end justify-start gap-[1.206rem] max-w-full text-right text-[1.25rem] text-black font-inter">
            <div className="w-[47.875rem] flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-[3.375rem] flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[3.375rem] z-[1] mq450:text-[1rem]">
                        아이디
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[2.062rem] px-[2.187rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <div
                        className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100"/>
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="4~20자리 / 영문, 숫자, 특수문자 ‘_’ 만 사용 가능"
                        type="text"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-[4.563rem] flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.563rem] z-[1] mq450:text-[1rem]">
                        비밀번호
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[2.125rem] px-[2.187rem] pb-[2rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <div
                        className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100"/>
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                        type="text"
                    />
                </div>
            </div>
            <div className="w-[46.875rem] flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-[2.375rem] flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[2.375rem] z-[1] mq450:text-[1rem]">
                        이름
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[2.062rem] px-[2.187rem] min-w-[27.938rem] max-w-full z-[1] text-left text-gainsboro-200 border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <div
                        className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100"/>
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="이름입력"
                        type="text"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div
                    className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                    <div
                        className="w-[4.438rem] flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                        <div
                            className="self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.438rem] z-[1] mq450:text-[1rem]">
                            생년월일
                        </div>
                    </div>
                    <div
                        className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[1.937rem] px-[2.187rem] pb-[2.187rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                        <div
                            className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100"/>
                        <input
                            className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                            placeholder="YYYYMMDD"
                            type="text"
                        />
                    </div>
                </div>
                <div className="self-stretch h-[5.875rem] relative">
                    <div className="absolute h-full top-[0rem] bottom-[0rem] left-[6rem] w-[38.438rem]">
                        <div
                            className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-3xs bg-white box-border w-[30.25rem] z-[1] border-[1px] border-solid border-lightgray-100"/>
                        <input
                            className="w-full [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] absolute top-[2.063rem] left-[2.188rem] tracking-[-0.05em] text-gainsboro-200 text-left inline-block p-0 z-[2] mq450:text-[1rem]"
                            placeholder="‘-’ 빼고 숫자만 입력"
                            type="text"
                        />
                    </div>
                    <button
                        className="bg-gray-500 hover:bg-main h-full w-[11.438rem] [outline:none] absolute top-[0rem] bottom-[0rem] left-[37.5rem] rounded-2xl box-border flex flex-row items-start justify-start py-[2.187rem] px-[3.5rem] font-inter font-medium text-[1.25rem] text-white z-[3] border-[1px] border-solid border-lightgray-100"
                    >인증요청</button>
                    <div
                        className="absolute top-[2.188rem] left-[0rem] tracking-[-0.05em] font-medium inline-block w-[4.438rem] z-[1] mq450:text-[1rem]">
                        휴대폰
                    </div>
                </div>
            </div>
            <div
                className="w-[46.875rem] flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-[2.375rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[2.375rem] z-[1] mq450:text-[1rem]">
                        약관
                    </div>
                </div>
                <div
                    className="flex-1 flex flex-col items-start justify-start gap-[1.875rem] min-w-[27.938rem] max-w-full text-left text-darkgray mq750:min-w-full">
                    <div
                        className="self-stretch rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-[1.437rem] px-[2.062rem] pb-[1.625rem] gap-[1.237rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100">
                        <div
                            className="w-[42.938rem] h-[18.813rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100"/>
                        <div
                            className="w-[36.063rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full text-black">
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[0.312rem] max-w-full">
                                <div
                                    className="w-[8.5rem] flex flex-row items-start justify-start gap-[0.687rem]">
                                    <input
                                        className="m-0 h-[1.563rem] w-[1.563rem] relative rounded box-border z-[2] border-[1px] border-solid border-gainsboro-100"
                                        type="checkbox"
                                    />
                                    <div
                                        className="flex-1 relative tracking-[-0.05em] font-medium z-[2] mq450:text-[1rem]">
                                        전체 동의
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.25rem] box-border max-w-full text-[0.938rem] text-darkgray">
                                    <div
                                        className="flex-1 relative tracking-[-0.05em] font-light inline-block max-w-full z-[2]">
                                        위치기반 서비스 이용약관(선택), 마케팅 정보
                                        수신동의(이메일/SMS 선택)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[0.063rem] relative box-border z-[2] border-t-[1px] border-solid border-gainsboro-100"/>
                        <div
                            className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-black">
                            <div
                                className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                                <div
                                    className="flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem]">
                                    <input
                                        className="accent-cornflowerblue-100 m-0 w-[1.563rem] h-[1.563rem] relative rounded box-border z-[2] border-[1px] border-solid border-cornflowerblue-100"
                                        // checked={checkboxElementsChecked}
                                        type="checkbox"
                                        // onChange={(event) =>
                                        //     setCheckboxElementsChecked(event.target.checked)
                                        // }
                                    />
                                </div>
                                <div
                                    className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[23.625rem] max-w-full ml-[-1.313rem] mq750:min-w-full">
                                    <div
                                        className="self-stretch relative tracking-[-0.07em] font-medium z-[2] mq450:text-[1rem]">
                                        (필수) 개인정보 수집 및 이용에 동의
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] ml-[-1.313rem]">
                                    <img
                                        className="w-[0.563rem] h-[0.938rem] relative object-contain z-[3]"
                                        alt=""
                                        src="/Vector.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                            <div
                                className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                                <div
                                    className="flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem]">
                                    <input
                                        className="m-0 w-[1.563rem] h-[1.563rem] relative rounded box-border z-[2] border-[1px] border-solid border-gainsboro-100"
                                        type="checkbox"
                                    />
                                </div>
                                <div
                                    className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[23.625rem] max-w-full ml-[-1.313rem] mq750:min-w-full">
                                    <div
                                        className="self-stretch relative tracking-[-0.07em] font-medium z-[2] mq450:text-[1rem]">
                                        (선택) 위치기반서비스 이용약관에 동의
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] ml-[-1.313rem]">
                                    <img
                                        className="w-[0.563rem] h-[0.938rem] relative object-contain z-[3]"
                                        alt=""
                                        src="/Vector.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                            <div
                                className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                                <div
                                    className="flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem]">
                                    <input
                                        className="m-0 w-[1.563rem] h-[1.563rem] relative rounded box-border z-[2] border-[1px] border-solid border-gainsboro-100"
                                        type="checkbox"
                                    />
                                </div>
                                <div
                                    className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[23.625rem] max-w-full ml-[-1.313rem] mq750:min-w-full">
                                    <div
                                        className="self-stretch relative tracking-[-0.07em] font-medium z-[2] mq450:text-[1rem]">
                                        (선택) 마케팅 정보 수신 동의(이메일)
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] ml-[-1.313rem]">
                                    <img
                                        className="w-[0.563rem] h-[0.938rem] relative object-contain z-[3]"
                                        alt=""
                                        src="/Vector.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                            <div
                                className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                                <div
                                    className="flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem]">
                                    <input
                                        className="m-0 w-[1.563rem] h-[1.563rem] relative rounded box-border z-[2] border-[1px] border-solid border-gainsboro-100"
                                        type="checkbox"
                                    />
                                </div>
                                <div
                                    className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[23.625rem] max-w-full ml-[-1.313rem] mq750:min-w-full">
                                    <div
                                        className="self-stretch relative tracking-[-0.07em] font-medium z-[2] mq450:text-[1rem]">
                                        (선택) 마케팅 정보 수신 동의(SMS)
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] ml-[-1.313rem]">
                                    <img
                                        className="w-[0.563rem] h-[0.938rem] relative object-contain z-[3]"
                                        alt=""
                                        src="/Vector.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="cursor-pointer [border:none] py-[1.812rem] pr-[1.25rem] pl-[1.312rem] self-stretch rounded-3xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-cornflowerblue-200 bg-main rounded-2xl">
                        <div
                            className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-cornflowerblue-100 hidden max-w-full"/>
                        <b className="relative text-[1.875rem] tracking-[-0.05em] font-inter text-white text-left z-[2] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                            회원가입 완료
                        </b>
                    </button>
                </div>
            </div>
        </div>
    )
}
