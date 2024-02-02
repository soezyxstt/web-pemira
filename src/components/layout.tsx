import { type ReactNode } from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { body } from "@fonts";
import { motion } from "framer-motion";

const Layout = ({ children }: { children?: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`${body.className} flex min-h-screen flex-col text-black`}>
      <Head>
        <title>PEMIRA ITB</title>
        <meta name="description" content="Website Pemilu Raya ITB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-1 flex-col *:flex-1">
        {children}
      </main>
    </div>
    <Footer />
  </motion.div>
);

export default Layout;
