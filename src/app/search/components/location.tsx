import {useEffect, useState} from "react";

interface ILocationProps {
    data: any;
    selectOption: (param: string, option: any) => void;
}

export const Location = ({data, selectOption}: ILocationProps) => {
    const apiKey: string = "ea22cc7b4726298c76cf9fc0c40e46bc";
    const [map, setMap] = useState<any>(null);
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services`;
        document.head.appendChild(script);

        script.onload = () => {
            // @ts-ignore
            window.kakao.maps.load(() => {
                // @ts-ignore
                const mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        // @ts-ignore
                        center: new window.kakao.maps.LatLng(37.45779290, 126.65715790), // 지도의 중심좌표
                        level: 6 // 지도의 확대 레벨
                    };
                // @ts-ignore
                const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
                setMap(newMap);

                if (data.length > 1) {
                    // @ts-ignore
                    for (let i = 0; i < data.length; i++) {
                        // @ts-ignore
                        new window.kakao.maps.CustomOverlay({
                            // @ts-ignore
                            position: new window.kakao.maps.LatLng(data[i].lat, data[i].lng),
                            map: newMap,
                            content: `<div class="customoverlay"><span class="title">${data[i].name}<span></div>`
                        })
                    }
                }
            });
        };
        return () => {
            document.head.removeChild(script);
        };
    }, [data]);


    const selectOrder = () => {
        if (map) {
            // @ts-ignore
            const center = map.getCenter();
            // @ts-ignore
            const geocoder = new window.kakao.maps.services.Geocoder();
            // @ts-ignore
            const coord = new window.kakao.maps.LatLng(center.getLat(), center.getLng());
            const callback = (result: any, status: any) => {
                if (status === "OK") {
                    const currentAddress = result[0].address.region_1depth_name + " " + result[0].address.region_2depth_name;
                    selectOption("location", currentAddress);
                }
            }
            geocoder.coord2Address(coord.La, coord.Ma, callback);
        }

    }


    return (
        <>
            <div
                className="relative tracking-[-0.05em] z-[1] ml-14 text-[16px] pt-10 pb-2">
                <b className="font-bold">지도에서 찾기</b>
            </div>
            <div className="self-stretch items-end justify-start gap-[1.875rem] max-w-full">
                <div className="self-stretch relative">
                    <div>
                        <div id="map" style={{width: "90%", height: "500px", margin: "0 auto"}}/>
                    </div>
                </div>
                <div
                    className="w-full items-start box-border p-5">
                    <div
                        className="flex flex-row flex-wrap items-start justify-center gap-[0.625rem]">
                        <button
                            className="cursor-pointer py-[1.375rem] px-[5rem] bg-white text-black rounded-2xl flex flex-row items-start justify-start z-[4] border-gray-400 border">
                            <b className="relative text-[1.25rem] tracking-[-0.02em] inline-block font-inter text-left min-w-[4.563rem] z-[5] mq450:text-[1rem]">
                                취소하기
                            </b>
                        </button>
                        <button
                            onClick={selectOrder}
                            className="cursor-pointer [border:none] py-[1.375rem] px-[5rem] bg-main rounded-2xl flex flex-row items-start justify-start z-[4]">
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
