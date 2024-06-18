"use client"

import type {NextPage} from "next";
import Link from "next/link";
import {signIn} from "next-auth/react";
import React, {ChangeEventHandler, FormEventHandler, useEffect, useState} from "react";
import {redirect} from "next/navigation";
import errorCodes from "@/app/const/errorcodes";

export const LoginMain: NextPage = () => {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [idChecked, setIdChecked] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem("saveId")) {
            setEmail(localStorage.getItem("saveId") || "");
            setIdChecked(true);
        }
    }, []);

    const onChangeField: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }

        setErrorMessage('');
    }

    const onChangeSaveId: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdChecked(e.target.checked);
        if (!e.target.checked) {
            localStorage.removeItem("saveId");
        }
    }
    const onSubmit: FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.email.value;
        const password = e.currentTarget.password.value
        let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
        if (!username || !password) {
            setErrorMessage("아이디 또는 비밀번호를 입력해주세요.");
            return;
        }
        if (!reg.test(password)) {
            setErrorMessage("비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상 15자 이하로 입력해주세요.");
            return;
        }
        try {
            await signIn("credentials", {
                username,
                password,
                redirect: false,
            }).then((res) => {
                if (!res?.error && res?.ok) {
                    if (idChecked){
                        localStorage.setItem("saveId", username);
                    }
                    redirect('/');
                } else if (res?.error) {
                    setErrorMessage(errorCodes[res.error]);
                    setEmail("");
                    setPassword("");
                }
            })
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <form
            onSubmit={onSubmit}
            className="m-0 w-[42.938rem] flex flex-col items-start justify-start gap-[2.706rem] max-w-full mq700:gap-[1.375rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
                    <div
                        className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[2.062rem] px-[2.125rem] gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-lightgray">
                        <div
                            className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray"/>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[2]"
                            alt=""
                            src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/login-id.png"
                        />
                        <input
                            className="w-full [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro text-left inline-block p-0 z-[2] mq450:text-[1rem]"
                            placeholder="아이디 입력"
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChangeField}
                        />
                    </div>
                    <div
                        className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[2.062rem] px-[2.125rem] gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-lightgray">
                        <div
                            className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-lightgray"/>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[2]"
                            alt=""
                            src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/login-password.png"
                        />
                        <input
                            className="w-full [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro text-left inline-block p-0 z-[2] mq450:text-[1rem]"
                            placeholder="비밀번호 입력"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChangeField}
                        />
                    </div>
                </div>
                {errorMessage &&
                    <div className="text-red-500 text-xs font-semibold">
                        {errorMessage}
                    </div>
                }
                <div className="w-[14.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[0.5rem]">
                        <input type="checkbox" onChange={onChangeSaveId} checked={idChecked}/>
                        <div
                            className="flex-1 relative text-[0.938rem] tracking-[-0.05em] font-medium font-inter text-black text-left z-[1]">
                            아이디 저장
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="cursor-pointer [border:none] py-[1.812rem] px-[1.25rem] self-stretch rounded-3xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-cornflowerblue-200 bg-main">
                <div
                    className="h-[5.875rem] w-[42.938rem] relative rounded-3xs bg-cornflowerblue-100 hidden max-w-full"/>
                <b className="relative text-[1.875rem] tracking-[-0.05em] inline-block font-inter text-white text-left min-w-[5rem] z-[2] mq450:text-[1.125rem] mq975:text-[1.5rem]">
                    로그인
                </b>
            </button>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
                <div className="flex flex-row items-start justify-start gap-[0.437rem]">
                    <div
                        className="relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block min-w-[4.375rem] z-[1]">
                        아이디 찾기
                    </div>
                    <div
                        className="w-[0.875rem] relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block z-[1]">
                        ㅣ
                    </div>
                    <div
                        className="relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block min-w-[5.188rem] z-[1]">
                        비밀번호 찾기
                    </div>
                    <div
                        className="w-[0.875rem] relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block z-[1]">
                        ㅣ
                    </div>

                    <div
                        className="relative text-[0.938rem] tracking-[-0.05em] font-inter text-silver text-left inline-block min-w-[3.313rem] z-[1]">
                        <Link href={"/signup"}>회원가입</Link>
                    </div>

                </div>
            </div>
        </form>
    )
}
