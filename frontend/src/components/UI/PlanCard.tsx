import { IoCheckmarkCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

interface PlanProps {
  plan: {
    id: number;
    name: string;
    price: string;
    features: string[];
    recommended?: boolean;
  };
}

export default function PlanCard({ plan }: PlanProps) {
  const { t } = useTranslation("plans");
  const phoneNumber = "573222185574";
  const customMessage = `Hola! Escribo por los planes en la página web THS. Me interesa el *Plan ${plan.name}* por $${plan.price} pesos. Como puedo adquirirlo?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div
      className={`relative w-full h-full rounded-[2rem] p-[1.5px] transition-all duration-500 hover:-translate-y-2 ${
        plan.recommended
          ? "bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_30px_-10px_rgba(0,150,255,0.3)]"
          : "bg-white/10 hover:bg-white/20"
      }`}
    >
      {/* Contenido de la Card */}
      <div className="bg-zinc-800 rounded-[1.9rem] p-6 md:p-10 pt-14 md:pt-16 h-full flex flex-col relative overflow-hidden">
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
            <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              ${plan.price}
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
        <Button
          variant={plan.recommended ? "primary" : "tertiary"}
          className="w-full mt-auto py-2 overflow-hidden"
          href={whatsappUrl}
          target="blank"
        >
          {t("choose", "Elegir Plan")}
        </Button>
      </div>
    </div>
  );
}
