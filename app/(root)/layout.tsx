import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Header } from '@/shared/components/common';

export const metadata: Metadata = {
  title: 'Viva La Pizza',
};

export default function CustomerLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      <Header />
      {children}
      {modal}
    </main>
  );
}
