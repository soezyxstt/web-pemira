import React from "react";
import Image from "next/image";
import { FaInstagram as Icon} from "react-icons/fa6";
import Link from "next/link";

const FaInstagram = ({ linkIG }: { linkIG: string }) => {
  return (
    <div /*logo ig */
      className="relative ml-1 flex items-center justify-center aspect-square "
    >
      <Link href={linkIG} download={linkIG} className='h-full w-full'>
        <Icon fontSize={60} />
      </Link>
    </div>
  );
};

export default FaInstagram;
