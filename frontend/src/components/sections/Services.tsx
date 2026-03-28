// src/components/sections/Services.tsx
import { services } from "../../data/services";
import ServiceCard from "../UI/ServiceCard";
import CardSlider from "../UI/CardSlider";
import { SwiperSlide } from "swiper/react"; // Importante: Necesitas esto aquí también
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase italic tracking-tighter">
            Nuestros{" "}
            <span className="text-secondary">
              {t("servicios", "Servicios")}
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Slider de Servicios */}
        <CardSlider>
          {/* ELIMINAMOS el <div className="p-4"> que envolvía el map.
             Swiper debe recibir los SwiperSlide directamente como hijos.
          */}
          {services.map((service) => (
            <SwiperSlide key={service.id} className="py-4">
              {/* py-4 aquí permite que las sombras de las cards no se corten */}
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </CardSlider>
      </div>
    </section>
  );
}
