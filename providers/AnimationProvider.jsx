"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
export const AnimateInView = ({ children, initialVal }) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ x: initialVal, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 3,
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    stiffness: 50,
                }}
                viewport={{ once: true }}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
};
