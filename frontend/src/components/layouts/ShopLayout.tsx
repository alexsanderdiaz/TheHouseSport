import { Outlet } from "react-router-dom";
import Searchbar from "../common/Searchbar";

export default function ShopLayout() {
  return (
    <div className="bg-white">
      {/* Aquí se renderizarán los productos o categorías */}
      <Searchbar />
      <Outlet />
    </div>
  );
}
