import { faRectangleList, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function ListMenuCollapse() {
  const [lists, setList] = useState(['List1', 'List2', 'List3']);
  
  // Create Untitled list in list menu
  const createList = () => {
    setList(['Untitled', ...lists]);
  };

  function doSome() {
    console.log('Boo')
  }
  return (
    <div>
      {/**Static Menu */}
      <div className=''>
        <div className=''>
          <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
          <div className='text-l mx-2 mb-1 flex flex-col justify-center rounded border-4 border-blue-200 bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100 italic text-blue-500 '>
            {/**Creates New List: Untitled*/}
            <button
              onClick={createList}
              className='text-bold inline-block h-full w-full grow hover:italic hover:bg-gray-300'
            >
              <FontAwesomeIcon icon={faRectangleList} /><span className='px-2'>Create List</span>
            </button>
          </div>
          <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
          <div className='mx-2 my-1 rounded border-4 bg-violet-100'>
            <button className='text-l hover:italic text-deep-blue inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
              <FontAwesomeIcon icon={faStar} /><span className='px-2'>Favorites</span>
            </button>
          </div>
          <ul className='text-l flex flex-col'>
            {lists.map((list: string) => (
              <li key={list} className='mx-2 my-1 rounded border-4 bg-slate-100'>
                <button onClick={doSome} className='px-2 hover:italic inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                 {list}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
