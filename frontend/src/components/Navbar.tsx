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
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer pl-4">
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-13 h-13 object-contain transition-transform group-hover:scale-110"
              src="/logo.png"
              alt="logo"
            />
          </div>
          <div className="leading-tight">
            <h2 className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase">
              The House
            </h2>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white tracking-tight">
                SPORT
              </span>
              <span className="text-2xl font-black text-orange-500 italic font-rubikbold">
                GYM
              </span>
            </div>
          </div>
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
          <div className="hidden xs:block">
            <ButtomLenguage />
          </div>

          <div className="hidden md:block">
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
