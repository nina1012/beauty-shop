import Image from 'next/image';

import mainBlockDecor from '@/images/main-block-decor.png';
import logo1 from '@/images/main-logo1.svg';
import logo2 from '@/images/main-logo2.svg';
import logo3 from '@/images/main-logo3.svg';
import logo4 from '@/images/main-logo4.svg';
import logo5 from '@/images/main-logo5.svg';

import topCat1 from '@/images/top-categories-img1.jpg';
import topCat2 from '@/images/top-categories-img2.jpg';
import topCat3 from '@/images/top-categories-img3.jpg';
import itemImg1 from '@/images/info-item-img1.jpg';
import itemImg2 from '@/images/info-item-img2.jpeg';
import itemImg3 from '@/images/info-item-img3.jpg';
import itemImg4 from '@/images/info-item-img4.jpg';

import mainBg from '@/images/main-bg.jpeg';
import linkBg from '@/images/link-bg.png';
import mainTextDecor from '@/images/main-text-decor.png';
import topCatDecor from '@/images/top-categories-decor.png';

import discountBg from '@/images/discount-bg.jpeg';
import { Button } from '@/components/Button';
import { ProductItems } from '@/components/ProductItems';
import Link from 'next/link';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { PiRecycleThin } from 'react-icons/pi';
import { CiMedal } from 'react-icons/ci';
import { Container } from '@/components/Container';
import clsx from 'clsx';
import { Section } from '@/components/Section';

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
    <Section
      subHeading="Cosmetics"
      heading="Trending Products"
    >
      <div className="section-content">
        <div className="section-top mb-5 md:mb-14 text-center text-darkGray">
          <span className="text-[40px] md:text-6xl text-pink"></span>
          <h2 className="text-[40px] md:text-5xl lg:text-6xl my-5"></h2>
          <p className="max-w-[450px] w-full mt-8 text-sm md:text-base text-gray-600">
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
    </Section>
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

