import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareXmark
} from '@fortawesome/free-solid-svg-icons';

//#TODO add verion of servienow word found | ex. Rome, San Diego, Tokyo, Utah | un-editable droptown list

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
            {/**Line: Term Definition */} {/**row 1 */}
            <div className='m-1 flex flex-row  grow rounded bg-gray-100 p-1 '>
              <input
                maxLength={25}
                type='text'
                name='term'
                placeholder='Term Name'
                className=' w-24 p-1 rounded-l border-2 border-blue-300 bg-slate-200 text-center text-base text-sm focus:outline-none focus:border-2 focus:border-blue-400'>
              </input>
              <input
                maxLength={300}
                className='text-ellipsis grow w-auto self-center text-left text-sm rounded-r border border-gray-300 bg-gray-100 focus:outline-none focus:border-slate-400'
                type='text'
                name='def'
                placeholder='Definition'
              />
            </div>
            {/**Create New Term */} {/**row-2 */}
            <div className='mr-1 flex flex-row place-self-center rounded px-1'>
              <button className='my-1 ml-1 w-18 items-baseline rounded border-2 border-slate-400 bg-green-300 px-2 text-sm font-medium uppercase'>
                Create
              </button>
            </div>
          </div>
          {/** */}
          {/** Term Details */}
          {/** */}
          <div className='custom-term-details mx-2 p-1 flex rounded bg-gray-200  xl:flex xl:flex-row'>
            {/**Lines: Refs & Tags*/}
            <div className='mt-1 px-1 flex flex-wrap xl:flex-nowrap items-baseline rounded  xl:m-0 xl:flex xl:flex-row'>
              {/**ID*/}
              <div className=' mr-1 flex flex-row xl:w-auto xl:grow rounded bg-gray-100'>
                <label className='mt-1 mb-1 ml-1 pl-2 pr-1 text-sm bg-slate-400 rounded-l border-2 border-blue-300'>
                  ID:
                </label>
                <div className='custom-input-id mt-1 mb-1 mr-1 inline text-left text-xs'>
                  <input
                    type='text'
                    name='id'
                    placeholder='123456789'
                    readOnly={true}
                    className='h-6 pl-1 w-[74px] p-0 text-left text-xs bg-transparent border border-gray-300 rounded-r focus:outline-none focus:border-slate-400'
                  />
                </div>
              </div>
              {/**Ref*/}
              <div className='mr-1 mt-1 xl:mt-0 flex w-min xl:w-full flex-row rounded bg-gray-100'>
                <label className='mt-1 mb-1 ml-1 pl-2 pr-1 basis-14 text-sm rounded-l border-2 border-slate-400 bg-violet-100  '>
                  Ref:
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={200}
                    name='ref'
                    placeholder='ServiceNow: Product Documentation URL'
                    className='h-6 p-0 pl-1 w-[18rem] text-left text-xs bg-transparent border border-gray-300 rounded-r focus:outline-none focus:border-slate-400'   
                  />
                </div>
              </div>
              {/**Category */}
              <div className='mr-1 mt-1 xl:mt-0 flex w-min xl:w-full flex-row rounded bg-gray-100'>
                <label className='mt-1 mb-1 ml-1 pl-2 pr-1 text-sm basis-14 rounded-l border-2 border-slate-400 bg-blue-300 '>
                  Category:
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={30}
                    name='category'
                    placeholder='Subject'
                    className='h-6 p-0 pl-1 w-[10rem] text-left text-xs bg-transparent border border-gray-300 rounded-r focus:outline-none focus:border-slate-400'   
                  />
                </div>
              </div>
              {/**Tags*/}
              <div className='mr-1 mt-1 xl:mt-0 flex w-min xl:w-full flex-row rounded bg-gray-100'>
                <label className='mt-1 mb-1 ml-1 pl-2 pr-1 basis-14 text-sm rounded-l border-2 border-slate-400 bg-blue-300 '>
                  Tags:
                </label>
                <input
                  className='h-6 mt-1 w-auto items-baseline text-left text-xs bg-transparent border border-gray-300 rounded-r focus:outline-none focus:border-slate-400'
                  type='text'
                  maxLength={25}
                  name='tag'
                  placeholder="'tag'"
                  value={input}
                  onKeyUp={e => addTags(e)}
                  onChange={onChange}
                />
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
                  
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
