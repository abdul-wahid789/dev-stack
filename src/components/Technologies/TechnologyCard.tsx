import { type Dispatch, type SetStateAction } from "react"
import type { Istack } from "../types/Stack"
import { Bounce, toast } from "react-toastify"

interface props {
    stack: Istack,
    selectedStacks: Istack[],
    setSelectedStacks: Dispatch<SetStateAction<Istack[]>>

}

export default function TechnologyCard({ stack,
    selectedStacks,
    setSelectedStacks }: props) {

    const isSelected = selectedStacks.some(sStack => sStack.id === stack.id)



    const handelAdd = () => {
        setSelectedStacks([...selectedStacks, stack])

        toast.success(`${stack.name} Added To Stack`, {
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
    return (
        <div className="border border-gray-100 rounded-md p-5 hover:shadow-md">
            <div className="flex justify-between items-center">
                <img className="w-10" src={stack.icon} alt="logo" />
                <p className="text-xs badge badge-soft bg-[#d81b7d2a] text-[#D81B7E]">{stack.badge}</p>
            </div>
            <h2 className="mt-4 text-xl font-bold text-black">{stack.name}</h2>
            <p className="mt-2 line-clamp-2">{stack.description}</p>
            <div className="flex justify-between mt-5 text-xs items-center">
                <p className="bg-gray-200 rounded-md py-1 px-2">{stack.category}</p>
                <p className="">{stack.difficulty}</p>
                <p className="font-bold">⭐ {stack.rating}</p>
            </div>

            {/* button click handel  */}

            <button className="w-full hover:bg-[#575757] rounded-md py-2
             bg-[#0A0F1D] text-white font-semibold mt-4
              disabled:text-[#D81B7E] disabled:bg-[#d81b7d2a] disabled:cursor-no-drop"
                onClick={handelAdd}
                disabled={isSelected}
            >
                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    )
}