import type {Metadata} from "next";
import {ReactNode} from "react";
import '@/styles/globals.scss';
import {Geist, Geist_Mono} from "next/font/google";

const title = 'Generic Store';
export const metadata: Metadata = {
    title: title,
    description: "Generic store",
    openGraph: {
        title,
        images: [`/api/og?title=${title}`]
    }
};
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}