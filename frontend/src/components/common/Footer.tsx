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
  const { t } = useTranslation("footer");
  const year = new Date().getFullYear();
  const sections = [
    { name: t("start"), href: "#home" },
    { name: t("we"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("plans"), href: "#plans" },
  ];
  const schedule = [
    { days: "mon_thu", hours: "05:00 - 22:00" },
    { days: "friday", hours: "05:00 - 21:00" },
    { days: "saturday", hours: "07:00 - 14:00" },
    { days: "sun_holidays", hours: "08:00 - 13:00" },
  ];

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
              {t("footer_description")}
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
                href="https://wa.me/message/WAFVVTRBFYWTP1"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              {t("explore")}
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={section.href}
                    className="hover:text-zinc-100 transition-colors"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              {t("contact")}
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
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+573222185574"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +57 322 218 5574
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              {t("hours")}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {schedule.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b border-white/5 pb-2 group hover:border-primary/30 transition-colors"
                >
                  <span className="group-hover:text-gray-300 transition-colors">
                    {t(item.days)}:
                  </span>
                  <span className="text-white font-bold tracking-tight">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea final de Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] uppercase tracking-[0.2em]">
          <p>
            © {year} The House Sport. {t("rights")}
          </p>
          <p>
            {t("design")}{" "}
            <a
              href="https://tu-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300 font-bold"
            >
              Alex Díaz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
