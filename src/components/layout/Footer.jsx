import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { FooterLogo } from '../Logos';
import { SocialMedia } from '../SocialMedia';

import payment1 from '@/images/payment1.png';
import payment2 from '@/images/payment2.png';
import payment3 from '@/images/payment3.png';
import payment4 from '@/images/payment4.png';

export function Footer() {
  return (
    <footer className="text-center w-full min-w-[320px] bg-[#222] pb-4 relative bottom-0 left-0">
      <footer className="pb-4 mx-4">
        <Container className="">
          <div className="footer-top flex justify-center flex-col md:flex-row md:justify-between flex-wrap  items-center py-10 text-[#999] border-b-white/10 border-b-[1px]">
            <div className="socials md:text-left">
              <div className="mb-2">Find us here:</div>
              <SocialMedia invert={true} />
            </div>
            <div className="logo -order-1 md:order-1">
              <Link href="/">
                <FooterLogo />
              </Link>
            </div>
            <div className="payments md:order-2">
              <div className="mb-2">Payment methods:</div>
              <ul className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  payment1,
                  payment2,
                  payment3,
                  payment4,
                ]?.map((image, idx) => (
                  <Image
                    key={idx}
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
              © All rights reserved. Beauty Shop{' '}
              {new Date().getFullYear()}
            </span>
          </div>
        </Container>
      </footer>
    </footer>
  );
}
