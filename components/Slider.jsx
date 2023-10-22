"use client";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={1500}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                        <div className="md:col-span-4 relative">
                            <img
                                src="/images/portfolio/portfolio-1.jpg"
                                alt="portfolio image"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </div>
                        <div className="col-span-8">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-[1.8rem] leading-none font-[600]">
                                    PROJECT NAME (2025-10-10)
                                </h2>
                                <p className="text-[1.25rem]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Minus maiores quos,
                                    repudiandae eius error eos aspernatur
                                    tenetur illum reiciendis praesentium impedit
                                    quaerat, dicta dolore a?
                                </p>
                                <div className="flex flex-row items-start gap-5 text-[1.25rem]">
                                    <button className=" flex flex-row gap-2 items-center">
                                        Code{" "}
                                        <AiOutlineArrowUp className="rotate-[45deg]" />
                                    </button>
                                    <button className=" flex flex-row gap-2 items-center text-secondary-color">
                                        Demo{" "}
                                        <AiOutlineArrowUp className="rotate-[45deg]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                        <div className="md:col-span-4 relative">
                            <img
                                src="/images/portfolio/portfolio-2.jpg"
                                alt="portfolio image"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </div>
                        <div className="col-span-8">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-[1.8rem] leading-none font-[600]">
                                    PROJECT NAME (2025-10-10)
                                </h2>
                                <p className="text-[1.25rem]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Minus maiores quos,
                                    repudiandae eius error eos aspernatur
                                    tenetur illum reiciendis praesentium impedit
                                    quaerat, dicta dolore a?
                                </p>
                                <div className="flex flex-row items-start gap-5 text-[1.25rem]">
                                    <button className=" flex flex-row gap-2 items-center">
                                        Code{" "}
                                        <AiOutlineArrowUp className="rotate-[45deg]" />
                                    </button>
                                    <button className=" flex flex-row gap-2 items-center text-secondary-color">
                                        Demo{" "}
                                        <AiOutlineArrowUp className="rotate-[45deg]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                        <div className="md:col-span-4 relative">
                            <img
                                src="/images/portfolio/portfolio-3.jpg"
                                alt="portfolio image"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </div>
                        <div className="col-span-8">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-[1.8rem] leading-none font-[600]">
                                    PROJECT NAME (2025-10-10)
                                </h2>
                                <p className="text-[1.25rem]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Minus maiores quos,
                                    repudiandae eius error eos aspernatur
                                    tenetur illum reiciendis praesentium impedit
                                    quaerat, dicta dolore a?
                                </p>
                                <div className="flex flex-row items-start gap-5 text-[1.25rem]">
                                    <button className=" flex flex-row gap-2 items-center">
                                        Code{" "}
                                        <AiOutlineArrowUp className="rotate-[45deg]" />
                                    </button>
                                    <button className=" flex flex-row gap-2 items-center text-secondary-color">
                                        Demo{" "}
                                        <AiOutlineArrowUp className="rotate-[45deg]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
