import {motion} from "framer-motion"
const Contact = () => {
    return (
        <div id="contact" className="flex flex-col justify-center items-center bg-black/10 py-10 md:py-15">
            <h2 className="text-2xl md:4xl text-blue-400 font-bold mb-2 md:mb-4 text-center">Want to save the world together?</h2>
            <motion.div
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration:0.9,
                ease: "easeOut"
            }}
            >
                <p className="text-md md:text-xl mb-2">Let's build something extraordinary.</p>
                <ul>
                    <li>📍 Location: Malibu, California</li>
                    <li>🏢 Company: Stark Industries</li>
                    <li>📧 Email: tony@starkindustries.com</li>
                    <li>🌐 Website: www.starkindustries.com</li>
                </ul>
            </motion.div>
        </div>
    )
}

export default Contact;