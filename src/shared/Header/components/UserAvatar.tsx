import PremiumCurrency from '@/features/PremiumCurrency/PremiumCurrency';
import SignInBtn from '@/shared/Header/components/SignInBtn';
import SignOutBtn from '@/shared/Header/components/SignOutBtn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function UserAvatar() {
  const session = await getServerSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 items-center">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || ''}
            width={50}
            height={50}
            className="rounded-[50%]"
          />
        )}
        <SignOutBtn />
      </div>
    );
  }

  return <SignInBtn />;
}
