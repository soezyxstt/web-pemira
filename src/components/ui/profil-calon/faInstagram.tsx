import React from "react";
import Image from "next/image";
import Link from "next/link";

const FaInstagram = ({ linkIG }: { linkIG: string }) => {
  return (
    <div
      /*logo ig */ className="relative ml-2 flex items-center justify-center"
    >
      <Link href={linkIG}>
        <Image
          src="/instagram_logo.png"
          height={60}
          width={60}
          alt="Instagram"
          className="overflow-auto pb-2 pr-2 pt-1 transition-transform duration-300 ease-in-out hover:scale-110 md:h-14 md:w-14"
        ></Image>
      </Link>
    </div>
  );
};

export default FaInstagram;
