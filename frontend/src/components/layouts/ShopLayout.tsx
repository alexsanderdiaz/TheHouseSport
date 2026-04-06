import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div className="bg-white">
      {/* Aquí se renderizarán los productos o categorías */}
      <Outlet />
    </div>
  );
}
