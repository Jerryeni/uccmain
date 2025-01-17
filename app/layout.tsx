import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Univer Chain - Blockchain Innovation Platform',
  description: 'Univer Chain is a robust and innovative blockchain platform designed for scalability, security, and efficiency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#0D0B01] text-white min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}