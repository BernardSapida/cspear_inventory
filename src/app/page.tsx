'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/auth-callback');
  }, [])

  return (
    <main className="space-y-6">

    </main>
  );
}
