import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { GlossaryContextType } from '../../../lib/types';

const PublicTerm = ({ term }: { term: GlossaryContextType }) => {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <div key='term' className=''>
      <div
        key='undefined'
        className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'
      >
        {/**Line: Term Definition */}
        <div
          key='undefined'
          className='mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1 '
        >
          <div
            key='undefined'
            className='content-left flex grow flex-row rounded-l border border-r-0 border-gray-300 text-sm leading-tight tracking-tighter'
          >
            <div
              key={term.name}
              className='w-24 rounded-l border-2 border-blue-300 bg-slate-200 p-0.5 text-center focus:border-2 focus:border-blue-400 focus:outline-none'
            >
              {term.name}
            </div>
            <div
              key={term.def}
              className='w-full self-center bg-gray-100 px-1 py-1 text-left'
              placeholder='Definition'
            >
              {term.def}
            </div>
          </div>
          {/** Expand/Collpase*/}
          <button
            key='showMore'
            className='rounded-r border border-l-0 border-gray-300 px-2 '
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
      {/**More Info */}
      {/**More Info */}
      {/**More Info */}
      {showMore && (
        <div
          key='termshowmore'
          className='custom-term-details mx-2 flex flex-col rounded bg-gray-200 p-1  xl:flex xl:flex-row'
        >
          {/**Lines: Refs & Tags*/}
          <div
            key='undefined'
            className='mt-1 flex flex-wrap items-baseline rounded px-1 xl:m-0  xl:flex xl:flex-row xl:flex-nowrap'
          >
            {/**ID*/}
            <div
              key='undefined'
              className='flex w-full flex-row rounded bg-gray-100 sm:mr-1 sm:w-auto sm:w-fit'
            >
              <label
                key='undefined'
                className='mb-1 ml-1 mt-1 rounded-l border-2 border-blue-300 bg-slate-400 pl-2 pr-1 text-sm'
              >
                ID:
              </label>
              <div
                key='undefined'
                className='custom-input-id mr-1 mt-1 inline w-full sm:w-fit'
              >
                <div
                  key={term.id}
                  placeholder='123456789'
                  className='h-6 w-full grow rounded-r border border-gray-300 bg-transparent pl-1 pt-0.5 text-left text-sm focus:border-slate-400 focus:outline-none sm:w-[88px]'
                >
                  {term.id}
                </div>
              </div>
            </div>
            {/**Ref*/}
            <div
              key='undefined'
              className='mt-1 flex w-full flex-row rounded bg-gray-100 sm:mr-1 sm:w-min xl:mt-0 xl:w-full'
            >
              <label
                key='undefined'
                className='mb-1 ml-1 mt-1 basis-[92px] rounded-l border-2 border-slate-400 bg-violet-100 pl-2 pr-1 text-sm'
              >
                Ref:
              </label>
              <label
                key='undefined'
                className='mb-1 mt-1 basis-14 border border-r-0 border-gray-300 bg-transparent pl-1 pr-0.5 pt-1 text-right align-bottom text-xs'
              >
                https://
              </label>
              <div
                key='undefined'
                className='sm:no-grow mr-1 mt-1 inline w-auto grow text-left text-xs'
              >
                <div
                  key={term.ref}
                  className='h-6 w-auto min-w-[12rem] overflow-hidden text-ellipsis rounded-r border border-gray-300 bg-transparent pl-1 pt-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                >
                  <a href={'https:' + term.ref} target='_blank'>
                    ServiceNow: Product Doc URL
                  </a>
                </div>
              </div>
            </div>
            {/**Category */}
            <div
              key='undefined'
              className='mt-1 flex w-full flex-row rounded bg-gray-100 sm:w-fit xl:mr-1 xl:mt-0'
            >
              <label
                key='undefined'
                className='mb-1 ml-1 mt-1 basis-[92px] rounded-l border-2 border-slate-400 bg-blue-300 pl-2 pr-1  text-sm '
              >
                Category:
              </label>
              <div
                key='undefined'
                className='mr-1 mt-1 inline w-max grow text-left text-xs xl:w-fit'
              >
                <div
                  key={term.product}
                  placeholder='(Product) Category'
                  className='h-6 w-full rounded-r border border-gray-300 bg-transparent pl-1 pt-0.5 text-left text-sm focus:border-slate-400 focus:outline-none sm:w-[10rem]'
                >
                  {term.product}
                </div>
              </div>
            </div>
            {/**Tags*/}
            <div
              key='undefined'
              className='mt-1 flex w-fit flex-row rounded bg-gray-100 xl:mr-1 xl:mt-0 '
            >
              <label
                key='undefined'
                className='mb-1 ml-1 mt-1 basis-14 rounded border-2 border-slate-400 bg-blue-300 pl-2 pr-1 text-sm '
              >
                Tags:
              </label>
              <div
                key='tags'
                className='mr-1 flex flex-row flex-wrap content-center items-center sm:flex-nowrap'
              >
                {term?.tags?.map((tag) => (
                  <div
                    key='tag'
                    className='m-1 flex h-6 w-auto flex-row content-center items-center rounded border-0 bg-slate-200 pr-2 text-sm focus:border-2 focus:border-slate-400'
                  >
                    <span className='w-auto truncate pb-0.5 pl-1 text-left'>
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
