
interface Props  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

function Button ({children, ...props}: Props) {
    return (
        <button
        className="bg-orange-500/75 hover:bg-orange-700/75 text-white py-2 px-4 rounded-xl"
        {...props} >
        {children}
        </button>
    );
}

export default Button;