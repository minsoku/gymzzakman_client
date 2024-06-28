"use client";
import React, {useState} from "react";
import {signUp} from "@/app/_lib/signup";
import errorCodes from "@/app/const/errorcodes";

export const SignupMain = () => {
    const [file, setFile] = useState<File>();
    const [email, setEmail] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [state, setState] = useState<{
        error: string;
        isLoading: boolean;
    }>({
        error: '',
        isLoading: false,
    });

    const handleFileChange = (e: any): void => {
        const file = e.target.files[0];
        if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
            alert('PNG, JPG만 가능합니다.');
            return;
        } else {
            setFile(file);
        }
    };

    const postSignUp = () => {
        setState((prevState) => ({...prevState, error: "", isLoading: true}));

        if (password !== passwordConfirm) {
            setState((prevState) => ({...prevState, error: 'PASSWORD_MISMATCH'}));
            return;
        }
        const formData = new FormData();
        formData.append('email', email);
        formData.append('nickname', nickname);
        formData.append('password', password);
        formData.append('phoneNumber', phone);
        if (file) {
            console.log(file);
            formData.append('file', file);
        }
        signUp(formData)
            .then((res) => {
                if (res?.message) {
                    setState((prevState) => ({...prevState, error: res?.message, isLoading: false}));
                } else {
                    setState((prevState) => ({...prevState, error: '', isLoading: false}));
                }
            })
            .catch((err) => {
                setState((prevState) => ({...prevState, error: 'An error occurred', isLoading: false}));
            });
    }

    const onChangeEmail = (e: any): void => {
        setEmail(e.target.value);
    }

    const onChangeNickname = (e: any): void => {
        setNickname(e.target.value);
    }

    const onChangePassword = (e: any): void => {
        setPassword(e.target.value);
    }

    const onChangePasswordConfirm = (e: any): void => {
        setPasswordConfirm(e.target.value);
    }

    const onChnagePhone = (e: any): void => {
        setPhone(e.target.value);
    }

    return (
        <div
            className="self-stretch flex flex-col items-end justify-start gap-[1.206rem] max-w-full text-right text-[1.25rem] text-black font-inter">
            {state.isLoading && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            <div
                                className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                            <span className="ml-4 text-blue-500 font-bold text-lg">로딩중</span>
                        </div>
                    </div>
                </div>
            )}
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-28 flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="text-lg self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.563rem] z-[1] mq450:text-[1rem]">
                        이메일
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[2.125rem] px-[2.187rem] pb-[2rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="이메일 주소를 입력해주세요."
                        type="email"
                        onChange={onChangeEmail}
                    />
                </div>
            </div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-28 flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="text-lg self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.563rem] z-[1] mq450:text-[1rem]">
                        비밀번호
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[2.125rem] px-[2.187rem] pb-[2rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                        type="password"
                        onChange={onChangePassword}
                    />
                </div>
            </div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-28 flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="text-lg self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.563rem] z-[1] mq450:text-[1rem]">
                        비밀번호 확인
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[2.125rem] px-[2.187rem] pb-[2rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                        type="password"
                        onChange={onChangePasswordConfirm}
                    />
                </div>
            </div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                <div
                    className="w-28 flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                    <div
                        className="text-lg self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.563rem] z-[1] mq450:text-[1rem]">
                        닉네임
                    </div>
                </div>
                <div
                    className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[2.125rem] px-[2.187rem] pb-[2rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                    <input
                        className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                        placeholder="닉네임 입력"
                        type="text"
                        onChange={onChangeNickname}
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div
                    className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.562rem] max-w-full">
                    <div
                        className="w-28 flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border">
                        <div
                            className="text-lg self-stretch relative tracking-[-0.05em] font-medium inline-block min-w-[4.438rem] z-[1] mq450:text-[1rem]">
                            휴대폰
                        </div>
                    </div>
                    <div
                        className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-[1.937rem] px-[2.187rem] pb-[2.187rem] min-w-[27.938rem] max-w-full z-[1] border-[1px] border-solid border-lightgray-100 mq750:min-w-full">
                        <input
                            className="w-[36.25rem] [border:none] [outline:none] font-semibold font-inter text-[1.25rem] bg-[transparent] h-[1.5rem] relative tracking-[-0.05em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[2] mq450:text-[1rem]"
                            placeholder="‘-’ 빼고 숫자만 입력"
                            type="tel"
                            onChange={onChnagePhone}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {!file ? <div className="space-y-1 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    d="M18 32l12-12m-12 0l12 12m-12-12v12m12-12v12m-6 0a2 2 0 100-4 2 2 0 000 4z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600 justify-center">
                                <label
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-main hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                                    htmlFor="file"
                                >
                                    <span>업로드</span>
                                    <input className="sr-only" id="file" name="file" type="file"
                                           onChange={handleFileChange}/>
                                </label>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG만 가능합니다.</p>
                        </div>
                        :
                        <div className="w-20">
                            <img src={URL.createObjectURL(file)} alt="profile_image"/>
                        </div>
                    }

                </div>
            </div>
            <div className="text-red-500 text-lg mb-4">{errorCodes[state.error]}</div>
            <button
                className="mt-5 cursor-pointer [border:none] py-[1.812rem] pr-[1.25rem] pl-[1.312rem] self-stretch flex flex-row items-start justify-center box-border max-w-full z-[1] bg-main rounded-2xl"
                onClick={postSignUp}
            >
                <b className="relative text-[1.875rem] tracking-[-0.05em] font-inter text-white text-left z-[2] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                    회원가입 완료
                </b>
            </button>
        </div>
    )
}
