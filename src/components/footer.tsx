import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.PNG";
import { body } from "@fonts";
import { useMediaQuery } from "~/hook/useMediaQuery";
import { FaInstagram } from "react-icons/fa";
import { type ReactNode } from "react";

const Footer = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <footer
      className={`${body.className} flex flex-col items-center gap-6 bg-navy px-6 pb-4 pt-8 text-cream md:px-16`}
    >
      <div className="flex w-full flex-1 flex-col items-center gap-6 md:flex-row md:gap-[12vw] lg:gap-[calc(12vw+2rem)]">
        <div className="rounded-full bg-blue-4 p-4">
          <Image src={Logo} height={isMd ? 120 : 80} alt="Logo" />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-[12vw] md:gap-y-3 lg:gap-x-[calc(12vw+2rem)]">
          <LinkIcon href="https://www.instagram.com/pemirakmitb2024/">
            <FaInstagram /> PEMIRAKMITB2024
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/pemirakmitb2024/">
            <FaInstagram /> PEMIRAKMITB2024
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/pemirakmitb2024/">
            <FaInstagram /> PEMIRAKMITB2024
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/pemirakmitb2024/">
            <FaInstagram /> PEMIRAKMITB2024
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/pemirakmitb2024/">
            <FaInstagram /> PEMIRAKMITB2024
          </LinkIcon>
          <LinkIcon href="https://www.instagram.com/pemirakmitb2024/">
            <FaInstagram /> PEMIRAKMITB2024
          </LinkIcon>
        </div>
      </div>
      <div className="font-mono text-[.625rem]">
        <p className="">© 2024 Pemira ITB</p>
        <p className="">All rights reserved</p>
      </div>
    </footer>
  );
};

const LinkIcon = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center gap-1 transition-colors hover:text-teal-2">
        {children}
      </div>
    </Link>
  );
};

export default Footer;
