interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function ButtonSecondary({ children, ...props }: Props) {
  return (
    <button
      className="bg-secondary hover:bg-blue-400 border-2 border-blue-400 px-8 py-1 text-white rounded-full transition-all transform hover:scale-105 font-bold uppercase tracking-wider text-sm"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
