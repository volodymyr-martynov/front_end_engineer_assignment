import SectionTitle from '@/features/GameDetails/components/SectionTitle';

interface IChipsListProps {
  items: { name: string; id: number }[];
  title: string;
}
export default function ChipsList({ items, title }: IChipsListProps) {
  return (
    <div className="mt-6">
      <SectionTitle title={title} />
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((item) => (
          <span
            key={item.id}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-500 transition"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
