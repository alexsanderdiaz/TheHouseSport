// src/components/UI/Button.tsx
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

function Button({ children, className, variant = "primary", ...props }: Props) {
  // Clases base que siempre tendrá el botón
  const baseClasses =
    "px-4 py-1 rounded-full transition-all transform hover:scale-105 font-bold uppercase tracking-wider text-sm border-2";

  // Clases específicas por variante
  const variants = {
    primary: "bg-primary hover:bg-orange-400 border-orange-400 text-white",
    secondary: "bg-secondary hover:bg-blue-400 border-blue-400 text-white px-6",
    tertiary:
      "bg-zinc-600 hover:bg-zinc-500 border-zinc-700 text-gray-100 hover:text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
