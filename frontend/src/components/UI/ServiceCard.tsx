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
    <div className="group relative overflow-hidden rounded-2xl bg-black  shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-[400px]">
      {/* Imagen con efecto Zoom al hacer Hover */}
      <div className="h-2/3 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-black uppercase italic text-secondary mb-2 tracking-tighter">
          {service.title}
        </h3>
        <p className="text-white text-sm leading-relaxed line-clamp-2">
          {service.description}
        </p>
      </div>

      {/* Decoración: Línea de color Primary en el borde inferior */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
