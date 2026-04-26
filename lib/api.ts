import { API_URL } from "./config";

/* =========================
   GET POSTS (FIXED ALIAS)
========================= */
export const getPosts = getPostsByCategory;

/* =========================
   GET POSTS BY CATEGORY
========================= */
export async function getPostsByCategory(categoryId: number = 38) {
  try {
    const res = await fetch(
      `${API_URL}/posts?categories=${categoryId}&_embed`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Gagal ambil posts kategori ${categoryId}`);
    }

    return await res.json();
  } catch (err) {
    console.error("getPostsByCategory error:", err);
    return [];
  }
}

/* =========================
   GET POST BY SLUG
========================= */
export async function getPostBySlug(slug: string) {
  try {
    const res = await fetch(
      `${API_URL}/posts?slug=${slug}&_embed`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Gagal ambil post slug: ${slug}`);
    }

    const data = await res.json();
    return data?.[0] || null;
  } catch (err) {
    console.error("getPostBySlug error:", err);
    return null;
  }
}

/* =========================
   SEARCH POSTS
========================= */
export async function searchPosts(keyword: string) {
  try {
    const res = await fetch(
      `${API_URL}/posts?search=${encodeURIComponent(keyword)}&_embed`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Search API Error ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("searchPosts error:", err);
    return [];
  }
}