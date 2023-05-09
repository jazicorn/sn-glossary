// import Image from 'next/image';
// import Link from 'next/link';
import Search from './NavBarFeatureSearch';
import CustomList from './NavBarFeatureList';
import FlashCards from './NavBarFeatureCards';
import Desktop from './NavBarFeatureDesktop';
import React, { useState } from 'react';

export default function Home() {
  const [showComponent, setShowComponent] = useState(<Search />);

  return (
    <div className='flex basis-full flex-col'>
      {/**<!--Tabs navigation-->*/}
      <div className='md:m-full grid h-fit flex-initial grow-0 border-b-2 border-t-4 border-blue-300 pb-2 pt-1 md:h-36'>
        {/**Title */}
        <h1 className='m-2 place-self-center border-b-2 px-2 text-xl md:m-1 md:text-2xl'>
          Features
        </h1>
        {/**Tabs */}
        <div className='grid-row-2 md:grid-row-1 grid grid-cols-3 justify-items-center gap-3 place-self-center text-center md:grid-cols-4 md:gap-1'>
          <div className='custom-feature-bar-tabs col-start-2 col-end-2 text-sm md:col-start-1 md:col-end-1'>
            <button
              onClick={() => setShowComponent(<Search />)}
              className='border-b border-transparent px-1 focus:border-blue-200'
            >
              Word Search
            </button>
            <p className='text-xs italic text-yellow-500'>*In Progress*</p>
          </div>
          <div className='custom-feature-bar-tabs col-start-1 text-sm md:col-start-2'>
            <button
              onClick={() => setShowComponent(<CustomList />)}
              className='border-b border-transparent px-1 focus:border-blue-200'
            >
              Customized List
            </button>
            <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
          </div>
          <div className='custom-feature-bar-tabs col-start-2 text-sm md:col-start-3'>
            <button
              onClick={() => setShowComponent(<FlashCards />)}
              className='border-b border-transparent px-1 focus:border-blue-200'
            >
              Flashcards
            </button>
            <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
          </div>
          <div className='custom-feature-bar-tabs col-start-3 text-sm md:col-start-4'>
            <button
              onClick={() => setShowComponent(<Desktop />)}
              className='border-b border-transparent px-1 focus:border-blue-200'
            >
              Desktop Support
            </button>
            <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
          </div>
        </div>
      </div>
      {/** <!--Tabs content--> */}
      <div className='bg-grayish-100 flex h-full w-full flex-initial flex-row place-content-center text-center'>
        {showComponent}
      </div>
    </div>
  );
}
