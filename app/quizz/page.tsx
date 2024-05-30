"use client";

import React, { useEffect, useState } from "react";
import { quiz } from "../lib/data.js";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";
import Link from "next/link.js";


const page = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [checkAnswer, setCheckAnswer] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<
        number | null
    >(null); // Change to number or null
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        correct: 0,
        wrong: 0,
        score: 0,
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { questions } = quiz;
    const { question, options, correctAnswer, sourceVideo } =
        questions[currentQuestion];

    const onAnswerSelected = (option: string, index: number) => {
        setCheckAnswer(true);
        setSelectedAnswerIndex(index);
        if (option === correctAnswer) {
            setSelectedAnswer(true);
            console.log("Correct Answer");
        } else {
            setSelectedAnswer(false);
            console.log("Wrong Answer");
        }
        // Additional logic for setting selected answer if needed
    };

    //Calcul du score et incrementation du nombre de reponses correctes et incorrectes

    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
            selectedAnswer
                ? {
                      ...prev,
                      score: prev.score + 1,
                      correct: prev.correct + 1,
                  }
                : { ...prev, wrong: prev.wrong + 1 }
        );
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
        setCheckAnswer(false);
    };

    return (
        <div className="relative flex flex-col items-center justify-center text-center w-full min-h-[750px]">
            <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[50%]">
                <div>
                    {!showResult ? (
                        <>
                            <div className="flex flex-col items-center justify-center py-10 max-w-[1500px] mx-auto w-[90%] h-[90%]">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl/none ms-0 text-dark">
                                    <span className="">
                                        "{currentQuestion + 1}/
                                        {questions.length}"
                                    </span>{" "}
                                    {questions[currentQuestion].question}
                                </h2>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="grid grid-flow-row grid-cols-2 gap-10 list-none">
                                    {options.map((option, index) => (
                                        <li>
                                            <Button
                                                key={index}
                                                className={`w-24 h-12 rounded-lg ${
                                                    selectedAnswerIndex ===
                                                    index
                                                        ? "bg-blue-500 hover:bg-blue-300"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    onAnswerSelected(
                                                        option,
                                                        index
                                                    )
                                                }
                                            >
                                                {option}
                                            </Button>
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-full justify-end mt-5">
                                {checkAnswer ? (
                                    <Button
                                        onClick={nextQuestion}
                                        className="w-24 h-12 text-lg"
                                    >
                                        {currentQuestion ===
                                        questions.length - 1
                                            ? "Terminer"
                                            : "Suivant"}
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={nextQuestion}
                                        className="w-24 h-12 text-lg"
                                        disabled
                                    >
                                        {currentQuestion ===
                                        questions.length - 1
                                            ? "Terminer"
                                            : "Suivant"}
                                    </Button>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col gap-6">
                                <h3 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl/none ms-0 text-dark">
                                    Résultat :
                                </h3>
                                <div className="gap-6">
                                    <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                                        Nombre total de questions:{" "}
                                        <span>{questions.length}</span>
                                    </p>
                                    <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                                        Score final: <span>{result.score}</span>
                                    </p>
                                    <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                                        Bonnes réponses:{" "}
                                        <span>{result.correct}</span>
                                    </p>
                                    <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                                        Mauvaises réponses:{" "}
                                        <span>{result.wrong}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Link
                                    href="/video-question"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/60"
                                >
                                    Recommence le quizz
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
