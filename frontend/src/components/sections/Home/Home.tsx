import videoBg from "../../../assets/video/videoBg.mp4";
import { Button } from "../../UI/Button";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("home");
  // Datos para el botón de WhatsApp con mensaje personalizado
  const phoneNumber = "573222185574";
  const customMessage =
    "Hola, quiero empezar mi experiencia en The House Sport. ¿Podrían brindarme más información?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden 
      h-[60vh] md:h-[450px] lg:h-[550px]" // Altura compacta como pediste
    >
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Capa de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase italic tracking-tighter">
          The House
          <span className="text-secondary"> Sport</span>
        </h1>

        {/* Frase de Bienestar */}
        <p className="text-lg md:text-2xl font-bold max-w-3xl leading-tight mb-2">
          {t("slogan")}
          <span className="text-primary italic"> {t("experience_text")}</span>
        </p>

        {/* Frase de Familia */}
        <p className="text-sm md:text-base text-gray-300 max-w-xl mb-8 font-medium">
          {t(
            "family_text",
            "Más que un gimnasio, somos una comunidad y una gran familia.",
          )}
        </p>

        <Button href={whatsappUrl} target="_blank" variant="secondary">
          {t("start", "Comenzar ahora")}
        </Button>
      </div>
    </section>
  );
}

export default Home;
