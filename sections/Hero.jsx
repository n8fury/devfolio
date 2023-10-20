import Image from "next/image";
const Hero = () => {
    return (
        <section className="mt-[5rem]">
            <div className="w-full grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-8">
                    <div className="title">
                        <h1 className="text-[2rem]">
                            <span className="bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1">
                                MERN - Stack
                            </span>{" "}
                            <br /> Developer
                        </h1>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-4 bg-light-secondary-bg dark:bg-dark-secondary rounded-[2xl] relative ">
                    <Image
                        src="/images/profile-picture.png"
                        width={300}
                        height={450}
                        className="absolute left-[50%] translate-x-[-50%]"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;
