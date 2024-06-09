import {useRouter} from "next/navigation";

export const Result = () => {
    const router = useRouter()
    const routerClick = () => {
        router.push('/search')
    }
    return (
        <div className="h-screen bg-gray-100">
            <div className="flex items-center justify-center flex-col">
                <h1 className="mt-40 text-xl">다음을 고려해보세요</h1>
                <h1 className="mt-3 text-main text-4xl font-bold">“ 크로스핏 / 복싱 ”</h1>
                <img className="w-1/3" src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/result_main.png"
                     alt="result_main.png"/>
                <button onClick={routerClick} className="w-1/3 h-16 text-white bg-main rounded-2xl font-bold text-lg">
                    내 주변에서 검색하기
                </button>
            </div>

        </div>
    )
}
