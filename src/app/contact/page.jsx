import { Container } from '@/components/Container';
import DetailBlock from '@/components/DetailBlock';
import InstaPhotos from '@/components/InstaPhotos';
import MainLogos from '@/components/MainLogos';
import { SocialMedia } from '@/components/SocialMedia';

export const metadata = {
  title: 'Contact | Beauty Shop',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
};

export default async function Contact() {
  return (
    <>
      <DetailBlock />
      <div className="contacts-info py-16 md:pt-28 xl:pt-48">
        <Container className="">
          <div className="contacts-info-content flex flex-col md:flex-row md:gap-10 md:justify-between">
            <div className="contacts-info-text">
              <h4 className="text-3xl mb-5 leading-[130%]">
                We take care of you
              </h4>
              <p className="text-[#666] leading-[170%]">
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
      <InstaPhotos />
    </>
  );
}
