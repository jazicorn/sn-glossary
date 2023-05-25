// import Image from 'next/image';
// import Link from 'next/link';
import Search from './FeatureSearch';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faChevronUp,
  faBolt,
  faDesktop,
  faRectangleList,
  faImages
} from '@fortawesome/free-solid-svg-icons';

{/* <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' /> */}


export default function NavigatorFeature() {
  const [showMoreFeatures, setShowMoreFeatures] = useState((window.innerWidth > 1024) ? true : false );
  function handleMoreClick() {
    setShowMoreFeatures(!showMoreFeatures);
  }
  return (
    <div className='custom-background-2 flex basis-full flex-col'>
      <div className='pb-2 lg:m-full grid h-fit flex-initial grow-0 '>
        {/**Title */}
        <h1 className='m-2 place-self-center border-b-2 px-2 text-xl font-semibold text-slate-700 lg:m-1 lg:text-3xl'>
          Features
        </h1>
        {/**Tabs */}
        <div className='w-full grid-row-2 lg:grid-row-1 grid grid-cols-3 justify-items-center gap-3 place-self-center text-center lg:grid-cols-4 lg:gap-1'>
          <div className='custom-feature-bar-tabs mr-1 row-span-1 col-start-2 col-end-2 lg:col-start-2 lg:col-end-4'>
            <Link
              href='/glossary'
              className='truncate ml-1 border-b border-transparent hover:text-gray-400'>
              <span className='ml-1 text-lg hover:italic'>Public Glossary</span>
              <p className='text-sm text-sn-light'>Try It Out</p>
            </Link>
            
          </div>
          {/**Divider */}
          <div className='w-full row-span-2 col-span-4'>
            <hr className='my-1 h-0.5 bg-transparent bg-gradient-to-r from-transparent via-sn-dark to-transparent opacity-25 dark:opacity-100'/>
          </div>
          {/**More Features */}
          <button onClick={() => handleMoreClick()} className='w-fit ml-1 italic row-span-2 col-span-4 '>
            <span className='mr-1'>
              <FontAwesomeIcon
              icon={faBolt}
              size='sm'
              color={'#F5BE49'}
            />
            </span>
              More Features
            <span className='ml-2'>
              {showMoreFeatures ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size='sm'
                  color={'#334155'}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size='sm'
                  color={'#334155'}
                />
              )}
            </span>
          </button>
          {/**More Features */}
          <div className='w-full grid col-span-3 lg:col-span-4'>
            {showMoreFeatures &&
              <div className='w-auto lg:pt-2 flex flex-col lg:flex-row place-content-center place-items-center'>
                <div className='w-auto mb-4 lg:mb-2 mx-2 truncate text-sm '>
                  <button
                    className='flex flex-col px-1'
                  >
                    <FontAwesomeIcon icon={faRectangleList} size='lg' color={'#334155'} className='mr-1 mb-1' />
                    <span>
                      <span className='mx-1'>Customized List</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' color={'#293e40'} className='pl-1' />
                    </span>
                  </button>
                  <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
                </div>
                <div className='w-auto mb-4 lg:mb-2 mx-2 truncate text-sm'>
                  <button
                    className='flex flex-col px-1'
                  >
                    <FontAwesomeIcon icon={faImages} size='lg' color={'#334155'} className='mr-1 mb-1'/>
                    <span className=''>
                      <span className='mx-1'>Flashcards</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' color={'#293e40'} className='pl-1' />
                    </span>
                  </button>
                  <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
                </div>
                <div className='w-auto mb-4 lg:mb-2 mx-2 truncate text-sm'>
                  <button
                    className='flex flex-col px-1 truncate'
                  >
                    <FontAwesomeIcon icon={faDesktop} size='lg' color={'#334155'} className='mr-1 mb-1'/>
                    <span className=''>
                      <span className='mx-1'>Desktop Support</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' color={'#293e40'} className='pl-1' />
                    </span>
                  </button>
                  <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {/**Divider */}
      <div className='w-full row-span-2 col-span-4'>
        <hr className=' h-0.5 bg-transparent bg-gradient-to-r from-transparent via-sn-dark to-transparent opacity-25 dark:opacity-100'/>
      </div>
      {/** <!--Tabs content--> */}
      <div className='mt-4 flex h-full w-full flex-initial flex-row place-content-center text-center'>
        <Search />
      </div>
    </div>
  );
}
