import { header } from "@fonts";
import Bg from "~/components/background";
import FotoCalonCarousel from "~/components/ui/profil-calon/foto-calon-carousel";
import DataCalonCarousel from "~/components/ui/profil-calon/data-calon-carousel";

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
      <div className="">
        <div /* Text K3M */
          className={`${header.className} pt-20 text-center text-6xl font-normal not-italic text-navy drop-shadow-lg`}
        >
          {"K3M"}
        </div>
        <div className="flex w-full flex-col p-14 md:flex-row md:space-x-16">
          <div /* Photo Carousel */
            className="border-box mx-auto mb-5 flex h-[20rem] w-full flex-shrink-0 flex-grow-0 justify-center md:h-[27rem] md:w-auto"
          >
            <FotoCalonCarousel
              section={"K3M"}
              fotofotoCalon={["/logo.png", "/logo.png"]}
            />
          </div>
          <div
            /* data calon */ className="w-full min-w-0 flex-grow pt-20 md:pt-0"
          >
            <DataCalonCarousel section={"K3M"} />
          </div>
        </div>
      </div>
      <div>
        <div /* Text MWA - WM */
          className={`${header.className} pt-20 text-center text-6xl font-normal not-italic text-red-5 drop-shadow-md`}
        >
          {"MWA - WM"}
        </div>
        <div className="flex w-full flex-col p-14 md:flex-row md:space-x-16">
          <div /* Photo Carousel */
            className="border-box mx-auto mb-5 flex h-[20rem] w-full flex-shrink-0 flex-grow-0 justify-center md:h-[27rem] md:w-auto"
          >
            <FotoCalonCarousel
              section={"MWA-WM"}
              fotofotoCalon={["/logo.png", "/logo.png"]}
            />
          </div>
          <div
            /* data calon */ className="w-full min-w-0 flex-grow pt-20 md:pt-0"
          >
            <DataCalonCarousel section={"MWA-WM"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilCalon;
