"use client";
import Link from "next/link";
import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "next-themes";
const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            {/* Mobile nav */}
            <nav className="flex md:hidden"></nav>
            {/* Mobile Nav */}

            {/* Desktop nav */}

            <nav className="hidden md:inline-block sticky top-5 w-full px-10 py-5 bg-light-secondary-bg dark:bg-dark-secondary shadow-md rounded-lg text-primary-text dark:text-dark-secondary-text z-[999]">
                <ScrollspyNav
                    scrollTargetIds={["home", "about", "projects", "contacts"]}
                    activeNavClass="is-active"
                    scrollDuration="500"
                >
                    <div className="flex justify-between items-center">
                        <div className="logo">
                            <Link
                                className="text-[1.5rem] font-[600] leading-7"
                                href="#home"
                            >
                                N8Fury
                            </Link>
                        </div>
                        <div className="nav-item flex flex-row items-center gap-10 text-[1.1rem] text-[400] ">
                            <Link href="#home">Home</Link>
                            <Link href="#about">About</Link>
                            <Link href="#projects">Projects</Link>
                            <Link href="#contacts">Contacts</Link>
                            <div className="text-[1.5rem]  text-secondary-color ">
                                {theme === "light" ? (
                                    <FiSun
                                        className="cursor-pointer"
                                        onClick={() => setTheme("dark")}
                                    />
                                ) : (
                                    <MdOutlineNightlight
                                        className="cursor-pointer rotate-[-30deg]"
                                        onClick={() => setTheme("light")}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollspyNav>
            </nav>

            {/* Desktop Nav */}
        </>
    );
};

export default Navbar;
