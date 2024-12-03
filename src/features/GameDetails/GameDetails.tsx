import parse from 'html-react-parser';
import { Container } from '@/shared/Container';
import ChipsList from '@/features/GameDetails/components/ChipsList';
import PlatformStatistic from '@/features/GameDetails/components/PlatformStatistic';
import Developers from '@/features/GameDetails/components/Developers';

export default function GameDetails({ gameData }: any) {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-4">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <img
              src={gameData.background_image}
              alt={gameData.name}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <h1 className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 text-3xl font-bold p-2 rounded">
              {gameData.name}
            </h1>
          </div>

          <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center mt-4">
            <div className="text-gray-300">
              <p className="text-lg">Release Date: {gameData.released}</p>
            </div>
            <div>
              <span className="bg-green-600 px-3 py-1 rounded-lg text-lg font-bold">
                Metacritic: {gameData.metacritic}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">ESRB Rating</h2>
            <div className="flex items-center mt-2 bg-gray-800 p-4 rounded-lg shadow-md">
              <span className="text-3xl font-bold bg-red-600 text-white px-4 py-2 rounded-md mr-4">
                {gameData.esrb_rating.name.charAt(0)}
              </span>
              <span className="text-lg text-gray-300">
                {gameData.esrb_rating.name} - This game is suitable for{' '}
                {gameData.esrb_rating.slug}.
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Description</h2>
            <div className="text-gray-300 mt-2 leading-relaxed">
              {parse(gameData.description)}
            </div>
          </div>

          <Developers items={gameData.developers} title="Developers" />
          <Developers items={gameData.publishers} title="Publisher" />
          <ChipsList items={gameData.genres} title="Genres" />
          <ChipsList items={gameData.tags} title="Tags" />
          <PlatformStatistic platforms={gameData.platforms} />
        </div>
      </Container>
    </div>
  );
}
