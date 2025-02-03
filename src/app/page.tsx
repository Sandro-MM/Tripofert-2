import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchItem from "@/components/searchItem";
import FeaturesBlock from "@/components/mainPageBlocks/featuresBlock";
import PopularBlock from "@/components/mainPageBlocks/popularBlock";
import ArticlesPreviewBlock from "@/components/mainPageBlocks/articlesPreviewBlock";
import Footer from "@/components/footer/footer";
import Logo from "@/components/logo";
import Head from "next/head";


export default function Home() {
    return (
        <>
            <Head>
                <title> Tripofert: Your VIP Driver for Exclusive Trips | tripofert.com</title>
                <meta
                    name="description"
                    content="Discover the experience of travelling in style at Tripofert. Choose
                      your destinations and personalised stops with a VIP driver who adapts to your needs
                , making every trip a unique and memorable experience!."
                />
                <meta
                    name="keywords"
                    content="travel, destinations, travel guide, travel tips, vacation, adventure, tourism, travel planning, Tripofert"
                />


                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-2W9DHBY9RT"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2W9DHBY9RT');
            `,
                    }}
                ></script>
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
                <h2 className={'hidden'}>
                    Discover the experience of travelling in style at Tripofert. Choose
                    your destinations and personalised stops with a VIP driver who adapts to your needs
                    , making every trip a unique and memorable experience!.
                </h2>
                <BackgroundVideo/>
                <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
                    <ThemeSwitch/>
                    <Logo/>

                    <SearchItem/>
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
