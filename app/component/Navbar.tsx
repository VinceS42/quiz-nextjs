"use client";
import Link from "next/link";
import React from "react";

import { MdQuiz } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="pt-5">
            <div className="flex justify-between items-center border-b pb-5 max-w-[1500px] mx-auto w-[90%] ">
                <div>
                    <Link className="flex items-center gap-1 text-2xl" href="/">
                        <h1 className="font-bold">Demo quizz</h1>
                        <MdQuiz className="text-primary" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
