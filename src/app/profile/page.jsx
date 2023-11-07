import { Container } from '@/components/layout/Container';
import DetailBlock from '@/components/DetailBlock';
import InstaPhotos from '@/components/InstaPhotos';
import Image from 'next/image';
import profileDecor from '@/images/profile-decor.jpeg';
import { Tabs } from '@/components/Tabs';
import { Subscribe } from '@/components/Subscribe';
import { PRODUCT_DATA } from '@/components/product/ProductsData';
import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';

function ViewedProducts({ products }) {
  return (
    <div className="viewed-products mt-5 lg:mt-0">
      <h5 className="capitalize pb-2 border-b-2 text-2xl leading-[115%] border-b-[#222]">
        You have viewed
      </h5>
      <div className="viewed-products">
        {products?.map((product) => (
          <div
            className="viewed-products-item relative grid grid-cols-[60px,1fr] gap-x-5 items-center mt-5"
            key={product.id}
          >
            <div className="viewed-products-item-img">
              <Link
                href={`/product/${product?.id}`}
                className="h-[72px] w-16 "
              >
                <Image
                  src={product?.img}
                  width={product?.img?.width}
                  height={product?.img?.height}
                  alt={`${product?.name} image`}
                  className="!w-full !h-full object-cover"
                />
              </Link>
            </div>
            <div className="viewed-products-item-info flex flex-col text-[#222] text-lg w-4/6">
              <Link
                href={`/product/${product?.id}`}
                className="viewed-products-item-title mb-1"
              >
                {product?.name}
              </Link>
              <span className="text-sm text-[#999]">
                {product?.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MyProfile() {
  return (
    <div className="profile pt-16 relative">
      <Container className="relative z-10">
        <FadeIn>
          <div className="profile-content flex flex-col-reverse lg:flex-row lg:gap-x-16">
            <aside className="profile-aside mt-16 md:mt-0">
              <Subscribe className="lg:hidden z-[5]" />
              <ViewedProducts products={PRODUCT_DATA} />
            </aside>
            <div className="profile-main lg:w-full">
              <div className="tab-wrap">
                <Tabs
                  tabs={[
                    'My info',
                    'My orders',
                    'Wishlist',
                  ]}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
      <Image
        src={profileDecor}
        width={profileDecor?.width}
        height={profileDecor?.height}
        alt="decor"
        className="hidden md:block absolute top-[3.5%] -left-3 w-[30%] -z-1"
      />
    </div>
  );
}

export default function Profile() {
  return (
    <>
      <DetailBlock />
      <MyProfile />
      <InstaPhotos />
    </>
  );
}
