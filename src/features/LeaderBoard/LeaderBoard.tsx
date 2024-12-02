import { getCreators } from '@/lib/api/creators';

export default async function LeaderBoard() {
  const { error, data: creatorsList } = await getCreators();

  if (error) {
    return <h1>SWW</h1>;
  }

  return (
    <div>
      <h1>Leaderboard</h1>
      {creatorsList.map((creator) => (
        <h1>{creator.name}</h1>
      ))}
    </div>
  );
}
