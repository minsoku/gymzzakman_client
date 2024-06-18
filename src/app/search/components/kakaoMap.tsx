"use client"
import {useEffect, useState} from 'react';

const KakaoMap = ({data}: any) => {
    const apiKey: string = "ea22cc7b4726298c76cf9fc0c40e46bc";
    const [map, setMap] = useState<any>(null);
    const [currentAddress, setCurrentAddress] = useState<string>("");

    useEffect(() => {
        if (data.length > 0) {
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
                            center: new window.kakao.maps.LatLng(37.45779290, 126.67825790), // 지도의 중심좌표
                            level: 6 // 지도의 확대 레벨
                        };
                    // @ts-ignore
                    const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
                    setMap(newMap);

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
                });
            };

            return () => {
                document.head.removeChild(script);
            };
        }
    }, [data]);

    const handleGetMapLocation = () => {
        if (map) {
            // @ts-ignore
            const center = map.getCenter();
            // @ts-ignore
            const geocoder = new window.kakao.maps.services.Geocoder();
            // @ts-ignore
            const coord = new window.kakao.maps.LatLng(center.getLat(), center.getLng());
            const callback = (result: any, status: any) => {
                if (status === "OK") {
                    return result[0].address.region_1depth_name + result[0].address.region_2depth_name
                }
            }
            geocoder.coord2Address(coord.La, coord.Ma, callback);
        }
    };


    // return <div id="map" style={{width: "90%", height: "500px", margin: "0 auto"}} />;
    return (
        <div>
            <div id="map" style={{ width: "90%", height: "500px", margin: "0 auto" }} />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <button onClick={handleGetMapLocation}>현재 지도 위치 보기</button>
            </div>
        </div>
    );
};

export default KakaoMap;
