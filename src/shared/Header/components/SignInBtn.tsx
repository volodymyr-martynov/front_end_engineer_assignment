'use client';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-6 py-2 rounded-2xl shadow-medium transition-all transform hover:scale-105 hover:shadow-heavy"
    >
      Sign in
    </button>
  );
}
