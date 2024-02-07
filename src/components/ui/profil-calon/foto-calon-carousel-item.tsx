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

  return (
    <>
      {fotofotoCalon.map((fotoCalon: string, index: number) => (
        <CarouselItem key={index}>
          <div className="">
            <Card
              className={`border-box flex h-[20rem] min-w-60 items-center justify-center border-4 border-black md:h-[27rem] ${warnaBg}`}
            >
              <CardContent className="m-0 p-0">
                <Image
                  src={fotoCalon}
                  className="h-full w-full"
                  alt="erick thohir"
                  height={100}
                  width={100}
                />
              </CardContent>
            </Card>
          </div>
          <div className="relative flex h-[140px] w-full flex-row justify-center md:h-[180px]">
            <Image
              className="absolute bottom-[50%] h-full w-[200px] md:w-[240px]"
              src={Oval2}
              alt="Oval2"
              height={180}
              width={240}
            />
            <span
              className={`${header.className} absolute -top-[13%] z-10 text-4xl text-brown-1 md:text-5xl`}
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
