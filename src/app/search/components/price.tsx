"use client"
import {useState} from "react";
import Slider from "@/app/search/components/slider";
import {TimeButton} from "@/app/search/components/timeButton";

interface PriceProps {
    month: number,
    price: number,
    order: number
}

export const Price = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(200);
    const [selectedOrder, setSelectedOrder] = useState(0);

    const priceArray: PriceProps[] = [
        { month: 1, price: 165000, order: 1},
        { month: 3, price: 231000, order: 2},
        { month: 5, price: 363000, order: 3},
        { month: 7, price: 407000, order: 4}
    ]

    const selectOrder = () => {
        console.log("min", min, "max", max, "selectedOrder", selectedOrder);
    }

    return (
        <>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pt-10 pb-2">
                <b className="font-bold">가격</b>
            </div>
            <div className="w-[80%] flex justify-between m-auto text-sm text-main">
                <div>{min}만원</div>
                <div>{max}만원 이상</div>
            </div>
            <div className="self-stretch items-end justify-start max-w-full z-[1000]">
                <Slider
                    min={0}
                    max={200}
                    onChange={({min, max}) => {
                        setMin(min);
                        setMax(max);
                    }}
                />
            </div>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pb-12">
                <b className="font-bold">기간</b>
                <div className="flex mt-5">
                    {
                        priceArray.map((item, index) => {
                            return (
                                <TimeButton
                                    data={item}
                                    key={index}
                                    onClick={() => setSelectedOrder(item.order)}
                                    isSelected={selectedOrder === item.order}
                                />
                            )
                        })
                    }
                </div>
                <div
                    className="w-full items-start box-border p-5 mt-20">
                    <div
                        className="flex flex-row flex-wrap items-start justify-center gap-[0.625rem]">
                        <button
                            className="cursor-pointer py-[1.375rem] px-[5rem] bg-white text-black rounded-2xl flex flex-row items-start justify-start z-[4] border-gray-400 border">
                            <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                                취소하기
                            </b>
                        </button>
                        <button
                            className="cursor-pointer [border:none] py-[1.375rem] px-[5rem] bg-main rounded-2xl flex flex-row items-start justify-start z-[4]"
                            onClick={selectOrder}
                        >
                            <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-white text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                                적용하기
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
