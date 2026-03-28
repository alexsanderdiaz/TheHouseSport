// src/components/Services/ServiceCard.tsx
interface ServiceProps {
  service: {
    title: string;
    description: string;
    image: string;
  };
}

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-zinc-950 shadow-xl hover:shadow-secondary/10 transition-all duration-500 border border-white/5 flex flex-col w-full min-h-[400px] md:h-[450px] hover:-translate-y-2">
      {/* Contenedor de Imagen con Overlay Dinámico */}
      <div className="h-52 md:h-2/3 overflow-hidden relative shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Filtro de color al hacer hover */}
        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Gradiente interno para suavizar la transición a la zona de texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* Contenido */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between relative z-10">
        <div className="space-y-3">
          {/* Título con línea decorativa */}
          <div className="relative inline-block">
            <h3 className="text-xl md:text-2xl font-black uppercase italic text-white group-hover:text-secondary transition-colors duration-300 tracking-tighter leading-none">
              {service.title}
            </h3>
            <div className="w-8 h-1 bg-secondary mt-1 rounded-full group-hover:w-full transition-all duration-500" />
          </div>

          <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-4 font-medium italic">
            {service.description}
          </p>
        </div>

        {/* Indicador de "Ver más" o flecha (opcional pero ayuda al UX) */}
        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <span className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Info <span className="text-lg">→</span>
          </span>
        </div>
      </div>

      {/* Borde brillante sutil al hacer hover */}
      <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/20 rounded-3xl transition-all duration-500 pointer-events-none" />
    </div>
  );
}
