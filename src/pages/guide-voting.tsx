import Bg from '~/components/background';
import { header } from '~/styles/fonts';

const GuideVoting = () => {
  return (
    <div className='flex items-center justify-center flex-col dusty-bg'>
      <Bg />
      <h1 className={`${header.className} text-shadow shadow-teal-4 text-oren text-stroke-width-1 text-stroke-color-cream text-4xl z-[1]`}>Guide Voting Coming Soon</h1>
    </div>
  );
}

export default GuideVoting;