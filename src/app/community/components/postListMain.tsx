import {PostData} from "@/app/community/page";

interface Hashtags {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

interface IPostData {
    post: PostData;
}


export const PostListMain = ({post}: IPostData) => {
    return (
        <div className="w-full h-80 rounded-2xl border-gray-400 border-[1px] mt-3">
            <div className="flex flex-col">
                <div className="flex m-5">
                    <img className="w-20 rounded-full" src="https://s3.ap-northeast-2.amazonaws.com/gymzzakman/profile/178e94d3-ed79-43c5-8850-7d213e6e01e5" alt="profile" />
                    <div className="ml-2 mt-8 font-bold">{post.author.nickname}</div>
                </div>
                <div className="ml-5 w-28 h-8 font-light bg-gray-200 rounded-lg text-center content-center">{post.category}</div>
                <div className="ml-5 mt-5 font-light">{post.content}</div>
                <div className="flex">
                {
                    post.hashtags.length > 0 && post.hashtags.map((hashtag: Hashtags, key: number) => (
                        <div key={key} className="ml-5 mt-3 font-light text-main">#{hashtag.name}</div>
                    ))
                }
                </div>
                <div className="ml-5 mt-3 font-light text-gray-400">{post.createdAt}</div>
            </div>
        </div>
    )
}
