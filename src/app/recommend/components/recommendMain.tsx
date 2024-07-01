interface Iprops {
    testStart: () => void;
}

export const RecommendMain = ({ testStart }: Iprops) => {
    return (
        <div className="h-screen flex bg-white">
            <div className="m-auto mt-20 flex flex-col text-center">
                <h1 className="text-5xl font-bold">운동종목 찾기</h1>
                <p className="mt-10 text-xl">
                    간단한 테스트로 나의 운동관심사를 파악하고
                    <br/>
                    딱 맞는 운동 종목을 추천받아보세요!
                </p>
                <div className="flex relative">
                    <img src="/recommend-main.png"/>
                    <img className="w-32 h-32 absolute bottom-14"
                         src="/recommend-main-left.png"/>
                    <img className="w-32 h-32 absolute right-0 top-32"
                         src="/recommend-main-right.png"/>
                </div>
                <button onClick={testStart}
                        className="mt-10 w-96 h-16 bg-main m-auto rounded-2xl text-white text-xl font-bold">테스트 시작하기
                </button>
            </div>
        </div>
    )
}
