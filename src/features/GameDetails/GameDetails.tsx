import parse from 'html-react-parser';
import { Container } from '@/shared/Container';
import ChipsList from '@/features/GameDetails/components/ChipsList';
import PlatformStatistic from '@/features/GameDetails/components/PlatformStatistic';
import Developers from '@/features/GameDetails/components/Developers';
import { IGameDetails } from '@/types/game';
import SectionTitle from '@/features/GameDetails/components/SectionTitle';

interface IGameDetailsProps {
  gameDetailsData: IGameDetails;
}

export default function GameDetails({ gameDetailsData }: IGameDetailsProps) {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-4">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <img
              src={gameDetailsData.background_image}
              alt={gameDetailsData.name}
              className="rounded-lg shadow-medium w-full h-64 object-cover"
            />
            <h1 className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 text-3xl font-bold p-2 rounded">
              {gameDetailsData.name}
            </h1>
          </div>

          <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center mt-4">
            <div className="text-gray-300">
              <p className="text-lg">
                Release Date: {gameDetailsData.released}
              </p>
            </div>
            <div>
              <span className="bg-green-600 px-3 py-1 rounded-lg text-lg font-bold">
                Metacritic: {gameDetailsData.metacritic}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <SectionTitle title="ESRB Rating" />
            <div className="flex flex-col gap-4 md:flex-row items-center justify-between mt-2 bg-gray-800 p-4 rounded-lg shadow-medium">
              <div>
                <span className="text-3xl font-bold bg-red-600 text-white px-4 py-2 rounded-md mr-4">
                  {gameDetailsData.esrb_rating?.name?.charAt(0)}
                </span>
                <span className="text-lg text-gray-300">
                  {gameDetailsData.esrb_rating?.name} - This game is suitable
                  for {gameDetailsData.esrb_rating?.slug}.
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-blue-500">
                  {gameDetailsData.rating}
                </div>
                <div className="text-white">
                  out of {gameDetailsData.rating_top}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <SectionTitle title="Description" />
            <div className="text-gray-300 mt-2 leading-relaxed">
              {parse(gameDetailsData.description)}
            </div>
          </div>

          <Developers items={gameDetailsData.developers} title="Developers" />
          <Developers items={gameDetailsData.publishers} title="Publisher" />
          <ChipsList items={gameDetailsData.genres} title="Genres" />
          <ChipsList items={gameDetailsData.tags} title="Tags" />
          <PlatformStatistic platforms={gameDetailsData.platforms} />
        </div>
      </Container>
    </div>
  );
}
