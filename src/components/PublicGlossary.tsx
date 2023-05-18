import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { GlossaryContext } from '../context/contextGlossary';

// render list:https://react.dev/learn/rendering-lists

export default function Glossary() {
  const publicGlossary = useContext(GlossaryContext);

  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  const tags = ['tag1', 'tag2', 'tag3'];
  return (
    <>
      {/**Page Title */}
      <h1
        key='undefined'
        className='text-bold m-2 my-4 rounded border bg-gray-100 py-1 text-xl text-sn-dark xl:text-2xl'
      >
        ServiceNow{' '}
        <span key='undefined' className='text-md text-sn-light xl:text-lg'>
          Glossary
        </span>
      </h1>
      <hr
        key='undefined'
        className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100'
      />
      <div key='undefined' className='flex flex-col '>
        {/**Search Bar */}
        <div
          key='undefined'
          className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'
        >
          <div
            key='undefined'
            className='mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1 '
          >
            <div key='undefined' className='content-left flex grow flex-row'>
              <span
                key='undefined'
                className='text-md text-bold w-24 rounded-l border-2 border-blue-300 bg-slate-200 p-1 text-center text-base focus:border-2 focus:border-blue-400 focus:outline-none'
              >
                Search
              </span>
              <input
                key='search'
                maxLength={50}
                className='w-full self-center border border-r-0 border-gray-300 bg-gray-100 text-left text-sm focus:border-slate-400 focus:outline-none'
                type='text'
                name='def'
                placeholder='Type Word Here...'
              />
            </div>
          </div>
        </div>
      </div>
      <hr
        key='undefined'
        className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100'
      />

      <>
        {/******************* */}
        {/**Display All Terms */}
        {/******************* */}
        {publicGlossary?.map((term) => (
          <div key='term'>
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
                  className='content-left flex grow flex-row'
                >
                  <div
                    key={term.name}
                    className='w-24 p-1 rounded-l border-2 border-blue-300 bg-slate-200 text-center text-base text-sm focus:border-2 focus:border-blue-400 focus:outline-none'
                            >
                                {term.name}
                  </div>
                  <div
                    key={term.def}
                    className='w-full px-1 py-2 self-center border border-r-0 border-gray-300 bg-gray-100 text-left text-sm focus:border-slate-400 focus:outline-none'
                    placeholder='Definition'
                  >{term.def}</div>
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
            {showMore && (
              <div
                key='undefined'
                className='custom-term-details mx-2 flex rounded bg-gray-200 p-1  xl:flex xl:flex-row'
              >
                {/**Lines: Refs & Tags*/}
                <div
                  key='undefined'
                  className='mt-1 flex flex-wrap items-baseline rounded px-1 xl:m-0  xl:flex xl:flex-row xl:flex-nowrap'
                >
                  {/**ID*/}
                  <div
                    key='undefined'
                    className=' mr-1 flex flex-row rounded bg-gray-100 xl:w-auto xl:grow'
                  >
                    <label
                      key='undefined'
                      className='mb-1 ml-1 mt-1 rounded-l border-2 border-blue-300 bg-slate-400 pl-2 pr-1 text-sm'
                    >
                      ID:
                    </label>
                    <div
                      key='undefined'
                      className='custom-input-id mb-1 mr-1 mt-1 inline text-left text-xs'
                    >
                      <input
                        key={term.id}
                        type='text'
                        name='id'
                        placeholder='123456789'
                        readOnly={true}
                        className='h-6 w-[74px] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                      />
                    </div>
                  </div>
                  {/**Ref*/}
                  <div
                    key='undefined'
                    className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'
                  >
                    <label
                      key='undefined'
                      className='mb-1 ml-1 mt-1 basis-14 rounded-l border-2 border-slate-400 bg-violet-100 pl-2 pr-1 text-sm  '
                    >
                      Ref:
                    </label>
                    <label
                      key='undefined'
                      className='mb-1 mt-1 basis-14 border border-r-0 border-gray-300 bg-transparent pl-1 pr-0.5 pt-0.5 text-right align-bottom text-xs'
                    >
                      https://
                    </label>
                    <div
                      key='undefined'
                      className='mr-1 mt-1 inline text-left text-xs'
                    >
                      <input
                        key='termURL'
                        type='text'
                        maxLength={200}
                        name='ref'
                        readOnly={true}
                        placeholder='ServiceNow: Product Documentation URL'
                        className='h-6 w-[18rem] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                      />
                    </div>
                  </div>
                  {/**Category */}
                  <div
                    key='undefined'
                    className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'
                  >
                    <label
                      key='undefined'
                      className='mb-1 ml-1 mt-1 basis-14 rounded-l border-2 border-slate-400 bg-blue-300 pl-2 pr-1 text-sm '
                    >
                      Category:
                    </label>
                    <div
                      key='undefined'
                      className='mr-1 mt-1 inline text-left text-xs'
                    >
                      <input
                        key='termCategory'
                        type='text'
                        maxLength={30}
                        readOnly={true}
                        name='product'
                        placeholder='(Product) Category'
                        className='h-6 w-[10rem] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                      />
                    </div>
                  </div>
                  {/**Tags*/}
                  <div
                    key='undefined'
                    className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'
                  >
                    <label
                      key='undefined'
                      className='mb-1 ml-1 mt-1 basis-14 rounded border-2 border-slate-400 bg-blue-300 pl-2 pr-1 text-sm '
                    >
                      Tags:
                    </label>
                    {/**Input-tags */}
                    <div
                      key='tags'
                      className='mr-1 flex flex-row content-center items-center text-xs'
                    >
                      {tags.map((tag) => (
                        <div
                          key='tag'
                          className='mx-1 flex h-6 w-auto flex-row content-center items-center rounded border-0 bg-slate-200 pr-2 text-sm focus:border-2 focus:border-slate-400'
                        >
                          <span className='w-4/6 pb-0.5 pl-1 text-right'>
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
        ))}
      </>
    </>
  );
}
