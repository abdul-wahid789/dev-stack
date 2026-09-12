import type { Dispatch, SetStateAction } from "react"
import type { Istack } from "../types/Stack"
import { Bounce, toast } from "react-toastify"
interface props {
    selectedStack: Istack,
    selectedStacks: Istack[],
    setSelectedStacks: Dispatch<SetStateAction<Istack[]>>
}

export default function TechStackSelected({ selectedStack, selectedStacks, setSelectedStacks }: props) {
    const handelSelectedStack = () => {
        setSelectedStacks(selectedStacks.filter(stack => stack.id !== selectedStack.id))
        toast.error(`${selectedStack.name} Removed`, {
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

    return (
        <div className="flex justify-between items-center hover:shadow border border-gray-100 p-2 rounded-xl">
            <div className="flex">
                <img className="mr-2 w-8" src={selectedStack.icon} alt="logo" />
                <div>
                    <h3 className="text-black font-bold">{selectedStack.name}</h3>
                    <p className="text-xs">{selectedStack.category}</p>
                </div>
            </div>
            <div>
                <button className="hover:bg-red-300
                                        text-xl text-red-500 bg-red-100
                                        px-2 rounded-md"
                    onClick={handelSelectedStack}
                >X</button>
            </div>
        </div>

    )
}