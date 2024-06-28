"use client"

import {useCallback, useEffect, useState} from "react";
import {RecommendMain} from "@/app/recommend/components/recommendMain";
import {Chapter} from "@/app/recommend/components/chapter";
import {Result} from "@/app/recommend/components/result";

const chapterList = [
    {
        blueText: "운동을 하려는 목적",
        text: "이 무엇인가요?",
        button1: "취미 생활",
        button2: "다이어트",
        button3: "체형 교정",
    },
    {
        blueText: "운동 성향",
        text: "이 어떻게 되나요?",
        button1: "ONLY 나 혼자",
        button2: "운동은 다 같이",
    },
    {
        blueText: "전문가의 도움",
        text: "이 필요한가요?",
        button1: "네, 레슨이 필요해요",
        button2: "아니요, 필요하지 않아요"
    },
    {
        blueText: "어느 시간대",
        text: "에 운동을 선호하나요?",
        button1: "아침",
        button2: "낮",
        button3: "저녁"
    }
]

export default function Page() {
    const [isStarted, setIsStarted] = useState(false);
    const [chapter, setChapter] = useState(1);
    const [result, setResult] = useState(false);
    const [testResult, setTestResult] = useState<string[]>([]);
    const [resultArray, setResultArray] = useState<string[]>([]);
    const testStart = () => {
        setIsStarted(true);
    }
    const handleChapterChange = useCallback((chapter: number, value?: string) => {
        handleTestResult(value || "");
        if (chapter > chapterList.length) {
            setResult(true);
            return;
        }

        setChapter(chapter);
    }, [setChapter])

    useEffect(() => {
        if (testResult.length === 4) {
            const sportMap: {[key: string]: string} = {
                '취미 생활': '헬스',
                '다이어트': '필라테스',
                '체형 교정': '태권도',
                'ONLY 나 혼자': '클라이밍',
                '운동은 다 같이': '골프',
                '네, 레슨이 필요해요': '필라테스',
                '아니요, 필요하지 않아요': '헬스',
                '아침': '요가',
                '낮': '테니스',
                '저녁': '헬스',
            };
            const recommendedSports = testResult.map((choice) => sportMap[choice]);
            setResultArray(Array.from(new Set(recommendedSports)));
        }
    }, [testResult]);
    const handleTestResult = (result: string) => {
        setTestResult((prevTestResult) => [...prevTestResult, result]);
    };



    return (
        <div>
            {!result && !isStarted && <RecommendMain testStart={testStart} />}
            {!result && isStarted && <Chapter chapterList={chapterList} chapter={chapter} chapterChange={handleChapterChange} />}
            {result && <Result resultArray={resultArray} />}
        </div>
    );
};
