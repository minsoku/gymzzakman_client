import {AA} from "@/app/search/components/AA";
import {BB} from "@/app/search/components/BB";

export default function Page() {
    return (
        <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.062rem] leading-[normal] tracking-[normal]">
            <main className="self-stretch bg-whitesmoke flex flex-col items-center justify-start pt-[9.312rem] pb-[4.687rem] pr-[1.25rem] pl-[1.375rem] box-border gap-[3.5rem] max-w-full text-left text-[2.813rem] text-black font-inter lg:pt-[6.063rem] lg:pb-[3.063rem] lg:box-border mq750:gap-[1.75rem] mq1050:pt-[3.938rem] mq1050:pb-[2rem] mq1050:box-border mq450:pt-[2.563rem] mq450:pb-[1.313rem] mq450:box-border">
                <div className="w-[90rem] h-[106.25rem] relative bg-whitesmoke hidden max-w-full" />
                <div className="w-[72rem] flex flex-row items-start justify-center pt-[0rem] pb-[1rem] pr-[0.125rem] pl-[0rem] box-border max-w-full">
                    <div className="w-[21.25rem] flex flex-row flex-wrap items-start justify-start gap-[0.625rem] max-w-full">
                        <h1 className="m-0 h-[3.375rem] flex-1 relative text-inherit tracking-[-0.05em] font-bold font-inherit inline-block min-w-[11.563rem] z-[1] mq1050:text-[2.25rem] mq450:text-[1.688rem]">
                            최저가 검색하기
                        </h1>
                    </div>
                </div>
                <AA />
                {/*<BB />*/}
            </main>
        </div>
    );
}
