import { useState } from "react";
import { X, ChevronRight, ListFilter } from "lucide-react";
import { CATEGORIES, BRANDS } from "../../collections/product";

export const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Drawer móvil
  const [isCatOpen, setIsCatOpen] = useState(false); // Dropdown Categorías
  const [isBrandOpen, setIsBrandOpen] = useState(false); // Dropdown Marcas

  // Funciones para manejar la apertura manual
  const toggleCategories = () => {
    setIsCatOpen(!isCatOpen);
    setIsBrandOpen(false); // Cerramos el otro al abrir este
  };

  const toggleBrands = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsCatOpen(false); // Cerramos el otro al abrir este
  };

  const closeAll = () => {
    setIsCatOpen(false);
    setIsBrandOpen(false);
  };

  return (
    <nav className="bg-white py-4 relative">
      <div className="container mx-auto md:px-10">
        {/* CAPA INVISIBLE (BACKDROP) GLOBAL */}
        {/* Detecta clics fuera de los menús para cerrarlos */}
        {(isCatOpen || isBrandOpen) && (
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={closeAll}
          />
        )}

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex md:hidden items-center gap-2 px-4"
        >
          <ListFilter size={18} className="text-secondary" />
          <span className="text-sm text-secondary font-bold">Buscar por</span>
        </button>

        {/* VISTA DESKTOP / TABLET */}
        <div className="hidden md:flex items-center gap-10">
          {/* --- DROPDOWN CATEGORÍAS --- */}
          <div className="relative group z-50">
            <button
              type="button"
              onClick={toggleCategories}
              className={`font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-colors text-gray-800 group-hover:text-secondary ${
                isCatOpen ? "text-secondary" : ""
              }`}
            >
              Categorías
              <ChevronRight
                size={14}
                className={`transition-transform duration-300 group-hover:rotate-90 ${
                  isCatOpen ? "rotate-90 text-secondary" : ""
                }`}
              />
            </button>

            <div
              className={`absolute mt-3 w-60 bg-zinc-200 border border-black/5 rounded-xl p-3 shadow-xl transition-all duration-300
                invisible opacity-0 -translate-y-2 
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                ${isCatOpen ? "!visible !opacity-100 !translate-y-0" : ""}
              `}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={closeAll}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-secondary hover:bg-black/5 rounded-lg transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* --- DROPDOWN MARCAS --- */}
          <div className="relative group z-50">
            <button
              type="button"
              onClick={toggleBrands}
              className={`font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-colors text-gray-800 group-hover:text-secondary ${
                isBrandOpen ? "text-secondary" : ""
              }`}
            >
              Marcas
              <ChevronRight
                size={14}
                className={`transition-transform duration-300 group-hover:rotate-90 ${
                  isBrandOpen ? "rotate-90 text-secondary" : ""
                }`}
              />
            </button>

            <div
              className={`absolute mt-3 w-60 bg-zinc-200 border border-black/5 rounded-xl p-3 shadow-xl transition-all duration-300
                invisible opacity-0 -translate-y-2 
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                ${isBrandOpen ? "!visible !opacity-100 !translate-y-0" : ""}
              `}
            >
              <button
                onClick={closeAll}
                className="w-full text-left px-4 py-2 text-xs font-black uppercase mb-1 text-gray-500 hover:text-secondary transition-colors"
              >
                Todas las Marcas
              </button>
              <div className="h-[1px] bg-black/5 my-1 mx-2" />

              {BRANDS.map((brand) => (
                <button
                  key={brand}
                  onClick={closeAll}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-secondary hover:bg-black/5 rounded-lg transition-colors"
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- DRAWER MÓVIL --- */}
        {isOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <div
              className="absolute inset-0 bg-gray-800/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute w-[85%] h-full bg-zinc-200 border-r p-7 flex flex-col overflow-y-auto animate-in slide-in-from-left duration-300">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-black text-black italic uppercase">
                  Buscar por
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black p-2 bg-white/50 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-secondary text-xs font-black uppercase mb-5 tracking-[0.2em]">
                    Categorías
                  </h3>
                  <div className="flex flex-col gap-1">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        className="text-left py-3 text-md font-bold text-zinc-700 border-b border-black/5"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-secondary text-xs font-black uppercase mb-5 tracking-[0.2em]">
                    Nuestras Marcas
                  </h3>
                  <div className="flex flex-col gap-1">
                    {BRANDS.map((brand) => (
                      <button
                        key={brand}
                        className="text-left py-3 text-md font-bold text-zinc-700 border-b border-black/5"
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-10"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
