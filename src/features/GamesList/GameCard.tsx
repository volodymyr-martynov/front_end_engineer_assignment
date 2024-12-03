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
      className="relative block max-w-sm mx-auto shadow-medium rounded-xl overflow-hidden bg-gray-800 text-white transition-transform transform hover:scale-105 hover:shadow-heavy cursor-pointer"
    >
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <div>
          <h3 className="text-xl font-bold text-white hover:text-green-400 transition-colors">
            {title}
          </h3>
          <span className="text-sm text-gray-300">Released: {released}</span>
        </div>
      </div>
    </Link>
  );
}
