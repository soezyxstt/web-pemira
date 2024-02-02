import { header, bodyBold } from "@fonts";
import Image from "next/image";
import Oval2 from "../../public/properti/oval_2.png";
import Bg from "~/components/background";
import FaInstagram from "~/components/ui/profil-calon/faInstagram";
import Portofolio from "~/components/ui/profil-calon/portofolio";
import DataCalonCard from "~/components/data-calon-card";

import { Card, CardContent } from "~/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const ProfilCalon = () => {
  return (
    <div className="justify-content dusty-bg w-full items-center">
      <Bg />
      <div>
        <div>
          <div /* Text K3M */
            className={`${header.className} pt-20 text-center text-6xl font-normal not-italic text-navy drop-shadow-lg`}
          >
            {"K3M"}
          </div>
          <div className="flex w-full space-x-16 p-14">
            <div /* Photo Carousel */
              className="border-box flex-shrink-0 flex-grow-0"
            >
              <Carousel className="relative w-full max-w-xs">
                <CarouselContent>
                  <CarouselItem>
                    <div>
                      <Card className="flex h-96 min-w-64 items-center justify-center border-4 border-black bg-blue-5">
                        <CardContent className="m-0 p-0">
                          <span className="text-4xl font-semibold">
                            {"Calon 1"}
                          </span>
                        </CardContent>
                      </Card>
                      <Image
                        className="mr-2"
                        src={Oval2}
                        height={48}
                        alt="Oval"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <Card className="flex h-96 min-w-64 items-center justify-center border-4 border-black bg-blue-5">
                        <CardContent className="m-0 p-0">
                          <span className="text-4xl font-semibold">
                            {"Calon 2"}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute -left-6 h-14 w-14" />
                <CarouselNext className="absolute -right-6 h-14 w-14" />
              </Carousel>
            </div>
            <div /* data calon */ className="z-[1] w-full">
              <DataCalonCard section="K3M" />
              <div className="flex flex-row items-center pt-1">
                <Portofolio
                  linkPorto={"https://id.wikipedia.org/wiki/Portofolio"}
                />
                <FaInstagram linkIG={"https://instagram.com"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div /* Text MWA - WM */
            className={`${header.className} pt-20 text-center text-6xl font-normal not-italic text-red-5 drop-shadow-md`}
          >
            {"MWA - WM"}
          </div>
          <div className="flex w-full space-x-16 p-14">
            <div /* Photo Carousel */
              className="border-box flex-shrink-0 flex-grow-0"
            >
              <Carousel className="relative w-full max-w-xs">
                <CarouselContent>
                  <CarouselItem>
                    <div>
                      <Card className="flex h-96 min-w-64 flex-col items-center justify-center border-4 border-black bg-red-5">
                        <CardContent className="m-0 p-0">
                          <span className="text-4xl font-semibold">
                            {"Calon 1"}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <Card className="flex h-96 min-w-64 flex-col items-center justify-center border-4 border-black bg-red-5">
                        <CardContent className="m-0 p-0">
                          <span className="text-4xl font-semibold">
                            {"Calon 2"}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute -left-6 h-14 w-14" />
                <CarouselNext className="absolute -right-6 h-14 w-14" />
              </Carousel>
            </div>
            <div /* data calon */ className="z-[1] w-full">
              <DataCalonCard section="MWA-WM" />
              <div className="flex flex-row items-center pt-1">
                <Portofolio
                  linkPorto={"https://id.wikipedia.org/wiki/Portofolio"}
                />
                <FaInstagram linkIG={"https://instagram.com"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilCalon;
