import {AA} from "@/app/community/components/AA";
import {BB} from "@/app/community/components/BB";

export default function Page() {
  return (
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.312rem] box-border gap-[9.375rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-cornflowerblue-100 font-inter mq450:gap-[2.313rem] mq725:gap-[4.688rem]">
        <main className="w-[89.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full m-auto">
          <section className="w-[64.5rem] flex flex-col items-end justify-start gap-[5.062rem] max-w-full text-left text-[1.25rem] text-black font-inter mq725:gap-[1.25rem] mq1025:gap-[2.5rem]">
            <AA />
            <BB />
          </section>
        </main>
      </div>
  );
}
