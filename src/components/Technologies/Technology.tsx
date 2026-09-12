import { Suspense, useState } from "react";
import TechStackSelected from "./TechStackSelected";
import type { Istack } from "../types/Stack";
import { TechnologiesList } from "./TechnologiesList";
import { Bounce, toast } from "react-toastify";

interface props {
    stacksPromise: Promise<Istack[]>
}


export default function Technology({ stacksPromise }: props) {
    const [selectedStacks, setSelectedStacks] = useState<Istack[]>([])

    const handelRemoveAll = () => {
        if (selectedStacks.length) {
            setSelectedStacks([])
            toast.error(`All Stack Removed`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        else {
            toast.warn(`Empty Stack`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }



    return (
        <div>
            <div className="pt-15 container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="font-bold text-4xl text-black">
                        Explore the
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EC4899] to-[#8B5CF6]">
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
                                </h1> <span className=" bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] loading loading-bars loading-xl"> </span>
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

                    <div className="w-full lg:w-1/5">
                        <div className="border border-gray-200 p-5 rounded-xl  flex flex-col">
                            <h2 className="font-bold text-black text-lg">Your Stack</h2>

                            <p className="mt-2 text-gray-600 text-sm">
                                {selectedStacks.length ?

                                    `${selectedStacks.length} Technology Selected`
                                    :
                                    `No technologies selected yet.`}</p>

                            <div className="mx-auto w-full space-y-5 border
                             border-gray-100 p-3 rounded-xl mt-5">
                                {selectedStacks.length ?
                                    selectedStacks.map(selectedStack => <TechStackSelected key={selectedStack.id}
                                        setSelectedStacks={setSelectedStacks}
                                        selectedStack={selectedStack}
                                        selectedStacks={selectedStacks}
                                    >

                                    </TechStackSelected>)

                                    :

                                    <p className="text-center">Your stack is empty.</p>}


                            </div>
                            <button className="btn btn-outline btn-error  mt-5
                            p-2 rounded-xl font-bold"
                                onClick={handelRemoveAll}
                            >Remove All</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}