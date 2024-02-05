import { header } from "@fonts";
import Bg from "~/components/background";

export default function Home() {
  return (
    <>
      <div className="dusty-bg flex flex-col items-center justify-center">
        <Bg />
        <div
          className={`${header.className} z-[1] text-4xl text-oren shadow-teal-4 text-shadow text-stroke-width-1 text-stroke-color-cream`}
        >
          PEMIRA - Coming Soon
        </div>
      </div>
    </>
  );
}
