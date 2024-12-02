'use client';

import useDiamondsBalance from '@/features/PremiumCurrency/hooks/useDiamondsBalance';
import { Container } from '@/shared/Container';
import Image from 'next/image';

export default function PremiumCurrency() {
  const [diamondsAmount, buyDiamonds] = useDiamondsBalance();

  return (
    <Container>
      <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
        <div className="flex gap-2 items-center text-white">
          <span className="text-lg ">Your balance:</span>
          <span className="font-bold text-2xl">{diamondsAmount}</span>
          <Image src="/currency.png" alt="diamond" width={40} height={40} />
        </div>
        <button
          className="bg-white rounded-2xl px-6 cursor-pointer"
          onClick={buyDiamonds}
        >
          Buy
        </button>
      </div>
    </Container>
  );
}
