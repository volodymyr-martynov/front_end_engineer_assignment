import SectionTitle from '@/features/GameDetails/components/SectionTitle';
import { IPlatform } from '@/types/game';

interface IPlatformStatisticProps {
  platforms: IPlatform[];
}
export default function PlatformStatistic({
  platforms,
}: IPlatformStatisticProps) {
  return (
    <div className="mt-6">
      <SectionTitle title="Platforms" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-medium flex flex-col md:flex-row gap-4 justify-between items-center"
          >
            <span className="text-lg font-medium">
              {platform.platform.name}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">
              {platform.platform.games_count} items
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
