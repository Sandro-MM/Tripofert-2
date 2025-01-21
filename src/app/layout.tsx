import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
const poppins = Poppins({ subsets: ["latin"], weight:['400', '500', '600', '700', '800']});
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Suspense} from "react";
import Chat from "@/components/chat";

export const metadata: Metadata = {
    title: "Tripofert: Your VIP Driver for Exclusive Trips | triofert.com",
    description: "Discover the experience of travelling in style at Tripofert. Choose\n" +
        "                      your destinations and personalised stops with a VIP driver who adapts to your needs\n" +
        "                , making every trip a unique and memorable experience!.",
};




export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta charSet="UTF-8"/>
            <title>Tripofert: Your VIP Driver for Exclusive Trips | triofert.com</title>
            <meta
                name="description"
                content="Discover the experience of travelling in style at Tripofert. Choose
                      your destinations and personalised stops with a VIP driver who adapts to your needs
                , making every trip a unique and memorable experience!."
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
        </head>
        <body className={poppins.className}>

        <SpeedInsights/>
        <Providers>
            <Suspense>
                <Chat/>
                {children}
            </Suspense>
        </Providers>
        </body>
        </html>
    );
}
