import { Suspense, useState } from "react";
import TechStackSelected from "./TechStackSelected";
import type { Istack } from "../types/Stack";
import { TechnologiesList } from "./TechnologiesList";

interface props {
    stacksPromise: Promise<Istack[]>
}


export default function Technology({ stacksPromise }: props) {
    const [selectedStacks, setSelectedStacks] = useState<Istack[]>([])

    return (
        <div>
            <div className="pt-15 container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="font-bold text-4xl text-black">
                        Explore the{' '}
                        <span className="text-transparent bg-clip-text bg-liner-to-r from-[#EC4899] to-[#8B5CF6]">
                            Technologies
                        </span>
                    </h1>
                    <p className="mt-2 text-gray-600">Pick one technology per category to build your ideal stack.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Suspense fallback={
                            <div className="col-span-full flex flex-col gap-5 mx-auto justify-center items-center">
                                <h1>Loading Technologies
                                </h1> <span className="loading loading-bars loading-xl"> </span>
                            </div>
                        }>


                            {

                                <TechnologiesList stacksPromise={stacksPromise}
                                    selectedStacks={selectedStacks}
                                    setSelectedStacks={setSelectedStacks}
                                ></TechnologiesList>

                            }
                        </Suspense>
                    </div>

                    <div className="w-full lg:w-1/6">
                        <div className="border border-gray-100 p-5 rounded-xl sticky top-5">
                            <h2 className="font-bold text-black text-lg">Your Stack</h2>
                            <p className="mt-2 text-gray-600 text-sm">No technologies selected yet.</p>

                            <div className="border border-gray-100 p-3 rounded-xl mt-5">
                                <TechStackSelected></TechStackSelected>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}