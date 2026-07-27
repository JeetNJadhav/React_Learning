import { useState } from "react";

export const useCarousel = (totalSlides: number) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const next = () => {
    setActiveSlideIdx((prev) => (prev + 1) % totalSlides);
  };
  const prev = () => {
    setActiveSlideIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return { next, prev, activeSlideIdx };
};
