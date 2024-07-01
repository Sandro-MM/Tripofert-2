import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchItem from "@/components/searchItem";
import Image from "next/image";
import FeaturesBlock from "@/components/mainPageBlocks/featuresBlock";
import PopularBlock from "@/components/mainPageBlocks/popularBlock";
import ArticlesPreviewBlock from "@/components/mainPageBlocks/articlesPreviewBlock";



export default function Home() {
    return (
        <main className="relative w-full min-h-screen">
            {/* Background Video */}
            <BackgroundVideo />

            {/* Overlay Components */}
            <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
                <ThemeSwitch />
                <SearchItem />
            </div>

            {/* Scrollable Content */}
            <div className="relative w-full mt-[100vh] z-20 bg-transparent">
                <FeaturesBlock/>
                <PopularBlock/>
                <ArticlesPreviewBlock/>
            </div>
        </main>
    );
}
