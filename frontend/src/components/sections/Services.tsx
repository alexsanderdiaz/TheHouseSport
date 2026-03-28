// src/components/sections/Services.tsx
import { services } from "../../data/services";
import ServiceCard from "../UI/ServiceCard";
import CardSlider from "../UI/CardSlider";
import { SwiperSlide } from "swiper/react";
import { Reveal } from "../UI/Reveal"; // Importamos el componente de animación

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 overflow-hidden relative bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Envolvemos el encabezado con Reveal */}
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Nuestros <span className="text-secondary">Servicios</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Soluciones integrales para tu evolución física. Todo lo que
              necesitas para tu transformación en un solo lugar.
            </p>
            {/* Pequeño acento visual para separar del slider */}
            <div className="w-16 h-1 bg-secondary/30 mx-auto mt-6 rounded-full" />
          </div>
        </Reveal>

        {/* Envolvemos el CardSlider con Reveal */}
        <Reveal>
          <CardSlider>
            {services.map((service) => (
              <SwiperSlide key={service.id} className="py-8 !overflow-visible">
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </CardSlider>
        </Reveal>
      </div>

      {/* Se eliminó la decoración lateral fija para que luzca el fondo global */}
    </section>
  );
}
