"use client"

import Link from "next/link";
import {useSession} from "next-auth/react";


export const AA = () => {
    const session = useSession();

    return (
        <div
            className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.375rem] box-border gap-[4.687rem] max-w-full text-left text-[2.813rem] text-black font-inter mq725:gap-[1.188rem] mq1025:gap-[2.313rem]">
            <div
                className="w-[63.75rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]"/>
                    <h1 className="m-0 relative text-inherit tracking-[-0.05em] font-bold font-inherit mq450:text-[1.688rem] mq975:text-[2.25rem]">
                        커뮤니티
                    </h1>
                </div>
            </div>
            <div
                className="w-[63.75rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="flex flex-row items-start justify-center gap-[0.625rem] max-w-full mq975:flex-wrap">
                    <button
                        className="hover:text-white hover:bg-main rounded-3xl cursor-pointer pt-[0.562rem] px-[3.562rem] pb-[0.5rem] bg-cornflowerblue-100 rounded-481xl flex flex-row items-start justify-start border-[1px] border-solid border-cornflowerblue-100 hover:bg-cornflowerblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-200">
                        <div
                            className="h-[2.813rem] w-[9.5rem] relative rounded-481xl bg-cornflowerblue-100 box-border hidden border-[1px] border-solid border-cornflowerblue-100"/>
                        <div
                            className="w-[2.25rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text-center inline-block min-w-[2.25rem] z-[1] mq450:text-[1rem]">
                            전체
                        </div>
                    </button>
                    <button
                        className="hover:text-white hover:bg-main rounded-3xl cursor-pointer pt-[0.562rem] px-[3rem] pb-[0.5rem] bg-white rounded-481xl flex flex-row items-start justify-start border-[1px] border-solid border-silver hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                        <div
                            className="h-[2.813rem] w-[9.5rem] relative rounded-481xl bg-white box-border hidden border-[1px] border-solid border-silver"/>
                        <div
                            className="w-[3.375rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text-center inline-block min-w-[3.375rem] z-[1] mq450:text-[1rem]">
                            인기글
                        </div>
                    </button>
                    <button
                        className="hover:text-white hover:bg-main rounded-3xl cursor-pointer pt-[0.562rem] px-[3.5rem] pb-[0.5rem] bg-white rounded-481xl flex flex-row items-start justify-start border-[1px] border-solid border-darkgray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                        <div
                            className="h-[2.813rem] w-[9.5rem] relative rounded-481xl bg-white box-border hidden border-[1px] border-solid border-darkgray"/>
                        <div
                            className="w-[2.375rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text-center inline-block min-w-[2.375rem] z-[1] mq450:text-[1rem]">
                            FAQ
                        </div>
                    </button>
                    <button
                        className="hover:text-white hover:bg-main rounded-3xl cursor-pointer pt-[0.562rem] pb-[0.5rem] pr-[2.312rem] pl-[2.375rem] bg-white rounded-481xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkgray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                        <div
                            className="h-[2.813rem] w-[9.5rem] relative rounded-481xl bg-white box-border hidden border-[1px] border-solid border-darkgray"/>
                        <div
                            className="w-[4.688rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text-center inline-block min-w-[4.688rem] z-[1]">
                            정보 공유
                        </div>
                    </button>
                    <button
                        className="hover:text-white hover:bg-main rounded-3xl cursor-pointer pt-[0.562rem] pb-[0.5rem] pr-[2.437rem] pl-[2.5rem] bg-white rounded-481xl flex flex-row items-start justify-start border-[1px] border-solid border-darkgray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                        <div
                            className="h-[2.813rem] w-[9.5rem] relative rounded-481xl bg-white box-border hidden border-[1px] border-solid border-darkgray"/>
                        <div
                            className="w-[4.438rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text text-center inline-block min-w-[4.438rem] z-[1] mq450:text-[1rem]">
                            우리동네
                        </div>
                    </button>
                </div>
            </div>
            <div
                className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[1.25rem] mq725:flex-wrap mq725:justify-center">
                <div
                    className="rounded-2xl bg-white flex flex-row items-start justify-start pt-[0.562rem] pb-[0.5rem] pr-[1.375rem] pl-[1.437rem] whitespace-nowrap border-[1px] border-solid border-darkgray">
                    <div
                        className="h-[2.813rem] w-[6.938rem] relative rounded-181xl bg-white box-border hidden border-[1px] border-solid border-darkgray"/>
                    <div className="w-[4rem] relative tracking-[-0.05em] font-semibold inline-block min-w-[4rem] z-[1]">
                        <span>{`전체 `}</span>
                        <span className="text-main"> 20</span>
                    </div>
                </div>
                <div
                    className="relative w-[28.438rem] flex flex-row items-start justify-center gap-[1.25rem] max-w-full mq450:flex-wrap">
                    <input
                        className="bg-[#F7F7F7] flex-1 rounded-full bg-whitesmoke flex flex-row items-start justify-end pt-[0.875rem] px-[1.375rem] pb-[0.812rem] box-border min-w-[1.125rem]"
                        type="text"
                    />
                    <svg className="cursor-pointer absolute top-4 z-40" width="18" height="18" viewBox="0 0 18 18"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M13.7266 7.84344C13.7266 8.61602 13.5744 9.38105 13.2788 10.0948C12.9831 10.8086 12.5498 11.4572 12.0035 12.0035C11.4572 12.5498 10.8086 12.9831 10.0948 13.2788C9.38105 13.5744 8.61602 13.7266 7.84344 13.7266C7.07085 13.7266 6.30583 13.5744 5.59205 13.2788C4.87827 12.9831 4.22972 12.5498 3.68342 12.0035C3.13711 11.4572 2.70376 10.8086 2.40811 10.0948C2.11245 9.38105 1.96028 8.61602 1.96028 7.84344C1.96028 6.28313 2.58011 4.78672 3.68342 3.68342C4.78672 2.58011 6.28313 1.96028 7.84344 1.96028C9.40375 1.96028 10.9002 2.58011 12.0035 3.68342C13.1068 4.78672 13.7266 6.28313 13.7266 7.84344ZM12.6546 14.0404C11.0784 15.264 9.09507 15.841 7.10843 15.6538C5.1218 15.4667 3.28117 14.5294 1.96126 13.0329C0.641347 11.5364 -0.0586226 9.59309 0.00384885 7.59863C0.0663203 5.60418 0.886536 3.7085 2.29752 2.29752C3.7085 0.886536 5.60418 0.0663203 7.59863 0.00384885C9.59309 -0.0586226 11.5364 0.641347 13.0329 1.96126C14.5294 3.28117 15.4667 5.1218 15.6538 7.10843C15.841 9.09507 15.264 11.0784 14.0404 12.6546L17.6879 16.3021C17.7843 16.3919 17.8615 16.5001 17.9151 16.6204C17.9687 16.7407 17.9975 16.8705 17.9998 17.0022C18.0022 17.1338 17.978 17.2646 17.9286 17.3867C17.8793 17.5088 17.8059 17.6197 17.7128 17.7128C17.6197 17.8059 17.5088 17.8793 17.3867 17.9286C17.2646 17.978 17.1338 18.0022 17.0022 17.9998C16.8705 17.9975 16.7407 17.9687 16.6204 17.9151C16.5001 17.8615 16.3919 17.7843 16.3021 17.6879L12.6546 14.0404Z"
                              fill="#C2C2C2"
                        />
                    </svg>
                    <button
                        className="bg-gray-400 text-white hover:bg-main rounded-3xl cursor-pointer [border:none] pt-[0.687rem] pb-[0.625rem] pr-[2.687rem] pl-[2.75rem] rounded-481xl flex flex-row items-start justify-start whitespace-nowrap">
                        <div className="h-[2.813rem] w-[11.188rem] relative rounded-481xl bg-gray-100 hidden"/>
                        {!session.data ?
                            <div
                                className="w-[5.75rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text-center inline-block min-w-[5.75rem] z-[1]">
                                게시글 등록
                            </div> :
                            <Link href={"/newPost"}>
                                <div
                                    className="w-[5.75rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text-center inline-block min-w-[5.75rem] z-[1]">
                                    게시글 등록
                                </div>
                            </Link>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
