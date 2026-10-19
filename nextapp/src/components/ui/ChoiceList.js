export default function ChoiceList({
  options,
  multiple = false,
  value,
  onChange,
}) {
  function handleSelect(optionValue) {
    if (!multiple) {
      onChange(optionValue);
      return;
    }
    onChange(
      value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]
    );
  }

  return (
    <div className="grid gap-3">
      {options.map((option) => {
        const checked = multiple
          ? value.includes(option.value)
          : value === option.value;

        return (
          <label
            key={option.value}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition ${
              checked
                ? "border-prime bg-prime/5"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <input
              type={multiple ? "checkbox" : "radio"}
              checked={checked}
              onChange={() => handleSelect(option.value)}
              className="mt-1 accent-prime"
            />
            <span>
              <span className="block font-medium text-gray-900">
                {option.label}
              </span>
              {option.description && (
                <span className="block text-sm text-gray-600">
                  {option.description}
                </span>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}