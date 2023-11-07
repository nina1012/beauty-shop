'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';
import { motion } from 'framer-motion';

import clsx from 'clsx';
import Image from 'next/image';
import { PRODUCT_DATA } from './ProductsData';
import Link from 'next/link';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

export const ProductItem = ({ product }) => {
  const { name, type, img, id, oldPrice, price } =
    product;
  return (
    <div className="product-item  h-full mx-4 relative hover:cursor-pointer">
      {/* type -> new | sale */}
      <div className="product-item-type absolute text-center top-0 right-0 w-24 flex flex-col z-[2]">
        <span
          className={clsx(
            type === 'sale'
              ? 'bg-lightGreen'
              : 'bg-lightPink',
            'text-white uppercase py-4 px-6 text-sm '
          )}
        >
          {type}
        </span>
      </div>
      {/* image */}
      <div
        className={clsx(
          'swiper-slide product-item-img w-full'
        )}
      >
        <Image
          src={img}
          width={img?.width}
          height={img?.height}
          alt={name}
          className="w-full"
        />
        <div className="product-item-overlay group absolute top-0 left-0 w-full h-full transition-all hover:bg-[rgba(34,34,34,0.7)] p-8 z-10">
          <Link href={`/product/${id}`}>
            <AiOutlineSearch className="absolute hidden group-hover:flex top-1/2 left-1/2 text-7xl -translate-x-1/2 -translate-y-1/2 text-white z-10" />
          </Link>
          <div className="product-item-options hidden group-hover:flex justify-evenly mb-8 absolute w-full bottom-0 left-1/2 -translate-x-1/2 z-10">
            {[
              {
                icon: (
                  <AiOutlineHeart className="bg-white text-[#222]" />
                ),
                name: 'heart',
              },
              {
                icon: (
                  <AiOutlineShoppingCart className="bg-pink text-white" />
                ),
                name: 'cart',
              },
            ].map((option, idx) => (
              <button
                key={idx}
                className={clsx(
                  option.name.includes('heart')
                    ? 'bg-white'
                    : 'bg-pink',
                  '!text-2xl w-16 h-16 flex justify-center items-center rounded-full overflow-hidden hover:opacity-50 transition-opacity'
                )}
              >
                {option?.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* info */}
      <div className="product-item-info mt-9 flex flex-col text-center text-[#222]">
        <Link href={`/product/${id}`}>
          <span className="text-2xl mb-2 font-tenor">
            {name}
          </span>
        </Link>
        <div className="product-item-cost flex justify-center items-center">
          <span className="text-[#999] line-through mr-2">
            {oldPrice}
          </span>
          <span className="text-xl">{price}</span>
        </div>
      </div>
    </div>
  );
};

export const ProductItems = () => {
  return (
    <motion.div
      layoutScroll
      style={{ overflow: 'scroll' }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        modules={[Navigation]}
        className="mySwiper animate-carousel  !overflow-x-scroll"
      >
        {PRODUCT_DATA?.map((product) => (
          <SwiperSlide
            key={product?.id}
            className="mb-10"
          >
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
