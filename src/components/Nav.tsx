import Logo from '../assets/logo-text.png'

export default function Nav() {

    return (
        <nav className="h-[10%] flex items-center
        fixed top-0 right-0 left-0
        border-b border-gray-400/20 backdrop-blur-md ">
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <ul className='hidden md:flex gap-3 items-center'>
                    <li><a href="/" className='text-[#D91B7E]'>Home</a></li>
                    <li><a href="/">Technologies</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className='flex items-center gap-2'>
                    <button className='hover:text-[#D91B7E] hover:pointer-coarse: border-[#D91B7E] border rounded-full px-3 py-1'>Sign In</button>
                    <button className='text-white hover:bg-[#c0196f] bg-[#D91B7E] border rounded-full px-3 py-1'>Sign Up</button>
                </div>
            </div>


        </nav>
    )
}