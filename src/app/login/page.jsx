import DetailBlock from '@/components/DetailBlock';
import InstaPhotos from '@/components/InstaPhotos';
import { SocialMedia } from '@/components/SocialMedia';
import { Subscribe } from '@/components/Subscribe';
import { Button } from '@/components/global/Button';
import Checkbox from '@/components/global/Checkbox';
import InputField from '@/components/global/InputField';
import { Container } from '@/components/layout/Container';
import loginBg from '@/images/login-bg.png';
import Link from 'next/link';

function Login() {
  return (
    <div className="login mt-16 md:mt-28">
      <Container>
        <div
          className="login-form py-9 px-4 m-auto md:p-16 max-w-[570px] bg-no-repeat bg-cover border-[1px] border-[#eee]"
          style={{
            backgroundImage: `url(${loginBg.src})`,
            backgroundPosition: '50%',
          }}
        >
          <form className="text-center">
            <h3 className="capitalize mb-8 text-4xl">
              Log in with
            </h3>
            <SocialMedia className="!justify-center" />
            <InputField
              label="Enter your email or nickname"
              type="email"
              className="mb-2 md:mb-4"
            />
            <InputField
              label="Enter your password"
              type="password"
              className="mb-2 md:mb-4"
            />
            <Checkbox />
            <Button className="w-full">Log in</Button>
            <div className="buttons justify-between text-left leading-[170%] text-[#666] flex flex-col md:flex-row mt-2">
              <span>
                No account?
                <Link
                  className="text-pink !ml-2"
                  href="/register"
                >
                  Register now
                </Link>
              </span>
              <Link className="text-pink" href="/">
                Lost your password?
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <DetailBlock />
      <Login />
      <Subscribe />
      <InstaPhotos />
    </>
  );
}
