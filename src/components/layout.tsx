import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { body } from '@fonts';

const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <div className={`${body} flex min-h-screen flex-col`}>
      <Head>
        <title>PEMIRA ITB</title>
        <meta name="description" content="Website Pemilu Raya ITB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-1 flex-col *:flex-1 *:bg-cream">{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
