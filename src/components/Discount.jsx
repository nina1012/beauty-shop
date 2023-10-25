import { Button } from './Button';
import { Container } from './Container';
import linkBg from '@/images/link-bg.png';

export default function Discount({ bgImg }) {
  return (
    <div className="discount">
      <div
        style={{
          backgroundImage: `url(${
            bgImg.src || discountBg.src
          })`,
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
