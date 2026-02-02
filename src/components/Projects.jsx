import Card from "./Card";
import {motion} from "framer-motion"

const Projets = () => {
    const projects = [
        {
            name: "Iron Man Armor (Mark Series)",
            description: "Designed and developed multiple generations of Iron Man suits featuring:",
            value:[
                "Flight stabilization",
                "Repulsor weapon systems",
                "Nano-tech self-assembling armor",
                "AI-assisted combat decision making"
            ]
        },
        {
            name: "Arc Reactor Initiative",
            description: "Created a clean, renewable energy source capable of powering cities — and my heart:",
            value:[
                "Reduced global dependency on fossil fuels",
                "Revolutionized sustainable energy"
            ]
        },{
            name: "J.A.R.V.I.S / F.R.I.D.A.Y",
            description: "An advanced AI assistant capable of:",
            value:[
                "Natural language processing",
                "Tactical combat support",
                "System monitoring & automation"
            ]
        }
    ]
    return (
        <div id="projects" className="bg-black/10">

            <div className="container w-full h-full mx-auto px-5 items-center py-10 md:py-15">
                <div className="flex items-center flex-col">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400">Projects</h2>
                    <span className="h-1 w-6 md:w-12 mt-2 bg-blue-400"></span>
                </div>
                <motion.div
                initial={{ opacity:0,y:50 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:0.9,ease: "easeOut" }}
                 className="flex flex-wrap justify-evenly mt-5 md:mt-0">
                    {
                        projects.map((item, index) => (
                            <Card key={index} title={item.name} items={item.value} description={item.description}/>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Projets