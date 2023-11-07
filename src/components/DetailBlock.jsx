'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import bgImage from '@/images/detail-main-bg.jpeg';
import { Container } from './layout/Container';
import Link from 'next/link';
import { FadeIn } from './FadeIn';

export default function DetailBlock({ bgImg, notFound }) {
  const pathname = usePathname();
  const page =
    pathname.replace('/', '')[0].toUpperCase() +
    pathname.slice(2, pathname.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ easings: ['easeIn', 'easeOut'] }}
      style={{
        backgroundImage: `url(${
          bgImg?.src || bgImage?.src
        })`,
      }}
      className={clsx(
        'bg-no-repeat text-[#222] font-lato bg-cover md:bg-top relative text-center z-[1] pt-32 pb-16 md:pt-48 md:pb-28'
      )}
    >
      <Container>
        <FadeIn>
          <div className="content">
            <h1 className="text-6xl font-tenor mb-3 lg:text-7xl">
              {notFound ? '404 Page' : page}
            </h1>
            {notFound ? (
              <span className="text-[#666]">Oops!</span>
            ) : (
              <ul className="breadcrumbs flex flex-wrap justify-center">
                <li className="mx-3">
                  <Link href="/">Home</Link>
                </li>
                <span>-</span>
                <li className="mx-3 text-pink">
                  <Link href={`/${page}`}>{page}</Link>
                </li>
              </ul>
            )}
          </div>
        </FadeIn>
      </Container>
    </motion.div>
  );
}
