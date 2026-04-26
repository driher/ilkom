import { translate } from "@/lib/translate";

export default async function Page({
  params,
}: {
  params: { lang: string };
}) {
  const posts = await getPosts();

  const lang = params.lang;

  const translatedPosts = await Promise.all(
    posts.slice(0, 5).map(async (post: any) => {
      return {
        id: post.id,
        slug: post.slug,
        title: await translate(
          post.title.rendered,
          lang
        ),
      };
    })
  );

  return (
    <main
      className={
        lang === "ar" ? "rtl text-right" : ""
      }
    >
      <h1 className="text-2xl font-bold p-4">
        Portal Berita ({lang.toUpperCase()})
      </h1>

      <div className="grid gap-4 p-4">
        {translatedPosts.map((p) => (
          <a
            key={p.id}
            href={`/${lang}/berita/${p.slug}`}
            className="border p-3 rounded"
          >
            {p.title}
          </a>
        ))}
      </div>
    </main>
  );
}