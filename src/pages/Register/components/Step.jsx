export default function Step({
  number,
  title,
  description,
  isActive,
  isConnected,
  className,
}) {
  return (
    <div className="flex gap-2 items-center mb-[45px]">
      <span
        className={`relative transition-all duration-300 ease-in-out p-4 border-[1px]  border-white z-10 rounded-full h-[50px] aspect-square grid place-content-center text-xl ${
          isActive >= parseInt(number) && "bg-secondary text-white"
        } ${className}`}
      >
        {number}
        {isConnected && (
          <span
            className={`transition-all duration-300 ease-in-out w-[2px] h-[50px] absolute top-0 translate-y-[-100%] left-[50%] z-[-1]] bg-lightPrimary ${
              isActive >= parseInt(number) && "bg-secondary"
            }`}
          />
        )}
      </span>
      <span>
        <h4
          className={`transition-all duration-300 ease-in-out title-medium text-white ${
            isActive >= parseInt(number) && "text-secondary"
          }`}
        >
          {title}
        </h4>
        <p className="opacity-80">{description}</p>
      </span>
    </div>
  );
}
