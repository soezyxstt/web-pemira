import { header } from "@fonts";
import { body } from "@fonts";
import Bg from "~/components/background";

const CountdownCard = () => {
  return (
    <>
      <div >
        <div className="h-52 w-36 bg-[#F4D376]"></div>
        <div className="h-52 w-36 bg-[#EDA537]"></div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <div className="dusty-bg flex flex-col items-center justify-center">
        <Bg />
        <div className="z-10">
          <h1
            className={`${header.className} text-center text-5xl text-teal-5`}
          >
            PEMILU RAYA KM ITB 2024
          </h1>
          <h1
            className={`${body.className} text-center text-xl text-[#01577C]`}
          >
            Lorem Ipsum dolor sir amet
          </h1>
          <h1
            className={`${header.className} text-center text-xs text-[#840202]`}
          >
            #GERAKINKLUSIF
          </h1>

          <CountdownCard />
        </div>
      </div>
    </>
  );
}
