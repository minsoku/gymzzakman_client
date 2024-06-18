import {PostListMain} from "@/app/community/components/postListMain";
import {PostData} from "@/app/community/page";

interface PostListProps {
    data: PostData[] | [];
}

export const PostList = ( {data}: PostListProps) => {
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
