'use client';
import { signOut } from 'next-auth/react';

export default function SignOutBtn() {
  return (
    <button
      onClick={() => signOut()}
      className="px-3 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-all"
    >
      Sign out
    </button>
  );
}
