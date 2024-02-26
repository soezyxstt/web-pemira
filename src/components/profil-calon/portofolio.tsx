import React from "react";
import Link from "next/link";
import { body } from "@fonts";

const Portofolio = ({ linkPorto }: { linkPorto: string }) => {
  return (
    <Link href={linkPorto} className="w-full">
      <div className="box-border w-full items-center justify-center rounded-2xl transition-colors border-[3px] border-black bg-brown-5/85 hover:bg-brown-5 py-2">
        <div
          className={`${body.className} flex justify-center text-lg text-brown-1 text-stroke-width-1 text-stroke-color-red-4 md:text-3xl`}
        >
          Portofolio
        </div>
      </div>
    </Link>
  );
};

export default Portofolio;
