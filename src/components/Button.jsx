const Button = ({ label, iconURL, full, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        full
          ? "bg-white border-black"
          : "bg-coral-red text-white border-coral-red"
      } ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt={label} className="mr-2 rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;
