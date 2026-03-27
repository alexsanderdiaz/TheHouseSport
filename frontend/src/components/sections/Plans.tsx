import { plans } from "../../data/plans";
import { useTranslation } from "react-i18next";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function PlansSlider() {
  const { t } = useTranslation();

  return (
    <section id="plans" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Nuestros <span className="text-secondary">Planes</span>
          </h2>
        </div>

        {/* Contenedor del Slider / Grid */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex-shrink-0 w-[85%] md:w-full snap-center rounded-3xl p-[2px] transition-transform duration-300 hover:scale-[1.02] ${
                plan.recommended
                  ? "bg-gradient-to-b from-primary to-transparent"
                  : "bg-gray-800/50"
              }`}
            >
              {/* Contenido de la Card */}
              <div className="bg-zinc-950 rounded-[22px] p-8 h-full flex flex-col">
                {plan.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Recomendado
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>

                {/* Lista de beneficios */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <IoCheckmarkCircle className="text-primary text-xl mt-0.5 shrink-0" />
                      <span className="text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de acción */}
                <button
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                    plan.recommended
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-600"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {t("seleccionar", "Seleccionar")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
