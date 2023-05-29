import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import LandingPage from '@/components/LandingPage';
const NavBar = dynamic(import('../components/navigator/NavigatorSitePublic'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    invoke('greet', { name: 'World' }).then(console.log).catch(console.error);
  }, []);
  return (
    <div
      className={`relative z-0 flex h-screen min-h-full flex-col justify-between ${inter.className}`}
    >
      {/**Navbar component */}
      <NavBar />
      {/**Banner Message */}
      <LandingPage />
      {/**Footer */}
      <Footer />
    </div>
  );
}
