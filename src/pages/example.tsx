import { Inter } from 'next/font/google';
import Menu from '@/components/dashboard/menu/ListMenu';
import Terms from '@/components/dashboard/terms/ListTerms';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
const NavBar = dynamic(import('../components/NavigatorSitePublic'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

// Admin Dashboard to add terms to glossary
export default function Example() {
  return (
    <div
      className={`flex h-screen min-h-screen w-screen flex-col bg-slate-100 xl:grow ${inter.className} bg-no-repeat `}
    >
      {/**<!-- navbar -->*/}
      <NavBar/>
      {/**<!-- content goes here --> */}
      <div className='flex grow flex-row bg-white bg-gradient-to-r from-gray-100 to-blue-100 text-center'>
        <div className='flex grow flex-col rounded-xl xl:flex xl:flex-row'>
          {/**List Menu */}
          <Menu />
          {/**Terms */}
          <Terms />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
