import { Inter } from 'next/font/google';
// import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
const NavBar = dynamic(import('../components/NavigatorSitePublic'), {
  ssr: false,
});
const CallToAction = dynamic(import('../components/CallToAction'), {
  ssr: false,
});
const NavFeature = dynamic(import('../components/feature/NavigatorFeature'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

// Terms Public Directory
export default function Features() {
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      {/**Navbar component */}
      <NavBar />

      {/**CalltoAction component */}
      <CallToAction />

      {/**Feature component*/}
      <NavFeature />

      {/**Footer */}
      <Footer />
    </div>
  );
}
