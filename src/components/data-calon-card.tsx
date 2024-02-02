import React from "react";
import { body } from "@fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import PointDesc from "./ui/profil-calon/pointDesc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const DataCalonCard = ({ section }: { section: string }) => {
  const bgColor = section === "K3M" ? "bg-blue-5" : "bg-red-5";
  const bgDesc = section === "K3M" ? "bg-teal-1" : "bg-red-3";
  const nextButton = section === "K3M" ? "data-next-K3M" : "data-next-MWA-WM";
  const prevButton = section === "K3M" ? "data-prev-K3M" : "data-prev-MWA-WM";

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Card
            className={`box-border w-full flex-grow rounded-2xl border-4 border-black ${bgColor}`}
          >
            <CardHeader className="flex flex-col items-baseline drop-shadow-lg md:flex-row">
              <CardTitle
                className={`${body.className} text-base text-brown-1 md:text-3xl`}
              >
                {"Nama Calon 1"}
              </CardTitle>
              <CardDescription className="align-bottom text-sm text-brown-3 drop-shadow-lg md:pl-3 md:text-base">
                {"Jurusan Angkatan"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle
                className={`${body.className} flex justify-center text-sm text-brown-1 md:text-3xl`}
              >
                Visi
              </CardTitle>
              <PointDesc tipe={"visi"} bgDesc={bgDesc} point={"Visi Calon"} />
              <CardTitle
                className={`${body.className} flex justify-center pt-2 text-sm text-brown-1 md:text-3xl`}
              >
                Misi
              </CardTitle>
              <div className="flex flex-col space-y-1">
                <PointDesc
                  tipe={"misi"}
                  bgDesc={bgDesc}
                  point={
                    "rcu dictum. Sit amet consectetur adipiscing elit. Et malesuada famesac turpis ultricies tristique nulla aliquet enim. Diam phasellusvestibulum lorem sed. Dolor morbi non arcu risus quis varius quamquisque. Enim eu turpis egestas pretium aenean pharetra magna ac."
                  }
                />
                <PointDesc bgDesc={bgDesc} point={"Misi Calon"} tipe={"misi"} />
                <PointDesc
                  bgDesc={bgDesc}
                  point={
                    "Dolor morbi non arcu risus quis varius quamquisque. Enim eu turpis egestas pretium aenean pharetra magna ac."
                  }
                  tipe={"misi"}
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card
            className={`box-border w-full flex-grow rounded-2xl border-4 border-black ${bgColor}`}
          >
            <CardHeader className="flex flex-col items-baseline drop-shadow-lg md:flex-row">
              <CardTitle
                className={`${body.className} text-base text-brown-1 md:text-3xl`}
              >
                {"Nama Calon 2"}
              </CardTitle>
              <CardDescription className="align-bottom text-sm text-brown-3 drop-shadow-lg md:pl-3 md:text-base">
                {"Jurusan Angkatan"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle
                className={`${body.className} flex justify-center text-sm text-brown-1 md:text-3xl`}
              >
                Visi
              </CardTitle>
              <PointDesc tipe={"visi"} bgDesc={bgDesc} point={"Visi Calon"} />
              <CardTitle
                className={`${body.className} flex justify-center pt-2 text-sm text-brown-1 md:text-3xl`}
              >
                Misi
              </CardTitle>
              <div className="flex flex-col space-y-1">
                <PointDesc
                  tipe={"misi"}
                  bgDesc={bgDesc}
                  point={
                    "rcu dictum. Sit amet consectetur adipiscing elit. Et malesuada famesac turpis ultricies tristique nulla aliquet enim. Diam phasellusvestibulum lorem sed. Dolor morbi non arcu risus quis varius quamquisque. Enim eu turpis egestas pretium aenean pharetra magna ac."
                  }
                />
                <PointDesc bgDesc={bgDesc} point={"Misi Calon"} tipe={"misi"} />
                <PointDesc
                  bgDesc={bgDesc}
                  point={
                    "Dolor morbi non arcu risus quis varius quamquisque. Enim eu turpis egestas pretium aenean pharetra magna ac."
                  }
                  tipe={"misi"}
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className="absolute -left-6 hidden h-14 w-14"
        id={prevButton}
      />
      <CarouselNext
        className="absolute -right-6 hidden h-14 w-14"
        id={nextButton}
      />
    </Carousel>
  );
};

export default DataCalonCard;
