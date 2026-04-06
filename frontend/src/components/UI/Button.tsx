// src/components/UI/Button.tsx
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  variant = "primary",
  href,
  target,
  ...props
}) => {
  // Clases base que siempre tendrá el botón
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-1 rounded-full transition-all transform hover:scale-105 font-bold uppercase tracking-wider text-sm border-2";

  // Clases específicas por variante
  const variants = {
    primary: "bg-primary hover:bg-orange-400 border-orange-400 text-white",
    secondary: "bg-secondary hover:bg-blue-400 border-blue-400 text-white px-6",
    tertiary:
      "bg-zinc-600 hover:bg-zinc-500 border-zinc-700 text-gray-100 hover:text-white",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className || ""}`;

  // Si hay un href, renderizamos un <a> con estilos de botón
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
