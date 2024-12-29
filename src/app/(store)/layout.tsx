import type {Metadata} from "next";
import {ReactNode} from "react";
import '@/styles/globals.scss';
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata: Metadata = {
    title: "Generic Store",
    description: "Generic store",
};

export default function RootLayout(
    {children}: Readonly<{ children: ReactNode }>
) {
    // const session = await getServerSession();

    return (<>
        <Header/>
        {children}
        <Footer/>
    </>)
}