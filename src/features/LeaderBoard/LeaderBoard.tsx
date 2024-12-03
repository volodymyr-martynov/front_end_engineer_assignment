import LeaderBoardCard from '@/features/LeaderBoard/LeaderCard';
import { getCreators } from '@/lib/api/creators';
import { Container } from '@/shared/Container';
import { SectionHeader } from '@/shared/SectionHeader';
import Image from 'next/image';

export default async function LeaderBoard() {
  const { error, data: creatorsList } = await getCreators();

  if (error) {
    return <h1>SWW</h1>;
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
