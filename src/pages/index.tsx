import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';
import Footer from '../components/Footer'
import LandingPage from '@/components/LandingPage';
const NavBar = dynamic(import('../components/NavigatorSitePublic'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    invoke('greet', { name: 'World' }).then(console.log).catch(console.error);
  }, []);
  return (
    <div className={`h-screen min-h-full flex flex-col justify-between ${inter.className}`}>
      {/**Navbar component */}
      <NavBar />
      {/**Banner Message */}
      <LandingPage />
      {/**Footer */}
      <Footer/>
    </div>
  );
}
