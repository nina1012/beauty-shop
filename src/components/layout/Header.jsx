'use client';

import Link from 'next/link';
import { HeaderLogo } from '../Logos';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from 'react-icons/ai';
import clsx from 'clsx';
import { useState, useEffect, useContext } from 'react';
import { Container } from './Container';
import { motion } from 'framer-motion';
import { RootLayoutContext } from '../RootLayout';

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

export default function Header() {
  const navItems = [
    {
      path: '/',
      navigationItem: 'Home',
    },
    {
      path: '/shop',
      navigationItem: 'Shop',
    },
    {
      path: '/categories',
      navigationItem: 'Categories',
    },
    {
      path: '/blog',
      navigationItem: 'Blog',
    },
    {
      path: '/contact',
      navigationItem: 'Contact',
    },
  ];
  const options = [
    {
      path: '/faq',
      icon: <PiMagnifyingGlassLight />,
    },
    {
      path: '/profile',
      icon: <AiOutlineUser />,
    },
    {
      path: '/wishlist',
      icon: <AiOutlineHeart />,
    },
    {
      path: '/cart',
      icon: <AiOutlineShoppingCart />,
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const { layout } = useContext(RootLayoutContext);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <header className="absolute top-0 left-0 w-full z-[15]">
        <div className="header-coupon bg-darkGray text-white/80 text-xs text-center py-3 absolute w-full h-auto">
          <span>
            30% OFF ON ALL PRODUCTS ENTER CODE: BESHOP2020
          </span>
          <button
            onClick={(e) =>
              (e.target.parentNode.className = 'hidden')
            }
            className="absolute top-1/2 -translate-y-2 right-4 w-3 h-3"
          >
            <AiOutlineClose className="pointer-events-none" />
          </button>
        </div>
        <div
          className={clsx(
            'header-content transition-all flex justify-between items-center pt-[50px] px-4',
            isScrolling &&
              'fixed top-0 left-0 w-full pt-5 py-2 bg-lightBeige'
          )}
        >
          <Container className="flex items-center font-lato justify-between !px-0">
            <div className="header-logo">
              <Link href="/">
                <HeaderLogo />
              </Link>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={
                layout === 'mobile'
                  ? expanded
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -100 }
                  : layout !== 'mobile'
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0 }
              }
              transition={{
                duration: 0.2,
                ease: 'easeOut',
                loop: 'Infinity',
                x: { duration: 0.3 },
              }}
              className={clsx(
                expanded
                  ? 'header-box fixed top-0 left-0 w-[230px] transition-all h-full bg-white md:bg-transparent text-darkGray z-[11] flex flex-col justify-start items-start pt-12 px-8 md:pt-0 md:px-0 md:relative md:w-full md:flex-row md:h-auto'
                  : 'hidden md:flex md:w-full'
              )}
            >
              <ul className="navigation lg:w-full uppercase w-full flex flex-col items-start md:items-center md:flex-row text-sm md:text-xs md:ml-4">
                {navItems.map((item) => (
                  <li
                    key={item.path}
                    className={clsx(
                      'mb-4 md:my-0 justify-start md:justify-stretch mx-2 hover:text-pink transition-colors md:mx-6 lg:mx-8'
                    )}
                  >
                    <Link href={item?.path}>
                      {item?.navigationItem}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr
                className={clsx(
                  expanded &&
                    'block bg-black w-full h-[2px] my-4 md:hidden'
                )}
              />
              <ul className="options flex justify-between md:justify-normal w-full md:w-auto">
                {options?.map((opt) => (
                  <li
                    key={opt.path}
                    className="md:ml-4 lg:ml-10 text-base hover:text-pink transition-colors"
                  >
                    <Link href={opt.path}>
                      {opt.path.includes('cart') ? (
                        <div className="relative">
                          <AiOutlineShoppingCart />
                          <span className="absolute -top-2 -right-2 w-4 h-4 flex justify-center items-center rounded-full bg-pink text-[10px] text-white">
                            0
                          </span>
                        </div>
                      ) : (
                        opt.icon
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded.toString()}
              className={clsx(
                'group -m-2.5 block md:hidden  transition  rounded-full bg-white/70 hover:bg-white p-2'
              )}
              aria-label="Toggle navigation"
            >
              {expanded ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </Container>
        </div>
      </header>
    </header>
  );
}
