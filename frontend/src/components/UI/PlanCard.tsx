import { IoCheckmarkCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";

interface PlanProps {
  plan: {
    id: number;
    name: string;
    price: string;
    period: string;
    features: string[];
    recommended?: boolean;
  };
}

export default function PlanCard({ plan }: PlanProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`relative w-full h-full rounded-3xl p-[2px] transition-all duration-300 hover:scale-[1.02] ${
        plan.recommended
          ? "bg-gradient-to-b from-primary to-transparent"
          : "bg-gray-800/50"
      }`}
    >
      {/* Contenido de la Card */}
      <div className="bg-zinc-950 rounded-[22px] p-6 md:p-10 pt-12 md-pt-14 h-full flex flex-col">
        {plan.recommended && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] md:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
            {t("recommended", "Recomendado")}
          </span>
        )}

        {/* Título: text-xl en móvil, text-2xl en desktop */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase italic truncate">
          {plan.name}
        </h3>

        {/* Precio: */}
        <div className="flex items-baseline flex-wrap gap-1 mb-6 md:mb-8">
          <span className="text-3xl md:text-4xl font-black text-white">
            ${plan.price}
          </span>
          <span className="text-gray-400 text-xs md:text-sm">
            {plan.period}
          </span>
        </div>

        {/* Lista de beneficios */}
        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 md:gap-3 text-gray-300"
            >
              <IoCheckmarkCircle className="text-primary text-lg md:text-xl mt-0.5 shrink-0" />
              <span className="text-xs md:text-sm leading-snug break-words">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Botón: Ajustamos el padding vertical */}
        <button
          className={`w-full py-3 md:py-4 rounded-xl text-sm md:text-base font-black uppercase tracking-widest transition-all active:scale-95 ${
            plan.recommended
              ? "bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {t("seleccionar", "Seleccionar")}
        </button>
      </div>
    </div>
  );
}
