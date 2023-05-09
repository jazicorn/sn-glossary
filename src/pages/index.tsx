import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';

const NavBar = dynamic(import('../components/NavBarHome'), { ssr: false });
const NavFeature = dynamic(import('../components/NavBarFeature'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    invoke('greet', { name: 'World' }).then(console.log).catch(console.error);
  }, []);
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      {/**Navbar component */}
      <NavBar />
      {/**Feature component*/}
      <NavFeature />
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
