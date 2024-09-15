import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Header } from '@/components/common/header';

const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Viva La Pizza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}
