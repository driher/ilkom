import { Metadata } from "next";
import { notFound } from "next/navigation";

// ========================
// FETCH WORDPRESS POST
// ========================
async function fetchPost(slug: string) {
  const res = await fetch(
    `https://bandungoke.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.[0] || null;
}

// ========================
// TYPES (NEXT 15)
// ========================
type Props = {
  params: Promise<{ slug: string }>;
};

// ========================
// SEO METADATA (GOOGLE + SOCIAL)
// ========================
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Berita tidak ditemukan",
    };
  }

  const title = post.title?.rendered?.replace(/<[^>]*>/g, "");
  const description =
    post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "";

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

// ========================
// PAGE DETAIL BERITA
// ========================
export default async function Page({ params }: Props) {
  const { slug } = await params;

  const post = await fetchPost(slug);

  if (!post) return notFound();

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // ========================
  // GOOGLE NEWS / ARTICLE SCHEMA
  // ========================
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title?.rendered?.replace(/<[^>]*>/g, ""),
    description: post.excerpt?.rendered?.replace(/<[^>]*>/g, ""),
    image: image ? [image] : [],
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      "@type": "Organization",
      name: "Portal Berita",
    },
    publisher: {
      "@type": "Organization",
      name: "Portal Berita",
      logo: {
        "@type": "ImageObject",
        url: "https://your-domain.com/logo.png",
      },
    },
  };

  return (
    <article className="max-w-3xl mx-auto p-4">

      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* FEATURE IMAGE */}
      {image && (
        <img
          src={image}
          alt={post.title?.rendered || "Berita"}
          className="w-full rounded-lg mb-4"
        />
      )}

      {/* TITLE */}
      <h1
        className="text-2xl font-bold mb-3"
        dangerouslySetInnerHTML={{
          __html: post.title?.rendered || "",
        }}
      />

      {/* CONTENT */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.content?.rendered || "",
        }}
      />

    </article>
  );
}