import Card from "./Card";

export default function Section({ title, posts }: any) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">
        {title}
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((p: any, i: number) => (
          <Card key={i} post={p} />
        ))}
      </div>
    </div>
  );
}