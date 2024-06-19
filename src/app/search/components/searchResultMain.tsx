export const SearchResultMain = ({data}: any) => {
    // {
    //     "id": 1,
    //     "month": 1,
    //     "price": 165000,
    //     "order": 1,
    //     "fitnessCenter": {
    //     "id": 1,
    //         "name": "피트니스연구소 인하대역점",
    //         "profileImage": "https://file.woondoc.com/gym/cover/8ZZdyz1Ml8I5oMHEQHgA5U2rAggRUJ76_1646632958_4030693.jpg",
    //         "shortAddr": "미추홀구 용현동",
    //         "lat": "37.44779290",
    //         "lng": "126.64925790",
    //         "phoneNumber": "0328812226",
    //         "safeNumber": "050702705895",
    //         "address": "인천 미추홀구 독배로 309 노블레스타워 8층 피트니스 연구소"
    // }
    // }
    return (
        <section
            className="h-full w-[60%] border-gray-400 border-[1px] rounded-xl">
            <div
                className="flex items-center h-full">
                <img
                    className="w-1/5 h-40 p-4 rounded-3xl"
                    src={data.fitnessCenter.profileImage}
                    alt={data.fitnessCenter.name}
                />
                <div
                    className="mt-4 h-full w-full">
                    <div
                        className="h-full text-black text-lg">
                        <h2 className="m-0 relative text-[1.563rem] tracking-[-0.05em] font-semibold font-inherit inline-block z-[1] mq450:text-[1.25rem] mb-10">
                            {data.fitnessCenter.name}
                        </h2>
                        <div
                            className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[15rem] max-w-full text-[0.813rem] text-darkgray">
                            주소 l {data.fitnessCenter.address}
                        </div>
                    </div>
                    <div
                        className="flex relative">
                        <div
                            className="flex absolute right-3 bottom-0">
                            <div
                                className="">
                                <span className="font-semibold text-3xl text-gray-500">{data.month}개월</span>
                                {" "}
                                <b className="text-red-500 text-3xl">
                                    <span> {data.price / 10000}만원</span>
                                </b>
                            </div>
                            <button
                                className="w-40 h-16 bg-main text-white text-2xl rounded-2xl font-bold ml-5">
                                문의하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
