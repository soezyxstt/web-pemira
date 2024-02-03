import { header } from "@fonts";
import Bg from "~/components/background";
import FotoCalonCarousel from "~/components/foto-calon-carousel";
import DataCalonCarousel from "~/components/data-calon-carousel";

import { useEffect } from "react";

const ProfilCalon = () => {
  const useCarouselNavigation = (
    /* Carousel Button Effect */
    photoButtonId: string,
    dataButtonId: string,
  ) => {
    useEffect(() => {
      const nextPhotoButton = document.getElementById(photoButtonId);
      const nextDataButton = document.getElementById(dataButtonId);

      const handleNext = () => {
        nextDataButton?.click();
      };

      nextPhotoButton?.addEventListener("click", handleNext);

      return () => {
        nextPhotoButton?.removeEventListener("click", handleNext);
      };
    });
  };

  useCarouselNavigation("photo-next-K3M", "data-next-K3M");
  useCarouselNavigation("photo-next-MWA-WM", "data-next-MWA-WM");
  useCarouselNavigation("photo-prev-K3M", "data-prev-K3M");
  useCarouselNavigation("photo-prev-MWA-WM", "data-prev-MWA-WM");

  return (
    <div className="justify-content dusty-bg w-full items-center pb-16">
      <Bg />
      <div className="in-h-screen">
        <div /* Text K3M */
          className={`${header.className} pt-20 text-center text-6xl font-normal not-italic text-navy drop-shadow-lg`}
        >
          {"K3M"}
        </div>
        <div className="flex w-full flex-col p-14 md:flex-row md:space-x-16">
          <div /* Photo Carousel */
            className="border-box mx-auto h-[27rem] flex-shrink-0 flex-grow-0"
          >
            <FotoCalonCarousel
              section={"K3M"}
              fotoCalon1={"/logo.png"}
              fotoCalon2={"/logo.png"}
            />
          </div>
          <div /* data calon */
            className="z-[1] w-full flex-grow pt-20 md:pt-0"
            id="data-carousel-K3M"
          >
            <DataCalonCarousel section={"K3M"} />
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div /* Text MWA - WM */
          className={`${header.className} pt-20 text-center text-6xl font-normal not-italic text-red-5 drop-shadow-md`}
        >
          {"MWA - WM"}
        </div>
        <div className="flex w-full flex-col p-14 md:flex-row md:space-x-16">
          <div /* Photo Carousel */
            className="border-box mx-auto h-[27rem] flex-shrink-0 flex-grow-0"
          >
            <FotoCalonCarousel
              section={"MWA-WM"}
              fotoCalon1={"/logo.png"}
              fotoCalon2={"/logo.png"}
            />
          </div>
          <div
            /* data calon */ className="z-[1] w-full flex-grow pt-20 md:pt-0"
          >
            <DataCalonCarousel section={"MWA-WM"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilCalon;
