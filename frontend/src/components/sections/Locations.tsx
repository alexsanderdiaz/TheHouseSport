import { useTranslation } from "react-i18next";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { locations } from "../../data/locations";
import Button from "../UI/Button";
import { useSlider } from "../../hooks/useSlider";
import { Reveal } from "../UI/Reveal"; // Importamos el componente de animación

function Locations() {
  const { t } = useTranslation("locations");
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(
    locations.length,
  );

  return (
    <section
      id="locations"
      className="py-20 px-4 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Envolvemos el Título y descripción */}
        <Reveal>
          <div className="text-center mb-12 p-5">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              {t("our")}{" "}
              <span className="text-secondary italic">{t("title")}</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
              {t("description")}
            </p>
          </div>
        </Reveal>

        {/* Envolvemos todo el Slider */}
        <Reveal>
          <div className="relative group h-[400px] md:h-[550px] lg:h-[650px] w-full">
            {/* Imagen de Fondo con Transición Suave */}
            <div
              style={{
                backgroundImage: `url(${locations[currentIndex].image})`,
              }}
              className="w-full h-full rounded-3xl bg-center bg-cover duration-700 relative border shadow-2xl overflow-hidden"
            >
              {/* Overlay de Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent">
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 text-white">
                  <div className="max-w-2xl space-y-4">
                    <span className="bg-primary px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                      {t("location")}
                    </span>

                    <div className="space-y-2">
                      <h4 className="text-3xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">
                        {locations[currentIndex].name}
                      </h4>

                      <h6 className="text-secondary text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-secondary"></span>
                        {t(locations[currentIndex].addressKey)}
                      </h6>
                    </div>

                    <div className="pt-4">
                      <a
                        href={locations[currentIndex].map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="secondary">{t("check")}</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                {locations.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`transition-all duration-300 ${
                      slideIndex === currentIndex
                        ? "w-8 h-2 bg-secondary rounded-full"
                        : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Flechas de Navegación */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 md:-left-8 -translate-y-1/2 
               bg-black/30 backdrop-blur-md text-white 
               p-2 md:p-4 rounded-full z-30 
               border border-white/10 shadow-xl
               hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <BsChevronCompactLeft className="text-xl md:text-3xl" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 md:-right-8 -translate-y-1/2 
               bg-black/30 backdrop-blur-md text-white 
               p-2 md:p-4 rounded-full z-30 
               border border-white/10 shadow-xl
               hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <BsChevronCompactRight className="text-xl md:text-3xl" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Locations;
