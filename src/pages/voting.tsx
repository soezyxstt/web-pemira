import { type ReactNode, useState, useRef } from "react";
import Image from "next/image";
import { body, header } from "@fonts";
import { Progress } from "~/components/ui/progress";
import { cn } from "~/lib/utils";
import FirstPage from "~/components/voting/firstPage";
import ThirdPage from "~/components/voting/thirdPage";
import FadeIn from "~/components/fade-in";
import Head from 'next/head';

const Voting = () => {
  const [page, setPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const backref = useRef<HTMLButtonElement>(null);
  const nextref = useRef<HTMLButtonElement>(null);

  return (
    <FadeIn>
      <Head>
        <title>PEMIRA - Voting</title>
        <meta name="description" content="Website Pemilu Raya ITB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${header.className} relative z-0 flex min-h-dvh flex-col bg-cream px-12 pb-6 pt-8`}
      >
        <Image
          src="/bintang/5.png"
          alt="bintang"
          height={75}
          width={75}
          className="absolute left-4 top-0 z-[-1] rotate-[15deg]"
        />
        <div className="flex flex-1 flex-col gap-2">
          <h1
            className={`${header.className} text-5xl text-navy drop-shadow-[4px_4px_1px_rgba(0,0,0,.2)]`}
          >
            Voting
          </h1>
          <p
            className={`${body.className} mb-1 text-sm text-teal-1 drop-shadow-md`}
          >
            Untuk memilih, silakan klik kartu sesuai urutan pilihan (1 sampai
            4). Untuk mengulang, silakan tekan tombol RESET
          </p>
          <Progress
            className="h-[20px] border-[3px] border-brown-3 bg-brown-1"
            value={25 * page}
          />
          <div
            className={`${body.className} text-red-3`}
          >{`Step ${page}/4`}</div>
          <div
            className="flex w-[calc(100vw-6rem)] flex-1 overflow-hidden rounded-lg"
            ref={scrollRef}
          >
            <div className="flex w-[calc(4*(100vw-6rem))] flex-1">
              <FirstPage />
              <ThirdPage />
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <button
              ref={backref}
              className={cn(
                "rounded-full border-[5px] border-brown-3 bg-brown-1 px-8 py-2 text-brown-5 drop-shadow-md transition-all hover:scale-[98%] hover:bg-brown-2/75 hover:drop-shadow-none disabled:cursor-not-allowed",
                page === 1 ? "invisible" : "visible",
              )}
              onClick={() => {
                scrollRef.current?.scrollTo({
                  left:
                    scrollRef.current?.scrollLeft -
                    scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
                setPage(page - 1);
                if (backref.current) {
                  backref.current.disabled = true;
                  setTimeout(() => {
                    backref.current?.removeAttribute("disabled");
                  }, 800);
                }
              }}
            >
              Back
            </button>
            <button
              ref={nextref}
              className={cn(
                "rounded-full border-[5px] border-brown-3 bg-brown-1 px-8 py-2 text-brown-5 drop-shadow-md transition-all hover:scale-[98%] hover:bg-brown-2/75 hover:drop-shadow-none disabled:cursor-not-allowed",
                page > 4 ? "invisible" : "visible",
              )}
              onClick={() => {
                if (page === 2) {
                  console.log("submit");
                  return;
                }
                scrollRef.current?.scrollTo({
                  left:
                    scrollRef.current?.scrollLeft +
                    scrollRef.current.clientWidth,
                  behavior: "smooth",
                });
                setPage(page + 1);
                if (nextref.current) {
                  nextref.current.disabled = true;
                  setTimeout(() => {
                    nextref.current?.removeAttribute("disabled");
                  }, 800);
                }
              }}
            >
              {page === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

Voting.getLayout = (page: ReactNode) => page;
export default Voting;
