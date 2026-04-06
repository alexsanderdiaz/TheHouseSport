import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useScrollToHash } from "../../hooks/useScrollToHash";

export default function ShopLayout() {
  useScrollToHash();

  return (
    <div className="relative min-h-screen w-full">
      {/* CONTENIDO INTERFACE */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full bg-transparent">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
