// src/components/common/CustomSelect.jsx
import React, { useEffect, useRef, useState } from "react";

const Chevron = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M6 8l4 4 4-4"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CustomSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  placeholder,
  required,
  ref,
}) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const index = options.findIndex((opt) => opt.value === value);
    setHighlighted(index);
  }, [open, value, options]);

  const toggle = () => setOpen((s) => !s);

  const selectOption = (opt) => {
    if (onChange) onChange({ target: { name, value: opt.value } });
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlighted((h) => (h < options.length - 1 ? h + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setHighlighted((h) => (h > 0 ? h - 1 : options.length - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open && highlighted >= 0) selectOption(options[highlighted]);
      else setOpen(true);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative flex flex-col w-full" ref={containerRef}>
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={onKeyDown}
        ref={ref}
        className={`w-full text-left border rounded-lg px-3 py-2 flex items-center justify-between focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-yellow-400"
        }`}
      >
        <span className={`${value ? "text-gray-800" : "text-gray-400"}`}>
          {options.find((opt) => opt.value === value)?.label ||
            placeholder ||
            `Select ${label}`}
        </span>
        <Chevron
          className={`w-4 h-4 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 mt-1 w-full max-h-60 overflow-auto bg-white border rounded-lg shadow-lg py-1"
          onKeyDown={onKeyDown}
        >
          <li
            key="__empty"
            role="option"
            aria-selected={value === ""}
            onMouseEnter={() => setHighlighted(-1)}
            onMouseDown={(e) => {
              e.preventDefault();
              if (onChange) onChange({ target: { name, value: "" } });
              setOpen(false);
            }}
            className={`cursor-pointer px-3 py-2 text-sm ${
              highlighted === -1 ? "bg-yellow-100" : ""
            }`}
          >
            -- Select {label} --
          </li>

          {options.map((opt, idx) => {
            const isHighlighted = highlighted === idx;
            const isSelected = value === opt.value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlighted(idx)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectOption(opt);
                }}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  isHighlighted ? "bg-yellow-100" : ""
                } ${isSelected ? "font-semibold" : ""}`}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
