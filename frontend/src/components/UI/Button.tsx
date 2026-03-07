interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-primary hover:bg-orange-400 border-2 border-orange-400 px-4 py-1 text-white rounded-full transition-all transform hover:scale-105 font-bold uppercase tracking-wider text-sm"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
