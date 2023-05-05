import { useState } from 'react';

export default function ListOfTerms() {
  // #TODO alter useState to update any example object
  const [getTerm, setTerm] = useState({
    id: 1,
    term: 'term',
    def: 'definition',
    ref: 'https://docs.servicenow.com/en-US/',
    tags: ['tag1', 'tag2', 'tag3'],
  });

  // const examples = [
  //     {
  //         "id": 1,
  //         "term": "definition",
  //         "ref:" "",
  //         "tags": ["tag1", "tag2", "tag3"]
  //     },
  //     {
  //         "id": 2,
  //         "term": "definition",
  //         "ref:" "",
  //         "tags": ["tag1", "tag2", "tag3"]
  //     },
  //     {
  //         "id": 3,
  //         "term": "definition",
  //         "ref:" "",
  //         "tags": ["tag1", "tag2", "tag3"]
  //     }
  // ]

  function changeTerm(e: any) {
    setTerm({
      ...getTerm,
      [e.target.name]: e.target.value,
    });
  }

  function changeTermTags(index: any, e: any) {
    // #TODO this function is complicated. multiple steps in order to perform functions on the term objec tag array
  }

  //capalize title
  const titleUpper = getTerm.term[0].toUpperCase() + getTerm.term.slice(1);
    
  return (
    <div
      className='mx-5 mb-5 mt-1 h-fit 
                        w-auto rounded-lg border border-slate-400
                        bg-slate-700 pb-1 md:my-5 md:ml-2 md:mr-5 md:w-5/6'
    >
      <h2 className='custom-list-term-nav m-2 rounded border-4 border-slate-100 bg-blue-100 text-xl'>
        List 1: Terms
      </h2>
      {/** #TODO Map form to display multiple term examples */}
      <form className='flex flex-col'>
        <>
          {/**All Term Information*/}
          <div className='mx-2 my-1 flex flex-col rounded bg-gray-200 p-1'>
            {/**Line: Term Definition */}
            <div className='m-1 flex flex-row rounded bg-gray-100 p-1'>
              <label className='mx-1 h-6 shrink-0 grow-0 basis-16 rounded bg-pink-100 text-base'>
                {titleUpper}
              </label>
              <input
                className='ml-1 mt-1 self-center border-0 bg-gray-100 p-0
                                    text-left text-sm'
                type='text'
                name='def'
                value={getTerm.def}
                onChange={changeTerm}
              />
            </div>

            {/**Lines: Refs & Tags*/}
            <div className='flex flex-col items-baseline rounded px-1 md:flex md:flex-row'>
              {/**Ref*/}
              <div className='mr-1 flex flex-row rounded bg-gray-100'>
                <label
                  className='m-1 mx-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'
                >
                  Ref:
                </label>
                <div className='m-1 flex flex-row text-left text-xs'>
                  <div className='mr-1 py-1 pr-1'>
                    <a
                      className=' inline h-6 w-12 items-baseline self-baseline whitespace-nowrap rounded border-0 bg-slate-200 px-2 py-1 text-center text-xs focus:border-2 focus:border-slate-400'
                      target='_blank'
                      href={getTerm.ref}
                    >
                      ServiceNow: Product Documentation
                    </a>
                  </div>
                </div>
              </div>

              {/**Tags*/}
              <div className='mt-1 flex flex-row rounded bg-gray-100'>
                <label className='m-1 mx-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
                  Tags:
                </label>
                <div className='m-1 flex flex-row text-left text-xs'>
                  {getTerm.tags.map((tag, index) => (
                    <>
                      <div className='ml-1'>
                        <input
                          className='inline h-6 w-12 items-baseline rounded border-0 bg-slate-200 p-0 text-center text-xs
                                                        focus:border-2 focus:border-slate-400'
                          type='text'
                          name='tag'
                          value={tag}
                          onChange={(e) => changeTermTags(index, e)}
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      </form>
    </div>
  );
}
