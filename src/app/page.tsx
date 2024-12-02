import { GamesList } from '@/features/GamesList';
import { LeaderBoard } from '@/features/LeaderBoard';
import { StoresList } from '@/features/StoresList';

export default function Home() {
  return (
    <div>
      <GamesList />
      <StoresList />
      <LeaderBoard />
    </div>
  );
}
