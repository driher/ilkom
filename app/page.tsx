import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { getPostsByCategory } from "@/lib/api";
import PopularLinks from "@/components/PopularLinks";

export default async function Home() {
  const posts = await getPostsByCategory(38).catch(() => []);

  const hero = posts?.[0] || null;
  const news = posts?.slice(1, 9) || [];

  return (
    <div>

      {/* HERO */}
      {hero && <Hero post={hero} />}

      {/* BERITA SLIDER */}
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-lg font-bold mb-3">Berita Terbaru</h2>

        <div className="flex gap-4 overflow-x-auto scroll-smooth pb-3">

          {news.length > 0 ? (
            news.map((post: any) => {
              const image =
                post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <Link
                  key={post.id}
                  href={`/berita/${post.slug}`}
                  className="min-w-[220px] max-w-[220px] border rounded-lg overflow-hidden flex-shrink-0 bg-white shadow-sm"
                >
                  {image && (
                    <Image
                      src={image}
                      alt={post.title?.rendered || "Berita"}
                      width={400}
                      height={250}
                      className="w-full h-28 object-cover"
                    />
                  )}

                  <div className="p-2">
                    <h3
                      className="text-sm font-semibold line-clamp-2 hover:text-blue-600"
                      dangerouslySetInnerHTML={{
                        __html: post.title?.rendered || "",
                      }}
                    />
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-sm text-gray-500">Tidak ada berita</p>
          )}

        </div>
      </div>

      {/* POPULAR LINKS */}
      <div className="max-w-6xl mx-auto p-4">
        <PopularLinks />
      </div>

    </div>
  );
}