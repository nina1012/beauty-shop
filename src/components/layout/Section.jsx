import clsx from 'clsx';
import { Container } from './Container';
import { FadeIn } from '../FadeIn';

export function Section({
  as: Section = 'section',
  className,
  children,
  heading,
  subHeading,
}) {
  return (
    <Section
      className={clsx(
        'section py-14 md:py-[110px]',
        className
      )}
    >
      <Container>
        <FadeIn>
          <div className="section-top mb-5 md:mb-14 font-tenor  text-center text-darkGray">
            <span className="font-saint text-[40px] md:text-5xl capitalize text-pink">
              {subHeading}
            </span>
            <h2 className="text-[40px] md:text-5xl leading-[42px] capitalize lg:text-6xl my-5">
              {heading}
            </h2>
            <p className="max-w-[450px] mx-auto mt-8 text-sm md:text-base text-gray-600">
              Nourish your skin with toxin-free cosmetic
              products. With the offers that you
              can&apos;t refuse.
            </p>
          </div>
          {children}
        </FadeIn>
      </Container>
    </Section>
  );
}
