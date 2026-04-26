"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const keyword = q.trim();

    if (!keyword) return;

    console.log("PUSHING:", keyword);

    router.push(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Cari berita..."
        className="border p-2 flex-1"
      />

      <button className="bg-black text-white px-3">
        Cari
      </button>
    </form>
  );
}