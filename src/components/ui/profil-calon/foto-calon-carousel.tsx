import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import FotoCalonCarouselItem from "~/components/ui/profil-calon/foto-calon-carousel-item";

type FotoCalonCarouselProps = {
  section: string;
  fotoCalon1: string;
  fotoCalon2: string;
};

const FotoCalonCarousel = ({
  section,
  fotoCalon1,
  fotoCalon2,
}: FotoCalonCarouselProps) => {
  return (
    <Carousel
      className="h-full w-full max-w-xs"
      id={"photo-carousel-" + section}
      opts={{ watchDrag: false }}
    >
      <CarouselContent>
        <FotoCalonCarouselItem
          fotoCalon={fotoCalon1}
          calonKe={"01"}
          section={section}
        />
        <FotoCalonCarouselItem
          fotoCalon={fotoCalon2}
          calonKe={"02"}
          section={section}
        />
      </CarouselContent>

      <CarouselPrevious
        className="absolute -left-6 h-14 w-14 border-4 border-black"
        id={"photo-prev-" + section}
      />
      <CarouselNext
        className="absolute -right-6 h-14 w-14 border-4 border-black"
        id={"photo-next-" + section}
      />
    </Carousel>
  );
};

export default FotoCalonCarousel;
