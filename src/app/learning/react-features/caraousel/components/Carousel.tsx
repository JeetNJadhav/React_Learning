import { useCarousel } from "../hooks/useCarousel";
import type { CarouselTypes } from "../types";
import { CarouselContols } from "./CarouselControls";
import { CarouselTrack } from "./CarouselTrack";

type Props = {
  slides: CarouselTypes[];
};

export const Carousel = ({ slides }: Props) => {
  const { next, prev, activeSlideIdx } = useCarousel(slides.length);
  return (
    <>
      <CarouselTrack slides={slides} activeSlideIdx={activeSlideIdx} />
      <CarouselContols onNext={next} onPrev={prev} />
    </>
  );
};
