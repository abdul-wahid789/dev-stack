import Logo from "../assets/logo-text.png"

export default function Footer() {

    return (
        <div className="mt-20 text-sm">
            <div className="border-y border-gray-200 py-10">
                <div className="container mx-auto flex justify-between">
                    <div className="w-full lg:max-w-1/4">
                        <div className="flex flex-col items-center text-center
                        lg:block lg:text-left">
                            <img  className="" src={Logo} alt="logo" />
                            <p className="mt-2">Curated tools, technologies, and resources for developers building
                                modern software.</p>
                            <ul className="flex gap-4 mt-5 font-bold cursor-pointer">
                                <li><a href="https://github.com/abdul-wahid789/dev-stack">Github</a></li>
                                <li><a href="https://twitter.com/abdul_wahid789">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/in/abdul-wahid789">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-between w-full ml-50">
                        <ul className="space-y-1">
                            <li className="font-bold mb-5">PRODUCT</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                        <ul className="space-y-1">
                            <li className="font-bold mb-5">COMPANY</li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                        <ul className="space-y-1">
                            <li className="font-bold mb-5">LEGAL</li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-between py-10
             text-gray-400 text-xs">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    )
}