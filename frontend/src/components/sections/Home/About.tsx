// src/components/sections/About.tsx
import { useTranslation } from "react-i18next";
import { Reveal } from "../../UI/Reveal";

export default function About() {
  const { t } = useTranslation("about");
  const year = new Date().getFullYear();
  const aboutStats = [
    { label: "experience", value: year - 2021 + "+" },
    { label: "members", value: "200+" },
    { label: "locations", value: "2" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 text-zinc-900 overflow-hidden relative"
    >
      {/* Opcional: Un divisor sutil para separar del negro */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent opacity-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Columna de Imagen con Reveal */}
          <div className="relative w-full lg:w-1/2">
            <Reveal>
              <div className="relative">
                {/* El borde ahora es un acento sutil */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl z-0" />
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipOgDK8-JxFwCmqLiFMOvAtFttP-2qWf4dUHULNn=s680-w680-h510-rw"
                  alt="The House Sport Interior"
                  className="relative z-10 rounded-2xl shadow-xl transition-all duration-700 object-cover h-[450px] md:h-[550px] w-full"
                />

                {/* Badge con colores invertidos para que resalte en el fondo claro */}
                <div className="absolute -bottom-6 -right-6 bg-zinc-950 p-6 rounded-xl z-20 hidden md:block shadow-2xl">
                  <p className="font-black text-3xl uppercase italic tracking-tighter text-white">
                    {t("established", "Est.")}{" "}
                    <span className="text-primary">2021</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Columna de Texto con Reveal */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div>
                <h4 className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-sm">
                  {t("about_subtitle", "Conoce The House Sport")}
                </h4>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8 tracking-tighter leading-none text-zinc-950">
                  {t("where", "Donde la")}{" "}
                  <span className="text-secondary">
                    {t("discipline", "disciplina")}{" "}
                  </span>
                  {t("becomes", "se vuelve")}{" "}
                  <span className="underline decoration-primary decoration-4 underline-offset-8">
                    {t("habit", "hábito")}
                  </span>
                </h2>

                {/* Stats Grid con diseño adaptado al fondo claro */}
                <div className="grid grid-cols-2 gap-8">
                  {aboutStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l-4 border-primary pl-6 py-2 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <p className="text-4xl font-black text-zinc-900 mb-1">
                        {stat.value}
                      </p>
                      <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">
                        {t(`${stat.label}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
