import { Container } from '@/components/layout/Container';
import DetailBlock from '@/components/DetailBlock';
import Image from 'next/image';
import profileDecor from '@/images/profile-decor.jpeg';
import { TableCart } from '@/components/TableCart';
import InputField from '@/components/global/InputField';
import { Button } from '@/components/global/Button';
import { SocialMedia } from '@/components/SocialMedia';
import InstaPhotos from '@/components/InstaPhotos';

function Cart() {
  return (
    <div className="cart mt-16 md:mt-28">
      <Container className="relative z-10">
        <TableCart />
        <div className="cart-bottom mt-16 md:mt-28 text-[#222] grid xl:grid-cols-2 xl:gap-8 xl:justify-between">
          <div className="promo xl:max-w-[700px] ">
            <form className="promo-form [&>*]:h-16 mb-12 flex flex-col md:flex-row md:gap-4">
              <div className="form-box mb-2 md:mb-0 md:w-[calc(100%-200px)]">
                <InputField
                  type="text"
                  label="Enter your code"
                  className="border-[1px] border-[#eee] xl:w-full"
                />
              </div>
              <Button
                invert={true}
                type="submit"
                className="[&>*]:flex [&>*:nth-of-child(1)]:pl-2 [&>*]:items-center w-full !flex !items-center !justify-center md:!inline-flex md:w-[250px] !md:h-full"
              >
                Apply code
              </Button>
            </form>
            <h6 className="text-lg">
              How To Get A Promo Code?
            </h6>
            <p className="w-full max-w-full lg:w-10/12 mt-3 text-sm text-[#666] leading-[170%]">
              Follow our news on the website, as well as
              subscribe to our social networks. So you
              will not only be able to receive up-to-date
              codes, but also learn about new products and
              promotional items.
            </p>
            <div className="mt-5">
              <span>Find us here:</span>
              <SocialMedia />
            </div>
          </div>
          <div className="total xl:justify-self-end md:mt-10 md:p-16 p-4 mt-8 w-full xl:w-[490px] bg-lightPurple border-[1px] border-b-[#eee] xl:mt-0">
            <div className="row mb-6 flex justify-between pb-4 text-base border-b-[1px] border-[#eee]">
              Goods on{' '}
              <span className="text-[#999]">$200.85</span>
            </div>
            <div className="row mb-6 flex justify-between pb-4 text-base border-b-[1px] border-b-[#222]">
              Discount on promo code
              <span className="text-[#999]">No</span>
            </div>
            <div className="row mb-6 flex justify-between pb-4 text-2xl">
              Total: <span>$200.85</span>
            </div>
            <Button href="/checkout">Checkout</Button>
          </div>
        </div>
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

export default function CartPage() {
  return (
    <>
      <DetailBlock />
      <Cart />
      <InstaPhotos />
    </>
  );
}
