import React from "react";
import { CardDescription } from "~/components/ui/card";

type PointDescProps = {
  section: string;
  tipe: string;
  bgDesc: string;
  point: string;
};

const PointDesc = ({ section, tipe, bgDesc, point }: PointDescProps) => {
  const fontColor = section === "K3M" ? "text-black" : "text-brown-2";

  if (tipe === "visi") {
    return (
      <CardDescription
        className={`w-full ${bgDesc} py-1 pl-2 text-[8px] text-black drop-shadow-lg md:text-sm ${fontColor} rounded-lg`}
      >
        {point}
      </CardDescription>
    );
  } else {
    return (
      <CardDescription
        className={`w-full ${bgDesc} py-1 pl-2 text-[7px] text-black drop-shadow-lg md:text-xs ${fontColor} rounded-lg`}
      >
        {point}
      </CardDescription>
    );
  }
};

export default PointDesc;
