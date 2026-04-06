import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useScrollToHash } from "../../hooks/useScrollToHash";

export default function MainLayout() {
  useScrollToHash();

  return (
    <div className="relative min-h-screen w-full">
      {/* CAPA DE FONDO GLOBAL */}
      <div className="fixed inset-0 -z-50 bg-zinc-950 overflow-hidden">
        {/* Orbe Naranja (Primary) */}
        <div
          className="absolute -top-[5%] -right-[5%] w-[450px] md:w-[650px] h-[450px] md:h-[650px] 
                        bg-primary/40 rounded-full blur-[80px] md:blur-[110px] 
                        opacity-50"
        />

        {/* Orbe Azul (Secondary)*/}
        <div
          className="absolute top-[40%] -left-[10%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] 
                        bg-secondary/30 rounded-full blur-[80px] md:blur-[110px] 
                        opacity-80"
        />
      </div>

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
