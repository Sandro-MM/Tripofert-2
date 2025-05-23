'use client'
import { ThemeProvider } from 'next-themes'
import React from "react";
import {Toaster} from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
    return  (<ThemeProvider  attribute="class"
                             defaultTheme="system"
                             enableSystem
                             disableTransitionOnChange>
        {children}
    </ThemeProvider>);
}
