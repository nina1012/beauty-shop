import { FadeIn } from '../FadeIn';
import { Container } from './Container';
import linkBg from '@/images/link-bg.png';

export default function Discount({
  bgImg,
  subheading,
  heading,
  extraHeading = '',
  children,
}) {
  return (
    <div className="discount bg-lightBeige">
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundImage: `url(${
            bgImg.src || discountBg.src
          })`,
        }}
        className="main-block relative z-1 min-h-screen flex items-center justify-start w-full h-full py-[100px] bg-no-repeat bg-cover bg-center z-1"
      >
        <Container
          className={
            'lg:px-10 text-left text-darkGray z-[1] md:text-right font-lato'
          }
        >
          <FadeIn>
            <div className="max-w-[465px] text-right md:text-left ml-auto">
              <span className="text-[45px] md:text-5xl font-saint leading-[60px] text-pink capitalize">
                {subheading}
              </span>
              <h2 className="text-6xl	md:text-[83px] mt-1 mb-8 capitalize">
                {heading}{' '}
                <span
                  style={{
                    backgroundImage: `url(${linkBg.src})`,
                  }}
                  className="text-pink relative bg-no-repeat bg-contain bg-center"
                >
                  {extraHeading}
                </span>
              </h2>
              {children}
            </div>
          </FadeIn>
        </Container>
      </div>
    </div>
  );
}
