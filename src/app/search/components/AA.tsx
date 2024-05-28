"use client"

import {useCallback, useEffect, useState} from "react";

import {Location} from "@/app/search/components/location";
import {Price} from "@/app/search/components/price";
import {Exercise} from "@/app/search/components/exercise";

export const AA = () => {
    const [type, setType] = useState<string>("location");

    const handleType = useCallback((type: string) => {
        setType(type);
    }, []);

    return (
        <section className="w-[71.938rem] flex flex-row flex-wrap items-start justify-center gap-[0.625rem] max-w-full">
            <div
                className="h-[5.625rem] flex-1 relative min-w-[38rem] max-w-full mq750:min-w-full border-solid border-2 border-[#E1E1E1] rounded-2xl">
                <svg className="absolute top-[2.2rem] left-[2.25rem] w-[1.375rem] h-[1.375rem] z-[2]" width="18"
                     height="18" viewBox="0 0 18 18"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.7266 7.84344C13.7266 8.61602 13.5744 9.38105 13.2788 10.0948C12.9831 10.8086 12.5498 11.4572 12.0035 12.0035C11.4572 12.5498 10.8086 12.9831 10.0948 13.2788C9.38105 13.5744 8.61602 13.7266 7.84344 13.7266C7.07085 13.7266 6.30583 13.5744 5.59205 13.2788C4.87827 12.9831 4.22972 12.5498 3.68342 12.0035C3.13711 11.4572 2.70376 10.8086 2.40811 10.0948C2.11245 9.38105 1.96028 8.61602 1.96028 7.84344C1.96028 6.28313 2.58011 4.78672 3.68342 3.68342C4.78672 2.58011 6.28313 1.96028 7.84344 1.96028C9.40375 1.96028 10.9002 2.58011 12.0035 3.68342C13.1068 4.78672 13.7266 6.28313 13.7266 7.84344ZM12.6546 14.0404C11.0784 15.264 9.09507 15.841 7.10843 15.6538C5.1218 15.4667 3.28117 14.5294 1.96126 13.0329C0.641347 11.5364 -0.0586226 9.59309 0.00384885 7.59863C0.0663203 5.60418 0.886536 3.7085 2.29752 2.29752C3.7085 0.886536 5.60418 0.0663203 7.59863 0.00384885C9.59309 -0.0586226 11.5364 0.641347 13.0329 1.96126C14.5294 3.28117 15.4667 5.1218 15.6538 7.10843C15.841 9.09507 15.264 11.0784 14.0404 12.6546L17.6879 16.3021C17.7843 16.3919 17.8615 16.5001 17.9151 16.6204C17.9687 16.7407 17.9975 16.8705 17.9998 17.0022C18.0022 17.1338 17.978 17.2646 17.9286 17.3867C17.8793 17.5088 17.8059 17.6197 17.7128 17.7128C17.6197 17.8059 17.5088 17.8793 17.3867 17.9286C17.2646 17.978 17.1338 18.0022 17.0022 17.9998C16.8705 17.9975 16.7407 17.9687 16.6204 17.9151C16.5001 17.8615 16.3919 17.7843 16.3021 17.6879L12.6546 14.0404Z"
                          fill="#C2C2C2"
                    />
                </svg>
                <input
                    className="w-full border-b-black [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] absolute top-[2.063rem] left-[4.875rem] tracking-[-0.05em] text-gainsboro-200 text-left inline-block p-0 z-[2] mq450:text-[1rem]"
                    placeholder="검색어를 입력해주세요"
                    type="text"
                />
            </div>
            <button
                className="cursor-pointer py-[1.75rem] px-[3.687rem] bg-main rounded-3xs flex flex-row items-start justify-start z-[1] border-[1px] border-solid hover:box-border hover:border-[1px] rounded-2xl">
                <div
                    className="h-[5.625rem] w-[12.813rem] relative rounded-3xs bg-main box-border hidden border-[1px] border-solid border-main"/>
                <b className="relative text-[1.563rem] tracking-[-0.1em] inline-block font-inter text-white text-left min-w-[5.313rem] z-[2] mq450:text-[1.25rem]">
                    검색하기
                </b>
            </button>
            <div className="flex-col items-start justify-start gap-[1.25rem] w-full border">
                <div
                    className="self-stretch flex flex-col items-start justify-start text-center text-[1.25rem] text-gainsboro-200">
                    <div
                        className="w-full h-[80px]  flex flex-row items-start max-w-full mq450:flex-wrap">
                        <button
                            onClick={() => handleType("location")}
                            className={"h-full w-[33.3%] relative font-semibold inline-block content-center border-y " +
                                (type === "location" ? "border-b-black" : "")}>
                            위치
                        </button>
                        <button
                            onClick={() => handleType("price")}
                            className={"h-full w-[33.3%] relative font-semibold inline-block content-center border-y " +
                                (type === "price" ? "border-b-black" : "")}>
                            가격
                        </button>
                        <button
                            onClick={() => handleType("exercise")}
                            className={"h-full w-[33.4%] relative font-semibold inline-block content-center border-y "  +
                                (type === "exercise" ? "border-b-black" : "")}>
                            운동종목
                        </button>
                    </div>
                </div>
                {type === "location" && <Location />}
                {type === "price" && <Price />}
                {type === "exercise" && <Exercise />}
            </div>
        </section>
    )
}
