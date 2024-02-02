import { header } from '@fonts';
import Bg from '~/components/background';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center dusty-bg">
        <Bg />
        <div
          className={`${header.className} text-shadow shadow-teal-4 text-oren text-stroke-width-1 text-stroke-color-cream text-4xl z-[1]`}
        >
          PEMIRA
        </div>
      </div>
    </>
  );
}
