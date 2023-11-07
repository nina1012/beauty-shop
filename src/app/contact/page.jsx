import { Container } from '@/components/layout/Container';
import DetailBlock from '@/components/DetailBlock';
import Discount from '@/components/layout/Discount';
import InstaPhotos from '@/components/InstaPhotos';
import MainLogos from '@/components/MainLogos';
import { SocialMedia } from '@/components/SocialMedia';
import { CiClock2, CiMapPin } from 'react-icons/ci';
import { PiExamFill } from 'react-icons/pi';

import discountBg from '@/images/discount-bg3.jpeg';
import InputField from '@/components/global/InputField';
import { Button } from '@/components/global/Button';
import { InfoBoxes } from '@/components/InfoBoxes';
import { FadeIn } from '@/components/FadeIn';

function Map() {
  return (
    <div className="contacts-map">
      <iframe
        width="100%"
        height="450px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30144.14764475469!2d-73.97335930158819!3d40.780089088709715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bf08488f6b%3A0x618706a9142daa0d!2sUpper%20East%20Side%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2srs!4v1698404571208!5m2!1sen!2srs"
      ></iframe>
    </div>
  );
}

export const metadata = {
  title: 'Contact | Beauty Shop',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
};

export default async function Contact() {
  const details = [
    {
      icon: <CiMapPin />,
      info: '27 Division St, New York, NY 10002, USA',
    },
    {
      icon: <PiExamFill />,
      info: '+1 345 99 71 345 info@beshop.com',
    },
    {
      icon: <CiClock2 />,
      info: 'Mon - Fri: 9 am - 6 pm Sat - Sun: Holiday',
    },
  ];
  return (
    <>
      <DetailBlock />
      <InfoBoxes details={details} />
      <div className="contacts-info pt-16 pb-12 md:pt-10">
        <Container className="">
          <FadeIn>
            <div className="contacts-info-content flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20 md:justify-between">
              <div className="contacts-info-text">
                <h4 className="text-3xl mb-5 leading-[130%]">
                  We take care of you
                </h4>
                <p className="text-[#666] leading-[170%] tracking-[0.15px] text-[15px]">
                  Email us if you have any questions, we
                  will be sure to contact you and find a
                  solution. Also, our managers will help
                  you choose the product that suits you
                  best, at the best price. From year to
                  year, the BeShop network develops and
                  improves, taking into account all
                  consumer needs and market trends. But
                  for us, the concern remains that when
                  coming to the BeShop store, customers do
                  not have questions about the convenience
                  and comfort of shopping, product quality
                  and the level of professionalism of
                  sales consultants.
                </p>
              </div>
              <div className="socials flex flex-col justify-center">
                <div>Find us here:</div>
                <SocialMedia
                  className="gap-2"
                  invert={false}
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
      <MainLogos />
      <Discount
        bgImg={discountBg}
        subheading="Write to us"
        heading="Leave a message"
      >
        <p className="max-w-[420px] text-[#666] text-base leading-[150%] ml-auto md:ml-0">
          Nourish your skin with toxin-free cosmetic
          products. With the offers that you can&apos;t
          refuse.
        </p>
        <form className="max-w-[400px] gap-1 mt-10 flex flex-col items-end ml-auto md:ml-0 !md:mr-auto !md:justify-start md:gap-4">
          <InputField
            type="text"
            label="Enter your name"
            className=""
          />
          <InputField
            type="email"
            label="Enter your email"
            className=""
          />
          <Button className="w-[140px] !flex !items-center !justify-center text-center md:self-start">
            Send
          </Button>
        </form>
      </Discount>
      <Map />
      <InstaPhotos />
    </>
  );
}
