import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import FotoCalonCarouselItem from "~/components/profil-calon/foto-calon-carousel-item";

type FotoCalonCarouselProps = {
  section: string;
  fotofotoCalon: Array<string>;
};

const FotoCalonCarousel = ({
  section,
  fotofotoCalon,
}: FotoCalonCarouselProps) => {
  return (
    <Carousel
      className="h-full w-full max-w-xs"
      id={"photo-carousel-" + section}
      opts={{ watchDrag: false }}
    >
      <CarouselContent>
        <FotoCalonCarouselItem
          fotofotoCalon={fotofotoCalon}
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
