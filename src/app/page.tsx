"use client";

import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {MainButton} from "@/app/components/mainButton";

export default function Page() {
    const {data: session, status} = useSession();
    return (
        <div
            className="text-[#9A9A9A] w-full h-full">
            <main
                className="h-[68.225rem] w-full relative bg-[url('/home-background.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-[130%] z-[1] text-left text-[0.75rem] text-silver font-inter mq675:h-auto mq675:min-h-[1091.6]">
                <MainButton />
                <h1 className="text-black m-0 absolute top-[21.688rem] left-[35.188rem] text-[4.375rem] tracking-[-0.02em] leading-[5.938rem] inline-block font-bold font-inherit text-darkslategray text-center w-[49.531rem] h-[14.275rem] z-[2] mq450:text-[2.625rem] mq450:leading-[3.563rem] mq750:text-[3.5rem] mq750:leading-[4.75rem]">
                    <p className="m-0">원하는 운동정보</p>
                    <p className="m-0">이젠 간편하게 검색!</p>
                </h1>
                <section className="absolute top-[1.438rem] left-[14.75rem] w-[90.375rem] h-[64rem]">
                    <img
                        className="absolute top-[2.313rem] left-[42.813rem] w-[4.75rem] h-[1.563rem] overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src="/main-logo.png"
                    />
                </section>
                {
                    status === "loading" ? <div/> : session ?
                        <>
                            <div
                                className="absolute top-[42.969rem] left-[58.8rem] tracking-[-0.07em] inline-block min-w-[2.625rem] cursor-pointer z-[2]"
                                onClick={() => signOut()}
                            >
                                로그아웃
                            </div>
                        </>
                        :
                        <>
                            <Link href={"/login"}>
                                <div
                                    className="absolute top-[42.969rem] left-[57.063rem] tracking-[-0.07em] inline-block min-w-[2rem] cursor-pointer z-[2]"
                                >
                                    로그인
                                </div>
                            </Link>
                            <div
                                className="absolute top-[42.969rem] left-[59.5rem] tracking-[-0.07em] z-[2]">
                                ㅣ
                            </div>
                            <Link href={"/signup"}>
                                <div
                                    className="absolute top-[42.969rem] left-[60.688rem] tracking-[-0.07em] inline-block min-w-[2.625rem] cursor-pointer z-[2]"
                                >
                                    회원가입
                                </div>
                            </Link>
                        </>
                }
            </main>
            <div
                className="w-[85.225rem] relative tracking-[-0.07em] leading-[2.188rem] font-light hidden h-[4.206rem] shrink-0 max-w-full mq450:text-[1rem] mq450:leading-[1.75rem]">
                <p className="m-0">가격 정보부터 고객리뷰까지 한번에 비교하여</p>
                <p className="m-0">원하는 운동시설을 찾아보세요.</p>
            </div>
        </div>
    );
}
