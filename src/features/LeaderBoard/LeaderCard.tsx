import { ICreator } from '@/types/creator';
import Image from 'next/image';

interface ILeaderBoardCardProps {
  item: ICreator;
}

export default function LeaderBoardCard({
  item: { id, image, name, games, positions },
}: ILeaderBoardCardProps) {
  return (
    <div
      key={id}
      className="relative flex items-center gap-6 mb-4 p-5 bg-gray-800 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-20 blur-xl rounded-lg"></div>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="relative z-10 rounded-full border-4 border-green-500 shadow-lg"
      />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <h4 className="mt-2">
          {positions.map(({ id, name }) => (
            <span
              key={id}
              className="inline-block text-sm bg-green-500 text-white px-3 py-1 rounded-xl mr-2 transform transition-transform hover:scale-110"
            >
              {name}
            </span>
          ))}
        </h4>
        <h4 className="mt-3 text-gray-300">
          Works on:{' '}
          <span className="text-white font-medium">
            {games.map(({ name }, index) => (
              <span key={index}>
                {name}
                {index < games.length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        </h4>
      </div>
    </div>
  );
}
