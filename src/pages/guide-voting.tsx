import Bg from '~/components/background';
import { header } from '~/styles/fonts';
import LokasiVoting from '~/components/lokasi-voting';
import FaQ from '~/components/faq';



const GuideVoting = () => {
  return (
    <div className='flex items-center justify-center flex-col dusty-bg gap-[5em]'>
      <Bg />
      <div className={`${header.className} flex-col md:flex-row flex gap-3 md:gap-2 text-shadow shadow-teal-4 text-oren text-stroke-width-1 text-stroke-color-cream text-4xl z-[1] text-center`}>
        <h1>Guide Voting</h1>
        <h1 className='hidden md:block'>-</h1>
        <h1>Coming Soon</h1>
      </div>
      <LokasiVoting/>
      <FaQ/>
        {/* <h1 className={`${header.className} text-shadow shadow-teal-4 text-oren text-stroke-width-1 text-stroke-color-cream text-4xl z-[1]`}>Guide Voting</h1> */}
   </div>
  );
}

export default GuideVoting;