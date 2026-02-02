import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div 
        initial={{
            opacity: 0.5,
            y:50
        }}
        whileInView={{
            opacity: 1,
            y:0
        }}
        transition={{
            duration: 1,
            ease: "easeOut"
        }}
        className="flex min-h-screen flex-col md:flex-row w-full justify-evenly md:justify-between px-5 sm:px-10 md:px-20 lg:px-40 items-center">
            <div className="flex justify-center items-center">
                <div className="flex w-full gap-7 md:gap-5 justify-center items-center md:items-start flex-col">
                    <h1 className="text-4xl md:text-5xl text-bold">Hi, I'm <span className="text-blue-400 font-bold">Tony Stark</span></h1>
                    <h2 className="text-xl md:text-3xl font-bold typewriter">Genius. Billionaire. Inventor.</h2>
                    <p className="text-sm md:text-md">CEO of Stark Industries and creator of Iron Man. <br /> I build intelligent technology and defend the future.</p>
                    <div className="flex w-full gap-5 justify-center md:justify-start items-center mt-5">
                        <a href="#projects" className="button bg-blue-400 text-white py-2 px-3 md:px-7 rounded md:text-bold">View Work</a>
                        <a href="#contact" className="button bg-black text-white py-2 px-3 md:px-6 rounded md:text-bold">Contact Me</a>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-around">
                <div className="w-60 h-60 md:w-90 md:h-90 rounded-full bg-blue-400">
                    <motion.img 
                    animate={{
                        x:0,
                        y:-10
                    }}
                    transition={{
                        duration:3,
                        delay:1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY350_.jpg"
                    className="w-full h-full rounded-full"
                    ></motion.img>
                </div>
            </div>
        </motion.div>
    )
}
export default Hero;