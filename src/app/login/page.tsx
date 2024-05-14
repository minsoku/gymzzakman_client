import {LoginMain} from "@/app/login/components/loginMain";
import {LoginBottom} from "@/app/login/components/loginBottom";

export default function Page() {
    return (
        <div
            className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            <main className="self-stretch flex flex-col items-start justify-start max-w-full">
                <section
                    className="self-stretch bg-whitesmoke flex flex-col items-center justify-start pt-[9.375rem] pb-[15.843rem] pr-[1.25rem] pl-[1.312rem] box-border gap-[4.375rem] max-w-full text-left text-[2.813rem] text-black font-inter mq450:gap-[1.063rem] mq700:pt-[3.938rem] mq700:pb-[6.688rem] mq700:box-border mq975:gap-[2.188rem] mq975:pt-[6.063rem] mq975:pb-[10.313rem] mq975:box-border">
                    <div className="w-[90rem] h-[60.813rem] relative bg-whitesmoke hidden max-w-full"/>
                    <div className="w-[42.938rem] flex flex-row items-start justify-center max-w-full">
                        <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]" />
                            <h1 className="m-0 h-[3.375rem] relative text-inherit tracking-[-0.05em] font-bold font-inherit inline-block min-w-[7.5rem] z-[1] mq450:text-[1.688rem] mq975:text-[2.25rem]">
                                로그인
                            </h1>
                        </div>
                    </div>
                    <LoginMain/>
                </section>
                <LoginBottom/>
            </main>
        </div>
    )
}
