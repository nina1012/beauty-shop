import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
} from 'react-icons/ci';
import { Container } from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { FooterLogo } from './Logos';

import payment1 from '@/images/payment1.png';
import payment2 from '@/images/payment2.png';
import payment3 from '@/images/payment3.png';
import payment4 from '@/images/payment4.png';

export function Footer() {
  const socials = [
    {
      href: 'https://facebook.com',
      icon: <CiFacebook />,
    },
    {
      href: 'https://twitter.com',
      icon: <CiTwitter />,
    },
    {
      href: 'https://instagram.com',
      icon: <CiInstagram />,
    },
    {
      href: 'https://linkedin.com',
      icon: <CiLinkedin />,
    },
  ];

  return (
    <footer className="text-center w-full min-w-[320px] bg-[#222] pb-4">
      <footer className="pb-4">
        <Container className="">
          <div className="footer-top flex justify-between items-center py-10 text-[#999] border-b-white/10 border-b-[1px]">
            <div className="socials text-left">
              <div className="mb-2">Find us here:</div>
              <ul className="flex ">
                {socials?.map(({ href, icon }) => (
                  <li
                    key={href}
                    className="mr-2 w-[35px] h-[35px] flex justify-center items-center bg-white/10 "
                  >
                    <Link
                      href={href}
                      className="hover:text-white transition-colors"
                    >
                      {icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="logo">
              <Link href="/">
                <FooterLogo />
              </Link>
            </div>
            <div className="payments">
              <div className="mb-2">Payment methods:</div>
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  payment1,
                  payment2,
                  payment3,
                  payment4,
                ]?.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    width={50}
                    height={30}
                    alt="Payment method"
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-copy pt-5 pb-2 text-sm text-[#999]">
            <span>
              © All rights reserved. BeShop{' '}
              {new Date().getFullYear()}
            </span>
          </div>
        </Container>
      </footer>
    </footer>
  );
}
