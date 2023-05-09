import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareXmark
} from '@fortawesome/free-solid-svg-icons';


// This page will be example editor using user browser memory as datastore
export default function ListTermsNew() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTags = (e: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setTags([...tags, e.target.value]);
        e.target.value = "";
    }
  };
  const removeTags = (index:number) => {
      setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e:any) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <div className='flex flex-col'>
        <>
          {/**All Term Information*/}
          <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'>
            {/**#TODO Change to flex-col and move create button to end term line */}
            {/**Line: Term Definition */} {/**col 1 */}
            <div className='m-1 flex flex-row  grow rounded bg-gray-100 p-1 '>
              <input
                maxLength={30}
                type='text'
                name='term'
                placeholder='Term Name'
                className=' w-24 p-1 rounded-l border-2 border-blue-300 bg-slate-200 text-center text-base text-sm focus:outline-none focus:border focus:border-slate-400'>
              </input>
              <input
                maxLength={300}
                className='text-ellipsis grow w-auto self-center rounded-r border border-gray-300 bg-gray-100 text-left text-sm focus:outline-none focus:border-slate-400'
                type='text'
                name='def'
                placeholder='Definition'
              />
            </div>
            {/**Create New Term */} {/**col-2 */}
            <div className='mr-1 flex flex-row place-self-center rounded px-1'>
              <button className=' my-1 ml-1 w-20 items-baseline rounded border-2 border-slate-400 bg-emerald-300 px-2 text-sm font-medium uppercase'>
                Create
              </button>
            </div>
          </div>
          {/** */}
          {/** Term Details */}
          {/** */}
          <div className='custom-term-details mx-2 flex flex-col-reverse rounded bg-gray-200 p-1 md:flex-row'>
            {/**Lines: Refs & Tags*/}
            <div className='mt-1 flex flex-col items-baseline rounded px-1 md:m-0 md:flex md:flex-row'>
              {/**ID*/}
              <div className='pl-1 mr-1 flex flex-row w-auto grow rounded bg-gray-100'>
                <label className='m-1 mx-1 rounded border-2 border-slate-400 bg-slate-400 px-2 text-sm'>
                  ID:
                </label>
                <div className='custom-input-id m-1 inline text-left text-xs'>
                  <input
                    type='text'
                    name='id'
                    placeholder='123456789'
                    readOnly={true}
                    className='h-6 pl-1 w-[74px] rounded border-0 bg-slate-200 p-0 text-left text-xs focus:border-2 focus:border-slate-400'
                  />
                </div>
              </div>
              {/**Ref*/}
              <div className='mr-1 flex w-full flex-row rounded bg-gray-100'>
                <label className='m-1 mx-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
                  Ref:
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={200}
                    name='ref'
                    placeholder='ServiceNow: Product Doc URL'
                    className='h-6 pl-1 w-[14rem] rounded border-0 bg-slate-200 p-0 text-left text-xs focus:border-2 focus:border-slate-400'   
                  />
                </div>
              </div>
              {/**Category */}
              <div className='mr-1 flex w-full flex-row rounded bg-gray-100'>
                <label className='m-1 mx-2 basis-14 rounded border-2 border-slate-400 bg-blue-300 px-2 text-sm'>
                  Category:
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={30}
                    name='category'
                    placeholder='Subject'
                    className='h-6 pl-1 w-[10rem] rounded border-0 bg-slate-200 p-0 text-left text-xs focus:border-2 focus:border-slate-400'   
                  />
                </div>
              </div>
              {/**Tags*/}
              <div className='mr-1 flex w-full flex-row rounded bg-gray-100 md:m-0'>
                <label className='my-1 ml-2 mr-1 basis-14 rounded border-2 border-slate-400 bg-violet-100 px-2 text-sm'>
                  Tags:
                </label>
                {/**Input-tags */}
                <div className='mr-1 flex flex-row content-center items-center text-xs'>
                  {tags.map((tag, index) => (
                    <div
                      key="tag"
                      className='flex flex-row h-6 w-auto mx-1 pr-2 text-sm content-center items-center rounded border-0 bg-slate-200 focus:border-2 focus:border-slate-400'>
                      <span className='w-4/6 text-right pl-1 pb-0.5'>{tag}</span>
                      <span className='w-2/6 text-center pl-3'>
                        <FontAwesomeIcon icon={faSquareXmark} size='sm' onClick={() => removeTags(index)} />
                      </span>
                    </div>
                  ))}
                  <>
                    <input
                      className='ml-1 pl-2 h-6 w-auto items-baseline rounded border-0 bg-slate-200 p-0 text-left text-sm focus:border-2 focus:border-slate-400'
                      type='text'
                      maxLength={30}
                      name='tag'
                      placeholder="...type 'tag'"
                      value={input}
                      onKeyUp={e => addTags(e)}
                      onChange={onChange}
                    />
                  </>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
