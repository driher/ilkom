"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);

  const menus = [
    {
      name: "Prodi Humas",
      items: ["Sejarah", "Visi Misi", "Pimpinan"],
    },
    {
      name: "Prodi Jurnalistik",
      items: ["Sejarah", "Visi Misi", "Pimpinan"],
    },
    {
      name: "Akademik",
      items: ["Persuratan", "Perkuliahan", "Kalender Akademik"],
    },
    {
      name: "Kehidupan Kampus",
      items: ["Organisasi", "Kegiatan Mahasiswa", "Beasiswa"],
    },
  ];

  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo1.png" alt="logo" width={160} height={160} />
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          {menus.map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setOpen(menu.name)}
              onMouseLeave={() => setOpen(null)}
            >
              {/* MAIN MENU */}
              <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition">
                <span>{menu.name}</span>

                {/* ▼ ICON */}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    open === menu.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute left-0 top-7 w-52 bg-white shadow-lg rounded-lg overflow-hidden
                  transition-all duration-200 origin-top
                  ${
                    open === menu.name
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }
                `}
              >
                {menu.items.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* LANGUAGE SWITCHER (FIXED POSITION) */}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>

        </div>
      </div>
    </div>
  );
}