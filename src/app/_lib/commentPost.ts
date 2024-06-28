"use server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/_config/authOption";

export const postComment = async (body: { content: string, postId: number }) => {
    const session = await getServerSession(authOptions);
    // @ts-ignore
    let bearer = session?.user?.accessToken;
    const { content, postId } = body;
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}posts-comment`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${bearer}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content,
                postId,
            }),
            credentials: 'include',
        })
        const res = await response.json();
        if (!response.ok || res.success === false) {
            throw new Error(res.message);
        }
        return {
            success: res.success,
            message: res.message,
            commentList: res.data
        };
    } catch (err) {
        console.error(err);
        throw new Error("INTERNAL_SERVER_ERROR");
    }


    return {message: null, success: false};
}
