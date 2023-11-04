import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import clsx from 'clsx';

import { Section } from './layout/Section';
import topCatDecor from '@/images/top-categories-decor.png';

export function TopCategories({ categories }) {
  return (
    <Section
      subHeading="Popular Collections"
      heading="Top Categories"
      className="top-categories [&>*]:max-w-full"
    >
      <div
        className={clsx(
          'top-categories-items flex flex-wrap justify-between -mx-5'
        )}
      >
        {categories?.map((category) => (
          <Link
            key={category?.categoryName}
            href="/categories"
            className="relative w-full font-lato mb-4 h-[345px] md:h-[355px] md:w-[calc(50%-8px)] lg:mb-2 lg:h-[500px] lg:w-[calc(33.3%-8px)] "
          >
            <Image
              src={category?.img.src}
              alt=""
              width={category?.img?.width}
              height={category?.img?.height}
              className="w-full h-full object-cover"
            />
            <div className="overlay-onHover opacity-0 hover:opacity-100 font-tenor hover:bg-[rgba(34,34,34,0.4)] absolute top-0 left-0 w-full h-full flex flex-col gap-3 text-center justify-center items-center transition-opacity">
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
