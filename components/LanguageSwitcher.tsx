"use client";

import { useState } from "react";

const languages = [
  { code: "id", label: "Indonesia" },
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "zh", label: "Chinese" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("id");

  const changeLanguage = (lang: string) => {
    setActive(lang);
    setOpen(false);

    // OPSI 1: kalau pakai route i18n
const changeLanguage = (lang: string) => {
  setActive(lang);
  setOpen(false);

  // hanya redirect kalau route ada
  window.location.href = `/${lang}`;
};
    // OPSI 2: kalau pakai Google Translate (optional)
    // document.querySelector(".goog-te-combo")?.value = lang;
  };

  return (
    <div className="relative text-sm">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 border rounded flex items-center gap-2 hover:bg-gray-50 transition"
      >
        🌐 {active.toUpperCase()}

        <svg
          className={`w-3 h-3 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg
          transition-all duration-200 origin-top
          ${
            open
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }
        `}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              w-full text-left px-4 py-2 hover:bg-orange-50 transition
              ${
                active === lang.code
                  ? "bg-orange-100 font-semibold"
                  : ""
              }
            `}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}