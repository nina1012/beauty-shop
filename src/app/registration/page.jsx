import DetailBlock from '@/components/DetailBlock';
import InstaPhotos from '@/components/InstaPhotos';
import { SocialMedia } from '@/components/SocialMedia';
import { Subscribe } from '@/components/Subscribe';
import { Button } from '@/components/global/Button';
import Checkbox from '@/components/global/Checkbox';
import InputField from '@/components/global/InputField';
import { Container } from '@/components/layout/Container';
import Link from 'next/link';
import loginBg from '@/images/login-bg.png';
import profileDecor from '@/images/profile-decor.jpeg';
import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

function Registration() {
  return (
    <div className="registration mt-16 md:mt-28">
      <Container className="relative z-10">
        <FadeIn>
          <div
            className="registration-form py-9 px-4 m-auto md:p-16 max-w-[770px] bg-no-repeat bg-cover border-[1px] border-[#eee]"
            style={{
              backgroundImage: `url(${loginBg.src})`,
              backgroundPosition: '50%',
            }}
          >
            <form className="text-center">
              <h3 className="capitalize font-tenor mb-8 text-4xl">
                Register now
              </h3>
              <SocialMedia className="!justify-center" />
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <InputField
                  label="Enter your name"
                  type="type"
                  className="mb-2 md:mb-4"
                />
                <InputField
                  label="Enter your last name"
                  type="type"
                  className="mb-2 md:mb-4"
                />
                <InputField
                  label="Enter your phone"
                  type="text"
                  className="mb-2 md:mb-4"
                />
                <InputField
                  label="Enter your email"
                  type="email"
                  className="mb-2 md:mb-4"
                />
              </div>
              <div className="text-left">
                <div className="my-5 w-full ml-1 text-lg leading-[120%] capitalize">
                  Password
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <InputField
                    label="Enter your password"
                    type="password"
                    className="mb-2 md:mb-4"
                  />
                  <InputField
                    label="Confirm password"
                    type="password"
                    className="mb-2 md:mb-4"
                  />
                </div>
              </div>

              <Checkbox />
              <Button className="w-full">
                Registration
              </Button>
              <div className="buttons justify-between text-left leading-[170%] text-[#666] flex flex-col md:flex-row mt-5">
                <span>
                  Already have an account?
                  <Link
                    className="text-pink !ml-2"
                    href="/login"
                  >
                    Log in
                  </Link>
                </span>
              </div>
            </form>
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

export default function RegistrationPage() {
  return (
    <>
      <DetailBlock />
      <Registration />
      <Subscribe />
      <InstaPhotos />
    </>
  );
}
