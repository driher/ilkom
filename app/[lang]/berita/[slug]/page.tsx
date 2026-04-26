import { getPostBySlug } from "@/lib/api";
import { translate } from "@/lib/translate";

export default async function Page({
  params,
}: {
  params: { slug: string; lang: string };
}) {
  const post = await getPostBySlug(params.slug);

  const lang = params.lang;

  const title = await translate(
    post.title.rendered,
    lang
  );

  const content = await translate(
    post.content.rendered,
    lang
  );

  return (
    <main
      className={
        lang === "ar" ? "rtl text-right" : ""
      }
    >
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </main>
  );
}