import { useState } from "react";
import ButtomLenguage from "./ButtomLenguage";
import Button from "./UI/Button";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  const navLinks = [
    { name: t("plans"), href: "/plans" },
    { name: t("services"), href: "/services" },
    { name: t("locations"), href: "/locations" },
    { name: t("about"), href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer pl-7">
          <img
            className="w-40 object-contain transition-transform group-hover:scale-105"
            src="/logo-dark.png"
            alt="logo"
          />
        </div>

        {/* Menu Section - Desktop */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors duration-300 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:block">
            <ButtomLenguage />
          </div>

          <div className="hidden md:block pr-7">
            <Button>{t("products")}</Button>
          </div>

          {/* DropDown Buttom */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {/* Icono dinámico */}
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Móvil */}
      <div
        className={`md:hidden absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-full opacity-100 visible"
            : "top-[110%] opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors uppercase tracking-widest block"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <hr className="border-white/10 my-2" />
            <li className="flex flex-col gap-4">
              <Button>{t("products")}</Button>
              <div className="flex justify-center xs:hidden">
                <ButtomLenguage />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
