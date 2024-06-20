"use client"

import {ChangeEvent, useEffect, useState} from "react";
import {PostMenu} from "@/app/community/components/postMenu";
import {PostList} from "@/app/community/components/postList";
import {getPaginatePost} from "@/app/_lib/getPaginatePost";
import PostPagination from "@/app/community/components/postPagination";

export interface PostData {
    comments: {
        author: {
            profileImage: string;
            nickname: string;
        };
        content: string;
        createdAt: string;
        id: number;
        updatedAt: string;
    }[];
    author: {
        id: number;
        nickname: string;
        profileImage: string;
    };
    category: string;
    content: string;
    createdAt: string;
    hashtags: {
        id: number;
        name: string;
        createdAt: string;
        updatedAt: string;
    }[] | [];
    id: number;
    likeCount: number;
    title: string;
    viewCount: number;
}

export default function Page() {
    const [data, setData] = useState<PostData[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [total, setTotal] = useState<number>(0);
    const [category, setCategory] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");

    const fetchData = (page: number, categoryValue: string) => {
        getPaginatePost(page, categoryValue, searchText)
            .then((res) => {
                setTotal(res.total);
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }

    const categoryHandler = (category: string) => {
        setCategory(category);
        fetchData(1, category);
    }

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        fetchData(1, "");
    }, [])

    if (error) return <div className="h-screen bg-white">에러 발생</div>
    if (loading) return <div className="h-screen bg-white">로딩중...</div>
    return (
        <div
            className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.312rem] box-border gap-[9.375rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-cornflowerblue-100 font-inter mq450:gap-[2.313rem] mq725:gap-[4.688rem]">
            <main
                className="w-[89.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full m-auto">
                <section
                    className="w-[64.5rem] flex flex-col items-end justify-start gap-[5.062rem] max-w-full text-left text-[1.25rem] text-black font-inter mq725:gap-[1.25rem] mq1025:gap-[2.5rem]">
                    <PostMenu category={category} total={total} categoryHandler={categoryHandler}
                              searchHandler={searchHandler} fetchData={fetchData} />
                    <PostList data={data} fetchData={fetchData}/>
                    <PostPagination total={total} category={category} fetchData={fetchData}/>
                </section>
            </main>
        </div>
    );
}
