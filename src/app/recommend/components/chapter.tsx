"use client"

interface Iprops {
    chapter: number;
    chapterChange: (chapter: number) => void;
    chapterList: {
        blueText: string;
        text: string;
        button1: string;
        button2: string;
        button3?: string;
    }[]
}

export const Chapter = ({chapter, chapterChange, chapterList}: Iprops) => {
    console.log(chapter);
    return (
        <div className="h-screen bg-gray-100">
            <div className="pt-40"/>
            <div className="w-1/3 h-2 bg-gray-300 m-auto rounded-3xl">
                <div className={`h-full bg-main rounded-3xl w-${chapter}/12 w-10/12`} />
            </div>
            <div className="pt-10"/>
            <div className="w-2/3 h-1/2 m-auto border-gray-200 border-[1px] rounded-xl bg-white flex flex-col">
                <h1 className="text-center mt-14 text-gray-400">
                    <b className="text-main">Q.{chapter}</b>/{chapterList.length}
                </h1>
                <p className="text-main font-bold text-center text-2xl mt-2">{chapterList[chapter - 1].blueText}<b
                    className="font-bold text-black">{chapterList[chapter - 1].text}</b></p>
                <span className="w-4/5 m-auto flex justify-between">
                    <button
                        className={`relative text-lg h-16 border-[1px] mr-4 hover:bg-main hover:text-white rounded-xl ${(chapterList[chapter - 1].button3 ? "w-1/3" : "w-1/2")}`}
                        onClick={() => chapterChange(chapter + 1)}
                    >
                        {chapterList[chapter - 1]?.button1}
                        <img className="w-4 absolute right-10 bottom-7"
                             src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/check_image.png"/>
                    </button>
                    <button
                        className={`relative text-lg h-16 border-[1px] mr-4 hover:bg-main hover:text-white rounded-xl ${(chapterList[chapter - 1].button3 ? "w-1/3" : "w-1/2")}`}
                        onClick={() => chapterChange(chapter + 1)}
                    >
                        {chapterList[chapter - 1]?.button2}
                        <img className="w-4 absolute right-10 bottom-7"
                             src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/check_image.png"/>
                    </button>
                    {chapterList[chapter - 1]?.button3 &&
                        <button
                            className="relative text-lg w-1/3 h-16 border-[1px] hover:bg-main hover:text-white rounded-xl"
                            onClick={() => chapterChange(chapter + 1)}
                        >
                            체형 교정
                            <img className="w-4 absolute right-10 bottom-7"
                                 src="https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/check_image.png"/>
                        </button>
                    }
                </span>
            </div>
        </div>
    )
}
