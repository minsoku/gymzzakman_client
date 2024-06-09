"use server";

import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {renewAccessToken} from "@/app/_lib/renewAccessToken";

export const post = async (formData: FormData) => {
    let shouldRedirect = false;
    let bearer = cookies().get("connect.access");
    if (!bearer) {
        await renewAccessToken();
        bearer = cookies().get("connect.access");
    }
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/review-posts`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${bearer?.value}`,
            },
            body: formData,
            credentials: 'include',
        })
        const res = await response.json();
        if (!response.ok) {
            throw new Error(res.message);
        }
        if (res?.success) {
            shouldRedirect = true;
        } else {
            return {message: res.message};
        }
    } catch (err) {
        console.error(err);
        throw new Error("INTERNAL_SERVER_ERROR");
    }

    if (shouldRedirect) {
        redirect('/');
    }

    return {message: null};
}
