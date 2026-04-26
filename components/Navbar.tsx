"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);

  const menus = [
    {
      name: "Tentang UIN SGD",
      items: ["Sejarah", "Visi Misi", "Pimpinan"],
    },
    {
      name: "Akademik",
      items: ["Fakultas", "Program Studi", "Kalender Akademik"],
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
          <Image src="/logo1.png" alt="logo" width={200} height={200} />
        </Link>

        {/* MENU */}
        <div className="flex gap-6 text-sm font-medium">

          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>

          {menus.map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setOpen(menu.name)}
              onMouseLeave={() => setOpen(null)}
            >
              <p className="cursor-pointer hover:text-orange-500">
                {menu.name}
              </p>

              {/* DROPDOWN */}
              {open === menu.name && (
                <div className="absolute top-6 left-0 bg-white shadow-lg rounded w-52 py-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}