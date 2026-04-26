export default function Card({ post }: any) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={post.image} className="h-40 w-full object-cover" />

      <div className="p-3">
        <p className="text-xs text-gray-500">{post.date}</p>
        <h3 className="font-semibold">{post.title}</h3>
      </div>
    </div>
  );
}