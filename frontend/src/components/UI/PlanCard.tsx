// src/components/Plans/PlanCard.tsx
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
      className={`relative flex-shrink-0 w-[85%] md:w-full snap-center rounded-3xl p-[2px] transition-all duration-300 hover:scale-[1.02] ${
        plan.recommended
          ? "bg-gradient-to-b from-primary to-transparent"
          : "bg-gray-800/50"
      }`}
    >
      {/* Contenido de la Card */}
      <div className="bg-zinc-950 rounded-[22px] p-8 h-full flex flex-col">
        {plan.recommended && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
            {t("recommended", "Recomendado")}
          </span>
        )}

        <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">
          {plan.name}
        </h3>

        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl font-black text-white">${plan.price}</span>
          <span className="text-gray-400 text-sm">{plan.period}</span>
        </div>

        {/* Lista de beneficios */}
        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <IoCheckmarkCircle className="text-primary text-xl mt-0.5 shrink-0" />
              <span className="text-sm leading-tight">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Botón de acción */}
        <button
          className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all active:scale-95 ${
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
