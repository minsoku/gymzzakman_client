import React from "react";

export const Loading = () => {
    return (
        <div className="h-screen bg-white">
            <div
                className="h-screen fixed top-0 left-0 w-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center">
                        <div
                            className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                        <span className="ml-4 text-blue-500 font-bold text-lg">로딩중</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
