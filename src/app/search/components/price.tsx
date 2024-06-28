"use client"
import {useState} from "react";
import Slider from "@/app/search/components/slider";
import {IPriceOptions} from "@/app/search/components/searchMain";

interface IPricePrips {
    handlePriceOption: (option: IPriceOptions) => void;
}

export const Price = ({handlePriceOption} : IPricePrips) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200);
    const [minMonth, setMinMonth] = useState(0);
    const [maxMonth, setMaxMonth] = useState(12);

    const selectOrder = () => {
        handlePriceOption({
            minPrice,
            maxPrice,
            minMonth,
            maxMonth
        });
    }

    return (
        <>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pt-10 pb-2">
                <b className="font-bold">가격</b>
            </div>
            <div className="w-[80%] flex justify-between m-auto text-sm text-main">
                <div>{minPrice}만원</div>
                <div>{maxPrice}만원</div>
            </div>
            <div className="self-stretch items-end justify-start max-w-full z-[1000]">
                <Slider
                    min={0}
                    max={200}
                    onChange={({min, max}) => {
                        setMinPrice(min);
                        setMaxPrice(max);
                    }}
                />
            </div>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pt-10 pb-2">
                <b className="font-bold">개월</b>
            </div>
            <div className="w-[80%] flex justify-between m-auto text-sm text-main">
                <div>{minMonth}개월</div>
                <div>{maxMonth}개월</div>
            </div>
            <div className="self-stretch items-end justify-start max-w-full z-[1000]">
                <Slider
                    min={0}
                    max={12}
                    onChange={({min, max}) => {
                        setMinMonth(min);
                        setMaxMonth(max);
                    }}
                />
            </div>
            <div className={"flex items-center content-center justify-center"}>
                <button
                    className="cursor-pointer py-[1.375rem] px-[5rem] bg-white text-black rounded-2xl flex flex-row items-start justify-start z-[4] border-gray-400 border mr-2">
                    <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                        취소하기
                    </b>
                </button>
                <button
                    className="cursor-pointer [border:none] py-[1.375rem] px-[5rem] bg-main rounded-2xl flex flex-row items-start justify-start z-[4] ml-2"
                    onClick={selectOrder}
                >
                    <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-white text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                        적용하기
                    </b>
                </button>
            </div>
        </>
    )
}
