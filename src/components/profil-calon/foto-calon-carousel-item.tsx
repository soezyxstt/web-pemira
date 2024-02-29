import { header } from "@fonts";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import { CarouselItem } from "~/components/ui/carousel";
import { k3m } from "~/data/k3m";

type FotoCalonCarouselItemProps = {
  section: string;
};

const FotoCalonCarouselItem = ({ section }: FotoCalonCarouselItemProps) => {
  return (
    <>
      {k3m.map((calon, index: number) => (
        <CarouselItem key={index} className="md:h-96">
          <div className={`flex-col flex h-full min-w-60 relative`}>
            <div className="flex h-fit w-fit">
              <Image
                src={calon.photo}
                alt={`Foto calon ke-${index + 1}`}
                height={2000}
                width={2000}
                className="rounded-xl"
              />
            </div>
            <h1 className="text-3xl hidden md:block pt-6 text-brown-1 text-center">{calon.name}</h1>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};

export default FotoCalonCarouselItem;
