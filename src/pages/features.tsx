import { Inter } from 'next/font/google';
// import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import dynamic from 'next/dynamic';
const NavBar = dynamic(import('../components/NavigatorSitePublic'), { ssr: false });
import FeatureList from '@/components/feature/FeatureList';

const inter = Inter({ subsets: ['latin'] });

// Terms Public Directory
export default function Features() {
  return (
    <div
      className={`flex h-screen min-h-screen w-screen flex-col bg-slate-100 xl:grow ${inter.className} bg-no-repeat `}
    >
      {/**Navbar component */}
      <NavBar />
      {/**<!-- content goes here --> */}
      <div className='flex grow flex-row bg-white bg-gradient-to-r from-gray-100 to-blue-100 text-center'>
        <div className='flex grow flex-col rounded-xl xl:flex xl:flex-row'>
          {/** React Component that List all Terms from selected list */}
          {/**Replace {List} title with list name */}
          <div className='pb-1 my-5 ml-2 mr-5 h-auto w-auto grow rounded-xl border bg-transparent '>
            {/******************* */}
            <FeatureList />
          </div>
        </div>
      </div>
    </div>
  );
}