import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useScrollToHash } from "../../hooks/useScrollToHash";

export default function MainLayout() {
  // Ejecutamos el scroll suave cada vez que cambie el hash en la URL
  useScrollToHash();

  return (
    // Reemplazo de <Box flex...>:
    <div className="flex flex-col min-h-screen w-full bg-black">
      <Navbar />
      <main className="flex-grow w-full py-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
