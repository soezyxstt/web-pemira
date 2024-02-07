import Oval2 from "../../../../public/properti/oval_2.png";
import { header } from "@fonts";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import { CarouselItem } from "~/components/ui/carousel";

type FotoCalonCarouselItemProps = {
  fotofotoCalon: Array<string>;
  section: string;
};

const FotoCalonCarouselItem = ({
  fotofotoCalon,
  section,
}: FotoCalonCarouselItemProps) => {
  const warnaBg = section === "K3M" ? "bg-blue-5" : "bg-red-5";
  const warnaBgFoto = section === "K3M" ? "bg-teal-1" : "bg-red-3";

  return (
    <>
      {fotofotoCalon.map((fotoCalon: string, index: number) => (
        <CarouselItem key={index}>
          <div className="">
            <Card
              className={`border-box flex h-[20rem] min-w-60 items-center justify-center border-4 border-black md:h-[27rem] ${warnaBg}`}
            >
              <CardContent className="m-0 p-0">
                <div className={`${warnaBgFoto} overflow-hidden rounded-xl`}>
                  <Image
                    src={fotoCalon}
                    className="h-full w-full"
                    alt={`Foto calon ke-${index + 1}`}
                    height={150}
                    width={150}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative flex h-[90px] w-full flex-row justify-center">
            <Image
              className="absolute bottom-[50%] h-full w-[140px]"
              src={Oval2}
              alt="Oval2"
              height={90}
              width={140}
            />
            <span
              className={`${header.className} absolute -top-[20%] text-4xl text-brown-1 md:text-5xl`}
            >
              {"0" + (index + 1).toString()}
            </span>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};

export default FotoCalonCarouselItem;
