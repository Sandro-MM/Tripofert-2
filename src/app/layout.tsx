import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
const poppins = Poppins({ subsets: ["latin"], weight:['400', '500', '600', '700', '800']});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body  className={poppins.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
