import clsx from 'clsx';
import '../styles/globals.css';
import { RootLayout } from '@/components/RootLayout';

export const metadata = {
  title: {
    template: '%s',
    default: 'Beauty Shop',
  },
  description:
    'Beauty shop is a website made using react and nextjs',
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full text-base antialiased"
    >
      <body
        className={clsx(
          'flex min-h-full font-lato flex-col bg-white h-full'
        )}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
