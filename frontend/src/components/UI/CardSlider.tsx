import React, { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider = ({ children }: CardSliderProps) => {
  //Crear las referencias para los botones
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container mx-auto p-9">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3.5 },
        }}
        // Vincular las referencias en la configuración
        onInit={(swiper) => {
          // @ts-ignore (A veces TS se queja de la asignación interna de Swiper)
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={true} // Habilitar navegación
        className="!overflow-visible pb-12"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default CardSlider;
