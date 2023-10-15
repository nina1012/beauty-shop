import clsx from 'clsx';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beauty Shop',
  description:
    'Beauty shop is a website made using react and nextjs',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full text-base antialiased"
    >
      <body
        className={clsx(
          inter.className,
          'flex min-h-full flex-col bg-white h-full'
        )}
      >
        <Header />
        <main className="content min-w-[320px] text-left w-full">
          {children}
        </main>
        {/* <Footer/>{children} */}
      </body>
    </html>
  );
}
