'use client';

import useDiamondsBalance from '@/features/PremiumCurrency/hooks/useDiamondsBalance';
import { Container } from '@/shared/Container';
import Image from 'next/image';

export default function PremiumCurrency() {
  const [diamondsAmount, buyDiamonds] = useDiamondsBalance();

  return (
    <Container>
      <div className="fixed right-4 bottom-4 bg-gray-800 p-6 rounded-xl overflow-hidden shadow-medium transition  animate-scale-repeatedly">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-20 blur-lg"></div>

        <div className="relative z-10 flex justify-between items-center">
          <div className="flex gap-4 items-center text-white">
            <Image
              src="/currency.png"
              alt="diamond"
              width={40}
              height={40}
              className="transform transition-transform hover:scale-110"
            />
            <div>
              <span className="text-lg block">Your balance:</span>
              <span className="font-extrabold text-3xl">{diamondsAmount}</span>
            </div>
          </div>

          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-6 py-2 rounded-2xl shadow-medium transition-all transform hover:scale-105 hover:shadow-heavy"
            onClick={buyDiamonds}
          >
            Buy
          </button>
        </div>
      </div>
    </Container>
  );
}
