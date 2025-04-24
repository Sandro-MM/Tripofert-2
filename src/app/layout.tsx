import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import { SpeedInsights } from "@vercel/speed-insights/next"
import React, {Suspense} from "react";
import Chat from "@/components/chat";
import {supabase} from "@/directions-functions/supabaseClient";
import {Toaster} from "@/components/ui/toaster";
import Link from "next/link";
import {MdOutlineMailOutline} from "react-icons/md";
const poppins = Poppins({ subsets: ["latin"], weight:['400', '500', '600', '700', '800']});

// export const metadata: Metadata = {
//     title: "Tripofert: Your VIP Driver for Exclusive Trips | triofert.com",
//     description: "Discover the experience of travelling in style at Tripofert. Choose\n" +
//         "                      your destinations and personalised stops with a VIP driver who adapts to your needs\n" +
//         "                , making every trip a unique and memorable experience!.",
// };




export const revalidate = 0;
async function fetchSeoData() {
    let { data, error } = await supabase
        .from('seo_data')
        .select('*')
        .eq('id', 1)
        .single();

    if (error) {
        console.error('Error fetching SEO data:', error);
        return null;
    }

    return data;
}


export default async function Layout({children}: { children: React.ReactNode }) {
    const seoData = await fetchSeoData();

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta charSet="UTF-8"/>
            <title>{seoData.title}</title>
            <meta
                name="description"
                content={seoData.description}
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
            <link rel="shortcut icon" href="/Logo.svg" type="image/x-icon"/>
            <link rel="icon" href="/Logo.svg" type="image/x-icon"/>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="icon" href="/Logo.svg" type="image/svg+xml"/>
            <link rel="apple-touch-icon" href="/Logo.png"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        </head>
        <body className={poppins.className}>
        <SpeedInsights/>
        <Providers>
            <Suspense>

                <Toaster/>
                {children}
            </Suspense>
        </Providers>
        <div className={'fixed bottom-0 right-0 h-[150px] w-[84px] z-50'}>
            <Link href="/contact">
                <div className={'size-[60px] rounded-full bg-buttons pt-[14px]'}>
                    <MdOutlineMailOutline className={'mx-auto'} size={32} />
                </div>
            </Link>



        <Chat/>

        </div>
        </body>
</html>
    );
}
