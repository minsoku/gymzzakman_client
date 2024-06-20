"use server";

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/_config/authOption";

export const serverNewPost = async (formData: FormData) => {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    let bearer = session?.user?.accessToken;

    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/posts`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${bearer}`,
            },
            body: formData,
            credentials: 'include',
        })
        const res = await response.json();
        if (!response.ok) {
            throw new Error(res.message);
        }
        if (res?.success) {
            return {success: true, message: res.message, id: res.post.id};
        } else {
            return {message: res.message};
        }
    } catch (err) {
        console.error(err);
        throw new Error("INTERNAL_SERVER_ERROR");
    }

    // if (shouldRedirect) {
    //     redirect('/');
    // }

    return {message: "gd"};
}
