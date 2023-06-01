import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { GlossaryContextType } from '../../../lib/types';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const PublicTerm = ({ term }: { term: GlossaryContextType }) => {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const [favorite, setFavorite] = useState(false);
  function getfavorite() {
    setFavorite(!favorite);
  }

  return (
    <div>
      <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'>
        <div className='mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1'>
          
          {/**Line: Term Definition */}
          <div className='content-left grow flex flex-col xl:flex-row rounded border border-gray-300 text-sm leading-tight tracking-tighter'>
            {/**Star Favorite*/}
            <div className='flex flex-row border-b border-blue-300 xl:border-b-0'>
              <button key='term-index' onClick={getfavorite} className='border-r xl:border-r-0 border-blue-300 w-fit px-2 flex flex-col justify-center'>
                {!favorite ? <FontAwesomeIcon
                  icon={faStar}
                  size='lg'
                  color={'#334155'}
                /> : <FontAwesomeIcon
                  icon={faStarSolid}
                  size='lg'
                  color={'#334155'}
                />
                }
              </button>
              <div
                key={term.name}
                className='w-full xl:w-24 xl:border-r-2 xl:border-blue-300 bg-slate-200 p-0.5 text-center focus:border-2 focus:border-blue-400 focus:outline-none'
              >
                {term.name}
              </div>
            </div>
            <div className='flex flex-row w-full'>
              <div
                key={term.def}
                className='w-full self-center bg-gray-100 px-1 py-1 text-left'
                placeholder='Definition'
              >
                {term.def}
              </div>
              {/** Expand/Collpase*/}
              <button
                key='showMore'
                className=' px-2 '
                onClick={() => handleMoreClick()}
              >
                {showMore ? (
                  <FontAwesomeIcon
                    icon={faChevronCircleUp}
                    size='lg'
                    color={'#334155'}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    size='lg'
                    color={'#334155'}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**More Info */}
      {showMore && (
        <div className='custom-term-details mx-2 flex flex-col rounded bg-gray-200 p-1'>
          {/**Lines: Details*/}
          <div className='mt-1 flex flex-col items-baseline rounded px-1 xl:m-0 xl:flex xl:flex-row'>
            {/**ID*/}
            <div className='w-full xl:w-fit mr-1 flex flex-row rounded bg-gray-100 xl:w-auto xl:grow'>
              <label className='flex-none w-[90px] mb-1 ml-1 mt-1 pl-2 pr-1 rounded-l border-2 border-blue-300 bg-slate-200 text-sm text-right'>
                ID:
              </label>
              <div className='w-full xl:w-[90px] flex flex-row mb-1 mr-1 mt-1 inline text-left text-xs'>
                <div
                  key='id'
                  placeholder='123456789'
                  className='h-6 w-full xl:w-[90px] justify-center pt-[3px] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'>{term.id}</div>
                
              </div>
            </div>
            {/**Version */}
            <div className='mr-1 mt-1 w-full xl:w-max flex flex-row no-wrap rounded bg-gray-100 xl:mt-0'>
              <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                Version:
              </label>
              <div className='mr-1 mt-1 w-full xl:fit inline text-left text-xs'>
                {/**For wrapping text have to use textarea */}
                <div
                  placeholder='Product'
                  className='px-2 pt-1 h-6 w-full xl:fit truncate rounded-r border-l-0 border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                >{ term.ver }</div>
              </div>
            </div>
            {/** */}
            <div className='mr-1 mt-1 w-full xl:w-max flex flex-row no-wrap rounded bg-gray-100 xl:mt-0'>
              <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                Product:
              </label>
              <div className='mr-1 mt-1 w-full xl:fit inline text-left text-xs'>
                {/**For wrapping text have to use textarea */}
                <div
                  placeholder='Product'
                  className='px-1 pt-1 h-6 w-full xl:fit truncate rounded-r border-l-0 border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                >{ term.product }</div>
              </div>
            </div>
            {/**Ref*/}
            <div className='mr-1 xl:m-0 mt-1 w-full flex flex-row rounded bg-gray-100 xl:mt-0 grow'>
              <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                Ref:
              </label>
              <div className='mr-1 mt-1 w-full inline text-left text-xs'>
                <button
                  onClick={() => window.open('https://' + `${term.ref}`, '_blank' )}
                  placeholder='https://docs.servicenow.com/'
                  className='pl-1 h-6 min-w-[225px] w-full rounded-r border-l-0 border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                >ServiceNow: Product Documentation</button>
              </div>
            </div>
          </div>
          {/**Lines:Tags*/}
          <div className='w-full px-1 pb-1'>
            {/**Tags*/}
            <div className='mt-1 w-full flex flex-row flex-wrap rounded bg-gray-100 rounded-r border border-transparent focus:border-slate-400 focus:outline-none'>
              <label className='flex-none max-h-6 w-[90px] mb-1 ml-1 mt-1 pr-1 rounded-l border-2 border-slate-300 bg-slate-100 text-sm text-right '>
                Tags:
              </label>
              
              {/**Input-tags */}
              <div className='mr-1 px-1 pt-1 flex flex-row flex-wrap content-center items-center text-xs'>
                {term.tags?.map((tag) => (
                  <div
                    key='tag'
                    className='mr-1 mb-1 h-6 w-fit pr-2 text-sm flex flex-row content-center items-center rounded border-0 bg-slate-200 focus:border-2 focus:border-slate-400'
                  >
                    <span className='w-fit pb-0.5 pl-1 text-right'>
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicTerm;
