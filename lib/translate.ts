const cache = new Map<string, string>();

export async function translate(text: string, lang: string) {
  if (lang === "id") return text;

  const key = `${text}-${lang}`;
  if (cache.has(key)) return cache.get(key)!;

  const res = await fetch("/api/translate", {
    method: "POST",
    body: JSON.stringify({ text, target: lang }),
  });

  const data = await res.json();

  cache.set(key, data.translated);

  return data.translated;
}