interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-orange-400/75 hover:bg-orange-500/75 border-2 border-orange-300/75 text-white py-2 px-4 rounded-full transition-all transform hover:scale-105"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
