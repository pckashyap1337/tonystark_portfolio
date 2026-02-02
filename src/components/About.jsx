
import {motion} from "framer-motion"
const About = () => {
    return (
        <div id="about">
            <div className="flex h-full w-full py-10 md:py-15 items-center bg-black/10 flex-col">
                <div className="flex justify-center items-center flex-col mb-5 md:mb-15">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400">ABOUT ME</h2>
                    <span className="h-1 w-15 md:w-20 mt-1 bg-blue-400"></span>
                </div>
                <div className="flex w-full h-full justify-center items-center flex-col md:flex-row px-5">
                    <motion.div 
                    initial={{ opacity:0,y:50 }}
                    whileInView={{ opacity:1,y:0 }}
                    transition={{ duration:0.9,ease: "easeOut" }}
                    className="w-full md:w-1/2 md:px-10 lg:px-20 flex justify-center items-center flex-col">
                        <h3 className="text-2xl md:text-3xl">Tony Stark</h3>
                        <h4 className="text-xl md:text-2xl my-5 text-center">Genius. Billionaire. Inventor. Philanthropist.</h4>
                        <p className="text-justify">I'm Tony Stark, the mind behind Stark Industries and the man inside the Iron Man armor. 
                            I transformed a weapons manufacturing empire into a global leader in clean energy, 
                            advanced AI, and next-generation defense technologies.</p> <br />
                        <p className="text-justify">From building my first arc reactor in a cave with scraps, to defending Earth alongside the Avengers, 
                            my journey has been driven by innovation, responsibility, and a relentless desire to build 
                            a better future.</p>
                        <div className="mt-5">
                            <blockquote>“If you're nothing without the suit, then you shouldn't have it.”</blockquote>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0,y:50 }}
                    whileInView={{ opacity:1,y:0 }}
                    transition={{ duration:0.9,ease: "easeOut" }}
                    className="hidden md:flex md:w-1/2 justify-around">
                        <img className="rounded-2xl overflow-hidden w-full md:w-80 lg:w-100 h-50 md:h-80 px-10 md:px-2" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUz3rpcpWneZmFzhOcMa3eERASsO10oBNLlQ&s" alt="Tony Stark" />
                    </motion.div>
                </div>
            </div>
        </div>
        
    )
}

export default About;