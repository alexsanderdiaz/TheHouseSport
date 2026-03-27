import videoBg from "../../assets/video/videoBg.mp4";
import ButtonSecondary from "../UI/ButtonSecondary";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("home");

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden 
      h-[50vh] 
      md:h-[400px]  
      lg:h-[500px]"
    >
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline // Importante para que funcione el autoplay en iPhone
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Capa filtro video */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido encima del video */}
      <div className="absolute inset-0 flex px-5 flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-4">
          The House
          <span className="text-secondary"> Sport</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">{t("slogan")}</p>
        <ButtonSecondary>{t("start")}</ButtonSecondary>
      </div>
    </section>
  );
}

export default Home;
