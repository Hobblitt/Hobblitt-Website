"use client";

import { useId } from "react";
import type { ChangeEvent } from "react";

type BaseProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
};

type InputProps = BaseProps & {
  as?: "input";
  type?: "text" | "email";
};

type TextareaProps = BaseProps & {
  as: "textarea";
  rows?: number;
};

export function FormField(props: InputProps | TextareaProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const descId = `${id}-description`;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    props.onChange(event.target.value);
  };

  const describedBy =
    [props.description ? descId : null, props.error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const sharedClassName = `w-full border bg-[#0B1120] px-4 py-3.5 type-body text-sm text-[#F8FAFC] placeholder:text-[#475569] transition-colors duration-200 focus:outline-none focus:ring-1 ${
    props.error
      ? "border-[#F87171] focus:border-[#F87171] focus:ring-[#F87171]"
      : "border-[#E2E8F0]/15 focus:border-[#22B8F0] focus:ring-[#22B8F0]"
  }`;

  return (
    <div>
      <label
        htmlFor={id}
        className="type-caption block text-[9px] text-[#94A3B8]"
      >
        {props.label}
        {props.required && <span className="ml-1 text-[#22B8F0]">*</span>}
      </label>

      {props.description && (
        <p id={descId} className="type-body mt-1.5 text-xs text-[#64748B]">
          {props.description}
        </p>
      )}

      <div className="mt-3">
        {props.as === "textarea" ? (
          <textarea
            id={id}
            name={props.name}
            value={props.value}
            onChange={handleChange}
            rows={props.rows ?? 4}
            placeholder={props.placeholder}
            required={props.required}
            aria-required={props.required}
            aria-invalid={Boolean(props.error)}
            aria-describedby={describedBy}
            className={`${sharedClassName} resize-none`}
          />
        ) : (
          <input
            id={id}
            name={props.name}
            type={props.type ?? "text"}
            value={props.value}
            onChange={handleChange}
            placeholder={props.placeholder}
            required={props.required}
            aria-required={props.required}
            aria-invalid={Boolean(props.error)}
            aria-describedby={describedBy}
            className={sharedClassName}
          />
        )}
      </div>

      {props.error && (
        <p
          id={errorId}
          role="alert"
          className="type-body mt-2 text-xs text-[#F87171]"
        >
          {props.error}
        </p>
      )}
    </div>
  );
}
