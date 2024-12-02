import { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
}
export default function Container({ children }: IContainerProps) {
  return <div className="w-full max-w-[1400px] mx-auto px-4">{children}</div>;
}
