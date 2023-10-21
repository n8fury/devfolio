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
                <div>Loading</div>
            ) : (
                <ThemeProvider enableSystem={true} attribute="class">
                    {children}
                </ThemeProvider>
            )}
        </>
    );
};

export default ThemeProviders;
