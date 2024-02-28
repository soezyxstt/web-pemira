import { header } from "@fonts";
import Image from "next/image";
import Link from "next/link";
import Bg from "~/components/background";
import Card from "~/components/dashboard/card";
import dynamic from 'next/dynamic'

const Countdown = dynamic(() => import('~/components/countdown'), { ssr: false })

export default function Home() {
  return (
    <>
      <div
        className={`dusty-bg flex flex-col items-center justify-center [&_.ch]:px-[10vw]`}
      >
        <Bg className="top-0 h-[calc(100dvh-4rem)] bg-gradient-to-b from-cream from-85% to-brown-1" />
        <Bg className="top-[calc(100dvh-4rem)] h-dvh bg-brown-1" />
        <Bg className="top-[calc(200dvh-4rem)] h-dvh bg-gradient-to-b from-brown-1 to-30% to-cream" />
        <div className=" w-full">
          <div
            className={`ch isolate flex h-[calc(100vh-4rem)] w-full flex-col justify-center gap-6 text-center`}
          >
            <h1
              className={`${header.className} text-center text-4xl text-oren shadow-teal-4 text-shadow text-stroke-width-1 text-stroke-color-cream md:text-6xl`}
            >
              PEMILU RAYA KM ITB 2024
            </h1>
            <h4 className="text-sm text-navy md:text-xl">
              Pemilihan Ketua Kabinet KM ITB dan Majelis Wali Amanat Wakil
              Mahasiswa ITB
            </h4>
            <h4
              className={`${header.className} mb-12 text-red-4 drop-shadow md:mb-24`}
            >
              {"#GERAKINKLUSIF"}
            </h4>
            <Countdown />
            <div className="text-red-4">until vote start</div>
          </div>
        </div>
        <div className="w-full">
          <div className="ch isolate z-[1] flex min-h-dvh w-full flex-col justify-center gap-16 py-[8vh] *:space-y-8 md:gap-24">
            <div className="">
              <h1 className="text-custom __className_318c95 md:text-6xl">
                K3M
              </h1>
              <div className="flex flex-wrap justify-center gap-4">
                <Card
                  name="Fidela"
                  major="Teknik Material"
                  batch="20"
                  variant="k3m"
                  motto="Maju terus pantang mundur"
                  nomor={1}
                />
                <Card
                  name="Fidela"
                  major="Teknik Material"
                  batch="20"
                  variant="k3m"
                  motto="Maju terus pantang mundur"
                />
                <Card
                  name="Fidela"
                  major="Teknik Material"
                  batch="20"
                  variant="k3m"
                  motto="Maju terus pantang mundur"
                />
              </div>
            </div>
            <div className="">
              <h1 className="__className_318c95 text-custom md:text-6xl">
                MWA-WM
              </h1>
              <div className="flex flex-wrap justify-center gap-4">
                <Card
                  name="Fidela"
                  major="Teknik Material"
                  batch="20"
                  motto="Maju terus pantang mundur"
                />
                <Card
                  name="Fidela"
                  major="Teknik Material"
                  batch="20"
                  motto="Maju terus pantang mundur"
                />
                <Card
                  name="Fidela"
                  major="Teknik Material"
                  batch="20"
                  motto="Maju terus pantang mundur"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="ch relative z-[1] flex h-dvh flex-col items-center justify-end gap-6 overflow-hidden text-center md:gap-16">
            <h1 className="text-custom __className_318c95 md:text-6xl">
              Gunakan Suaramu!
            </h1>
            <Link
              href="/guide-voting"
              className="w-fit rounded border border-red-5 bg-brown-4/85 px-4 py-2 text-teal-5 transition-colors text-stroke-width-[0.1px] text-stroke-color-blue-1 hover:bg-brown-4"
            >
              Guide Voting
            </Link>
            <Image
              src="/jengga/blocks.png"
              alt="logo"
              width={1800}
              height={1800}
              objectFit="contain"
              className="max-h-[40vh] md:max-w-[60vw]"
            />
            <Image
              src="/bintang/5.png"
              alt=""
              width={800}
              height={800}
              objectFit="contain"
              className="absolute left-1/4 top-1/4 h-14 w-14 -rotate-12 md:h-24 md:w-24"
            />
            <Image
              src="/bintang/11.png"
              alt=""
              width={800}
              height={800}
              objectFit="contain"
              className="absolute right-1/4 top-1/4 h-14 w-14 rotate-12 md:h-24 md:w-24"
            />
          </div>
        </div>
      </div>
    </>
  );
}
