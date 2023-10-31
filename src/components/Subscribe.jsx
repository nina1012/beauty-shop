import Image from 'next/image';
import { Container } from './Container';
import InputField from './InputField';
import { Button } from './Button';
import subscribeDecor from '@/images/subscribe-img-decor.png';
import subscribeImage from '@/images/subscribe-img.png';
import clsx from 'clsx';

export function Subscribe({ className }) {
  return (
    <div
      className={clsx(
        'subscribe bg-lightBeige md:bg-white overflow-hidden',
        className
      )}
    >
      <Container className="">
        <div className="subscribe-form flex mx-4 flex-col-reverse md:flex-row md:items-center pt-12 md:pt-0 bg-lightBeige">
          <div className="subscribe-img relative md:w-[350px]">
            <Image
              src={subscribeImage}
              width={subscribeImage?.width}
              height={subscribeImage?.height}
              alt="Subscribe image"
              className="relative z-[1] md:max-w-full"
            />
            <div
              style={{
                backgroundImage: `url(${subscribeDecor.src})`,
              }}
              className="absolute top-0 -left-7 -md:translate-y-1/2 md:left-0 h-[450px] w-[520px] bg-contain bg:no-repeat -z-1"
            ></div>
          </div>
          <form className="text-[#222] z-10 relative">
            <h3 className="text-3xl md:text-[40px]">
              Stay in touch
            </h3>
            <p className="text-[#666] my-2">
              Nourish your skin with toxin-free cosmetic
              products.
            </p>
            <div className="form-row flex  mt-5 md:mt-8 flex-col md:flex-row !md:items-stretch md:w-full md:gap-2 md:h-16">
              <InputField
                type="email"
                label="Enter your email"
              />
              <Button className="w-full justify-center items-center md:w-2/6 md:h-full">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
