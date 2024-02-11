import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import DataCalonCarouselItem from "./data-calon-carousel-item";

const DataCalonCarousel = ({ section }: { section: string }) => {
  const nextButtonID = section === "K3M" ? "data-next-K3M" : "data-next-MWA-WM";
  const prevButtonID = section === "K3M" ? "data-prev-K3M" : "data-prev-MWA-WM";

  if (section === "K3M") {
    return (
      <Carousel id={"data-carousel" + section} opts={{ watchDrag: false }}>
        <CarouselContent>
          <DataCalonCarouselItem /* Contoh Data Calon */
            section={"K3M"}
            namaCalon={"Nama Calon 1"}
            jurusanAngkatan={"IF'10"}
            visi={
              "Cras eu lectus velit. Nunc aliquam nulla at porttitor facilisis. Etiam tincidunt metus nec bibendum porttitor. Etiam et quam a purus accumsan lacinia ut nec augue."
            }
            misi={[
              "Phasellus dictum ante ac tortor tincidunt, ut laoreet lectus tincidunt. Vivamus eleifend ultricies leo sit amet lobortis. Cras vel metus at eros pretium sodales eu nec orci.",
            ]}
            linkPorto={"https://www.instagram.com/pemirakmitb2024/"}
            linkIG={"https://www.instagram.com/km.itb/"}
          />
          <DataCalonCarouselItem /* Contoh Data Calon */
            section={"K3M"}
            namaCalon={"Nama Calon 2"}
            jurusanAngkatan={"Mesin'13"}
            visi={
              "Curabitur vitae libero varius, rutrum nisi ut, varius mi. Aliquam sed commodo nisl, sodales convallis orci. Integer vitae efficitur justo. Morbi vitae diam a tellus laoreet condimentum vitae nec risus. Curabitur ut metus mi. Sed egestas turpis sit amet sagittis feugiat. "
            }
            misi={[
              "Phasellus dictum ante ac tortor tincidunt, ut laoreet lectus tincidunt. Vivamus eleifend ultricies leo sit amet lobortis. Cras vel metus at eros pretium sodales eu nec orci.",
              "Proin nec dictum libero, sit amet tincidunt risus. Nam vehicula consectetur arcu sed hendrerit. Vestibulum in eros lobortis, scelerisque enim id, efficitur ex.",
              "Donec sagittis luctus diam, sit amet congue augue interdum sit amet. Sed sit amet iaculis sem.",
              "Phasellus dictum ante ac tortor tincidunt, ut laoreet lectus tincidunt. Vivamus eleifend ultricies leo sit amet lobortis. Cras vel metus at eros pretium sodales eu nec orci.",
              "Proin nec dictum libero, sit amet tincidunt risus. Nam vehicula consectetur arcu sed hendrerit. Vestibulum in eros lobortis, scelerisque enim id, efficitur ex.",
            ]}
            linkPorto={"https://www.instagram.com/pemirakmitb2024/"}
            linkIG={"https://www.instagram.com/km.itb/"}
          />
          <DataCalonCarouselItem /* Contoh Data Calon */
            section={"K3M"}
            namaCalon={"Nama Calon 3"}
            jurusanAngkatan={"Teknik Oseanografi'20"}
            visi={
              "Donec tempus, odio vel vulputate efficitur, sapien augue rhoncus ipsum, a eleifend ante ligula et turpis."
            }
            misi={[
              "Cras scelerisque ipsum non lacus convallis, vitae molestie mauris mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
              "Donec sagittis luctus diam, sit amet congue augue interdum sit amet.",
              "Sed placerat ultrices tortor, eu tristique arcu pharetra non.",
            ]}
            linkPorto={"https://www.instagram.com/pemirakmitb2024/"}
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
      <Carousel id={"data-carousel" + section} opts={{ watchDrag: false }}>
        <CarouselContent>
          <DataCalonCarouselItem /* Contoh Data Calon */
            section={"MWA-WM"}
            namaCalon={"Ratna Lailasari"} /* Contoh Nama Calon */
            jurusanAngkatan={"Jurusan Angkatan"}
            visi={
              "rcu dictum. Sit amet consectetur adipiscing elit. Et malesuada fames ac turpis ultricies tristique nulla aliquet enim. Diam phasellus vestibulum lorem sed. Dolor morbi non arcu risus quis varius quam quisque. Enim eu turpis egestas pretium aenean pharetra magna ac."
            }
            misi={[
              "Aenean at justo vel risus ullamcorper iaculis id nec diam. Duis consectetur semper turpis, eget tincidunt justo scelerisque et. Sed sagittis tempor tellus, rhoncus semper erat.",
              "Donec tempus, odio vel vulputate efficitur, sapien augue rhoncus ipsum, a eleifend ante ligula et turpis. Ut malesuada tincidunt ligula et venenatis.",
              "Nam nec pharetra tellus. Aenean urna nulla, iaculis sit amet pulvinar eget, suscipit a enim. Fusce eget accumsan dolor. Phasellus tincidunt nibh ac nisl sagittis, vel consequat augue molestie.",
            ]}
            linkPorto={"https://www.instagram.com/pemirakmitb2024/"}
            linkIG={"https://www.instagram.com/mwawm_itb/"}
          />
          <DataCalonCarouselItem /* Contoh Data Calon */
            section={"MWA-WM"}
            namaCalon={"Lukman Samosir"} /* Contoh Nama Calon */
            jurusanAngkatan={"Jurusan Angkatan"}
            visi={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum nibh quam, vitae interdum odio venenatis vel. Nulla nec bibendum orci, non tempor mi."
            }
            misi={[
              "Phasellus metus odio, eleifend et elit non, suscipit rhoncus mauris. Duis volutpat magna et pulvinar elementum. Duis id est vel nisl mollis sagittis volutpat a ex. Duis fringilla posuere sapien, vel hendrerit leo auctor et. Donec at tempor sem, at vulputate nibh.",
              "Aenean at justo vel risus ullamcorper iaculis id nec diam. Duis consectetur semper turpis, eget tincidunt justo scelerisque et. Sed sagittis tempor tellus, rhoncus semper erat.",
              "Donec tempus, odio vel vulputate efficitur, sapien augue rhoncus ipsum, a eleifend ante ligula et turpis. Ut malesuada tincidunt ligula et venenatis.",
              "Nam nec pharetra tellus. Aenean urna nulla, iaculis sit amet pulvinar eget, suscipit a enim. Fusce eget accumsan dolor. Phasellus tincidunt nibh ac nisl sagittis, vel consequat augue molestie.",
            ]}
            linkPorto={"https://www.instagram.com/pemirakmitb2024/"}
            linkIG={"https://www.instagram.com/mwawm_itb/"}
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
