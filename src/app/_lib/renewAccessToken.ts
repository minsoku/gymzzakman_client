"use server"

import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/_config/authOption";

export const renewAccessToken = async () => {
    const session: Session | null = await getServerSession(authOptions);
    // @ts-ignore
    const bearer = session?.user?.refreshToken;
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/auth/token/access`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearer}`,
            },
            credentials: 'include',
        })
        const res = await response.json();
        console.log(res);
        return true;
    } catch (err) {
        console.error(err);
        throw new Error("INTERNAL_SERVER_ERROR");
    }
}
