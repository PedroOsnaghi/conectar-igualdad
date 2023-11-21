export default function Select({
  name,
  label,
  placeholder,
  className,
  options,
  disabled = false,
  errors = {},
  onChange,
}) {
  const onSelectHandler = (e) => {
    onChange(e);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label className="text-lightSecondary" htmlFor="name">
        {label}
      </label>
      <select
        onChange={onSelectHandler}
        disabled={disabled}
        className={`py-1 px-2 rounded-md bg-darkTerciary text-lightSecondary outline-none border-[.5px]  focus:border-primary placeholder:text-lightSecondary/50 placeholder:italic ${
          !errors[name] && "mb-6"
        } ${errors[name] && "border-red-500"}`}
        id={name}
        name={name}
        placeholder={placeholder}
      >
        <option selected disabled hidden>
          {placeholder}
        </option>
        {options ? (
          options.map((option, index) => (
            <option
              className="text-lightSecondary"
              key={name + "_" + index}
              value={option}
            >
              {option}
            </option>
          ))
        ) : (
          <option value={placeholder} selected>
            {placeholder}
          </option>
        )}
      </select>
      <span className="text-red-500 mt-0 pt-0">
        {errors[name] ? errors[name] : " "}
      </span>
    </div>
  );
}
