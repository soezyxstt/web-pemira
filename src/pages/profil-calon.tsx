import { header, bodyBold } from "@fonts";
import Image from "next/image";
import Oval2 from "../../public/properti/oval_2.png";
import Bg from "~/components/background";
import FaInstagram from "~/components/ui/profil-calon/faInstagram";
import Portofolio from "~/components/ui/profil-calon/portofolio";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
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
          </div>{" "}
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
              <Card className="box-border w-full flex-grow rounded-2xl border-4 border-black bg-blue-5">
                <CardHeader className="flex flex-row items-baseline drop-shadow-lg">
                  <CardTitle
                    className={`${bodyBold.className} text-3xl text-brown-1`}
                  >
                    {"Nama Calon"}
                  </CardTitle>
                  <CardDescription className="pl-3 align-bottom text-brown-3 drop-shadow-lg">
                    {"Jurusan Angkatan"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardTitle
                    className={`${bodyBold.className} flex justify-center text-3xl text-brown-1`}
                  >
                    Visi
                  </CardTitle>
                  <CardDescription
                    className={`p-y-2 w-full bg-teal-1 pl-1 text-sm text-black drop-shadow-lg`}
                  >
                    {"Visi Calon"}
                  </CardDescription>
                  <CardTitle
                    className={`${bodyBold.className} flex justify-center pt-2 text-3xl text-brown-1`}
                  >
                    Misi
                  </CardTitle>
                  <div className="flex flex-col space-y-1">
                    <CardDescription
                      className={`p-y-2 w-full bg-teal-1 pl-1 text-xs text-black drop-shadow-lg`}
                    >
                      rcu dictum. Sit amet consectetur adipiscing elit. Et
                      malesuada fames ac turpis ultricies tristique nulla
                      aliquet enim. Diam phasellus vestibulum lorem sed. Dolor
                      morbi non arcu risus quis varius quam quisque. Enim eu
                      turpis egestas pretium aenean pharetra magna ac.
                    </CardDescription>
                    <CardDescription
                      className={`p-y-2 w-full bg-teal-1 pl-1 text-xs text-black drop-shadow-lg`}
                    >
                      {"Misi Calon"}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="box-border w-full flex-grow rounded-2xl border-4 border-black bg-red-5">
                <CardHeader className="flex flex-row items-baseline drop-shadow-lg">
                  <CardTitle
                    className={`${bodyBold.className} text-3xl text-brown-1`}
                  >
                    {"Nama Calon"}
                  </CardTitle>
                  <CardDescription className="pl-3 align-bottom text-brown-3 drop-shadow-lg">
                    {"Jurusan Angkatan"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardTitle
                    className={`${bodyBold.className} flex justify-center text-3xl text-brown-1`}
                  >
                    Visi
                  </CardTitle>
                  <CardDescription
                    className={`p-y-2 w-full bg-red-3 pl-1 text-sm text-black drop-shadow-lg`}
                  >
                    {"Visi Calon"}
                  </CardDescription>
                  <CardTitle
                    className={`${bodyBold.className} flex justify-center pt-2 text-3xl text-brown-1`}
                  >
                    Misi
                  </CardTitle>
                  <div className="flex flex-col space-y-1">
                    <CardDescription
                      className={`p-y-2 w-full bg-red-3 pl-1 text-xs text-black drop-shadow-lg`}
                    >
                      rcu dictum. Sit amet consectetur adipiscing elit. Et
                      malesuada fames ac turpis ultricies tristique nulla
                      aliquet enim. Diam phasellus vestibulum lorem sed. Dolor
                      morbi non arcu risus quis varius quam quisque. Enim eu
                      turpis egestas pretium aenean pharetra magna ac.
                    </CardDescription>
                    <CardDescription
                      className={`p-y-2 w-full bg-red-3 pl-1 text-xs text-black drop-shadow-lg`}
                    >
                      {"Misi Calon"}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
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
