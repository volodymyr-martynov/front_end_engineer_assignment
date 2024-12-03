import { GameDetails } from '@/features/GameDetails';
import { getGameBySlug } from '@/lib/api/games';
import { ErrorMessage } from '@/shared/ErrorMessage';

export default async function GameDetailsPage({ params }: any) {
  const { slug } = await params;

  const gameDetailsData = await getGameBySlug(slug);

  if ('error' in gameDetailsData) {
    return <ErrorMessage />;
  }

  return <GameDetails gameData={gameDetailsData} />;
}
