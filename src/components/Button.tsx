type ButtonProps = {
  loading: boolean;
  onClick: VoidFunction;
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ onClick, loading, text }) => {
  return (
    <div className="border-sub border-2  rounded-md hover:bg-black transition-all cursor-pointer">
      <button
        className={`flex p-4 justify-center items-center  ${loading ? "animate-pulse" : ""}  transition-all`}
        onClick={onClick}
        disabled={loading}
      >
        <p className="text-main">{text}</p>
      </button>
    </div>
  );
};
