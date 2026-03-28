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
    <div className="group relative overflow-hidden rounded-2xl bg-black shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 flex flex-col w-full min-h-[380px] md:h-[420px]">
      {/* Contenedor de Imagen: Reducimos su altura en móvil para dar espacio al texto */}
      <div className="h-48 md:h-3/5 overflow-hidden shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Contenido: Padding más pequeño en móvil */}
      <div className="p-4 md:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Título: text-xl en móvil, text-2xl en desktop */}
          <h3 className="text-xl md:text-2xl font-black uppercase italic text-secondary mb-2 tracking-tighter leading-tight">
            {service.title}
          </h3>

          {/* Descripción: text-xs en móvil, text-sm en desktop */}
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
            {service.description}
          </p>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
