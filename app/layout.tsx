import { ReactNode } from 'react';
import 'modern-normalize';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components';
import Image from 'next/image';
import gitHubIcon from '@/public/icons/github.svg?url';

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
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ru'>
      <body className={openSans.variable}>
        <Header>
          <Image src={gitHubIcon} width={19} height={20} alt='github' />
        </Header>
        {children}
      </body>
    </html>
  );
}
