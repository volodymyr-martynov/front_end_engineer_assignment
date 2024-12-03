import { ICreator } from '@/types/creator';
import Image from 'next/image';

interface ILeaderBoardCardProps {
  item: ICreator;
}

export default function LeaderBoardCard({
  item: { id, image, name, games, positions },
}: ILeaderBoardCardProps) {
  return (
    <div key={id}>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-[50%]"
      />
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <h4>
          {positions.map(({ id, name }) => (
            <span className="rounded-xl bg-green-500">{name}</span>
          ))}
        </h4>
        <h4>{games.map(({ name }) => name)}</h4>
      </div>
    </div>
  );
}
