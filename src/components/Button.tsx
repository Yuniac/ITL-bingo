type ButtonProps = {
  loading?: boolean;
  onClick: VoidFunction;
  text: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  loading = false,
  text,
  className,
}) => {
  return (
    <button
      className={`flex border-sub border-2 p-4 rounded-md hover:bg-white transition-all cursor-pointer ${className} justify-center rounded-md items-center ${loading ? "animate-pulse" : ""}  transition-all`}
      onClick={onClick}
      disabled={loading}
    >
      <p className="text-main">{text}</p>
    </button>
  );
};
