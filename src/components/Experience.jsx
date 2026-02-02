import Card from "./Card";
import {motion} from "framer-motion"

const Experiences = () => {
    const experiences = [
        {
            name: "CEO - Stark Industries",
            description: "2008 - Present",
            value:[
                "Shifted company focus from weapons manufacturing to clean energy & defense innovation",
                "Led R&D teams developing next-gen technology",
                "Represented Stark Industries in global security initiatives"
            ]
        },
        {
            name: "Avenger - Earth's Mightiest Heroes",
            description: "2012 - 2019",
            value:[
                "Defended Earth from extraterrestrial and global threats",
                "Designed combat tech and tactical solutions",
                "Played a key role in saving half the universe (twice)"
            ]
        },{
            name: "Independent Inventor",
            description: "Since childhood",
            value:[
                "Built advanced machines before adulthood",
                "Continuously pushing the limits of science and engineering"
            ]
        }
    ]
    return (
        <div id="experience">

            <div className="container w-full h-full mx-auto px-5 items-center py-10 md:py-15">
                <div className="flex items-center flex-col">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400">Experience</h2>
                    <span className="h-1 w-6 md:w-12 mt-2 bg-blue-400"></span>
                </div>
                <motion.div 
                initial={{ opacity:0,y:50 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:0.9,ease: "easeOut" }}
                className="flex flex-wrap justify-evenly mt-5 md:mt-0">
                    {
                        experiences.map((item, index) => (
                            <Card key={index} title={item.name} items={item.value} description={item.description}/>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Experiences