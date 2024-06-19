import {useState} from "react";

export const SearchResultMain = ({data}: any) => {
    const [popup, setPopup] = useState(false);
    const popupHandler = () => {
        setPopup(!popup)
    }

    const handlePhoneClick = (param: string) => {
        window.location.href = `tel:${param}`; // 전화번호 수정
    };
    const handleSmsClick = (param: string) => {
        window.location.href = `sms:${param}?body=안녕하세요 짐짝맨 웹사이트 보고 연락드립니다.`;
    }
    return (
        <section
            className="h-full w-[60%] border-gray-400 border-[1px] rounded-xl">
            {popup &&
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        {/*바탕 회색*/}
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                            <h3 className="text-lg text-center text-main font-bold">
                                편하신 방법으로 상담하실 수 있어요!
                            </h3>
                            <div className="mt-2 flex justify-center">
                                <button onClick={() => handlePhoneClick(data.fitnessCenter.safeNumber)} className="w-28 flex flex-col bg-gray-200 m-1 rounded-2xl items-center">
                                    <img className="m-3 w-12"
                                         src={"https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/call_image.png"}
                                         alt={"전화상담"}/>
                                    <span className="text-lg text-center font-bold">전화상담</span>
                                </button>
                                <button onClick={() => handleSmsClick(data.fitnessCenter.phoneNumber)} className="w-28 flex flex-col bg-gray-200 m-1 rounded-2xl items-center">
                                    <img className="m-3 w-12"
                                         src={"https://gymzzakman.s3.ap-northeast-2.amazonaws.com/public/message_image.png"}
                                         alt={"문자상담"}/>
                                    <span className="text-lg text-center font-bold">문자상담</span>
                                </button>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button onClick={popupHandler}
                                        className="w-72 h-10 bg-main text-white font-bold text-lg rounded-xl">
                                    다음에 하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div
                className="flex items-center h-full">
                <div className="">
                    <img
                        className="w-72 h-40 p-4 rounded-3xl"
                        src={data.fitnessCenter.profileImage}
                        alt={data.fitnessCenter.name}
                    />
                </div>
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
                                onClick={popupHandler}
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
