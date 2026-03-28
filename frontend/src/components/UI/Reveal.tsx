// src/components/UI/Reveal.tsx
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Empieza invisible y 50px abajo
      whileInView={{ opacity: 1, y: 0 }} // Cuando entra en el scroll, sube y aparece
      viewport={{ once: false, margin: "-100px" }} // Solo se anima una vez
      transition={{ duration: 0.8, ease: "easeOut" }} // Animación suave de 0.8 seg
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
