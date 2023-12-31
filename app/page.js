import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@sections/Hero"));
const About = dynamic(() => import("@sections/About"));
const Projects = dynamic(() => import("@sections/Projects"));
const Contact = dynamic(() => import("@sections/Contact"));
export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
