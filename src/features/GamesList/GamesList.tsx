import GameCard from '@/features/GamesList/GameCard';
import { getGames } from '@/lib/api/games';
import { Container } from '@/shared/Container';
import { SectionHeader } from '@/shared/SectionHeader';

export default async function GameListContainer() {
  const { error, data } = await getGames();

  if (error) {
    return <h1>Someghint went wrong.</h1>;
  }

  return (
    <Container>
      <SectionHeader title="Games list" />
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(({ id, name, background_image, released }) => (
          <GameCard
            key={id}
            title={name}
            image={background_image}
            released={released}
          />
        ))}
      </div>
    </Container>
  );
}
