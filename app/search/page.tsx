import { searchPosts } from "@/lib/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams?.q ?? "";

  console.log("DEBUG QUERY:", searchParams);

  const results = query
    ? await searchPosts(query)
    : [];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-xl font-bold mb-4">
        Hasil pencarian: "{query}"
      </h1>

      {!query && (
        <p className="text-gray-500">
          Silakan masukkan kata kunci pencarian.
        </p>
      )}

      {query && results.length === 0 && (
        <p className="text-gray-500">
          Tidak ada hasil ditemukan.
        </p>
      )}

      <div className="grid gap-4 mt-4">
        {results.map((post: any) => (
          <a
            key={post.id}
            href={`/berita/${post.slug}`}
            className="border p-3 rounded"
          >
            <h2
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            />
          </a>
        ))}
      </div>

    </main>
  );
}