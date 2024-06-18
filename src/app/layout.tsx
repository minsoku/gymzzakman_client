import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/app/Header";
import Script from "next/script";
import AuthSession from "@/app/_component/AuthSession";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "짐짝맨",
    description: "짐짝맨",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Script type="text/javascript"
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ea22cc7b4726298c76cf9fc0c40e46bc&autoload=false&libraries=services"/>
        <body className={inter.className}>
        <AuthSession>
            <Header/>
            {children}
        </AuthSession>
        </body>
        </html>
    );
}
