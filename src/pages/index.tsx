import { header } from "@fonts";
import { body } from "@fonts";
import Bg from "~/components/background";
import CountdownTimer from "~/components/countdown-timer";

export default function Home() {
  // targetData = YYYY-MM-DDTHH:MM:SS
  const targetDate = new Date("2024-02-07T23:59:59");
  return (
    <>
      <div className="dusty-bg flex flex-col items-center">
        <Bg />
        <div className="z-10">
          <h1
            className={`${header.className} mb-16 mt-48 text-center text-8xl text-teal-5 drop-shadow-lg`}
          >
            PEMILU RAYA KM ITB 2024
          </h1>
          <h1
            className={`${body.className} mb-16 text-center text-3xl text-[#01577C] drop-shadow-lg`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <h1
            className={`${header.className} text-center text-xl text-[#840202] drop-shadow-lg`}
          >
            #GERAKINKLUSIF
          </h1>
          <div className="mt-36 text-center">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>
    </>
  );
}
