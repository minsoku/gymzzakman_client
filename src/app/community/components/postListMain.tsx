import {PostData} from "@/app/community/page";
import {categoryObj, CategoryType} from "@/app/_const/categoryObj";
import {dateFormatting} from "@/app/_lib/dateFormatting";
import React, {useRef, useState} from "react";
import {postComment} from "@/app/_lib/commentPost";

interface Hashtags {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

interface IPostData {
    post: PostData;
    fetchData: (page: number, categoryValue: string) => void;
}


export const PostListMain = ({post, fetchData}: IPostData) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [commentList, setCommentList] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');

    const handleScrollDown = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const commentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }

    const commentOpen = () => {
        handleScrollDown();
        setCommentList(!commentList)
    }

    const sendComment = () => {
        if (comment.trim() === '') {
            alert('내용을 입력해주세요.');
            return;
        }
        postComment({content: comment, postId: post.id}).then((res) => {
            if (res.success) {
                fetchData(1, "")
                alert('댓글이 등록되었습니다.');
                setComment("");
            } else {
                alert('댓글 등록에 실패했습니다.');
                setComment("");
            }
        })
    }
    return (
        <div className="relative w-full h-72 rounded-2xl border-gray-400 border-[1px] mt-3">
            <div className="relative flex flex-col">
                <div className="flex m-5">
                    <img className="w-20 h-20 rounded-full"
                         src={post.author.profileImage}
                         alt="profile"/>
                    <div className="ml-2 mt-8 font-bold">{post.author.nickname}</div>
                </div>
                <div
                    className="ml-5 w-28 h-8 font-light bg-gray-200 rounded-lg text-center content-center">{categoryObj[post.category as keyof CategoryType]}</div>
                <div className="ml-5 mt-5 font-light">{post.content}</div>
                {/* <div className="flex">
                    {
                        post.hashtags.length > 0 && post.hashtags.map((hashtag: Hashtags, key: number) => (
                            <div key={key} className="ml-5 mt-3 font-light text-main">#{hashtag.name}</div>
                        ))
                    }
                </div> */}
                <div className="ml-5 mt-3 font-light text-gray-400">{dateFormatting(post.createdAt)}</div>
                <button onClick={commentOpen}>
                    <div className="w-6 h-6 absolute right-8 bottom-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             fill="#none">
                            <g id="style=stroke">
                                <g id="comment">
                                    <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd"
                                          d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034ZM12.2448 19.9706L12.2538 19.9739L12.2827 19.9844L12.3959 20.0254C12.4951 20.0611 12.6398 20.1128 12.8209 20.1764C13.1834 20.3038 13.6909 20.4787 14.2706 20.6687C15.4375 21.0511 16.869 21.4854 17.9963 21.7212C18.1926 21.7623 18.4196 21.7152 18.5926 21.6028C18.767 21.4896 18.8019 21.3739 18.8019 21.3173C18.8019 21.2726 18.7727 21.1292 18.6413 20.8757C18.5202 20.6419 18.3501 20.3858 18.1671 20.1394C17.986 19.8957 17.8031 19.6762 17.6647 19.5169C17.5958 19.4376 17.5388 19.3742 17.4996 19.3313C17.48 19.3098 17.4649 19.2936 17.4551 19.283L17.4444 19.2716L17.4422 19.2693C17.2927 19.1117 17.2188 18.897 17.2397 18.6808C17.2606 18.4646 17.3742 18.2681 17.5511 18.142C19.803 16.5383 21.2362 13.9796 21.2362 11.1034C21.2362 8.08942 19.669 5.42603 17.2477 3.83866L17.242 3.8349C15.7471 2.83523 13.9468 2.26367 11.9862 2.26367C6.84332 2.26367 2.73621 6.24818 2.73621 11.1034C2.73621 13.1396 3.46909 15.0246 4.70907 16.5205L4.71623 16.5292C6.37286 18.5897 9.01179 19.9246 11.9862 19.9246C12.0744 19.9246 12.162 19.9402 12.2448 19.9706C12.2447 19.9706 12.2448 19.9706 12.2448 19.9706Z"
                                          fill="#000000"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </button>
                <span className="absolute right-4 bottom-0">{post.comments.length}</span>
            </div>
            {commentList &&
                <>
                    <div className="w-full overflow-auto h-96 absolute bg-white border-black border-[1px] z-50">
                        {post.comments.map((item, key) => (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <div className="flex ml-5 mt-5 mb-2">
                                    <img className="w-12 h-12 rounded-full"
                                         src={item.author.profileImage}
                                         alt="profile"/>
                                    <div className="ml-2 mt-3 text-lg font-bold">{item.author.nickname}</div>
                                    <div
                                        className="ml-3 mt-4 font-light text-base text-gray-400">{dateFormatting(item.comment_created_at)}</div>
                                </div>
                                <p className="ml-6">{item.comment_content}</p>
                            </div>
                        ))
                        }
                        <textarea onChange={commentHandler}
                                  value={comment}
                                  className="w-full absolute h-10 border-gray-400 border-t-[1px] bottom-0 resize:none"/>
                        <button onClick={sendComment}
                                className="h-10 w-20 text-center absolute bg-main text-white right-0 bottom-0">
                            댓글작성
                        </button>
                    </div>
                </>
            }
            <div ref={contentRef}></div>
        </div>
    )
}
