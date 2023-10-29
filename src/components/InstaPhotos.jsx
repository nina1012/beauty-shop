import Image from 'next/image';
import Link from 'next/link';

import instaPhoto1 from '@/images/insta-photo1.jpeg';
import instaPhoto2 from '@/images/insta-photo2.jpg';
import instaPhoto3 from '@/images/insta-photo3.jpg';
import instaPhoto4 from '@/images/insta-photo4.jpg';
import instaPhoto5 from '@/images/insta-photo5.jpg';
import instaPhoto6 from '@/images/insta-photo6.jpg';
import { CiInstagram } from 'react-icons/ci';

export default function InstaPhotos() {
  const instaPhotos = [
    instaPhoto1,
    instaPhoto2,
    instaPhoto3,
    instaPhoto4,
    instaPhoto5,
    instaPhoto6,
  ];
  return (
    <div className="insta-photos mt-16 md:mt-28 grid grid-cols-2 md:grid-cols-3">
      {instaPhotos?.map((photo) => (
        <Link
          href="/"
          key={photo}
          className="relative w-full h-full"
        >
          <Image
            src={photo}
            width={photo?.width}
            height={photo?.height}
            alt="Insta photo"
            className="w-full h-full"
          />
          <div className="overlay-onHover opacity-0 hover:opacity-100 hover:bg-[rgba(34,34,34,0.4)] absolute top-0 left-0 w-full h-full flex flex-col gap-3 text-center justify-center items-center transition-all">
            <span className="text-white uppercase">
              <CiInstagram className="w-full text-7xl" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
