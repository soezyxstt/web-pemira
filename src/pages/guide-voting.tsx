import Bg from "~/components/background";
import { header } from "~/styles/fonts";
import React from "react";
import Voting from "~/components/voting";

const GuideVoting = () => {
  return (
    <div className="flex items-center justify-center flex-col dusty-bg gap-[5em]">
      <Bg />
      <Voting />
    </div>
  );
};

export default GuideVoting;
