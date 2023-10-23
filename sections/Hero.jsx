import Image from "next/image";
import Link from "next/link";
import {
    AiOutlineLinkedin,
    AiOutlineHtml5,
    AiOutlineDatabase,
} from "react-icons/ai";
import { BiLogoTelegram, BiLogoPython } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { TbBrandCss3, TbSql } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";

const Hero = () => {
    return (
        <section className="my-[5rem]" id="home">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 items-center ">
                <div className="col-span-1 md:col-span-8">
                    <div className="flex flex-col gap-5 items-start">
                        <h1 className="text-[1.8rem] font-[600]">
                            <span className="bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1">
                                MERN - Stack
                            </span>{" "}
                            <br /> Developer
                        </h1>
                        <p className="text-[1.2rem] font-[400]">
                            Hi,I'm
                            <span className="font-[600]"> Mamdud Hasan</span>, a
                            detail-oriented backend software engineer dedicated
                            to crafting robust and efficient systems that power
                            seamless user experiences.
                        </p>
                        <div className="flex flex-row  items-center gap-5">
                            <Link
                                href="https://github.com/n8fury"
                                target="_blank"
                            >
                                <FiGithub className="text-[1.8rem] cursor-pointer" />
                            </Link>
                            <Link href="https://t.me/n8fury" target="_blank">
                                <BiLogoTelegram className="text-[1.8rem] cursor-pointer" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/mamdud-hasan/"
                                target="_blank"
                            >
                                <AiOutlineLinkedin className="text-[1.8rem] cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-4 flex justify-center ">
                    <Image
                        src="/images/personal/profile-picture.png"
                        alt="Mamdud Hasan Zoy"
                        width={300}
                        height={450}
                        className="bg-light-secondary-bg w-auto h-auto  dark:bg-dark-secondary rounded-[2rem]"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2  md:gap-5">
                <h3 className="text-[2rem] font-[600]">Tech - Stack</h3>
                <div>
                    <div className="hidden md:inline-block border-[1.5px] border-primary-text dark:border-dark-text h-10" />
                </div>
                <div className="flex flex-row flex-wrap gap-5 md:gap-10 text-[2.5rem]">
                    <AiOutlineHtml5 /> <TbBrandCss3 /> <RiJavascriptLine />
                    <BiLogoPython /> <AiOutlineDatabase /> <TbSql />
                </div>
            </div>
        </section>
    );
};
export default Hero;
