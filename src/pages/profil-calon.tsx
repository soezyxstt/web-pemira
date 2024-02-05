import Bg from '~/components/background';
import { header } from '~/styles/fonts';

const ProfilCalon = () => {
  return (
    <div className='flex justify-center items-center dusty-bg'>
      <Bg />
      <h1 className={`${header.className} text-shadow shadow-teal-4 text-oren text-stroke-width-1 text-stroke-color-cream text-4xl z-[1]`}>Profil Calon - Coming Soon</h1>
    </div>
  );
}

export default ProfilCalon;