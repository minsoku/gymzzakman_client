import React, {ChangeEventHandler, useEffect, useState} from "react";
import {serverNewPost} from "@/app/_lib/newPost";
import {useSession} from "next-auth/react";
import {categoryObj, CategoryType} from "@/app/_const/categoryObj";

interface Position {
    latitude: string;
    longitude: string;
};

interface IProps {
    popUpHandler: () => void;
    search: () => void;
}

export const NewPostPopUp = ({popUpHandler, search}: IProps) => {
    const session: any = useSession()
    const [content, setContent] = useState<string>('');
    const [position, setPosition] = useState<Position>({latitude: '', longitude: ''});
    const [category, setCategory] = useState<string>('INFORMATION')
    const [hashtags, setHashtags] = useState<string[]>([]);
    const [newHashtag, setNewHashtag] = useState('');
    const options = ['FAQ', 'AMITY', 'CERTIFICATIONS'];

    const postContent = async () => {
        if (content.trim() === '') {
            alert('내용을 입력해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append("content", content);
        formData.append("title", "title");
        formData.append("lat", position.latitude.toString());
        formData.append("lng", position.longitude.toString());
        formData.append("category", category);
        hashtags.forEach((hashtag) => {
            formData.append('hashtags', hashtag);
        });

        const result = await serverNewPost(formData);
        if (result.success) {
            alert('게시물이 등록되었습니다.')
            search();
            popUpHandler();
        }
    }

    const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
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
                    console.error('Error', error);
                }
            );
        };

        getCurrentPosition();
    }, []);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="flex h-full items-center justify-center p-4 text-center">
                {/*바탕 회색*/}
                <div
                    onClick={popUpHandler}
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                <div
                    className="flex flex-col w-2/5 h-1/3 relative transform overflow-hidden rounded-2xl bg-white px-4 pt-5 pb-4 text-left align-middle shadow-xl transition-all text-black">
                    {session.status === "authenticated" &&
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <img className="w-14 h-14 rounded-full" src={session?.data?.user.image}
                                     alt={session?.data?.user.name}/>
                                <span className="mt-1 ml-2 font-bold">{session?.data?.user.name}</span>
                            </div>
                            <select onChange={onChangeCategory}
                                    className="h-10 relative border-[1px] border-gray-400 right-0">
                                <option value="INFORMATION">정보공유</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {categoryObj[option as keyof CategoryType]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    }
                    <textarea
                        className="w-full h-1/2 mt-5 p-2 border border-gray-300 rounded-md resize-none"
                        placeholder="게시글을 입력해주세요."
                        value={content}
                        onChange={onChangeContent}/>
                    <div className="flex w-full">
                        <div className="flex mt-4">
                            <input
                                type="text"
                                className="w-36 border-[1px] border-black pl-1"
                                placeholder="해시태그 입력"
                                value={newHashtag}
                                onChange={handleHashtagInput}
                            />
                            <button className="w-10 h-8 bg-main text-white ml-1 mr-1 rounded-lg"
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
                        <button
                            onClick={postContent}
                            className="absolute right-5 w-32 h-14 bg-main rounded-xl text-white mt-2">
                            등록하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
