import dynamic from "next/dynamic";
import { JetBrains_Mono } from "next/font/google";
import "@styles/globals.css";
import ThemeProviders from "@providers/ThemeProviders";
const Navbar = dynamic(() => import("@components/Navbar"));

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata = {
    title: "Mamdud Hasan Zoy",
    description: "Developer Portfolio of Mamdud Hasan Zoy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={mono.className}>
                <ThemeProviders>
                    <div className="min-w-full min-h-screen bg-light-bg dark:bg-dark-bg text-primary-text dark:text-dark-text">
                        <div className="container">
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </ThemeProviders>
            </body>
        </html>
    );
}
