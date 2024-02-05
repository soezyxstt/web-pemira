import Bg from "~/components/background";
import { header } from "~/styles/fonts";
import React from "react";
import Voting from "~/components/voting";

const GuideVoting = () => {
  return (
    <div className="dusty-bg flex flex-col items-center justify-center">
      <Bg />
      <Voting />
    </div>
  );
};

export default GuideVoting;
