import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between md:pl-8 md:pr-10 pr-6 pl-4">
      <ul className="flex items-center *:px-4">
        <li>
          <Link href="/">
            <Image className="mr-2" src={Logo} height={48} alt="Logo" />
          </Link>
        </li>
        <li>
          <Link href="/">Profil Calon</Link>
        </li>
        <li>
          <Link href="/">Guide Voting</Link>
        </li>
      </ul>
      <div>{"#GerakInklusif"}</div>
    </nav>
  );
};

export default Navbar;
