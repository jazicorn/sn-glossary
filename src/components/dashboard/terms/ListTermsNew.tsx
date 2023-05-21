import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

//#TODO add verion of servienow word found | ex. Rome, San Diego, Tokyo, Utah | un-editable droptown list

// This page will be example editor using user browser memory as datastore
export default function ListTermsNew() {
  const [inputTags, setInputTags] = useState('');
  const [tags, setTags] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTags = (e: any) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };
  const removeTags = (index: number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeTags = (e: any) => {
    const { value } = e.target;
    setInputTags(value);
  };

  const [newTerm, setNewTerm] = useState({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();

    setNewTerm(newTerm);
  }

  return (
    <div>
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
          {/**All Term Information*/}
          <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'>
            {/**#TODO Change to flex-col and move create button to end term line */}
            {/**Line: Term Definition */} {/**row 1 */}
            <div className='m-1 flex grow  flex-row rounded bg-gray-100 p-1 '>
              <input
                maxLength={25}
                type='text'
                name='term'
                placeholder='Term Name'
                className=' w-24 rounded-l border-2 border-blue-300 bg-slate-200 p-1 text-center text-base text-sm focus:border-2 focus:border-blue-400 focus:outline-none'
              ></input>
              <input
                maxLength={300}
                type='text'
                name='def'
                placeholder='Definition'
                className='w-auto grow self-center text-ellipsis rounded-r border border-gray-300 bg-gray-100 text-left text-sm focus:border-slate-400 focus:outline-none'
              />
            </div>
            {/**Create New Term */} {/**row-2 */}
            <div className='mr-1 flex flex-row place-self-center rounded px-1'>
              <button
                type='submit'
                className='w-18 my-1 ml-1 items-baseline rounded border-2 border-slate-400 bg-green-300 px-2 text-sm font-medium uppercase'
              >
                Create
              </button>
            </div>
          </div>
          {/** */}
          {/** Term Details */}
          {/** */}
          <div className='custom-term-details mx-2 flex rounded bg-gray-200 p-1  xl:flex xl:flex-row'>
            {/**Lines: Refs & Tags*/}
            <div className='mt-1 flex flex-wrap items-baseline rounded px-1 xl:m-0  xl:flex xl:flex-row xl:flex-nowrap'>
              {/**ID*/}
              <div className=' mr-1 flex flex-row rounded bg-gray-100 xl:w-auto xl:grow'>
                <label className='mb-1 ml-1 mt-1 rounded-l border-2 border-blue-300 bg-slate-400 pl-2 pr-1 text-sm'>
                  ID:
                </label>
                <div className='custom-input-id mb-1 mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    name='id'
                    placeholder='123456789'
                    readOnly={true}
                    className='h-6 w-[74px] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                  />
                </div>
              </div>
              {/**Ref*/}
              <div className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'>
                <label className='mb-1 ml-1 mt-1 basis-14 rounded-l border-2 border-slate-400 bg-violet-100 pl-2 pr-1 text-sm  '>
                  Ref:
                </label>
                <label className='mb-1 mt-1 basis-14 border border-r-0 border-gray-300 bg-transparent pl-1 pr-0.5 pt-0.5 text-right align-bottom text-xs'>
                  https://
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={200}
                    name='ref'
                    placeholder='ServiceNow: Product Documentation URL'
                    className='h-6 w-[18rem] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                  />
                </div>
              </div>
              {/**Category */}
              <div className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'>
                <label className='mb-1 ml-1 mt-1 basis-14 rounded-l border-2 border-slate-400 bg-blue-300 pl-2 pr-1 text-sm '>
                  Product:
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={30}
                    name='product'
                    placeholder='Product'
                    className='h-6 w-[10rem] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'
                  />
                </div>
              </div>
              {/**Tags*/}
              <div className='mr-1 mt-1 flex w-min flex-row rounded bg-gray-100 xl:mt-0 xl:w-full'>
                <label className='mb-1 ml-1 mt-1 basis-14 rounded-l border-2 border-slate-400 bg-blue-300 pl-2 pr-1 text-sm '>
                  Tags:
                </label>
                <input
                  maxLength={25}
                  type='text'
                  name='tag'
                  placeholder="'tag'"
                  value={inputTags}
                  onKeyUp={(e) => addTags(e)}
                  onChange={onChangeTags}
                  className='mt-1 h-6 w-auto items-baseline rounded-r border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                />
                {/**Input-tags */}
                <div className='mr-1 flex flex-row content-center items-center text-xs'>
                  {tags.map((tag, index) => (
                    <div
                      key='tag'
                      className='mx-1 flex h-6 w-auto flex-row content-center items-center rounded border-0 bg-slate-200 pr-2 text-sm focus:border-2 focus:border-slate-400'
                    >
                      <span className='w-4/6 pb-0.5 pl-1 text-right'>
                        {tag}
                      </span>
                      <span className='w-2/6 pl-3 text-center'>
                        <FontAwesomeIcon
                          icon={faSquareXmark}
                          size='sm'
                          onClick={() => removeTags(index)}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
