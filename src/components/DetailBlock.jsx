'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import bgImage from '@/images/detail-main-bg.jpeg';
import { Container } from './Container';
import Link from 'next/link';

export default function DetailBlock({ bgImg }) {
  const pathname = usePathname();
  const page =
    pathname.replace('/', '')[0].toUpperCase() +
    pathname.slice(2, pathname.length);

  return (
    <div
      style={{
        backgroundImage: `url(${
          bgImg?.src || bgImage?.src
        })`,
      }}
      className={clsx(
        'bg-no-repeat text-[#222] bg-cover md:bg-top relative text-center z-[1] pt-32 pb-16 md:pt-48 md:pb-28'
      )}
    >
      <Container>
        <div className="content">
          <h1 className="text-6xl mb-3 lg:text-7xl">
            {page}
          </h1>
          <ul className="breadcrumbs flex flex-wrap justify-center">
            <li className="mx-3">
              <Link href="/">Home</Link>
            </li>
            <span>-</span>
            <li className="mx-3 text-pink">
              <Link href={`/${page}`}>{page}</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
