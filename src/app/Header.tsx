"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";


export const Header = () => {
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
                    src="/logo.png"
                />
            </Link>
            <nav
                className="m-0 w-[27.375rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border max-w-full mq700:hidden">
                <nav
                    className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-left text-[0.938rem] text-black font-inter">
                    <div
                        className="relative tracking-[-0.1em] inline-block min-w-[4.125rem] whitespace-nowrap cursor-pointer"
                    >
                        최저가 검색
                    </div>
                    <div
                        className="relative tracking-[-0.1em] inline-block min-w-[4.938rem] whitespace-nowrap cursor-pointer"
                    >
                        운동시설 찾기
                    </div>
                    <Link href={"/community"}>
                        <div
                            className={"relative tracking-[-0.1em] inline-block min-w-[3.188rem] cursor-pointer" + (pathname === "/community" ? " text-main" : "")}
                        >
                            커뮤니티
                        </div>
                    </Link>
                    <div className="relative tracking-[-0.1em] inline-block min-w-[3.938rem]">
                        마이페이지
                    </div>
                    <Link href={"/login"}>
                        <div className={"relative tracking-[-0.1em] inline-block min-w-[2.438rem]" + (pathname === "/login" ? " text-main" : "")}
                        >
                            로그인
                        </div>
                    </Link>
                </nav>
            </nav>
        </header>
    )
}