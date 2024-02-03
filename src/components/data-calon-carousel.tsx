import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import DataCalonCarouselItem from "./ui/profil-calon/dataCalonCarouselItem";

const DataCalonCarousel = ({ section }: { section: string }) => {
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
            linkPorto={"https://www.youtube.com/watch?v=CxoXItNERPM"}
            linkIG={"https://www.instagram.com/km.itb/"}
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
          <DataCalonCarouselItem
            section={"K3M"}
            namaCalon={"Udin"}
            jurusanAngkatan={"Teknik Oseanografi'20"}
            visi={"Orang Miskin Harus Kaya"}
            misi={[
              "memberantas isis",
              "menolak al-qaeda",
              "menghancurkan taliban",
            ]}
            linkPorto={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            linkIG={"https://www.instagram.com/km.itb/"}
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
            visi={
              "rcu dictum. Sit amet consectetur adipiscing elit. Et malesuada fames ac turpis ultricies tristique nulla aliquet enim. Diam phasellus vestibulum lorem sed. Dolor morbi non arcu risus quis varius quam quisque. Enim eu turpis egestas pretium aenean pharetra magna ac."
            }
            misi={["hidup", "selamet", "adibing selamet ketemu jaka sembung"]}
            linkPorto={"https://www.youtube.com/watch?v=CxoXItNERPM"}
            linkIG={"https://www.instagram.com/mwawm_itb/"}
          />
          <DataCalonCarouselItem
            section={"MWA-WM"}
            namaCalon={"Erik Tohir"}
            jurusanAngkatan={"Mesin'13"}
            visi={"PSSI nomer 1"}
            misi={[
              "Phasellus metus odio, eleifend et elit non, suscipit rhoncus mauris. Duis volutpat magna et pulvinar elementum. Duis id est vel nisl mollis sagittis volutpat a ex. Duis fringilla posuere sapien, vel hendrerit leo auctor et. Donec at tempor sem, at vulputate nibh.",
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

export default DataCalonCarousel;