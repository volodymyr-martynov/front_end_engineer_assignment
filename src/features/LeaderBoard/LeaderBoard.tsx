import LeaderBoardCard from '@/features/LeaderBoard/LeaderCard';
import { getCreators } from '@/lib/api/creators';
import { Container } from '@/shared/Container';
import { ErrorMessage } from '@/shared/ErrorMessage';
import { SectionHeader } from '@/shared/SectionHeader';

export default async function LeaderBoard() {
  const creatorsList = await getCreators();

  if ('error' in creatorsList) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <SectionHeader title="Leaderboard" />
      {creatorsList.results.map((creator) => (
        <LeaderBoardCard key={creator.id} item={creator} />
      ))}
    </Container>
  );
}
