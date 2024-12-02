import { GamesList } from '@/features/GamesList';
import { LeaderBoard } from '@/features/LeaderBoard';
import { StoresList } from '@/features/StoresList';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  console.log('session', session);

  return (
    <div>
      <GamesList />
      <StoresList />
      <LeaderBoard />
    </div>
  );
}
