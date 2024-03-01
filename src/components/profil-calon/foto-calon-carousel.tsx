import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import FotoCalonCarouselItem from "~/components/profil-calon/foto-calon-carousel-item";

type FotoCalonCarouselProps = {
  section: string;
};

const FotoCalonCarousel = ({
  section,
}: FotoCalonCarouselProps) => {
  return (
      <CarouselContent className=''>
        <FotoCalonCarouselItem
          section={section}
        />
      </CarouselContent>
  );
};

export default FotoCalonCarousel;
