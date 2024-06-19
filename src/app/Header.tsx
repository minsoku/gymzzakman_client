"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";


export const Header = () => {
    const session = useSession();
    const pathname = usePathname();
    if (pathname === "/") {
        return null;
    }
    return (
        <header
            className="self-stretch flex flex-row items-start justify-between py-[1.562rem] px-[5rem] box-border max-w-full gap-[1.25rem] mq975:pl-[2.5rem] mq975:pr-[2.5rem] mq975:box-border bg-white">
            <Link href={"/"}>
                <img
                    className="h-[2.5rem] w-[3.188rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/logo.png"
                />
            </Link>
            <nav
                className="m-0 w-[27.375rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border max-w-full mq700:hidden">
                <nav
                    className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-left text-[0.938rem] text-black font-inter">
                    <Link href={"/search"}>
                        <div
                            className={"relative tracking-[-0.1em] inline-block min-w-[4.125rem] whitespace-nowrap cursor-pointer" + (pathname === "/search" ? " text-main" : "")}
                        >
                            최저가 검색
                        </div>
                    </Link>
                    <Link href={"/arround-fitness"}>
                        <div
                            className={"relative tracking-[-0.1em] inline-block min-w-[4.938rem] whitespace-nowrap cursor-pointer" + (pathname === "/arround-fitness" ? " text-main" : "")}
                        >
                            운동시설 찾기
                        </div>
                    </Link>
                    <Link href={"/recommend"}>
                    <div
                        className={"relative tracking-[-0.1em] inline-block min-w-[4.938rem] whitespace-nowrap cursor-pointer" + (pathname === "/recommend" ? " text-main" : "")}
                    >
                        관심사 찾기
                    </div>
                    </Link>
                    <Link href={"/community"}>
                        <div
                            className={"relative tracking-[-0.1em] inline-block min-w-[3.188rem] cursor-pointer" + (pathname === "/community" ? " text-main" : "")}
                        >
                            커뮤니티
                        </div>
                    </Link>
                    {
                        session.data ?
                            <div
                                className={"cursor-pointer relative tracking-[-0.1em] inline-block min-w-[2.438rem]" + (pathname === "/login" ? " text-main" : "")}
                                onClick={() => signOut()}
                            >
                                로그아웃
                            </div> :
                            <Link href={"/login"}>
                                <div
                                    className={"relative tracking-[-0.1em] inline-block min-w-[2.438rem]" + (pathname === "/login" ? " text-main" : "")}
                                >
                                    로그인
                                </div>
                            </Link>
                    }
                </nav>
            </nav>
        </header>
    )
}
