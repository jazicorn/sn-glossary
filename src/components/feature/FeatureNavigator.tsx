// import Image from 'next/image';
// import Link from 'next/link';
import Search from './FeatureSearch';
import CustomList from './FeatureList';
import FlashCards from './FeatureCards';
import Desktop from './FeatureDesktop';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

{/* <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' /> */}


export default function Home() {
  const [showComponent, setShowComponent] = useState(<Search />);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  function handleMoreClick() {
    setShowMoreFeatures(!showMoreFeatures);
  }

  return (
    <div className='flex basis-full flex-col'>
      {/**<!--Tabs navigation-->*/}
      <div className='pb-2 pt-1 lg:m-full grid h-fit flex-initial grow-0 border-b-2 border-t-4 border-blue-300 '>
        {/**Title */}
        <h1 className='m-2 place-self-center border-b-2 px-2 text-xl lg:m-1 lg:text-2xl'>
          Features
        </h1>
        {/**Tabs */}
        <div className='w-full grid-row-2 lg:grid-row-1 grid grid-cols-3 justify-items-center gap-3 place-self-center text-center lg:grid-cols-4 lg:gap-1'>
          <div className='custom-feature-bar-tabs mr-1  row-span-1 col-start-2 col-end-2 text-sm lg:col-start-2 lg:col-end-4'>
            <Link
              href='/glossary'
              target='_blank'
              className='text-base border-b border-transparent truncate'>
              Public Glossary
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' color={'#293e40'} className='pl-1'/>
            </Link>
            <p className='text-sm text-sn-light'>Try It Out</p>
          </div>
          {/**Divider */}
          <div className='w-full row-span-2 col-span-4'>
            <hr className='my-1 h-0.5 bg-transparent bg-gradient-to-r from-transparent via-sn-dark to-transparent opacity-25 dark:opacity-100'/>
          </div>
          {/**Coming Features */}
          <button onClick={() => handleMoreClick()} className='w-fit ml-1 italic row-span-2 col-span-4 border-b-2 border-rose-100'>
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
          <div className='w-full grid col-span-3 lg:col-span-4'>
            {showMoreFeatures &&
              <div className='w-auto flex flex-col lg:flex-row place-content-center place-items-center'>
                <div className='custom-feature-bar-tabs text-sm'>
                  <button
                    onClick={() => setShowComponent(<Search />)}
                    className='border-b border-transparent px-1 focus:border-blue-200 :border-blue-200 '
                  >
                    Word Search
                  </button>
                  <p className='text-xs italic text-yellow-500'>*In Progress*</p>
                </div>
                <div className='custom-feature-bar-tabs text-sm'>
                  <button
                    onClick={() => setShowComponent(<CustomList />)}
                    className='border-b border-transparent px-1 focus:border-blue-200'
                  >
                    Customized List
                  </button>
                  <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
                </div>
                <div className='custom-feature-bar-tabs text-sm lg:col-span-1'>
                  <button
                    onClick={() => setShowComponent(<FlashCards />)}
                    className='border-b border-transparent px-1 focus:border-blue-200'
                  >
                    Flashcards
                  </button>
                  <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
                </div>
                <div className='custom-feature-bar-tabs text-sm lg:col-span-1'>
                  <button
                    onClick={() => setShowComponent(<Desktop />)}
                    className='border-b border-transparent px-1 focus:border-blue-200'
                  >
                    Desktop Support
                  </button>
                  <p className='text-xs italic text-rose-400'>*Coming Soon*</p>
                </div>
              </div>
            }
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
