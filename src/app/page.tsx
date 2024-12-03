import { GamesList } from '@/features/GamesList';
import { LeaderBoard } from '@/features/LeaderBoard';
import { PremiumCurrency } from '@/features/PremiumCurrency';
import { StoresList } from '@/features/StoresList';

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <PremiumCurrency />
      <GamesList />
      <StoresList />
      <LeaderBoard />
    </div>
  );
}
