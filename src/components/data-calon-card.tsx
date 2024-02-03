import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import DataCalonCarouselItem from "./ui/profil-calon/dataCalonCarouselItem";

const DataCalonCard = ({ section }: { section: string }) => {
  const nextButtonID = section === "K3M" ? "data-next-K3M" : "data-next-MWA-WM";
  const prevButtonID = section === "K3M" ? "data-prev-K3M" : "data-prev-MWA-WM";

  if (section === "K3M") {
    return (
      <Carousel>
        <CarouselContent>
          <DataCalonCarouselItem
            section={"K3M"}
            namaCalon={"Yadi Supriyadi"}
            jurusanAngkatan={"TA'21"}
            visi={"cerah"}
            misi={["hidup", "selamet", "adibing selamet ketemu jaka sembung"]}
            linkPorto={""}
            linkIG={""}
          />
          <DataCalonCarouselItem
            section={"K3M"}
            namaCalon={"Erik Tohir"}
            jurusanAngkatan={"Mesin'13"}
            visi={"PSSI nomer 1"}
            misi={[
              "memberantas isis",
              "menolak al-qaeda",
              "menghancurkan taliban",
            ]}
            linkPorto={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            linkIG={"https://www.instagram.com/eriktohir/"}
          />
        </CarouselContent>
        <CarouselPrevious
          className="absolute -left-6 hidden h-14 w-14"
          id={prevButtonID}
        />
        <CarouselNext
          className="absolute -right-6 hidden h-14 w-14"
          id={nextButtonID}
        />
      </Carousel>
    );
  } else {
    return (
      <Carousel>
        <CarouselContent>
          <DataCalonCarouselItem
            section={"MWA-WM"}
            namaCalon={"Tatang Nurjaman"}
            jurusanAngkatan={"TA'21"}
            visi={"cerah"}
            misi={["hidup", "selamet", "adibing selamet ketemu jaka sembung"]}
            linkPorto={""}
            linkIG={""}
          />
          <DataCalonCarouselItem
            section={"MWA-WM"}
            namaCalon={"Erik Tohir"}
            jurusanAngkatan={"Mesin'13"}
            visi={"PSSI nomer 1"}
            misi={[
              "memberantas isis",
              "menolak al-qaeda",
              "menghancurkan taliban",
            ]}
            linkPorto={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            linkIG={"https://www.instagram.com/eriktohir/"}
          />
        </CarouselContent>
        <CarouselPrevious
          className="absolute -left-6 hidden h-14 w-14"
          id={prevButtonID}
        />
        <CarouselNext
          className="absolute -right-6 hidden h-14 w-14"
          id={nextButtonID}
        />
      </Carousel>
    );
  }
};

export default DataCalonCard;
