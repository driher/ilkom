export async function POST(req: Request) {
  const { text, target } = await req.json();

  const response = await fetch(
    "https://api-free.deepl.com/v2/translate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `DeepL-API-Key YOUR_KEY`,
      },
      body: new URLSearchParams({
        text,
        target_lang: target.toUpperCase(), // EN / AR / ZH
      }),
    }
  );

  const data = await response.json();

  return Response.json({
    translated: data.translations?.[0]?.text,
  });
}