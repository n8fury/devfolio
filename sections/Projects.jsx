import dynamic from "next/dynamic";
const Slider = dynamic(() => import("../components/Slider"));

const Projects = () => {
    return (
        <section id="projects">
            <div className="my-[5rem]">
                <div className="inline-block mb-5">
                    <h1 className="text-[1.6rem] font-[600] bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1 uppercase">
                        Projects
                    </h1>
                </div>
                <Slider />
            </div>
        </section>
    );
};
export default Projects;
