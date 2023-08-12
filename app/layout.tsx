import 'modern-normalize';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components';
import Image from 'next/image';
import GitHubIcon from '@/public/icons/github.svg';

const openSans = Open_Sans({
  weight: ['300', '400', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Приложение блога',
  description: 'Приложение блога на Next.js',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ru'>
      <body className={openSans.className}>
        <Header>
          <GitHubIcon width={19} height={20} />
        </Header>
        {children}
      </body>
    </html>
  );
}
