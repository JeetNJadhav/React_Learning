import type { CarouselTypes } from "../types";
import { CarouselSlide } from "./CarouselSlide";

type Props = {
  slides: CarouselTypes[];
  activeSlideIdx: number;
};

export const CarouselTrack = ({ slides, activeSlideIdx }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        transform: `translateX(-${activeSlideIdx * 100}%)`,
        transition: "transform 0.4s ease",
      }}
    >
      {slides.map((slide) => (
        <CarouselSlide key={slide.id}>{slide.content}</CarouselSlide>
      ))}
    </div>
  );
};
