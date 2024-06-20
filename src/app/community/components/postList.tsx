import {PostListMain} from "@/app/community/components/postListMain";
import {PostData} from "@/app/community/page";

interface PostListProps {
    data: PostData[] | [];
    fetchData: (page: number, categoryValue: string) => void;
}

export const PostList = ( { data,fetchData}: PostListProps) => {
    return (
        <div className="w-full min-h-96">
            {
                data?.map((post: PostData, key: number) => (
                    <PostListMain key={key} post={post} fetchData={fetchData} />
                ))
            }
        </div>
    )
}
