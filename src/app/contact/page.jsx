import { Container } from '@/components/Container';
import DetailBlock from '@/components/DetailBlock';
import Discount from '@/components/Discount';
import InstaPhotos from '@/components/InstaPhotos';
import MainLogos from '@/components/MainLogos';
import { SocialMedia } from '@/components/SocialMedia';
import { CiClock2, CiMapPin } from 'react-icons/ci';
import { PiExamFill } from 'react-icons/pi';

import discountBg from '@/images/discount-bg3.jpeg';

function Map() {
  return (
    <div className="contacts-map">
      <iframe
        width="100%"
        height="450px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28983.22702991677!2d90.39607920093997!3d24.76450174668472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f08e1564b13%3A0xdf7da0a35592c079!2sChorpara%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1638519781775!5m2!1sen!2sbd"
      ></iframe>
    </div>
  );
}

function Details() {
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
    <Container className="relative !-md:mt-10">
      <div className="detail-block-items mt-8 flex flex-col flex-wrap z-[1] relative justify-between md:flex-row -md:mx-2 ">
        {details?.map(({ icon, info }) => (
          <div
            key={info}
            className="detail-block-item w-full mt-0 !mx-auto mb-3 max-w-[320px] md:max-w-[30%] flex items-center justify-between p-4 bg-lightPurple border-[1px] border-[#eee] "
          >
            <div className="detail-block-icon flex items-center relative justify-center w-14 h-12 mr-6 text-3xl">
              {icon}
              <div></div>
            </div>
            <div className="detail-block-info text-[#666]">
              {info}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export const metadata = {
  title: 'Contact | Beauty Shop',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
};

export default async function Contact() {
  return (
    <>
      <DetailBlock />
      <Details />
      <div className="contacts-info py-12">
        <Container className="">
          <div className="contacts-info-content flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20 md:justify-between">
            <div className="contacts-info-text">
              <h4 className="text-3xl mb-5 leading-[130%]">
                We take care of you
              </h4>
              <p className="text-[#666] leading-[170%] tracking-[0.15px] text-[15px]">
                Email us if you have any questions, we
                will be sure to contact you and find a
                solution. Also, our managers will help you
                choose the product that suits you best, at
                the best price. From year to year, the
                BeShop network develops and improves,
                taking into account all consumer needs and
                market trends. But for us, the concern
                remains that when coming to the BeShop
                store, customers do not have questions
                about the convenience and comfort of
                shopping, product quality and the level of
                professionalism of sales consultants.
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
        </Container>
      </div>
      <MainLogos />
      <Discount bgImg={discountBg} />
      <Map />
      <InstaPhotos />
    </>
  );
}
