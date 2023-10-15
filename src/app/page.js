import Image from 'next/image';

import mainBlockDecor from '@/images/main-block-decor.png';
import mainBg from '@/images/main-bg.jpeg';
import { Button } from '@/components/Button';

export const metadata = {
  description: 'Beauty Shop',
  keywords: [
    'beauty',
    'shop',
    'e-commerce',
    'nextjs',
    'react',
    'tailwind',
  ],
};

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mainBg.src})` }}
        className="main-block relative z-1 min-h-screen flex items-center justify-start w-full h-full py-[100px] no-repeat cover bg-center z-1"
      >
        <div className="wrapper w-full px-4 md:px-5 lg:max-w-[1220px] lg:px-10 text-darkGray z-10">
          <div className="max-w-[575px] lg:max-w-[650px]">
            <span className="text-[45px] md:text-6xl text-pink">
              Professional
            </span>
            <h1 className="text-6xl	md:text-[83px] mt-1 mb-8">
              Beauty & Care
            </h1>
            <p className="max-w-[420px] text-black text-base leading-[150%]">
              Nourish your skin with toxin-free cosmetic
              products. With the offers that you can’t
              refuse.
            </p>
            <Button className="mt-8">Show now</Button>
          </div>
        </div>
        <Image
          src={mainBlockDecor}
          className="absolute top-[36%] left-0 !-z-1 w-[42%] hidden md:block"
          alt=""
        />
      </div>
    </>
  );
}
