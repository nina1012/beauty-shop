import Image from 'next/image';

import mainBlockDecor from '@/images/main-block-decor.png';

import topCat1 from '@/images/top-categories-img1.jpg';
import topCat2 from '@/images/top-categories-img2.jpg';
import topCat3 from '@/images/top-categories-img3.jpg';
import itemImg1 from '@/images/info-item-img1.jpg';
import itemImg2 from '@/images/info-item-img2.jpeg';
import itemImg3 from '@/images/info-item-img3.jpg';
import itemImg4 from '@/images/info-item-img4.jpg';

import mainBg from '@/images/main-bg.jpeg';
import mainTextDecor from '@/images/main-text-decor.png';

import discountBg from '@/images/discount-bg.jpeg';
import { Button } from '@/components/global/Button';
import Link from 'next/link';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { PiRecycleThin } from 'react-icons/pi';
import { CiMedal } from 'react-icons/ci';
import { Container } from '@/components/layout/Container';
import clsx from 'clsx';
import { Section } from '@/components/layout/Section';

import blogImg1 from '@/images/blog-img1.jpg';
import blogImg2 from '@/images/blog-img2.jpg';

import blogDateDecor from '@/images/blog-date-decor.png';

import InstaPhotos from '@/components/InstaPhotos';
import MainLogos from '@/components/MainLogos';
import Discount from '@/components/layout/Discount';
import { TopCategories } from '@/components/TopCategories';
import { Subscribe } from '@/components/Subscribe';
import { Trending } from '@/components/Trending';
import {
  FadeIn,
  FadeInStagger,
} from '@/components/FadeIn';

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
        <FadeInStagger>
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
                <h4 className="text-3xl font-tenor font-normal capitalize mb-2">
                  {item?.name}
                </h4>
                <p className="mx-auto text-[15px] md:mx-0 leading-[25.5px] md:w-full text-[#666]">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function InfoBlocks() {
  const infoBlocks = [
    {
      infoBlockBgImg: itemImg1?.src,
      image: itemImg2,
      subheading: 'Check this out',
      heading: 'new collections for delicate skin',
      description:
        'Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.',
    },
    {
      infoBlockBgImg: itemImg3?.src,
      image: itemImg4,
      subheading: 'about us',
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
          <Container className="pt-10 flex flex-col lg:flex-row w-full lg:px-0 lg:pt-0">
            <FadeIn>
              <div className="info-block-img relative w-full h-[335px] lg:h-full lg:absolute lg:top-0 lg:left-1/2 lg:w-1/2">
                <Image
                  src={block.image?.src}
                  alt=""
                  height={block.image.height}
                  width={block.image.width}
                  className="!w-full !h-full object-cover"
                />
              </div>
              <div className="info-block-text pt-12 py-10 text-[#666] pl-0 lg:py-48 lg:px-5 lg:w-1/2">
                <span className="capitalize font-saint leading-[60px] text-pink text-4xl">
                  {block.subheading}
                </span>
                <h2 className="text-4xl font-tenor text-[#222] md:text-5xl capitalize my-2">
                  {block.heading}
                </h2>
                <p className="description text-xl max-w-[456px] my-4">
                  {block.description}
                </p>
                <p className="mt-2 lg:my-4 text-base">
                  Non aliqua reprehenderit reprehenderit
                  culpa laboris nulla minim anim velit
                  adipisicing ea aliqua alluptate sit do
                  do.Non aliqua reprehenderit
                  reprehenderit culpa laboris nulla minim
                  anim velit adipisicing ea aliqua
                  alluptate sit do do.Non aliqua
                  reprehenderit reprehenderit culpa
                  laboris nulla minim.
                </p>
                <Button className="mt-8">Shop now</Button>
              </div>
            </FadeIn>
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
      subheading="Our blog"
      heading="the latest news at BeautyShop"
    >
      <Container className="mx-auto !px-0">
        <FadeIn>
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
                      className="block my-3 text-[#222] text-[22px] font-tenor hover:text-pink"
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
        </FadeIn>
      </Container>
      <div className="latest-news-button mt-10 md:mt-16 flex justify-center text-center">
        <Button
          href="/blog"
          className="justify-center !w-auto"
        >
          Blog
        </Button>
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
          <Container className="lg:px-5 text-darkGray z-[1]">
            <FadeIn>
              <div className="max-w-[575px] font-tenor lg:max-w-[650px]">
                <span className="font-saint -ml-1 text-[45px] leading-[60px] md:text-6xl text-pink">
                  Professional
                </span>
                <h1 className="text-6xl -ml-1 md:text-[83px]  mt-1 mb-8">
                  Beauty & Care
                </h1>
                <p className="max-w-[420px] text-black text-base leading-[150%]">
                  Nourish your skin with toxin-free
                  cosmetic products. With the offers that
                  you can’t refuse.
                </p>
                <Button className="mt-8">Show now</Button>
              </div>
            </FadeIn>
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
      <Discount
        bgImg={discountBg}
        heading="Get your"
        extraHeading="50%"
        subheading="discount"
      >
        <p className="max-w-[420px] text-black text-base !md:text-right leading-[150%] ml-auto md:ml-0">
          Nourish your skin with toxin-free cosmetic
          products. With the offers that you can&apos;t
          refuse.
        </p>
        <Button className="mt-8 ml-auto md:ml-0">
          Get now
        </Button>
      </Discount>
      <Advantages />
      <TopCategories
        categories={[
          { img: topCat1, categoryName: 'SPA' },
          { img: topCat2, categoryName: 'Nails' },
          { img: topCat3, categoryName: 'Perfume' },
        ]}
      />
      <InfoBlocks />
      <LatestNews />
      <Subscribe />
      <InstaPhotos />
    </>
  );
}
