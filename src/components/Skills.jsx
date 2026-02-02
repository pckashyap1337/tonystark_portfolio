import Card from "./Card";
import {motion} from "framer-motion"

const Skills = () => {
    const skils = [
        {
            name: "Engineering & Technology",
            value:[
                "Advanced Robotics & Exoskeleton Design",
                "Arc Reactor & Clean Energy Systems",
                "Artificial Intelligence (J.A.R.V.I.S / F.R.I.D.A.Y)",
                "Aerospace Engineering"
            ]
        },
        {
            name:"Software & Intelligence",
            value:[
                "AI System Architecture",
                "Real-time Combat Analytics",
                "Embedded Systems Programming",
                "Cybersecurity & Defense Protocols"
            ]
        },
        {
            name:"Leadership & Strategy",
            value:[
                "CEO - Stark Industries",
                "Project & Team Leadership",
                "Crisis Management",
                "Global Defense Strategy"
            ]
        }
    ]
    return (
        <div id="skills" className="container w-full h-full mx-auto px-5 items-center py-10 md:py-15">
            <div className="flex items-center flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-400">Skills</h2>
                <span className="h-1 w-5 md:w-10 mt-1 bg-blue-400"></span>
            </div>
            <motion.div 
            initial={{ opacity:0,y:50 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ duration:0.9,ease: "easeOut" }}
            className="flex flex-wrap justify-evenly mt-5 md:mt-0">
                {
                    skils.map((item, index) => (
                        <Card key={index} title={item.name} items={item.value}/>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Skills