function Discount() {
  return (
    <div className="discount">
      <div
        style={{
          backgroundImage: `url(${discountBg.src})`,
        }}
        className="main-block relative z-1 min-h-screen flex items-center justify-start w-full h-full py-[100px] bg-no-repeat bg-cover bg-center z-1"
      >
        <Container className="lg:px-10 text-darkGray z-[1]">
          <div className="max-w-[465px] text-right md:text-left ml-auto">
            <span className="text-[45px] md:text-6xl text-pink">
              Discount
            </span>
            <h2 className="text-6xl	md:text-[83px] mt-1 mb-8">
              Get Your{' '}
              <span
                style={{
                  backgroundImage: `url(${linkBg.src})`,
                }}
                className="text-pink relative bg-no-repeat bg-contain bg-center"
              >
                50%
              </span>{' '}
              Off
            </h2>
            <p className="max-w-[420px] text-black text-base leading-[150%] ml-auto md:ml-0">
              Nourish your skin with toxin-free cosmetic
              products. With the offers that you
              can&apos;t refuse.
            </p>
            <Button className="mt-8">Get now</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

function Advantages() {
  const items = [
    {
      icon: <BiLeaf />,
      name: 'natural',
      description:
        ' Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.',
    },
    {
      icon: <CiMedal />,
      name: 'quality',
      description:
        ' Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.',
    },
    {
      icon: <PiRecycleThin />,
      name: 'organic',
      description:
        ' Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.',
    },
  ];
  return (
    <div className="advantages pt-16">
      <Container>
        <div className="advantages-items gap-4 flex flex-col justify-center items-center md:flex-row">
          {items?.map((item) => (
            <div
              key={item?.name}
              className="advantages-item mx-10 text-center relative"
            >
              <div
                className={clsx(
                  'advantages-item-icon text-7xl [&>*]:mx-auto mb-10 text-pink bg-no-repeat bg-contain bg-center relative'
                )}
                style={{
                  backgroundImage: `url(${mainTextDecor.src})`,
                }}
              >
                {item?.icon}
              </div>
              <h4 className="text-3xl capitalize mb-2">
                {item?.name}
              </h4>
              <p className="max-w-[60%] md:max-w-full mx-auto md:mx-0 md:w-full text-[#666]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function TopCategories() {
  const categories = [
    { img: topCat1, categoryName: 'SPA' },
    { img: topCat2, categoryName: 'Nails' },
    { img: topCat3, categoryName: 'Perfume' },
  ];
  return (
    <Section
      subHeading="Popular Collections"
      heading="Top Categories"
      className="top-categories [&>*]:max-w-full"
    >
      <div className="top-categories-items flex gap-2 -mx-5 flex-col md:flex-row">
        {categories?.map((category) => (
          <Link
            key={category?.categoryName}
            href="/categories"
            className="relative h-full"
          >
            <Image
              src={category?.img.src}
              alt=""
              width={category?.img?.width}
              height={category?.img?.height}
              className="w-full"
            />
            <div className="overlay-onHover opacity-0 hover:opacity-100 hover:bg-[rgba(34,34,34,0.4)] absolute top-0 left-0 w-full h-full flex flex-col gap-3 text-center justify-center items-center transition-opacity">
              <h5
                className={clsx(
                  'relative flex justify-center items-center text-[#222] bg-contain bg-no-repeat bg-center text-2xl w-full h-[66px]'
                )}
                style={{
                  backgroundImage: `url(${topCatDecor?.src})`,
                }}
              >
                {category?.categoryName}
              </h5>
              <span className="text-white uppercase">
                browse products
                <AiOutlineArrowRight className="w-full text-[30px]" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function InfoBlocks() {
  return (
    <div className="info-blocks pt-8 md:pt-10 flex flex-col">
      <div
        style={{
          backgroundImage: `url(${itemImg1?.src})`,
        }}
        className="info-blocks-item relative flex justify-center bg-lightPurple bg-no-repeat bg-transparent md:bg-cover"
      >
        <Container className="flex static flex-col md:flex-row justify-end w-full self-end">
          <div className="info-item-img w-full md:w-1/2 absolute flex top-0 left-0 h-full">
            <Image
              src={itemImg2?.src}
              width={itemImg2?.width}
              height={itemImg2?.height}
              alt=""
              className="object-fill w-full h-full"
            />
          </div>
          <div className="info-item-text w-full md:w-1/2 py-44 md:px-10">
            <div className="section-top !text-left text-darkGray">
              <span className="text-[40px] md:text-6xl text-pink">
                Check this out
              </span>
              <h2 className="text-[40px] md:text-5xl lg:text-6xl my-5">
                New Collection For Delicate Skin
              </h2>
              <p className="max-w-[450px] w-full mt-8 text-base md:text-lg leading-[150%] text-gray-600">
                Nourish your skin with toxin-free cosmetic
                products. With the offers that you
                can&apos;t refuse.
              </p>
              <p className="max-w-[450px] w-full mt-8 text-sm md:text-base leading-[170%] text-gray-600">
                Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do
                do.Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do
                do.Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim.
              </p>
              <Button href="/shop" className="mt-8">
                Shop now
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          backgroundImage: `url(${itemImg4?.src})`,
        }}
        className="info-blocks-item relative flex justify-center bg-lightPurple bg-no-repeat bg-left bg-cover -z-1"
      >
        <Container className="flex static md:flex-row flex-row-reverse justify-start w-full self-end">
          <div className="info-item-img w-full md:w-1/2 absolute flex top-0 left-0 h-full">
            <Image
              src={itemImg3?.src}
              width={itemImg3?.width}
              height={itemImg3?.height}
              alt=""
              className="object-fill w-full h-full"
            />
          </div>
          <div className="info-item-text w-full md:w-1/2 py-44 md:px-10">
            <div className="section-top !text-left text-darkGray z-2 relative">
              <span className="text-[40px] md:text-6xl text-pink">
                About us
              </span>
              <h2 className="text-[40px] md:text-5xl lg:text-6xl my-5">
                Who we are
              </h2>
              <p className="max-w-[450px] w-full mt-8 text-base md:text-lg leading-[150%] text-gray-600">
                Nourish your skin with toxin-free cosmetic
                products. With the offers that you
                can&apos;t refuse.
              </p>
              <p className="max-w-[450px] w-full mt-8 text-sm md:text-base leading-[170%] text-gray-600">
                Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do
                do.Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do
                do.Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim.
              </p>
              <Button href="/about" className="mt-8">
                About us
              </Button>
            </div>
          </div>
        </Container>
      </div>
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
          <Container className="lg:px-10 text-darkGray z-[1]">
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
          </Container>
          <Image
            src={mainBlockDecor}
            className="absolute top-[36%] left-0 !-z-1 w-[42%] hidden md:block"
            alt=""
          />
        </div>
      </div>
      <Trending />
      <MainLogos />
      <Discount />
      <Advantages />
      <TopCategories />
      <InfoBlocks />
    </>
  );
}
