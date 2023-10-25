import Image from 'next/image';
import Link from 'next/link';

import instaPhoto1 from '@/images/insta-photo1.jpeg';
import instaPhoto2 from '@/images/insta-photo2.jpg';
import instaPhoto3 from '@/images/insta-photo3.jpg';
import instaPhoto4 from '@/images/insta-photo4.jpg';
import instaPhoto5 from '@/images/insta-photo5.jpg';
import instaPhoto6 from '@/images/insta-photo6.jpg';

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
          className="w-full h-full"
        >
          <Image
            src={photo}
            width={photo?.width}
            height={photo?.height}
            alt="Insta photo"
            className="w-full h-full"
          />
        </Link>
      ))}
    </div>
  );
}
