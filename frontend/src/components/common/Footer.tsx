// src/components/common/Footer.tsx
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5">
      {/* Efecto de fondo: Un sutil desenfoque para que los orbes pasen por detrás */}
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-xl -z-10" />

      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Branding */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
              THE HOUSE <span className="text-primary">SPORT</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t(
                "footer_description",
                "Más que un gimnasio, una comunidad dedicada a transformar vidas a través de la disciplina y el entrenamiento inteligente.",
              )}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gym_tsh/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Explorar
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="hover:text-primary transition-colors"
                >
                  Planes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
                <span>
                  Cra. 81a #9-07,
                  <br />
                  Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-secondary shrink-0" />
                <span>+57 79 1234-5678</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Horarios
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Lun - Vie:</span>
                <span className="text-white font-medium">06:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábados:</span>
                <span className="text-white font-medium">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span className="text-secondary font-bold text-[10px] uppercase">
                  Cerrado
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea final de Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© {year} The House Sport. Todos los derechos reservados.</p>
          <p>
            Diseñado y Desarrollado por{" "}
            <a
              href="https://tu-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300 font-bold"
            >
              Alex Díaz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
