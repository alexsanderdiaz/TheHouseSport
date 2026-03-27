import { useTranslation } from "react-i18next";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { locations } from "../../data/locations";
import ButtonSecondary from "../UI/ButtonSecondary";
import { useSlider } from "../../hooks/useSlider";

function Locations() {
  const { t } = useTranslation("locations");
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(
    locations.length,
  );

  {
    /* Sección Locations*/
  }

  return (
    <section id="locations" className="bg-black py-10 md:py-16 px-4">
      {/* Contenedor principal */}
      <div className="container h-[300px] md:h-[500px] lg:h-[600px] m-auto relative group">
        {/* Título */}
        <div className="mb-6 md:mb-8 flex justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">
            {t("our")} <span className="text-secondary">{t("title")}</span>
          </h2>
        </div>

        {/* Contenedor de la Imagen */}
        <div
          style={{ backgroundImage: `url(${locations[currentIndex].image})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative border"
        >
          {/* Overlay informativo */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-20 bg-gradient-to-t from-black/95 via-black/40 to-transparent text-white px-4">
            {/* Contenedor de texto y botón centrados */}
            <div className="flex flex-col items-center text-center space-y-4 max-w-2xl">
              <div className="space-y-1">
                <h4 className="text-xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">
                  {locations[currentIndex].name}
                </h4>
                <h6 className="text-sm md:text-xl text-gray-300 font-medium">
                  {t(locations[currentIndex].addressKey)}
                </h6>
              </div>

              {/* Botón */}
              <div className="p-3">
                <ButtonSecondary>
                  {" "}
                  <a
                    href={locations[currentIndex].map}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("check")}
                  </a>{" "}
                </ButtonSecondary>
              </div>
            </div>
          </div>

          {/* Dots de navegación */}
          <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 z-20 py-2">
            {locations.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-3xl cursor-pointer transition-transform duration-300 hover:scale-125 ${
                  slideIndex === currentIndex
                    ? "text-secondary scale-110"
                    : "text-white/60"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        {/* Flecha Izquierda */}
        <div className="flex md:hidden group-hover:flex absolute top-[50%] -translate-y-[-50%] left-4 md:left-8 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-secondary transition-all z-20">
          <BsChevronCompactLeft onClick={prevSlide} size={25} />
        </div>

        {/* Flecha Derecha */}
        <div className="flex md:hidden group-hover:flex absolute top-[50%] -translate-y-[-50%] right-4 md:right-8 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-secondary transition-all z-20">
          <BsChevronCompactRight onClick={nextSlide} size={25} />
        </div>
      </div>
    </section>
  );
}

export default Locations;
