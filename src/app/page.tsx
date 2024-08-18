import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchItem from "@/components/searchItem";
import Image from "next/image";
import FeaturesBlock from "@/components/mainPageBlocks/featuresBlock";
import PopularBlock from "@/components/mainPageBlocks/popularBlock";
import ArticlesPreviewBlock from "@/components/mainPageBlocks/articlesPreviewBlock";
import Footer from "@/components/footer/footer";
import {router} from "next/client";



export default function Home() {
    return (
        <main className="relative w-full min-h-screen">
            <BackgroundVideo />
            <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
                <ThemeSwitch />
                <div className={'absolute left-4 top-1 flex items-center'}>
                    <Image  width={55} height={55} src={'./Logo.svg'} alt={'logo'}/>
                    <p className={'text-2xl font-bold text-buttons'}>Tripofert</p>
                </div>

                <SearchItem />
            </div>
            <div className="relative w-full mt-[100vh] z-20  bg-bg/90 backdrop-blur-sm">
                <FeaturesBlock/>
                <PopularBlock/>
                <ArticlesPreviewBlock/>
                <Footer/>
            </div>
        </main>
    );
}
