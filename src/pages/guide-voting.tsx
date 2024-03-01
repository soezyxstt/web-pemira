import GuideVote from "~/components/voting";
import Bg from "~/components/background";
import LokasiVoting from "~/components/lokasi-voting";
import FaQ from "~/components/faq";

const GuideVoting = () => {
  return (
    <div className="dusty-bg flex flex-col items-center justify-center gap-20 py-10 md:py-16">
      <Bg />
      <GuideVote />
      <LokasiVoting />
      <FaQ />
      {/* <h1 className={`${header.className} text-shadow shadow-teal-4 text-oren text-stroke-width-1 text-stroke-color-cream text-4xl z-[1]`}>Guide Voting</h1> */}
    </div>
  );
};

export default GuideVoting;
