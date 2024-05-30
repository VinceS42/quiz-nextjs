import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="relative  flex items-center justify-center text-center w-full min-h-[750px]">
            <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[50%]">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl/none ms-0 text-dark">
                        Prêt pour ce quizz ?
                    </h2>
                    <p className="text-gray-600">Amuse toi bien !</p>
                    <div className="mt-6">
                        <Link
                            href="/video-question"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/60"
                        >
                            Clique ici quand tu es prêt !
                        </Link>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl/none ms-0 text-dark">
                            Résultat :
                        </h3>
                        <p className="text-xltracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                            Total Questions:{" "}
                        </p>
                        <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                            Total Score:
                        </p>
                        <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                            Correct Answers:{" "}
                        </p>
                        <p className="text-xl tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl/none ms-0 text-dark">
                            Wrong Answers:
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
