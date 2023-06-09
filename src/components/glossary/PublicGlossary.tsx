import React from 'react';
// import { GlossaryContext } from '../../context/contextGlossary';
import Term from './PublicTerm';
import Search from './PublicSearch';
import { dbPublic } from '@/context/contextGlossary';
import { useCallback, useEffect, useState } from 'react'
import { GlossaryContextType } from '../../../lib/types';

export default function PublicGlossary() {
  //const publicGlossary = useContext(GlossaryContext);
  const [data, setData] = useState<GlossaryContextType[]>([]);

  // declare the async data fetching function
  const fetchData = useCallback(async () => {
    const docs = await dbPublic.allDocs({ include_docs: true });
    //console.log(docs);
    const docsJSON = JSON.stringify(docs.rows);
    //console.log(docsJSON);
    if (docsJSON != undefined) {
      const parsed = JSON.parse(docsJSON);
      //console.log(parsed);
      // let counter = 0
      const result:GlossaryContextType[] = [];
      //console.log(parsed[0].doc);
      parsed.forEach((element: { doc: GlossaryContextType; }) => {
       //console.log(element.doc)
       result.push(element.doc)
      });
      if (result != undefined) {
        setData(result);
      }
    }
  }, [])

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [fetchData])

  return (
    <>
      {/**Page Title */}
      <h1 className='text-bold m-2 my-4 rounded border bg-gray-100 py-1 text-xl text-sn-dark xl:text-2xl'>
        ServiceNow <span className='text-md text-sn-light xl:text-lg'> Glossary </span>
      </h1>
      <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100'
      />
      <div key='search' className='flex flex-col '>
        {/******************* */}
        {/****Search Bar***** */}
        {/******************* */}
        <Search />
      </div>
      <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100'/>
      <>
        {/******************* */}
        {/**Display All Terms */}
        {/******************* */}
        {data?.map((term) => (
          <Term key={term.id} term={term} />
        ))}
      </>
    </>
  );
}
