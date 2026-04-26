"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    "images/selamat-1.jpeg",
    "images/selamat-2.jpeg",
    "images/selamat-3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // NEXT
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  // PREV
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden">

      {/* IMAGE */}
      <img
        src={slides[index]}
        className="w-full h-[500px] object-cover transition-all duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 via-pink-400/70 to-pink-200/60"></div>

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center max-w-6xl mx-auto px-6">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Selamat Datang Mahasiswa Baru
          </h1>
          <p className="mt-4 text-lg">
            Ilmu Komunikasi Konsentrasi Humas dan Konsentrasi Jurnalistik
          </p>

          <button className="mt-6 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold">
            Kembangkan Kemampuan & Jadilah Profesional
          </button>
        </div>
      </div>

      {/* BUTTON LEFT */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
      >
        ‹
      </button>

      {/* BUTTON RIGHT */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
}