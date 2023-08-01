import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['300', '400', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Приложение блога',
  description: 'Приложение блога на Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
