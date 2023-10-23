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

import blogImg1 from '@/images/blog-img1.jpg';
import blogImg2 from '@/images/blog-img2.jpg';

import blogDateDecor from '@/images/blog-date-decor.png';

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
        <div className="advantages-items gap-4 grid md:grid-cols-3 justify-center items-center md:flex-row">
          {items?.map((item) => (
            <div
              key={item?.name}
              className="advantages-item px-2 text-center relative"
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
              <p className="mx-auto md:mx-0 md:w-full text-[#666]">
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
  const infoBlocks = [
    {
      infoBlockBgImg: itemImg1?.src,
      image: itemImg2,
      subHeading: 'Check this out',
      heading: 'new collections for delicate skin',
      description:
        'Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.',
    },
    {
      infoBlockBgImg: itemImg3?.src,
      image: itemImg4,
      subHeading: 'about us',
      heading: 'who we are',
      description:
        'Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.',
    },
  ];
  return (
    <div className="info-blocks pt-8 md:pt-10">
      {infoBlocks?.map((block, idx) => (
        <div
          key={idx}
          style={{
            backgroundImage: `url(${block.infoBlockBgImg})`,
          }}
          className={clsx(
            'info-blocks-item relative justify-center md:bg-no-repeat lg:bg-cover !bg-none odd:bg-lightPurple even:bg-lightBeige'
          )}
        >
          <Container className="pt-10 flex flex-col lg:flex-row px-4 w-full lg:px-0 lg:pt-0">
            <div className="info-block-img relative w-full h-[335px] lg:h-full lg:absolute lg:top-0 lg:left-1/2 lg:w-1/2">
              <Image
                src={block.image?.src}
                alt=""
                height={block.image.height}
                width={block.image.width}
                className="!w-full !h-full object-cover"
              />
            </div>
            <div className="info-block-text pt-12 py-10 text-[#666] pl-0 lg:py-48 lg:px-10 lg:w-1/2">
              <span className="capitalize text-pink text-4xl">
                {block.subHeading}
              </span>
              <h2 className="text-4xl text-[#222] md:text-5xl capitalize my-2">
                {block.heading}
              </h2>
              <p className="description text-xl max-w-[456px]">
                {block.description}
              </p>
              <p className="mt-2 lg:my-4 text-base">
                Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do
                do.Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do
                do.Non aliqua reprehenderit reprehenderit
                culpa laboris nulla minim.
              </p>
              <Button className="mt-8">Shop now</Button>
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
}

function LatestNews() {
  const blogs = [
    {
      id: 2323,
      image: blogImg1,
      heading: 'Perfumes, perfumed or eau de toilette?',
      description:
        ' Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.',
    },
    {
      id: 23225,
      image: blogImg2,
      heading: 'Best multi-step skin care treatment',
      description:
        ' Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.',
    },
  ];
  return (
    <Section
      subHeading="Our blog"
      heading="the latest news at BeautyShop"
    >
      <Container>
        <div className="blog-items flex flex-col md:flex-row gap-8">
          {blogs?.map(
            ({ id, image, heading, description }) => (
              <div
                key={id}
                className="blog-item md:w-1/2"
              >
                <div className="blog-item-img h-[220px] lg:h-[300px] relative">
                  <Link
                    href={`/blog/${id}`}
                    className="hover:opacity-80 transition-all"
                  >
                    <Image
                      src={image}
                      width={image.width}
                      height={image.height}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <span
                      style={{
                        backgroundImage: `url(${blogDateDecor.src})`,
                      }}
                      className="absolute w-[77px] h-[66px] right-[35px] top-[23px] flex flex-col text-center justify-center items-center z-[1] bg-center bg-no-repeat"
                    >
                      june
                      <span className="text-2xl font-semibold">
                        21
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="blog-item-title  md:text-4xl text-[#666] transition-all">
                  <Link
                    className="block my-3 text-[#222] text-[22px]  hover:text-pink"
                    href={`/blog/${id}`}
                  >
                    {heading}
                  </Link>
                  <p className="mb-5 text-sm">
                    {description}
                  </p>
                  <Link
                    href={`blog/${id}`}
                    className="flex gap-2 group items-center text-sm text-pink transition-all origin-center"
                  >
                    Read More
                    <AiOutlineArrowRight className="group-hover:translate-x-2 transition-all" />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
      <div className="latest-news-button mt-10 md:mt-16 text-center">
        <Button href="/blog">Blog</Button>
      </div>
    </Section>
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
      <LatestNews />
    </>
  );
}
