"use server"

export const getFitnessCenter = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL}/fitness-centers`, {
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
