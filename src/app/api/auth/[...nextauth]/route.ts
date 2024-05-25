import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {cookies} from "next/headers";
import {responseStatus} from "@/app/_helper/responseStatus";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: '이름',
                    type: 'text',
                },
                password: {label: '비밀번호', type: 'password'},
            },
            async authorize(credentials, req): Promise<any> {
                const basicToken = Buffer.from(`${credentials?.username}:${credentials?.password}`).toString('base64');
                const authResponse = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/auth/login/email`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${basicToken}`,
                    },
                });

                responseStatus(authResponse.status);

                const user = await authResponse.json();
                if (user?.accessToken && user?.refreshToken) {
                    cookies().set({
                        name: "connect.access",
                        value: user.accessToken,
                        httpOnly: true,
                        path: "/",
                        maxAge: 60 * 30,
                    });
                    cookies().set({
                        name: "connect.refresh",
                        value: user.refreshToken,
                        httpOnly: true,
                        path: "/",
                        maxAge: 60 * 360,
                    })
                }
                return {
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    ...user,
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login' // 올바른 경로를 설정하세요
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 60, // 30분
    },
    callbacks: {
        session({session}) {
            return session;
        }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
