"use server";

import {redirect} from "next/navigation";

// 폼 데이터 유효성 검사 함수
const validateFormData = (formData: FormData, key: string)=> {
    const value = formData.get(key);
    if (!value || !value.toString().trim()) {
        return { message: `no_${key}`.toUpperCase() };
    }
    return null;
};

export const signUp = async (formData: FormData) => {
    const fields = ['email', 'nickname', 'password'];
    for (const field of fields) {
        const error = validateFormData(formData, field);
        if (error) return error;
    }
    let shouldRedirect = false;
    try {
        const response = await fetch(`${process.env.NEST_SERVER}/auth/register/email`, {
            method: 'post',
            body: formData,
            credentials: 'include',
        })
        const res = await response.json();
        if (res?.success) {
            shouldRedirect = true;
        } else {
            return {message: res.message};
        }
    } catch (err) {
        console.error(err);
        return {message: "INTERNAL_SERVER_ERROR"};
    }

    if (shouldRedirect) {
        redirect('/');
    }

    return {message: null};
}
