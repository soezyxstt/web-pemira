import React from "react";
import { CardDescription } from "~/components/ui/card";

type PointDescProps = {
  tipe: string;
  bgDesc: string;
  point: string;
};

const PointDesc = ({ tipe, bgDesc, point }: PointDescProps) => {
  if (tipe === "visi") {
    return (
      <CardDescription
        className={`w-full ${bgDesc} py-1 pl-1 text-[8px] text-black drop-shadow-lg md:text-sm`}
      >
        {point}
      </CardDescription>
    );
  } else {
    return (
      <CardDescription
        className={`w-full ${bgDesc} py-1 pl-1 text-[7px] text-black drop-shadow-lg md:text-xs`}
      >
        {point}
      </CardDescription>
    );
  }
};

export default PointDesc;
