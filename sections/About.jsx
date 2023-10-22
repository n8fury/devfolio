import dynamic from "next/dynamic";
const Counter = dynamic(() => import("../components/Counter"));

const About = () => {
    const languages = [
        "JavaScript (ES6)",
        "TypeScript",
        "HTML5",
        "CSS3/Sass",
        "Python",
        "SQL",
        "Ruby",
    ];
    const frameWorks = [
        "Ember & Glimmer",
        "React",
        "Jekyll",
        "Node",
        "D3",
        "Wordpress",
        "Timber",
    ];
    const tools = [
        "Bash",
        "Git & GitHub",
        "Glup & Grunt",
        "Chrome Dev Tools",
        "Postman",
        "MongoDB",
    ];
    return (
        <section className="my-[5rem]" id="about">
            <div className="mb-[5rem]">
                <div className="inline-block mb-5">
                    <h1 className="text-[1.6rem] font-[600] bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1 uppercase">
                        About Me
                    </h1>
                </div>
                <div className="flex flex-col gap-5 text-[1.2rem] font-[400]">
                    <p>
                        I'm a full-stack MERN (MongoDB, Express.js, React,
                        Node.js) developer, proficient in both frontend and
                        backend development. I specialize in crafting
                        responsive, dynamic web applications that prioritize
                        user experience and efficiency.
                    </p>
                    <p>
                        My ability to bridge the gap between design and
                        functionality, write clean code, and collaborate
                        effectively with cross-functional teams sets me apart.
                        I'm passionate about delivering top-notch web solutions
                        and am eager to contribute my skills to your projects.
                    </p>
                </div>
                <div className="my-[5rem] ">
                    <Counter />
                </div>
                <div className="max-w-max mx-auto bg-light-secondary-bg dark:bg-dark-secondary px-5 py-2 text-[1.5rem] font-[500] ">
                    <button>Download CV</button>
                </div>
            </div>
            <div>
                <div className="inline-block mb-5">
                    <h1 className="text-[1.6rem] font-[600] bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1 uppercase">
                        Skills
                    </h1>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-start">
                    <div>
                        <h3 className="text-[1.3rem] font-[600] uppercase">
                            Languages
                        </h3>
                        {
                            <ul className="">
                                {languages.map((language) => (
                                    <li
                                        key={language}
                                        className="text-[1.25rem] font-[400]"
                                    >
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                    <div>
                        <h3 className="text-[1.3rem] font-[600] uppercase">
                            FrameWorks
                        </h3>
                        {
                            <ul className="">
                                {frameWorks.map((framework) => (
                                    <li
                                        key={framework}
                                        className="text-[1.25rem] font-[400]"
                                    >
                                        {framework}
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                    <div>
                        <h3 className="text-[1.3rem] font-[600] uppercase ">
                            Tools
                        </h3>
                        {
                            <ul className="">
                                {tools.map((tool) => (
                                    <li
                                        key={tool}
                                        className="text-[1.25rem] font-[400]"
                                    >
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
