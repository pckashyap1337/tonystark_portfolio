import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projets from "../components/Projects";
import Experiences from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />   
            <About />  
            <Skills />    
            <Projets />   
            <Experiences />
            <Contact />
            <Footer />
        </>
    )
}
export default Home;