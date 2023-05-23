import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';
import Footer from '../components/Footer'
const NavBar = dynamic(import('../components/NavigatorSitePublic'), { ssr: false });
const CallToAction = dynamic(import('../components/CallToAction'), { ssr: false });
const NavFeature = dynamic(import('../components/feature/NavigatorFeature'), {
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

      {/**CalltoAction component */}
      <CallToAction/>
      
      {/**Feature component*/}
      <NavFeature />

      {/**Footer */}
      <Footer />
    </div>
  );
}
