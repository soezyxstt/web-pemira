import Head from "next/head";
import {
  body
} from '~/styles/fonts';

export default function Home() {

  return (
    <>
      <Head>
        <title>PEMIRA ITB</title>
        <meta name="description" content="Website Pemilu Raya ITB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${body.className} flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white text-[5rem]`}>
        Test
      </main>
    </>
  );
}
