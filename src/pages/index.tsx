import { header } from "@fonts";
import Bg from "~/components/background";

export default function Home() {
  return (
    <>
      <div className="dusty-bg flex flex-col items-center justify-center">
        <Bg />
        <div
          className={`${header.className} z-[1] flex flex-col gap-3 text-center text-4xl text-oren shadow-teal-4 text-shadow text-stroke-width-1 text-stroke-color-cream md:flex-row md:gap-2`}
        >
          <h1>PEMIRA</h1>
          <h1 className="hidden md:block">-</h1>
          <h1>Coming Soon</h1>
        </div>
      </div>
    </>
  );
}
