import { Inter } from 'next/font/google';
// import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import dynamic from 'next/dynamic';
const NavBar = dynamic(import('../components/navigator/NavigatorSitePublic'), {
  ssr: false,
});
import PublicGlossary from '@/components/glossary/PublicGlossary';

const inter = Inter({ subsets: ['latin'] });

// Terms Public Directory
export default function Glossary() {
  return (
    <div
      className={`flex h-screen min-h-screen w-full grow flex-col bg-slate-100 ${inter.className} bg-no-repeat`}
    >
      {/**Navbar component */}
      <NavBar />
      {/**<!-- content goes here --> */}
      <div className='flex grow flex-row bg-white bg-gradient-to-r from-gray-100 to-blue-100 text-center'>
        <div className='flex grow flex-col rounded-xl xl:flex xl:flex-row'>
          {/** React Component that List all Terms from selected list */}
          {/**Replace {List} title with list name */}
          <div className='mx-5 mb-5 mt-1 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-2 xl:mr-5 xl:h-auto xl:grow'>
            {/******************* */}
            <PublicGlossary />
          </div>
        </div>
      </div>
    </div>
  );
}
