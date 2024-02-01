import { header } from '@fonts';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center bg-[url('../../public/texture/dusty.png')] bg-cover bg-center">
        <div className=" absolute z-0 h-full w-full bg-cream opacity-80"></div>
        <div
          className={`${header.className} text-shadow-[4px_4px_0px_#0a3544,_-2px_-2px_0px_#0a3544,_-2px_2px_0px_#0a3544,_2px_-2px_0px_#0a3544] z-[1] text-4xl text-oren [-webkit-text-stroke:1px_#f4e3cb]`}
        >
          PEMIRA
        </div>
      </div>
    </>
  );
}
