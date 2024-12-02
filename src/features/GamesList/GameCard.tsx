import Image from 'next/image';

interface IGameCardProps {
  title: string;
  image: string;
  release_date: string;
}

export default function GameCard({
  title,
  image,
  release_date,
}: IGameCardProps) {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800 text-white transition transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      <Image src={image} alt={title} width={400} height={400} />
      <div className="p-4">
        <h3 className="mb-2 font-bold text-2xl">{title}</h3>
        <span>{release_date}</span>
      </div>
    </div>
  );
}
