import {Menu, X} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    return (
    <nav className="sticky top-0 min-w-full h-14 md:h-18 bg-black/80 px-10 md:px-15 lg:px-20 text-white transition-all duration-300 z-1000">
        <div className="flex h-full w-full justify-between items-center">
            <a href="./" className="text-xl md:text-2xl">
                <span>Tony</span>
                <span className="text-blue-400 font-bold">Stark</span>
            </a>

            <div className="hidden md:flex gap-4 md:gap-6 lg:gap-8">
                <a href="#" className="relative group hover:text-blue-400 transition-all duration-300">Home
                    <span className="absolute left-0 w-0 h-0.5 -bottom-1 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" className="relative group hover:text-blue-400 transition-all duration-300">About
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#skills" className="relative group hover:text-blue-400 transition-all duration-300">Skills
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#projects" className="relative group hover:text-blue-400 transition-all duration-300">Projects
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#experience" className="relative group hover:text-blue-400 transition-all duration-300">Experience
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="relative group hover:text-blue-400 transition-all duration-300">Contact
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div className="flex md:hidden">
                {
                    isMenuOpen ?
                    < X onClick={()=> {setisMenuOpen(!isMenuOpen)}} /> :
                    <Menu onClick={()=> {setisMenuOpen(!isMenuOpen)}} />
                }
            </div>
        </div>
        {
            isMenuOpen? 
            <motion.div
            initial={{
                opacity: 0.5,
                y:-10
            }}
            animate={{
                opacity: 1,
                y:0
            }}
            transition={{
                duration:0.6,
                ease:"easeOut"
            }}
            className="flex md:hidden fixed z-10 left-0 gap-4 bg-black/96 w-screen py-3 flex-col justify-center items-center">
                <a href="./" onClick={()=> {setisMenuOpen(!isMenuOpen)}} className="hover:text-blue-400 transition-all duration-300">Home
                </a>
                <a href="#about" onClick={()=> {setisMenuOpen(!isMenuOpen)}} className="hover:text-blue-400 transition-all duration-300">About
                </a>
                <a href="#skills" onClick={()=> {setisMenuOpen(!isMenuOpen)}} className="hover:text-blue-400 transition-all duration-300">Skills
                </a>
                <a href="#projects" onClick={()=> {setisMenuOpen(!isMenuOpen)}} className="hover:text-blue-400 transition-all duration-300">Projects
                </a>
                <a href="#experience" onClick={()=> {setisMenuOpen(!isMenuOpen)}} className="hover:text-blue-400 transition-all duration-300">Experience
                </a>
                <a href="#contact" onClick={()=> {setisMenuOpen(!isMenuOpen)}} className="hover:text-blue-400 transition-all duration-300">Contact
                </a>
            </motion.div>
            :""
        }
    </nav>
    )
}

export default Navbar;