import {
  getLocaDiamondsValue,
  setLocaDiamondsValue,
} from '@/features/PremiumCurrency/utils';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function useDiamondsBalance(): [number, () => void] {
  const session = useSession();

  const [diamondsAmount, setDiamondsAmount] = useState<number>(0);

  useEffect(() => {
    if (session.status === 'authenticated' && session.data.user?.email) {
      setDiamondsAmount(getLocaDiamondsValue(session.data.user.email));
    }
  }, [session]);

  const buyDiamonds = () => {
    if (session.status === 'authenticated' && session.data.user?.email) {
      setDiamondsAmount(setLocaDiamondsValue(session.data.user.email, 20));
    }
  };

  return [diamondsAmount, buyDiamonds];
}
