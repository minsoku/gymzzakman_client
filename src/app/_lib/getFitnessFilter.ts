"use server"

import {IPriceOptions} from "@/app/search/components/searchMain";

export const getFitnessCenter = async (params: IPriceOptions) => {
    const searchParams = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, value.toString()])
    ).toString();

    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}fitness-centers/filter?${searchParams}`, {
            method: 'get',
            credentials: 'include',
        })
        if (!response.ok) {
            throw new Error('서버에서 오류가 발생했습니다.');
        }
        return await response.json();
    } catch (err) {
        console.error(err);
        throw new Error("INTERNAL_SERVER_ERROR");
    }

}
