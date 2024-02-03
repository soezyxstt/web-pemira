import React from "react";
import Link from "next/link";
import { body } from "@fonts";

const Portofolio = ({ linkPorto }: { linkPorto: string }) => {
  return (
    <Link href={linkPorto} className="w-full">
      <div className="box-border w-full items-center justify-center rounded-2xl border-[3px] border-black bg-brown-5 py-2">
        <div
          className={`${body.className} flex justify-center text-lg text-brown-1 transition-transform duration-300 ease-in-out hover:scale-110 md:text-3xl`}
        >
          Portofolio
        </div>
      </div>
    </Link>
  );
};

export default Portofolio;
