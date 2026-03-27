// src/components/sections/Plans.tsx
import { plans } from "../../data/plans";
import PlanCard from "../UI/PlanCard";
import CardSlider from "../UI/CardSlider";
import { SwiperSlide } from "swiper/react";

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">
            Nuestros <span className="text-secondary">Planes</span>
          </h2>
        </div>

        {/* Invocamos el slider y le pasamos las 5 cards */}
        <CardSlider>
          {plans.map((plan) => (
            <SwiperSlide key={plan.id}>
              <PlanCard plan={plan} />
            </SwiperSlide>
          ))}
        </CardSlider>
      </div>
    </section>
  );
}
