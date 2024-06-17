"use client"

import React, {ChangeEventHandler, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {serverNewPost} from "@/app/_lib/newPost";
import {redirect, useRouter} from "next/navigation";

interface Position {
    latitude: string;
    longitude: string;
}

const categoryObj = {
    FAQ: 'FAQ',
    AMITY: '우리동네',
    CERTIFICATIONS: '운동인증',
    INFORMATION: '정보공유'
}


export default function Page() {
    const session = useSession();
    const router = useRouter()

    if (!session.data) {
        redirect('/community')
    }
    const [files, setFiles] = useState<File[]>([]);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [position, setPosition] = useState<Position>({latitude: '', longitude: ''});
    const [category, setCategory] = useState<string>('INFORMATION')
    const [hashtags, setHashtags] = useState<string[]>([]);
    const [newHashtag, setNewHashtag] = useState('');

    const handleFileChange = (e: any): void => {
        const newFiles: File[] = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const file = e.target.files[i];
            if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
                alert('PNG, JPG만 가능합니다.');
                return;
            } else {
                newFiles.push(file);
            }
        }

        if (files.length + newFiles.length > 3) {
            alert('파일은 최대 3개까지만 가능합니다.');
            return;
        }

        setFiles([...files, ...newFiles]);
    };

    const postContent = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("lat", position.latitude.toString());
        formData.append("lng", position.longitude.toString());
        formData.append("category", category);
        hashtags.forEach((hashtag) => {
            formData.append('hashtags', hashtag);
        });
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i])
        }
        const result = await serverNewPost(formData);
        if (result.success) {
            alert('게시물이 등록되었습니다.')
            router.push('/community')
        }
    }

    const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }
    const onChangeCategory = (category: string) => {
        setCategory(category);
    }
    const handleHashtagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewHashtag(event.target.value);
    };

    const handleHashtagAdd = () => {
        if (hashtags.length >= 5) {
            alert('해시태그는 최대 5개까지 가능합니다.');
            return;
        }
        if (newHashtag.trim() !== '') {
            setHashtags([...hashtags, newHashtag.trim()]);
            setNewHashtag('');
        }
    };

    const handleHashtagDelete = (index: number) => {
        const updatedHashtags = [...hashtags];
        updatedHashtags.splice(index, 1);
        setHashtags(updatedHashtags);
    };

    useEffect(() => {
        const getCurrentPosition = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        latitude: position.coords.latitude.toString(),
                        longitude: position.coords.longitude.toString(),
                    });
                },
                (error) => {
                    console.log('Error', error);
                }
            );
        };

        getCurrentPosition();
    }, []);
    return (
        <div className="w-full h-screen bg-white">
            <form className="w-4/5 h-full m-auto border-[1px]" onSubmit={postContent}>
                <div className="h-full pt-5 w-5/6 m-auto ">
                    <div className="h-full flex flex-col">
                        <div className="flex">
                            <input
                                className="w-1/2 text-lg border-2 p-1.5"
                                placeholder="제목을 입력해주세요." name="title" type="text"
                                onChange={onChangeTitle}/>
                            <button
                                className={`m-auto w-1/12 h-8 hover:text-white hover:bg-main rounded-3xl cursor-pointer border-[1px] border-gray-400 ${
                                    category === "INFORMATION" ? "text-white bg-main" : "bg-white text-black"
                                }`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onChangeCategory("INFORMATION")
                                }}
                            >
                                {categoryObj["INFORMATION"]}
                            </button>
                            <button
                                className={`m-auto w-1/12 h-8 hover:text-white hover:bg-main rounded-3xl cursor-pointer border-[1px] border-gray-400 ${
                                    category === "AMITY" ? "text-white bg-main" : "bg-white text-black"
                                }`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onChangeCategory("AMITY")
                                }}
                            >
                                {categoryObj["AMITY"]}
                            </button>
                            <button
                                className={`m-auto w-1/12 h-8 hover:text-white hover:bg-main rounded-3xl cursor-pointer border-[1px] border-gray-400 ${
                                    category === "CERTIFICATIONS" ? "text-white bg-main" : "bg-white text-black"
                                }`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onChangeCategory("CERTIFICATIONS")
                                }}
                            >
                                {categoryObj["CERTIFICATIONS"]}
                            </button>
                            <button
                                className={`m-auto w-1/12 h-8 hover:text-white hover:bg-main rounded-3xl cursor-pointer border-[1px] border-gray-400 ${
                                    category === "FAQ" ? "text-white bg-main" : "bg-white text-black"
                                }`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onChangeCategory("FAQ")
                                }}
                            >
                                {categoryObj["FAQ"]}
                            </button>
                        </div>
                        <span className="flex mt-2">
                            <div className="mb-4 w-1/2">
                                    <div className="flex">
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="files"
                                                   className="cursor-pointer text-green-500 hover:text-main">이미지 업로드 <b
                                                className="text-gray-500">(PNG, JPG만 최대 3개까지 가능합니다.)</b>
                                            </label>
                                            <input className="sr-only" id="files" name="files" type="file"
                                                   onChange={handleFileChange}/>
                                        </div>
                                    </div>
                            </div>
                            <div className="mb-4 w-1/2 flex">
                                <input
                                    type="text"
                                    className="w-1/5 border-[1px] border-black pl-1"
                                    placeholder="해시태그 입력"
                                    value={newHashtag}
                                    onChange={handleHashtagInput}
                                />
                            <button className="w-1/12 bg-main text-white ml-1 mr-1 rounded-lg"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleHashtagAdd();
                                    }}>
                              입력
                            </button>
                                {hashtags.map((hashtag, index) => (
                                    <div key={index} className="items-center ml-1">
                                        <span className="mr-1 text-xs">#{hashtag}</span>
                                        <button className="text-red-500 text-xs"
                                                onClick={() => handleHashtagDelete(index)}>삭제
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </span>
                        <div className="flex">
                            {files.map((file, index) => (
                                <img key={index} className="w-32 h-32 object-cover rounded-md"
                                     src={URL.createObjectURL(file)}
                                     alt="post_image_preview"/>
                            ))}
                        </div>
                        <textarea className="w-full h-3/5 p-2 rounded border resize-none" name="content"
                                  onChange={onChangeContent}/>
                        <button
                            className="h-10 w-1/2 bg-main text-white mt-10 m-auto">등록하기
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
