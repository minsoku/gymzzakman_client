import { FrameComponent } from '@/app/signup/components/frame-component';
export default function Page() {
    return (
        <div
            className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.187rem] leading-[normal] tracking-[normal]">
            <div
                className="w-[42.938rem] h-[22.375rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray-100"/>
            <main
                className="self-stretch bg-whitesmoke flex flex-col items-center justify-start pt-[9.187rem] pb-[39rem] pr-[1.25rem] pl-[1.312rem] box-border gap-[4.375rem] max-w-full text-left text-[2.813rem] text-black font-inter lg:pt-[6rem] lg:pb-[25.375rem] lg:box-border mq750:pt-[2.5rem] mq750:pb-[10.75rem] mq750:box-border mq450:gap-[1.063rem] mq1050:gap-[2.188rem] mq1050:pt-[3.875rem] mq1050:pb-[16.5rem] mq1050:box-border">
                <div className="w-[90rem] h-[118.625rem] relative bg-whitesmoke hidden max-w-full"/>
                <div
                    className="w-[49.063rem] flex flex-row items-start justify-center py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full">
                    <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                        <h1 className="m-0 relative text-inherit tracking-[-0.05em] font-bold font-inherit z-[1] mq450:text-[1.688rem] mq1050:text-[2.25rem]">
                            회원가입
                        </h1>
                    </div>
                </div>
                <div
                    className="w-[49.063rem] flex flex-col items-end justify-start gap-[1.687rem] max-w-full text-right text-[1.25rem]">
                    <FrameComponent/>
                </div>
            </main>
        </div>
    );
}
