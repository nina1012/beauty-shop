import Image from 'next/image';

import mainBlockDecor from '@/images/main-block-decor.png';
import logo1 from '@/images/main-logo1.svg';
import logo2 from '@/images/main-logo2.svg';
import logo3 from '@/images/main-logo3.svg';
import logo4 from '@/images/main-logo4.svg';
import logo5 from '@/images/main-logo5.svg';

import mainBg from '@/images/main-bg.jpeg';
import { Button } from '@/components/Button';
import { ProductItems } from '@/components/ProductItems';
import Link from 'next/link';

function Trending() {
  const tabs = [
    'Make Up',
    'SPA',
    'Perfume',
    'Nails',
    'Skin care',
    'Hair care',
  ];
  return (
    <section className="section py-14 md:py-[110px]">
      <div className="section-content">
        <div className="section-top mb-5 md:mb-14 text-center text-darkGray">
          <span className="text-[40px] md:text-6xl text-pink">
            Cosmetics
          </span>
          <h2 className="text-[40px] md:text-5xl lg:text-6xl my-5">
            Trending Products
          </h2>
          <p className="max-w-[450px] mx-auto mt-8 text-sm md:text-base text-gray-600">
            Nourish your skin with toxin-free cosmetic
            products. With the offers that you can&apos;t
            refuse.
          </p>
        </div>
        <div className="trending-tabs text-gray-500 text-base w-full">
          <ul className="tabs mb-10 w-full flex flex-wrap flex-col md:flex-row md:justify-center">
            {tabs?.map((tab) => (
              <li
                key={tab}
                className="text-center py-2 mx-4 bg-[#faf9ff] border-[1px] border-[#eee] first-of-type:bg-pink first-of-type:text-white hover:cursor-pointer md:py-1 md:px-8"
              >
                {tab}
              </li>
            ))}
          </ul>
          <ProductItems />
        </div>
      </div>
    </section>
  );
}

function MainLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <div className="main-logos flex justify-center items-center lg:justify-evenly pb-9 lg:pb-32 flex-wrap">
      {logos?.map((logo) => (
        <Link
          key={logo.src}
          href="/"
          className="max-w-[100px] lg:max-w-[110px] mb-6 mx-6"
        >
          <Image
            src={logo}
            width={logo?.width}
            height={logo?.height}
            alt="Logo"
            className="!w-full !h-full"
          />
        </Link>
      ))}
    </div>
  );
}

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
      <div>
        <div
          style={{
            backgroundImage: `url(${mainBg.src})`,
          }}
          className="main-block relative z-1 min-h-screen flex items-center justify-start w-full h-full py-[100px] bg-no-repeat bg-cover bg-center z-1"
        >
          <div className="wrapper w-full px-4 md:px-5 lg:max-w-[1220px] lg:px-10 text-darkGray z-[1]">
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
      </div>
      <Trending />
      <MainLogos />
    </>
  );
}
