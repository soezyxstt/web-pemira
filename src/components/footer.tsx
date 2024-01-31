import Image from 'next/image';
import Logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className='md:px-10 px-6 md:py-6 py-4'>
      <Image src={Logo} height={120} alt="Logo" />
    </footer>
  );
}

export default Footer;
