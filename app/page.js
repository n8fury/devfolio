import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@sections/Hero"));
export default function Home() {
    return (
        <main>
            <Hero />
        </main>
    );
}
