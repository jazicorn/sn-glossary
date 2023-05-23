import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { GlossaryContextType } from '../../../lib/types';

const PublicTerm = ({ term }: {term: GlossaryContextType}) => {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
    return (
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
                  className='text-sm tracking-tighter leading-tight content-left flex grow flex-row border border-r-0 border-gray-300 rounded-l'
                >
                  <div
                    key={term.name}
                    className='w-24 p-0.5 rounded-l border-2 border-blue-300 bg-slate-200 text-center focus:border-2 focus:border-blue-400 focus:outline-none'
                            >
                                {term.name}
                  </div>
                  <div
                    key={term.def}
                    className='w-full px-1 py-1 self-center bg-gray-100 text-left'
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
            {/**More Info */}
            {/**More Info */}
            {showMore && (
              <div
                key='termshowmore'
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
                      className='custom-input-id mr-1 mt-1 inline'
                    >
                      <div
                        key={term.id}
                        placeholder='123456789'
                        className='h-6 w-[74px] rounded-r border border-gray-300 bg-transparent pt-0.5 pl-1 text-left text-sm focus:border-slate-400 focus:outline-none'>{term.id}</div>
                    </div>
                  </div>
                  {/**Ref*/}
                  <div
                    key='undefined'
                    className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'
                  >
                    <label
                      key='undefined'
                      className='mb-1 ml-1 mt-1 basis-14 rounded-l border-2 border-slate-400 bg-violet-100 pl-2 pr-1 text-sm'
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
                      className='mr-1 mt-1 inline text-left text-xs w-auto'
                    >
                      <div
                        key={term.ref}
                        className='h-6 min-w-[18rem] w-auto rounded-r border border-gray-300 bg-transparent pt-1 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none overflow-hidden text-ellipsis'>
                        <a
                          href={'https:' + term.ref}
                          target="_blank">
                          ServiceNow: Product Documentation URL
                        </a>
                      </div>
                    </div>
                  </div>
                  {/**Category */}
                  <div
                    key='undefined'
                    className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-fit'
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
                      <div
                        key={term.product}
                        placeholder='(Product) Category'
                        className='h-6 w-[10rem] rounded-r border border-gray-300 bg-transparent pt-0.5 pl-1 text-left text-sm focus:border-slate-400 focus:outline-none'>{term.product}</div>
                    </div>
                  </div>
                  {/**Tags*/}
                  <div
                    key='undefined'
                    className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-fit'
                  >
                    <label
                      key='undefined'
                      className='mb-1 ml-1 mt-1 basis-14 rounded border-2 border-slate-400 bg-blue-300 pl-2 pr-1 text-sm '
                    >
                      Tags:
                    </label>
                    <div
                      key='tags'
                      className='mr-1 flex flex-row content-center items-center'
                    >
                      {term?.tags?.map((tag) => (
                        <div
                          key='tag'
                          className='mx-1 h-6 w-auto flex flex-row content-center items-center rounded border-0 bg-slate-200 pr-2 text-sm focus:border-2 focus:border-slate-400'
                        >
                          <span className='w-auto pb-0.5 pl-1 text-left truncate'>
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
    )
}

export default PublicTerm; 