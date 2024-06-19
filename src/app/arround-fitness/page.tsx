"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LoginBottom} from "@/app/login/components/loginBottom";

function SampleNextArrow(props: any) {
    console.log(props);
    const {className, onClick} = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                right: "10px",
                fontSize: "40px",
                lineHeight: "1",
                color: "black",
                opacity: "0.75",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
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
                left: "8px",
                fontSize: "40px",
                lineHeight: "1",
                color: "black",
                opacity: "0.75",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                zIndex: 1000,
                width: "20px",
            }} onClick={onClick}
        />
    );
}

export default function Page() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 600,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,

    };
    const test = [
        {
            id: 1,
            image: "https://gymzzakman.s3.ap-northeast-2.amazonaws.com/profile/1318e112-e663-4acc-8336-f985339a462a"
        },
        {
            id: 2,
            image: "https://gymzzakman.s3.ap-northeast-2.amazonaws.com/profile/1318e112-e663-4acc-8336-f985339a462a"
        },
        {
            id: 3,
            image: "https://gymzzakman.s3.ap-northeast-2.amazonaws.com/profile/1318e112-e663-4acc-8336-f985339a462a"
        }, {
            id: 4,
            image: "https://gymzzakman.s3.ap-northeast-2.amazonaws.com/profile/1318e112-e663-4acc-8336-f985339a462a"
        },
        {
            id: 5,
            image: "https://gymzzakman.s3.ap-northeast-2.amazonaws.com/profile/1318e112-e663-4acc-8336-f985339a462a"
        },


    ]
    const image = "https://gymzzakman.s3.ap-northeast-2.amazonaws.com/profile/1318e112-e663-4acc-8336-f985339a462a";
    return (

        <div className="w-screen h-screen bg-white flex flex-col items-center">
            <h1 className="font-bold text-5xl">내 주변 운동시설</h1>
            <div className="w-[70%] mt-20">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={image} className="h-60 m-4 p-2"/>
                            <span className="absolute font-bold bottom-20 left-6 text-xl">제목 어쩌구 저저구</span>
                            <span className="absolute font-bold bottom-10 left-6 text-lg">주소 어쩌구 저쩌구</span>
                        </div>
                        <div>
                            <img src={image} className="h-60 m-4 p-2"/>
                            <span className="absolute font-bold bottom-20 left-6 text-xl">제목 어쩌구 저저구</span>
                            <span className="absolute font-bold bottom-10 left-6 text-lg">주소 어쩌구 저쩌구</span>
                        </div>
                        <div>
                            <img src={image} className="h-60 m-4 p-2"/>
                            <span className="absolute font-bold bottom-20 left-6 text-xl">제목 어쩌구 저저구</span>
                            <span className="absolute font-bold bottom-10 left-6 text-lg">주소 어쩌구 저쩌구</span>
                        </div>
                        <div>
                            <img src={image} className="h-60 m-4 p-2"/>
                            <span className="absolute font-bold bottom-20 left-6 text-xl">제목 어쩌구 저저구</span>
                            <span className="absolute font-bold bottom-10 left-6 text-lg">주소 어쩌구 저쩌구</span>
                        </div>

                        <div>
                            <img src={image} className="h-60 m-4 p-2"/>
                            <span className="absolute font-bold bottom-20 left-6 text-xl">제목 어쩌구 저저구</span>
                            <span className="absolute font-bold bottom-10 left-6 text-lg">주소 어쩌구 저쩌구</span>
                        </div>
                    </Slider>
                </div>
                <div className="mt-20"/>
                <LoginBottom/>
            </div>
        </div>
    )
}
