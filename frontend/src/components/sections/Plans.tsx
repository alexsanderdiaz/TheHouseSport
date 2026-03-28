// src/components/sections/Plans.tsx
import { plans } from "../../data/plans";
import PlanCard from "../UI/PlanCard";
import CardSlider from "../UI/CardSlider";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../UI/Reveal"; // Asegúrate de que la ruta sea correcta

export default function Plans() {
  const { t } = useTranslation("plans");

  return (
    <section id="plans" className="py-10 overflow-hidden relative bg-gray-600">
      <div className="container mx-auto px-4 relative z-10">
        {/* Reveal encabezado */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-5">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              {t("our")} <span className="text-primary">{t("plans")}</span>
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="w-24 h-1.5 bg-primary mx-auto mt-8 rounded-full opacity-50" />
          </div>
        </Reveal>

        {/* Reveal Slider */}
        <div className="relative">
          <Reveal>
            <CardSlider>
              {plans.map((plan) => (
                <SwiperSlide key={plan.id} className="!overflow-visible">
                  <PlanCard plan={plan} />
                </SwiperSlide>
              ))}
            </CardSlider>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
