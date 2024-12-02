import GameCard from '@/features/GamesList/GameCard';
import { getGames } from '@/lib/api/games';

export default async function GameListContainer() {
  const { error, data } = await getGames();

  if (error) {
    return <h1>Someghint went wrong.</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Games list</h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(({ id, name, background_image }) => (
          <GameCard
            key={id}
            title={name}
            image={background_image}
            release_date="222"
          />
        ))}
      </div>
    </div>
  );
}
