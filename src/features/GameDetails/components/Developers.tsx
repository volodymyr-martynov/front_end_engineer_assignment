interface IDevelopersProps {
  items: { name: string; id: number }[];
  title: string;
}
export default function Developers({ items, title }: IDevelopersProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex gap-4 mt-2">
        {items.map((publisher, index) => (
          <a
            key={index}
            href={`https://www.google.com/search?q=${encodeURIComponent(
              publisher.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            {publisher.name}
          </a>
        ))}
      </div>
    </div>
  );
}
