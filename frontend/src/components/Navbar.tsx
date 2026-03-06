import ButtomLenguage from "./ButtomLenguage";
import Button from "./UI/Button";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("navbar");
  return (
    <nav className="flex flex-row items-center justify-between p-4 bg-gray-800 text-white">
      <ul>
        <li className="basis-64">
          <a href="/">Home</a>
        </li>
        <li className="basis-64">
          <a href="/plans">{t("plans")}</a>
        </li>
        <li>
          <a href="/services">{t("services")}</a>
        </li>
        <li>
          <a href="/locations">{t("locations")}</a>
        </li>
        <li>
          <a href="/about">{t("about")}</a>
        </li>
        <li>
          <Button>{t("products")}</Button>
        </li>
        <li>
          <ButtomLenguage />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
