interface IPlatformStatisticProps {
  platforms: { platform: { name: string; games_count: number }; id: number }[];
}
export default function PlatformStatistic({
  platforms,
}: IPlatformStatisticProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Platforms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-medium flex justify-between items-center"
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
