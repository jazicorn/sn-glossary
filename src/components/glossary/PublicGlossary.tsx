import React, { useContext } from 'react';
import { GlossaryContext } from '../../context/contextGlossary';
import Term from './PublicTerm'
import Search from './PublicSearch'

export default function Glossary() {
  const publicGlossary = useContext(GlossaryContext);

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
        {/******************* */}
        {/****Search Bar***** */}
        {/******************* */}
        <Search/>
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
          <div key='term' >
            <Term {...{ term }} />
          </div>
        ))}
      </>
    </>
  );
}
