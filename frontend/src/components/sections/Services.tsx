// src/components/sections/Services.tsx
import { services } from "../../data/services";
import ServiceCard from "../UI/ServiceCard";
import CardSlider from "../UI/CardSlider";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase italic tracking-tighter">
            Nuestros <span className="text-secondary">Servicios</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Reutilizamos el Slider con los nuevos estilos de navegación */}
        {/* Nota: Si tus botones en CardSlider son blancos, aquí podrías pasarles una prop para que sean oscuros */}
        <CardSlider>
          <div className="p-4">
            {services.map((service) => (
              <div key={service.id} className="p-4">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </CardSlider>
      </div>
    </section>
  );
}
