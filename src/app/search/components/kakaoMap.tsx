"use client"
import { useEffect } from 'react';

const KakaoMap = () => {
    const apiKey: string = "ea22cc7b4726298c76cf9fc0c40e46bc";
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=ea22cc7b4726298c76cf9fc0c40e46bc&libraries=services";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        center: new window.kakao.maps.LatLng(37.44779290, 126.64925790), // 지도의 중심좌표
                        level: 5 // 지도의 확대 레벨
                    };
                const map = new window.kakao.maps.Map(mapContainer, mapOption);
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return <div id="map" style={{width: "90%", height: "400px", margin: "0 auto"}}></div>;
};

export default KakaoMap;
