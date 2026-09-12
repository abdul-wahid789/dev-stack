import BannerImg from "../assets/banner-stack.png"

const Banner = () => {

    return (
        <div className="h-[90%] mt-20">
            <div className="py-6 container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                <div className="space-y-10">
          
                    <h1 className="text-4xl md:text-6xl font-bold text-black md:text-left text-center">Build Your Ideal <br />
                        <span className="text-transparent bg-clip-text
                        bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">Development Stack</span></h1>
                    <p className="md:max-w-[60%] md:text-left text-center">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>


                    <div className="max-w-[80%] mx-auto space-x-2 md:ml-0 md:w-full md:space-x-5 flex">
                        <button className="text-xs md:text-md
                        w-1/2 md:w-auto btn text-white rounded-xl
                        hover:shadow-md
                        bg-linear-to-r from-[#FF5722] to-[#D81B7E]">Explore Technologies</button>
                        <button className="w-1/2 md:w-auto  rounded-xl
                        text-[#475569] border border-gray-200 btn-outline btn
                        ">Learn More</button>
                    </div>


                </div>
                <div>
                    <img src={BannerImg} alt="Banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner;