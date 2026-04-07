import { Outlet } from "react-router-dom";
import Searchbar from "../common/Searchbar";
import { FilterBar } from "../common/FilterBar";

export default function ShopLayout() {
  return (
    <div className="bg-white relative min-h-screen w-full">
      {/* Aquí se renderizarán los productos o categorías */}
      <Searchbar />
      <FilterBar />
      <Outlet />
    </div>
  );
}
