import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
                const authResponse = await fetch(`${process.env.NEXTAUTH_SERVER}auth/login/email`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${basicToken}`,
                    },
                });

                responseStatus(authResponse.status);

                const user = await authResponse.json();
                return {
                    ...user,
                };
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 60, // 30분
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token = {...user};
            }
            return token;
        },
        session({session, token}) {
            return {
                ...session,
                user: token,
            };
        },
    }
}
