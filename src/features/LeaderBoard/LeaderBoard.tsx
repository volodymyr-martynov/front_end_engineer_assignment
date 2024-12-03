import LeaderBoardCard from '@/features/LeaderBoard/LeaderCard';
import { getCreators } from '@/lib/api/creators';
import { Container } from '@/shared/Container';
import { ErrorMessage } from '@/shared/ErrorMessage';
import { SectionHeader } from '@/shared/SectionHeader';

export default async function LeaderBoard() {
  const { error, data: creatorsList } = await getCreators();

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <SectionHeader title="Leaderboard" />
      {creatorsList.map((creator) => (
        <LeaderBoardCard key={creator.id} item={creator} />
      ))}
    </Container>
  );
}
