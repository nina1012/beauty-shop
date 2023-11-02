import { Container } from '@/components/layout/Container';
import DetailBlock from '@/components/DetailBlock';
import InstaPhotos from '@/components/InstaPhotos';
import errorImg from '@/images/error-img.jpeg';
import Image from 'next/image';
import Link from 'next/link';

function ErrorPage() {
  return (
    <div className="error-page pt-16 mx-4">
      <Container>
        <div className="error-page-content flex flex-col justify-center md:flex-row md:items-center md:justify-evenly text-[#2f3237]">
          <div className="error-page-info md:w-[calc(50%-20px)] md:mr-16">
            <div className="error-page-title text-3xl mb-8">
              <span className="text-[100px] leading-[100%] md:text-[150px]">
                404
              </span>{' '}
              Page Not Found
            </div>
            <div className="error-page-subtitle mb-6 text-sm md:text-base">
              Please try Search or go back to{' '}
              <Link href="/" className="text-pink">
                Homepage
              </Link>
            </div>
          </div>
          <div className="error-page-img md:w-[calc(50%-20px)] relative">
            <Image
              src={errorImg}
              width={errorImg?.width}
              height={errorImg?.height}
              alt="Error image"
              className="max-w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <DetailBlock notFound={true} />
      <ErrorPage />
      <InstaPhotos />
    </>
  );
}
