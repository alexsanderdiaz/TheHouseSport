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
  const { t } = useTranslation("plans");

  return (
    <div
      className={`relative w-full h-full rounded-[2rem] p-[1.5px] transition-all duration-500 hover:-translate-y-2 ${
        plan.recommended
          ? "bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_30px_-10px_rgba(0,150,255,0.3)]"
          : "bg-white/10 hover:bg-white/20"
      }`}
    >
      {/* Contenido de la Card */}
      <div className="bg-zinc-950 rounded-[1.9rem] p-6 md:p-10 pt-14 md:pt-16 h-full flex flex-col relative overflow-hidden">
        {/* Decoración de fondo sutil solo para recomendados */}
        {plan.recommended && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -z-10" />
        )}

        {plan.recommended && (
          <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] md:text-xs font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl z-20 animate-pulse">
            {t("recommended", "Más Popular")}
          </span>
        )}

        {/* Título y Precio */}
        <div className="mb-8">
          <h3
            className={`text-xl md:text-2xl font-black mb-4 uppercase italic tracking-tighter ${
              plan.recommended ? "text-primary" : "text-white"
            }`}
          >
            {plan.name}
          </h3>

          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              ${plan.price}
            </span>
            <span className="text-gray-500 text-sm uppercase font-bold tracking-widest">
              / {plan.period}
            </span>
          </div>
        </div>

        {/* Separador sutil */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Lista de beneficios */}
        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-400 group/item"
            >
              <IoCheckmarkCircle
                className={`text-xl shrink-0 transition-transform duration-300 group-hover/item:scale-125 ${
                  plan.recommended ? "text-primary" : "text-white/60"
                }`}
              />
              <span className="text-sm md:text-base leading-snug group-hover/item:text-white transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Botón */}
        <button
          className={`w-full py-4 rounded-2xl text-sm md:text-base font-black uppercase tracking-[0.15em] transition-all duration-300 active:scale-95 shadow-2xl ${
            plan.recommended
              ? "bg-primary text-white hover:shadow-primary/40 hover:brightness-110"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {t("seleccionar", "Elegir Plan")}
        </button>
      </div>
    </div>
  );
}
