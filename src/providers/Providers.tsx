'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
