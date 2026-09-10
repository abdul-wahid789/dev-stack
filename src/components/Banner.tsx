import BannerImg from "../assets/banner-stack.png"

const Banner = () => {

    return (
        <div className="h-full">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold text-black">Build Your Ideal <br />
                        <span className="text-transparent bg-clip-text
                        bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">Development Stack</span></h1>
                    <p>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className="space-x-5">
                        <button className="btn text-white rounded-xl
                        bg-linear-to-r from-[#FF5722] to-[#D81B7E]">Explore Technologies</button>
                        <button className="border border-gray-500 btn-outline btn text">Learn More</button>
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