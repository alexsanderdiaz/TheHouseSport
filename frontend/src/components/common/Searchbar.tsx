import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar: React.FC = () => {
  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type to search"
          className="w-full p-4 rounded-full bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary transition"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary p-4 rounded-full hover:bg-secondary/80 transition">
          <AiOutlineSearch className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
