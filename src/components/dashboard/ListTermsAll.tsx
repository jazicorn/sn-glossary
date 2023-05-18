import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function ListTermsAll() {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTags = (e: any) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };
  const removeTags = (index: number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: any) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className='mb-1 flex flex-col '>
      <>
        {/**All Term Information*/}
        <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'>
          {/**Line: Term Definition */}
          <div className='mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1 '>
            <div className='content-left flex grow flex-row'>
              <input
                maxLength={30}
                type='text'
                name='term'
                placeholder='Term Name'
                className='w-24 rounded-l border-2 border-blue-300 bg-slate-200 p-1 text-center text-base text-sm focus:border-2 focus:border-blue-400 focus:outline-none'
              ></input>
              <input
                maxLength={300}
                className='w-full self-center border border-r-0 border-gray-300 bg-gray-100 text-left text-sm focus:border-slate-400 focus:outline-none'
                type='text'
                name='def'
                placeholder='Definition'
              />
            </div>
            {/** Expand/Collpase*/}
            <button
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
          {/**Edit/Delete */}
          <div className='mr-1 flex flex-col rounded bg-transparent'>
            <button className='w-18 ml-1 items-baseline rounded border-2 border-slate-400 bg-yellow-100 px-2 text-sm font-medium uppercase'>
              Edit
            </button>
            <button className='w-18 ml-1 mt-1 items-baseline rounded border-2 border-slate-400 bg-rose-300 px-2 text-sm font-medium uppercase'>
              Delete
            </button>
          </div>
        </div>

        {/**More Info */}
        {showMore && (
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
                  Category:
                </label>
                <div className='mr-1 mt-1 inline text-left text-xs'>
                  <input
                    type='text'
                    maxLength={30}
                    name='category'
                    placeholder='Subject'
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
                  className='mt-1 h-6 w-auto items-baseline rounded-r border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                  type='text'
                  maxLength={25}
                  name='tag'
                  placeholder="'tag'"
                  value={input}
                  onKeyUp={(e) => addTags(e)}
                  onChange={onChange}
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
        )}
      </>
    </div>
  );
}
