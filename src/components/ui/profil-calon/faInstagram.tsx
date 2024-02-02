import React from "react";
import Image from "next/image";
import Link from "next/link";

const FaInstagram = ({ linkIG }: { linkIG: string }) => {
  return (
    <div /*logo ig */ className="ml-2 flex items-center justify-center">
      <Link href={linkIG}>
        <Image
          src="/instagram_logo.png"
          height={60}
          width={60}
          alt="Instagram"
        ></Image>
      </Link>
    </div>
  );
};

export default FaInstagram;
