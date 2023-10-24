const Contact = () => {
    const services = ["Design", "Development", "Consultancy", "Training"];
    return (
        <section id="contacts">
            <div className="pb-[5rem]">
                <div className="inline-block mb-5">
                    <h1 className="text-[1.6rem] font-[600] bg-light-secondary-bg dark:bg-dark-secondary px-2 py-1 uppercase">
                        Contact
                    </h1>
                </div>
                <div className="flex flex-col gap-10">
                    <div>
                        <h4 className="text-[1.25rem] font-[600]">
                            Book me for
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-span-1 w-full py-2 border-[1.5px] border-primary-text dark:border-dark-text flex justify-center cursor-pointer hover:bg-primary-text hover:text-dark-text dark:hover:bg-dark-text dark:hover:text-primary-text duration-300"
                            >
                                <button className="text-[1.25rem] font-[500]">
                                    {service}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <form
                            className="flex flex-col gap-10"
                            action="mhjoy547@gmail.com"
                            method="post"
                            enctype="text/plain"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email Address"
                                    required
                                />
                            </div>
                            <textarea
                                name="details"
                                id="details"
                                maxlength="1200"
                                placeholder="Details about your project"
                                className="h-[5rem]"
                                required
                            />
                            <input
                                type="submit"
                                value="Send"
                                className="max-w-min border-none bg-primary-text dark:bg-dark-secondary text-white px-10 py-2 cursor-pointer"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
