import React from "react";
import { body } from "@fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const DataCalonCard = ({ section }: { section: string }) => {
  const bgColor = section === "K3M" ? "bg-blue-5" : "bg-red-5";
  const bgDesc = section === "K3M" ? "bg-teal-1" : "bg-red-3";

  return (
    <Card
      className={`box-border w-full flex-grow rounded-2xl border-4 border-black ${bgColor}`}
    >
      <CardHeader className="flex flex-row items-baseline drop-shadow-lg">
        <CardTitle className={`${body.className} text-3xl text-brown-1`}>
          {"Nama Calon"}
        </CardTitle>
        <CardDescription className="pl-3 align-bottom text-brown-3 drop-shadow-lg">
          {"Jurusan Angkatan"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle
          className={`${body.className} flex justify-center text-3xl text-brown-1`}
        >
          Visi
        </CardTitle>
        <CardDescription
          className={`p-y-2 w-full ${bgDesc} pl-1 text-sm text-black drop-shadow-lg`}
        >
          {"Visi Calon"}
        </CardDescription>
        <CardTitle
          className={`${body.className} flex justify-center pt-2 text-3xl text-brown-1`}
        >
          Misi
        </CardTitle>
        <div className="flex flex-col space-y-1">
          <CardDescription
            className={`p-y-2 w-full ${bgDesc} pl-1 text-xs text-black drop-shadow-lg`}
          >
            rcu dictum. Sit amet consectetur adipiscing elit. Et malesuada fames
            ac turpis ultricies tristique nulla aliquet enim. Diam phasellus
            vestibulum lorem sed. Dolor morbi non arcu risus quis varius quam
            quisque. Enim eu turpis egestas pretium aenean pharetra magna ac.
          </CardDescription>
          <CardDescription
            className={`p-y-2 w-full ${bgDesc} pl-1 text-xs text-black drop-shadow-lg`}
          >
            {"Misi Calon"}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCalonCard;
