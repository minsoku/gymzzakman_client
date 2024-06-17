import {PostListMain} from "@/app/community/components/postListMain";
import {PostData} from "@/app/community/page";

interface PostListProps {
    data: PostData[] | [];
    handlePage: (value: number) => null;
}

export const PostList = ( {data, handlePage}: PostListProps) => {
    console.log(data);
    return (
        <div className="w-full h-full">
            {
                data?.map((post: PostData) => (
                    <PostListMain post={post} />
                ))
            }
        </div>
    )
}
