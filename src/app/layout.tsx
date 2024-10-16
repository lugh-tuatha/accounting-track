import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme/theme-provider";

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <div className="flex">
                            <Sidebar />
                            <div className="w-[88%]">
                                <Header />
                                {children}
                            </div>
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
