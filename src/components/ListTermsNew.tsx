import { useState } from 'react';

export default function ListTermsNew() {
  // #TODO alter useState to update any example object
  const [getTerm, setTerm] = useState({
    id: 1,
    term: '**Term Name**',
    def: 'Add Definition',
    ref: 'https://docs.servicenow.com/en-US/',
    tags: ['tag1', 'tag2', 'tag3'],
  });

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
    <div>
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <div className='flex flex-col'>
        <>
          {/**All Term Information*/}
          <div className='mx-2 my-1 flex flex-col rounded bg-gray-200 p-1'>
            {/**Line: Term Definition */}
            <div className='m-1 flex flex-row rounded bg-gray-100 p-1'>
              <label className='w-fit shrink-0 grow-0 rounded border-2 border-blue-300 bg-slate-200 px-1 text-base text-sm '>
                <span className='italic'>{titleUpper}</span>:
              </label>
              <input
                className='ml-1 mt-1 w-full self-center border-0 bg-gray-100 p-0 text-left text-sm italic'
                type='text'
                name='def'
                value={getTerm.def}
                onChange={changeTerm}
              />
            </div>
          </div>
          <div className='mx-2 flex flex-col-reverse rounded bg-gray-200 p-1 md:flex-row'>
            {/**Create New Term */}
            <div className='mr-1 flex flex-row place-self-center rounded px-1'>
              <button className=' my-1 ml-1 w-20 items-baseline rounded border-2 border-slate-400 bg-emerald-300 px-2 text-sm font-medium uppercase'>
                Create
              </button>
            </div>
            {/**Lines: Refs & Tags*/}
            <div className='mt-1 flex flex-col items-baseline rounded px-1 md:m-0 md:flex md:flex-row'>
              {/**ID*/}
              <div className='mr-1 flex w-full flex-row rounded bg-gray-100'>
                <label className='m-1 mx-2  basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
                  ID:
                </label>
                <div className='m-1 flex flex-row text-left text-xs'>
                  <div className='mr-1 py-1'>
                    <a
                      className=' inline h-6 w-12 items-baseline self-baseline whitespace-nowrap rounded border-0 bg-slate-200 px-2 py-1 text-center text-xs focus:border-2 focus:border-slate-400'
                      target='_blank'
                      href={getTerm.ref}
                    >
                      123456789
                    </a>
                  </div>
                </div>
              </div>
              {/**Ref*/}
              <div className='mr-1 mt-1 flex w-full flex-row rounded bg-gray-100'>
                <label className='m-1 mx-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
                  Ref:
                </label>
                <div className='m-1 flex flex-row text-left text-xs'>
                  <div className='mr-1 py-1'>
                    <a
                      className=' inline h-6 w-12 items-baseline self-baseline whitespace-nowrap rounded border-0 bg-slate-200 px-2 py-1 text-center text-xs focus:border-2 focus:border-slate-400'
                      target='_blank'
                      href={getTerm.ref}
                    >
                      ServiceNow: Product Doc URL
                    </a>
                  </div>
                </div>
              </div>
              {/**Tags*/}
              <div className='mr-1 mt-1 flex w-full flex-row rounded bg-gray-100 md:m-0'>
                <label className='my-1 ml-2 mr-1 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
                  Tags:
                </label>
                <div className='m-1 flex flex-row text-left text-xs'>
                  {getTerm.tags.map((tag, index) => (
                    <>
                      <input
                        className='ml-1 inline h-6 w-12 items-baseline rounded border-0 bg-slate-200 p-0 text-center text-xs focus:border-2 focus:border-slate-400'
                        type='text'
                        name='tag'
                        value={tag}
                        onChange={(e) => changeTermTags(index, e)}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
