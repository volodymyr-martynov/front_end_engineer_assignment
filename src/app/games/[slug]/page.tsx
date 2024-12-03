import { GameDetails } from '@/features/GameDetails';
import { getGameBySlug } from '@/lib/api/games';

export default async function GameDetailsPage({ params }: any) {
  const { slug } = await params;

  const gameDataSource = await getGameBySlug(slug);
  const gameData = gameDataSource.data;

  return <GameDetails gameData={gameData} />;
}
