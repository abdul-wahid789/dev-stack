import { use, type Dispatch, type SetStateAction } from "react"
import type { Istack } from "../types/Stack"
import TechnologyCard from "./TechnologyCard"

interface props {
    stacksPromise: Promise<Istack[]>,
    selectedStacks:Istack[],
    setSelectedStacks:Dispatch<SetStateAction<Istack[]>>
}


export function TechnologiesList({ stacksPromise, selectedStacks, setSelectedStacks }: props) {

    const stacks = use(stacksPromise)

    return (
        <>

            {
                stacks.map(stack => <TechnologyCard key={stack.id}
                selectedStacks ={ selectedStacks}
                setSelectedStacks = {setSelectedStacks}
                stack={stack} ></TechnologyCard >)
            }
        </>
    )
}