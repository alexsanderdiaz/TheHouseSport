import { useState } from "react";

export const useSlider = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  return { currentIndex, nextSlide, prevSlide, goToSlide };
};
