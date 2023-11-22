export default function StepMobile({
  number,
  title,
  description,
  isActive,
  isConnected,
  className,
}) {
  return (
    <div className="relative flex flex-col">
      <span
        className={`relative transition-all duration-300 ease-in-out p-4 border-[1px]  border-white z-10 rounded-full h-[50px] w-[50px] aspect-square grid place-content-center text-xl  ${
          isActive >= parseInt(number)
            ? "bg-secondary text-white"
            : "bg-primary text-lightPrimary"
        } ${className}`}
      >
        {number}
      </span>
      {isConnected && (
        <span
          className={`transition-all duration-300 ease-in-out w-[2px] h-[60px] rotate-[-90deg] absolute top-0  left-[-25px] translate-y-[-5%]  bg-lightPrimary ${
            isActive >= parseInt(number) && "bg-secondary"
          }`}
        />
      )}
    </div>
  );
}
