"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LoginBottom} from "@/app/login/components/loginBottom";
import {useEffect, useState} from "react";
import {getFitnessCenter} from "@/app/_lib/getFitnessCenter";

function SampleNextArrow(props: any) {
    const {className, onClick} = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                right: "4px",
                fontSize: "40px",
                lineHeight: "1",
                color: "black",
                zIndex: 1000,
                width: "20px",
            }} onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const {className, onClick} = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                left: "4px",
                fontSize: "40px",
                lineHeight: "1",
                color: "black",
                zIndex: 1000,
                width: "20px",
            }} onClick={onClick}
        />
    );
}

export default function Page() {
    const [data, setData] = useState<any>([]);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    };

    const getData = () => {
        return getFitnessCenter();
    }

    useEffect(() => {
        getData().then((res) => {
            setData(res);
        });
    }, []);



    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center">
            <h1 className="font-bold text-5xl">내 주변 운동시설</h1>
            <div className="w-[70%] mt-20">
                <div className="slider-container">
                    {/*<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10"/>*/}
                    <Slider {...settings}>
                        {
                            data?.map((item: any, key: number) => (
                                <div className="w-[350px] h-[350px] z-20" key={key}>
                                    <img src={item.profileImage} loading="lazy" className="m-10 w-[350px] h-[350px]"/>
                                    <span
                                        className="absolute font-bold bottom-28 left-14 text-xl text-white">{item.name}</span>
                                    <span
                                        className="absolute font-bold bottom-16 left-14 text-xs text-white">{item.address}</span>
                                    <button
                                        className="w-20 h-6 absolute font-bold bottom-9 left-14 bg-main text-xs text-center text-white rounded-2xl">예약하기
                                    </button>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="mt-20"/>
                <LoginBottom/>
                <div className="">
                    <button
                        className="hover:text-white hover:bg-main rounded-3xl cursor-pointer pt-[0.562rem] px-[3.5rem] pb-[0.5rem] flex flex-row items-start justify-start border-[1px] border-solid border-darkgray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid bg-main text-white">
                        <div
                            className="w-[4.438rem] relative text-[1.25rem] tracking-[-0.05em] font-semibold font-inter text text-center inline-block min-w-[4.438rem] z-[1] mq450:text-[1rem]">
                            헬스
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
