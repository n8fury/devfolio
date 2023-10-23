"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
const ThemeProviders = ({ children }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? (
                <div className="min-w-full min-h-screen flex flex-col justify-center items-center">
                    <div class="spinner">
                        <div class="spin" />
                        <div class="bounce" />
                    </div>
                    <p className="text-[1.5rem] uppercase font-[600]">
                        Loading
                    </p>
                </div>
            ) : (
                <ThemeProvider enableSystem={true} attribute="class">
                    {children}
                </ThemeProvider>
            )}
        </>
    );
};

export default ThemeProviders;
