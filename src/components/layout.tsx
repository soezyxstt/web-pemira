import { type ReactNode } from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { body } from "@fonts";
import FadeIn from "./fade-in";
import { Toaster } from './ui/sonner';

const Layout = ({ children }: { children?: ReactNode }) => (
  <FadeIn>
    <div className={`${body.className} flex min-h-screen flex-col text-black`}>
      <Head>
        <title>PEMIRA KM ITB</title>
        <meta name="description" content="Website Pemilu Raya KM ITB 2023/2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Toaster richColors />
      <main className="flex flex-1 flex-col *:flex-1 *:bg-cream">
        {children}
      </main>
    </div>
    <Footer />
  </FadeIn>
);

export default Layout;
