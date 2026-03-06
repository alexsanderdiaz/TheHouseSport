interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-400 border-2 border-orange-400 text-white py-2 px-4 rounded-full transition-all transform hover:scale-105"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
