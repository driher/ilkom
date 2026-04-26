"use client";

export default function JurusanCard({
  wpTextHumas,
  wpTextJurnalistik,
}: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-6">
 
{/* ILKOM - HIJAU MUDA */}
<div className="rounded-2xl overflow-hidden shadow-lg bg-green-200 text-green-900 border border-green-300 min-h-[200px]">
  <div className="flex flex-col md:flex-row h-full">

    {/* IMAGE KIRI */}
    <img
      src="/images/ketua-jurnalistik.png"
      className="w-full md:w-52 h-52 object-cover"
    />

    {/* TEXT */}
    <div className="p-6 flex-1 flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-3">
        Ketua Jurusan Ilmu Komunikasi
      </h2>

      <p className="text-sm text-green-900/80">
        {wpTextJurnalistik}
      </p>
    </div>

  </div>
</div>      {/* HUMAS - PINK MUDA */}
      <div className="rounded-2xl overflow-hidden shadow-md bg-pink-100 border border-pink-200">
        <div className="flex flex-col md:flex-row">

          {/* TEXT */}
          <div className="p-5 flex-1">
            <h2 className="text-xl font-bold mb-2 text-right text-pink-800">
              Ketua Program Studi Humas
            </h2>

            <p className="text-pink-900 text-right text-sm">
              {wpTextHumas}
            </p>
          </div>

          {/* IMAGE KANAN */}
          <img
            src="/images/ketua-humas.png"
            className="w-full md:w-52 h-50 object-cover"
          />

        </div>
      </div>

      {/* JURNALISTIK - ORANYE KOTAK LEBIH TINGGI */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-orange-500 text-white border border-orange-600 min-h-[200px]">
        <div className="flex flex-col md:flex-row h-full">

          {/* IMAGE KIRI */}
          <img
            src="/images/ketua-jurnalistik.png"
            className="w-full md:w-52 h-52 object-cover"
          />

          {/* TEXT */}
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">
              Ketua Program Studi Jurnalistik
            </h2>

            <p className="text-sm text-white/90">
              {wpTextJurnalistik}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}