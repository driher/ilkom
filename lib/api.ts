export async function getPostsByCategory(categoryId: number = 38) {
  const res = await fetch(
    `https://bandungoke.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`
  );

  if (!res.ok) {
    throw new Error("Gagal ambil posts kategori 38");
  }

  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `https://bandungoke.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.[0] || null;
}