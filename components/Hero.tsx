"use client";

type HeroProps = {
  post?: any;
};

export default function Hero({ post }: HeroProps) {
  const title =
    post?.title?.rendered || "Ilmu Komunikasi UIN Sunan Gunung Djati Bandung";

  const excerpt =
    post?.excerpt?.rendered ||
    "Membangun generasi komunikator yang profesional, kreatif, dan berintegritas.";

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/selamat-1.jpeg";

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt="Hero"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-6 text-white">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="max-w-xl mb-6 text-sm md:text-lg opacity-90"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        <div className="flex gap-3">
          <a
            href="/berita"
            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Lihat Berita
          </a>

          <a
            href="#konsentrasi"
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Konsentrasi
          </a>
        </div>
      </div>
    </section>
  );
}