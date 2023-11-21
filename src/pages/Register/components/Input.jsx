export default function Input({
  name,
  label,
  placeholder,
  type,
  className,
  errors = {},
  onChange,
}) {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label className="text-lightSecondary" htmlFor="name">
        {label}
      </label>
      <input
        className={`py-1 px-2 mb-0 rounded-md bg-darkTerciary text-lightSecondary outline-none border-[.5px] placeholder:text-lightSecondary/50 placeholder:italic focus:border-primary ${
          !errors[name] && "mb-6"
        } ${errors[name] && "border-red-500"}`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />

      <span className="text-red-500 mt-0 pt-0">
        {errors[name] ? errors[name] : " "}
      </span>
    </div>
  );
}
