import { Inter } from 'next/font/google';
import { SignIn } from "@clerk/nextjs";
import dynamic from 'next/dynamic';
const Home = dynamic(import('../../components/navigator/NavigatorHome'), {
  ssr: false,
});
const inter = Inter({ subsets: ['latin'] });

const SignInPage = () => (
  <article className={`custom-background-2 relative z-0 flex h-screen min-h-full flex-col justify-stretch ${inter.className}`}>
    <Home/>
    <main className='relative h-full w-full flex flex-col place-items-center place-content-center'>
      <SignIn path="/sign-in" routing="path" signInUrl="/sign-in" />
    </main>
  </article>
);

export default SignInPage;