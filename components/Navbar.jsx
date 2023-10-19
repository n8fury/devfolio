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
            <ScrollspyNav
                scrollTargetIds={["home", "about", "projects", "contacts"]}
                activeNavClass="is-active"
                scrollDuration="1500"
            >
                <nav className="hidden md:flex justify-between items-center mt-[5rem]">
                    <div className="logo">
                        <Link
                            className="text-[1.5rem] font-[600] leading-7"
                            href="#home"
                        >
                            N8Fury
                        </Link>
                    </div>
                    <div className="nav-item flex flex-row items-center gap-20 text-[1.1rem] text-[400] text-primary-text dark:text-dark-secondary-text">
                        <Link href="#home">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#contacts">Contacts</Link>
                        <div className="text-[1.8rem]  text-secondary-color ">
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
                </nav>
            </ScrollspyNav>
            {/* Desktop Nav */}
        </>
    );
};

export default Navbar;