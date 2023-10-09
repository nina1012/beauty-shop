'use client';

import Link from 'next/link';
import { HeaderLogo } from './Logos';
import { RxHamburgerMenu } from 'react-icons/rx';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from 'react-icons/ai';
import clsx from 'clsx';
import { useState } from 'react';

export default function Header() {
  const navItems = [
    {
      path: '/home',
      navigationItem: 'Home',
    },
    {
      path: '/pages',
      navigationItem: 'Pages',
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

  let [expanded, setExpanded] = useState(true);
  return (
    <header>
      <header>
        <div className="header-coupon bg-darkgray text-white/80 text-xs text-center py-3 absolute w-full h-auto">
          <span>
            30% OFF ON ALL PRODUCTS ENTER CODE: BESHOP2020
          </span>
          <span className="absolute top-1/2 -translate-y-2 right-4 w-3 h-3">
            <AiOutlineClose />
          </span>
        </div>
        <div className="header-content flex justify-between md:justify-stretch items-center pt-[50px] px-4">
          <div>
            <HeaderLogo />
          </div>
          <div
            className={clsx(
              'header-box flex !md:flex text-base items-center md:w-full md:justify-between w-[230px] h-full md:h-auto',
              !expanded && 'hidden md:flex',
              expanded &&
                'flex-col md:flex-row absolute md:relative top-0 left-0 bg-lightBeige/90 md:bg-transparent h-full md:h-auto p-10 md:p-0',
              'fixed'
            )}
          >
            <ul className="navigation uppercase w-full flex flex-col items-start md:items-center md:flex-row text-sm md:text-xs md:ml-4">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={clsx(
                    'mb-4 md:my-0 justify-start md:justify-stretch mx-2 hover:text-pink transition-colors'
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
                  className="md:ml-4 text-base hover:text-pink transition-colors"
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
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="block md:hidden"
          >
            {expanded ? (
              <AiOutlineClose />
            ) : (
              <RxHamburgerMenu className="text-xl" />
            )}
          </button>
        </div>
      </header>
    </header>
  );
}
