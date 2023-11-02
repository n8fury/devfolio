import dynamic from "next/dynamic";
const Slider = dynamic(() => import("../components/Slider"));
import { AnimateInView } from "@providers/AnimationProvider";

const Projects = () => {
    return (
        <section id="projects" className="pt-[8rem] mb-[5rem]">
            <AnimateInView initialVal={100}>
                <div className="inline-block mb-5">
                    <h1 className="text-[1.6rem] font-[600] bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1 uppercase">
                        Projects
                    </h1>
                </div>
                <Slider />
            </AnimateInView>
        </section>
    );
};
export default Projects;
