import Image from 'next/image';
import Link from 'next/link';

interface IGameCardProps {
  title: string;
  slug: string;
  image: string;
  released: string;
}

export default function GameCard({
  title,
  slug,
  image,
  released,
}: IGameCardProps) {
  return (
    <Link
      href={`/games/${slug}`}
      className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800 text-white transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <Image src={image} alt={title} width={400} height={400} />
      <div className="p-4">
        <h3 className="mb-2 font-bold text-2xl">{title}</h3>
        <span>{released}</span>
      </div>
    </Link>
  );
}
