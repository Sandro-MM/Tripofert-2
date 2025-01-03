import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchItem from "@/components/searchItem";
import FeaturesBlock from "@/components/mainPageBlocks/featuresBlock";
import PopularBlock from "@/components/mainPageBlocks/popularBlock";
import ArticlesPreviewBlock from "@/components/mainPageBlocks/articlesPreviewBlock";
import Footer from "@/components/footer/footer";
import Logo from "@/components/logo";
import Head from "next/head";
import MessengerChat from "@/components/messenger-chat";


export default function Home() {
    return (
        <>
            <Head>
                <title>Tripofert - Discover Amazing Destinations and Travel Tips</title>
                <meta
                    name="description"
                    content="Explore Tripofert, your ultimate guide for unforgettable travel experiences, tips, and insights. Discover destinations, plan trips, and travel smarter!"
                />
                <meta
                    name="keywords"
                    content="travel, destinations, travel guide, travel tips, vacation, adventure, tourism, travel planning, Tripofert"
                />

                <meta property="og:title" content="Tripofert - Discover Amazing Destinations and Travel Tips"/>
                <meta
                    property="og:description"
                    content="Explore Tripofert, your ultimate guide for unforgettable travel experiences, tips, and insights. Discover destinations, plan trips, and travel smarter!"
                />
                <meta property="og:image" content="https://www.tripofert.com/tripofert-main.jpg"/>
                <meta property="og:url" content="https://www.tripofert.com"/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Tripofert - Discover Amazing Destinations and Travel Tips"/>
                <meta
                    name="twitter:description"
                    content="Explore Tripofert, your ultimate guide for unforgettable travel experiences, tips, and insights. Discover destinations, plan trips, and travel smarter!"
                />
                <meta name="twitter:image" content="https://www.tripofert.com/tripofert-main.jpg"/>
            </Head>
            <main className="relative w-full min-h-screen">
                <BackgroundVideo/>
                <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
                    <ThemeSwitch/>
                    <Logo/>

                    <SearchItem/>
                    <MessengerChat
                        pageId="535990389594333"
                        themeColor="#00b2ff"
                        loggedInGreeting="Welcome! How can we help you today?"
                        loggedOutGreeting="Hi there! Feel free to ask us anything."
                    />
                </div>
                <div className="relative w-full mt-[100vh] z-20  bg-bg/90 backdrop-blur-sm">
                    <FeaturesBlock/>
                    <PopularBlock/>
                    <ArticlesPreviewBlock/>
                    <Footer/>
                </div>
            </main>
        </>
    );
}
