import { Inter } from 'next/font/google';
import dynamic from "next/dynamic";
const NavBar = dynamic(import("../components/HomeNavigator"), { ssr: false });
const NavFeature = dynamic(import("../components/FeatureNavigator"), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      {/**Navbar component */}
      <NavBar/>
      {/**Feature component*/}
      <NavFeature/>
      {/**<!----footer---> */}
      <footer className='bg-secondary-100 text-center dark:bg-secondary-600'>
        <div className='bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200'>
          © 2023 Copyright:
          <a className='pl-1 text-blue-400 dark:text-blue-300' href='#'>
            SN-Glossary
          </a>
        </div>
      </footer>
    </div>
  );
}
