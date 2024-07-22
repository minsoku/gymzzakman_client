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
    const fields = ['email', 'nickname', 'password', 'name'];
    for (const field of fields) {
        const error = validateFormData(formData, field);
        if (error) return error;
    }
    let shouldRedirect = false;
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}auth/register/email`, {
            method: 'post',
            body: formData,
            credentials: 'include',
        })
        console.log(response);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Response status: ${response.status}, Error message: ${errorData.message}`);
          }
        // const res = await response.json();

        
        if (response.ok) {
            shouldRedirect = true;
        } else {
            return {message: response.status};
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
