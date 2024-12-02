import { Container } from '@/shared/Container';
import UserAvatar from '@/shared/Header/components/UserAvatar';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-md fixed top-0 right-0 left-0 bg-diamond z-[10]">
      <Container>
        <div className="flex justify-between py-4">
          <Link href="/">
            <Image src="/logo.png" alt="Diamond Store" width={50} height={50} />
          </Link>
          <UserAvatar />
        </div>
      </Container>
    </header>
  );
}
