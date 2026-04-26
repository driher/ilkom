import { getPostsByCategory } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function BeritaPage() {
  const posts = await getPostsByCategory(38);

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post: any) => {
        const image =
          post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            {image && (
              <Image
                src={image}
                alt={post.title.rendered}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-3">
              <Link href={`/berita/${post.slug}`}>
                <h2
                  className="font-semibold hover:text-blue-600"
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}