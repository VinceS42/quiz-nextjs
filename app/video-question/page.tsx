"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { quiz } from "../lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const videoQuestion = (props: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { questions } = quiz;
    const { question, options, correctAnswer, sourceVideo } =
        questions[currentQuestion];

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center text-center w-full min-h-[750px]">
            <div className="w-[50%] mb-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl/none ms-0 text-dark">
                    Regarde attentitvement la vidéo suivante pour répondre aux
                    questions
                </h2>
            </div>
            <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[50%]">
                <div className="flex items-center justify-center">
                    {isClient && <ReactPlayer url={sourceVideo} controls />}
                </div>
            </div>
            <div>
                <Link
                    href="/quizz"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 mt-6 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/60"
                >
                    C'est parti pour le quizz !
                </Link>
            </div>
        </div>
    );
};

export default videoQuestion;
