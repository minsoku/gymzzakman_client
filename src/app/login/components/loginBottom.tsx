import type { NextPage } from "next";
import Link from "next/link";

export const LoginBottom: NextPage = () => {
    return (
        <section
            className="self-stretch [background:linear-gradient(91.58deg,_#4aadff,_#88c4f6_68.35%,_#4aadff)] flex flex-col items-start justify-start pt-[1.875rem] px-[8.312rem] pb-[3rem] box-border relative gap-[1.431rem] max-w-full z-[1] mt-[-1.625rem] text-center text-[2.5rem] text-white font-inter mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq975:pl-[4.125rem] mq975:pr-[4.125rem] mq975:box-border">
            <div
                className="w-[33.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.937rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                    <div
                        className="w-[23.5rem] flex flex-row flex-wrap items-start justify-start gap-[0.5rem] max-w-full">
                        <div
                            className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[13.75rem] max-w-full">
                            <h1 className="m-0 self-stretch h-[4.313rem] relative text-inherit tracking-[-0.02em] leading-[5.938rem] font-semibold font-inherit inline-block shrink-0 z-[1] mq450:text-[1.5rem] mq450:leading-[3.563rem] mq975:text-[2rem] mq975:leading-[4.75rem]">
                                나에게 맞는 운동은?✨
                            </h1>
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full mt-[-1.188rem] text-[1.563rem] text-gray">
                        <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[4.313rem] font-light font-inherit inline-block max-w-full z-[1] mq450:text-[1.25rem] mq450:leading-[4.75rem]">
                            간단 키워드 설정으로 원하는 종목만 빠르게 검색!
                        </h2>
                    </div>
                </div>
            </div>
            <Link href={"/recommend"}>
            <div className="w-[19.188rem] h-[4.069rem] relative text-[1.563rem] text-darkslategray">
                <div
                    className="absolute h-[calc(100%_-_1px)] top-[0rem] bottom-[0.063rem] left-[1.063rem] rounded-181xl bg-white w-[17.119rem] z-[1] rounded-full"/>
                <h2
                    className="m-0 absolute top-[0.006rem] left-[0rem] tracking-[-0.02em] leading-[6.25rem] font-semibold font-inherit flex items-center justify-center w-full h-full cursor-pointer z-[2] mq450:text-[1.25rem] mq450:leading-[5rem] text-black"
                >
                    관심사 설정하러 가기
                </h2>
            </div>
            </Link>
            <div className="w-[31.55rem] h-[24.088rem] absolute !m-[0] top-[-6.069rem] right-[9.831rem]">
                <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full object-contain z-[3]"
                    alt=""
                    src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/login-footer.png"
                />
                <img
                    className="absolute top-[7.381rem] left-[18.194rem] w-[6.3rem] h-[6.088rem] object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/login-footer-top.png"
                />
                <img
                    className="absolute top-[15.069rem] left-[2.756rem] w-[6.088rem] h-[6.3rem] object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/login-footer-bottom.png"
                />
            </div>
        </section>
    )
}
