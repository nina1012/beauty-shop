import Image from 'next/image';
import Link from 'next/link';

import logo1 from '@/images/main-logo1.svg';
import logo2 from '@/images/main-logo2.svg';
import logo3 from '@/images/main-logo3.svg';
import logo4 from '@/images/main-logo4.svg';
import logo5 from '@/images/main-logo5.svg';

export default function MainLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <div className="main-logos flex justify-center items-center xl:justify-evenly pb-9 lg:pb-32 flex-wrap">
      {logos?.map((logo) => (
        <Link
          key={logo.src}
          href="/"
          className="max-w-[100px] lg:max-w-[110px] mb-6 mx-6"
        >
          <Image
            src={logo}
            width={logo?.width}
            height={logo?.height}
            alt="Logo"
            className="!w-full !h-full"
          />
        </Link>
      ))}
    </div>
  );
}
