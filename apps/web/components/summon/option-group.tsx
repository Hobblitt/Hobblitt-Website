"use client";

type Option<T extends string> = {
  value: T;
  label: string;
};

type OptionGroupProps<T extends string> = {
  label: string;
  name: string;
  options: Option<T>[];
  value: T | null;
  onChange: (value: T) => void;
};

export function OptionGroup<T extends string>({
  label,
  name,
  options,
  value,
  onChange,
}: OptionGroupProps<T>) {
  return (
    <fieldset>
      <legend className="type-caption text-[9px] text-[#94A3B8]">
        {label}
      </legend>

      <div
        className="mt-3 flex flex-wrap gap-2"
        role="radiogroup"
        aria-label={label}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              name={name}
              onClick={() => onChange(option.value)}
              className={`type-nav border px-4 py-2.5 text-[9px] transition-all duration-200 ${
                isActive
                  ? "border-[#22B8F0] bg-[#22B8F0] text-[#111827]"
                  : "border-[#E2E8F0]/15 text-[#94A3B8] hover:border-[#22B8F0]/50 hover:text-[#F8FAFC]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
