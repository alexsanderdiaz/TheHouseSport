import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

// Import Swiper
{
  /* Swiper utiliza módulos para funcionalidades extra como la navegación */
}
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider = ({ children }: CardSliderProps) => {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        {/* Swiper Wrapper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          // Configuración de cuántas cards se ven según el tamaño de pantalla
          breakpoints={{
            320: { slidesPerView: 1.1, centeredSlides: true }, // Móvil
            768: { slidesPerView: 2.2, centeredSlides: false }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop pequeño
            1440: { slidesPerView: 3.5 }, // Desktop grande
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          className="pb-12"
        >
          {children}
        </Swiper>

        {/* Botones de Navegación Personalizados */}
        <div className="flex items-center justify-center mt-8 gap-5">
          <button className="bg-zinc-900 text-white w-14 h-14 flex items-center justify-center rounded-full hover:bg-primary transition-all cursor-pointer prev-btn border border-white/10 shadow-lg active:scale-90">
            <RiArrowLeftSLine size={32} />
          </button>
          <button className="bg-zinc-900 text-white w-14 h-14 flex items-center justify-center rounded-full hover:bg-primary transition-all cursor-pointer next-btn border border-white/10 shadow-lg active:scale-90">
            <RiArrowRightSLine size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
