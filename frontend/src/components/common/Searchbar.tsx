import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar: React.FC = () => {
  return (
    <div className="py-4 z-50 p-4">
      <form className="w-full max-w-md lg:max-w-2xl mx-auto relative group">
        <div className="relative">
          <input
            type="search"
            placeholder="¿Qué estás buscando?"
            className="w-full p-4 pl-6 rounded-full bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm focus:shadow-md"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-secondary p-3.5 rounded-full hover:bg-secondary/80 transition-colors shadow-lg"
          >
            <AiOutlineSearch className="text-white text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
