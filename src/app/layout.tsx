import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
const poppins = Poppins({ subsets: ["latin"], weight:['400', '500', '600', '700', '800']});
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Suspense} from "react";

export const metadata: Metadata = {
  title: "Tripofert",
  description: "Tripofert",
};



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta charSet="UTF-8"/>
            <title>Tripofert</title>
            <link rel="icon" href="/Logo.svg" type="image/x-icon"/>
            <link rel="shortcut icon" href="/Logo.svg" type="image/x-icon"/>
        </head>
        <body className={poppins.className}>

        <SpeedInsights/>
        <Providers>
            <Suspense>
                {children}
            </Suspense>
        </Providers>
        </body>
        </html>
    );
}
