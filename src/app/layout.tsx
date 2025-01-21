import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
const poppins = Poppins({ subsets: ["latin"], weight:['400', '500', '600', '700', '800']});
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Suspense} from "react";
import Chat from "@/components/chat";
import {GoogleAnalytics} from "nextjs-google-analytics";

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
            <title>Tripofert</title>
            <link rel="shortcut icon" href="/Logo.svg" type="image/x-icon"/>
            <link rel="icon" href="/Logo.svg" type="image/x-icon"/>
        </head>
        <body className={poppins.className}>
        <GoogleAnalytics gaMeasurementId="G-2W9DHBY9RT" trackPageViews />
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
