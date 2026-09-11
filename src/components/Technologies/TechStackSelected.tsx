import Logo from "../../assets/react.svg"


export default function TechStackSelected() {

    return (
        <div className="flex justify-between items-center">
            <div className="flex">
                <img className="mr-2" src={Logo} alt="logo" />
                <div>
                    <h3 className="text-black font-bold">React</h3>
                    <p className="text-xs">Frontend</p>
                </div>
            </div>
            <div>
                <button className="hover:bg-red-300
                                        text-xl text-red-500 bg-red-100
                                        px-2 rounded-md">X</button>
            </div>
        </div>
    )
}