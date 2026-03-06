import { useTranslation } from "react-i18next";

function ButtonLanguage() {
  const { i18n } = useTranslation();

  // Determinamos cuál es el idioma actual
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    // Si es 'en', cambia a 'es', de lo contrario cambia a 'en'
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
      className="transition-all transform hover:scale-105"
    >
      {/*Se cambia la imagen según el idioma */}
      <img
        src={currentLanguage === "en" ? "en.png" : "es.png"}
        alt="lenguage"
        style={{ width: "30px" }}
      />
    </button>
  );
}

export default ButtonLanguage;
