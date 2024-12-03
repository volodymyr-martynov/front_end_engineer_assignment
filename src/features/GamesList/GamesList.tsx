import GameCard from '@/features/GamesList/GameCard';
import { getGames } from '@/lib/api/games';
import { Container } from '@/shared/Container';
import { ErrorMessage } from '@/shared/ErrorMessage';
import { SectionHeader } from '@/shared/SectionHeader';

export default async function GameListContainer() {
  const gamesList = await getGames();

  if ('error' in gamesList) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <SectionHeader title="Games list" />
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gamesList.results.map(
          ({ id, slug, name, background_image, released }) => (
            <GameCard
              key={id}
              slug={slug}
              title={name}
              image={background_image}
              released={released}
            />
          )
        )}
      </div>
    </Container>
  );
}
