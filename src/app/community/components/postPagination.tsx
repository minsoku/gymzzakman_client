"use client"

import React, { useState } from "react";

type Props = {
    total: number;
    fetchData: (param: number, category: string) => void;
    category: string;
}

export default function PostPagination({ total, fetchData, category }: Props) {
    const totalPages = Math.ceil(total / 10);
    const [selectedPage, setSelectedPage] = useState(1); // 초기 선택 페이지를 1로 설정

    const handlePrevPage = () => {
        if (selectedPage > 1) {
            fetchData(selectedPage - 1, category);
            setSelectedPage(selectedPage - 1);
        }
    };

    const handleNextPage = () => {
        if (selectedPage < totalPages) {
            fetchData(selectedPage + 1, category);
            setSelectedPage(selectedPage + 1);
        }
    };

    const handleClick = (pageNumber: number) => {
        fetchData(pageNumber, category);
        setSelectedPage(pageNumber);
    };

    const renderButton = (pageNumber: number) => {
        const isSelected = pageNumber === selectedPage;

        return (
            <li className="">
                <button
                    className={`inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isSelected ? 'border border-input bg-background shadow-sm font-medium hover:bg-accent hover:text-accent-foreground' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'} h-9 w-9`}
                    onClick={() => handleClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            </li>
        );
    };

    return (
        <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
            <ul className="flex flex-row items-center gap-1">
                <li className="">
                    <button
                        className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pl-2.5"
                        onClick={handlePrevPage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        <span>이전</span>
                    </button>
                </li>
                {
                    Array.from({ length: totalPages }).map((_, index: number) => {
                        return renderButton(index + 1);
                    })
                }
                {totalPages === selectedPage ? null :
                    <li className="">
                        <button
                            className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pr-2.5"
                            onClick={handleNextPage}
                        >
                            <span>다음</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </li>
                }
            </ul>
        </nav>
    )
}
