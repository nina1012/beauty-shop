'use client';
import { Container } from '@/components/layout/Container';
import DetailBlock from '@/components/DetailBlock';
import Image from 'next/image';
import profileDecor from '@/images/profile-decor.jpeg';
import { Button } from '@/components/global/Button';
import { PiMagnifyingGlass } from 'react-icons/pi';
import InputField from '@/components/global/InputField';
import { Subscribe } from '@/components/Subscribe';
import { FAQDisclosure } from '@/components/FAQDisclosure';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import InstaPhotos from '@/components/InstaPhotos';
import { FadeIn } from '@/components/FadeIn';

function AskedQuestions() {
  return (
    <div className="asked-questions pt-16 md:pt-28">
      <Container className="relative z-10">
        <FadeIn>
          <div className="faq-search mb-10 md:mb-12">
            <form className="flex justify-between w-full">
              <div className="flex flex-col md:flex-row w-full md:gap-4">
                <div className="mb-2 w-full md:w-[calc(100%-200px] md:mb-0 md:justify-center">
                  <InputField
                    label="Search"
                    type="text"
                    className="border-[1px] border-[#eee]"
                  />
                </div>
                <Button
                  className="[&>*]:flex [&>*:nth-of-child(1)]:pl-2 [&>*]:items-center w-full !flex !items-center !justify-center md:!inline-flex md:w-[194px] md:h-full"
                  type="submit"
                >
                  <PiMagnifyingGlass /> Search
                </Button>
              </div>
            </form>
          </div>
          <div className="faq-items relative">
            <FAQDisclosure />
          </div>
          <div className="faq-more mt-16">
            <Link
              href={`/faq`}
              className="flex gap-2 uppercase group items-center text-sm text-pink transition-all origin-center"
            >
              Show More
              <AiOutlineArrowRight className="group-hover:translate-x-2 transition-all" />
            </Link>
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

export default function Faq() {
  return (
    <>
      <DetailBlock />
      <AskedQuestions />
      <Subscribe className="mt-10 md:mt-28 !px-0" />
      <InstaPhotos />
    </>
  );
}
