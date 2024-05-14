import type { NextPage } from "next";
import Link from "next/link";

export const LoginMain: NextPage = () => {
    return (
        <form
            className="m-0 w-[42.938rem] flex flex-col items-start justify-start gap-[2.706rem] max-w-full mq700:gap-[1.375rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
                    <div
                        className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[2.062rem] px-[2.125rem] gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-lightgray">
                        <div
                            className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray"/>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[2]"
                            alt=""
                            src="/login-id.png"
                        />
                        <input
                            className="w-[6.375rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro text-left inline-block p-0 z-[2] mq450:text-[1rem]"
                            placeholder="아이디 입력"
                            type="text"
                        />
                    </div>
                    <div
                        className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[2.062rem] px-[2.125rem] gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-lightgray">
                        <div
                            className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray"/>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[2]"
                            alt=""
                            src="/login-password.png"
                        />
                        <input
                            className="w-[7.438rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro text-left inline-block p-0 z-[2] mq450:text-[1rem]"
                            placeholder="비밀번호 입력"
                            type="text"
                        />
                    </div>
                </div>
                <div className="w-[14.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[0.5rem]">
                        <input type="checkbox" />
                        <div
                            className="flex-1 relative text-[0.938rem] tracking-[-0.05em] font-medium font-inter text-black text-left z-[1]">
                            아이디 저장
                        </div>
                        <input type="checkbox" />
                        <div
                            className="flex-1 relative text-[0.938rem] tracking-[-0.05em] font-medium font-inter text-black text-left z-[1]">
                            자동 로그인
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="cursor-pointer [border:none] py-[1.812rem] px-[1.25rem] self-stretch rounded-3xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-cornflowerblue-200 bg-main">
                <div
                    className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-cornflowerblue-100 hidden max-w-full"/>
                <b className="relative text-[1.875rem] tracking-[-0.05em] inline-block font-inter text-white text-left min-w-[5rem] z-[2] mq450:text-[1.125rem] mq975:text-[1.5rem]">
                    로그인
                </b>
            </button>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
                <div className="flex flex-row items-start justify-start gap-[0.437rem]">
                    <div
                        className="relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block min-w-[4.375rem] z-[1]">
                        아이디 찾기
                    </div>
                    <div
                        className="w-[0.875rem] relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block z-[1]">
                        ㅣ
                    </div>
                    <div
                        className="relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block min-w-[5.188rem] z-[1]">
                        비밀번호 찾기
                    </div>
                    <div
                        className="w-[0.875rem] relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block z-[1]">
                        ㅣ
                    </div>

                    <div
                        className="relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block min-w-[3.313rem] z-[1]">
                        <Link href={"/signup"}>회원가입</Link>
                    </div>

                </div>
            </div>
        </form>
    )
}
