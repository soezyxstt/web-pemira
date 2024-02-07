import React from "react";
import Image from "next/image";
import Link from "next/link";

const FaInstagram = ({ linkIG }: { linkIG: string }) => {
  return (
    <div /*logo ig */
      className="relative ml-2 flex items-center justify-center"
    >
      <Link href={linkIG}>
        <Image
          src="/instagram_logo.PNG"
          height={60}
          width={60}
          alt="Instagram"
          className="p-1 transition-transform duration-300 ease-in-out hover:scale-110 md:h-16 md:w-16"
        ></Image>
      </Link>
    </div>
  );
};

export default FaInstagram;
