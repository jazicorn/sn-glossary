import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

export default function ListTermsNew() {
    const [showMore, setShowMore] = useState(false);
    function handleMoreClick() {
        setShowMore(!showMore);
    }

    // #TODO alter useState to update any example object
    const [getTerm, setTerm] = useState({
        id: 1,
        term: 'Term',
        def: 'definition',
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
      
           
      <div className='flex flex-col mb-1'>
        <>
          {/**All Term Information*/}
          <div className='mx-2 flex flex-col rounded bg-gray-200 p-1'>
            
            {/**Line: Term Definition */}
            <div className='m-1 flex flex-row rounded bg-gray-100 p-1 justify-between'>
              <div className=' grow flex flex-row content-left'>
                <label className='mx-1 h-7 shrink-0 grow-0 basis-16 rounded bg-slate-200 text-base border-2 border-blue-300 '>
                  {titleUpper}:
                </label>
                <input
                  className='w-full ml-1 mt-1 self-center border-0 bg-gray-100 p-0 text-left text-sm'
                  type='text'
                  name='def'
                  value={getTerm.def}
                  onChange={changeTerm}
                />
              </div>
              {/** Expand/Collpase*/}
              <button className="mx-2" onClick={() => handleMoreClick()}>
                {showMore ? <FontAwesomeIcon icon={faChevronCircleUp} size="lg" color={'#334155'} /> : <FontAwesomeIcon icon={faCircleChevronDown} size="lg" color={'#334155'}/>}
              </button>
            </div>
          </div>

          {/**More Info */}
          {showMore &&
            <div className='mx-2 my-1 flex flex-col md:flex-row rounded bg-gray-200 p-1'>
              {/**Edit/Delete */}
              <div className='flex flex-row mr-1 px-1 rounded'>
                <button className=" my-1 ml-1 mr-1 w-20 items-baseline rounded border-2 border-slate-400 bg-rose-300 px-2 text-sm uppercase font-medium">
                  Delete
                </button>
                <button className="my-1 ml-1 mr-1 w-20 rounded border-2 border-slate-400 bg-yellow-200 px-2 text-sm uppercase font-medium">
                  Edit
                </button>               
              </div>
              {/**Term ID */}
              <div className='w-fit mr-1 flex flex-row rounded bg-gray-100'>
                  <label className='m-1 mx-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
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
              {/**Lines: Refs & Tags*/}
              <div className='mt-1 md:m-0 flex flex-col items-baseline rounded px-1 md:flex md:flex-row'>
                {/**Ref*/}
                <div className='mr-1 flex flex-row rounded bg-gray-100'>
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
                <div className='mt-1 md:m-0 mr-1 flex flex-row rounded bg-gray-100'>
                  <label className='my-1 mr-1 ml-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
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
          }
        </>
      </div>
    )
}