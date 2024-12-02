import { GamesList } from '@/features/GamesList';
import { LeaderBoard } from '@/features/LeaderBoard';
import { PremiumCurrency } from '@/features/PremiumCurrency';
import { StoresList } from '@/features/StoresList';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  console.log('session', session);

  return (
    <div>
      <PremiumCurrency />
      <GamesList />
      <StoresList />
      <LeaderBoard />
    </div>
  );
}
