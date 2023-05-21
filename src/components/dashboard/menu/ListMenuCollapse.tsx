import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';

export default function ListMenuCollapse() {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  const [lists, setList] = useState(['List1', 'List2', 'List3']);

  // Create Untitled list in list menu
  const createList = () => {
    setList(['Untitled', ...lists]);
  };

  return (
    <div>
      {/** Expand/Collapse*/}
      <div className='mb-1 xl:mb-0'>
        <button onClick={() => handleMoreClick()}>
          {showMore ? (
            <FontAwesomeIcon icon={faChevronCircleUp} size='lg' inverse />
          ) : (
            <FontAwesomeIcon icon={faCircleChevronDown} size='lg' inverse />
          )}
        </button>
      </div>
      <div className=''>
        {showMore && (
          <div className=''>
            <div className='mx-2 my-1 rounded border-4 border-blue-200 bg-gradient-to-r from-slate-100 to-violet-100 '>
              <button
                onClick={() => {
                  createList;
                }}
                className='text-l mr-2 w-full py-1 text-blue-500 hover:bg-emerald-100 hover:italic'
              >
                Create List
              </button>
            </div>

            <ul className='text-l flex flex-col'>
              {lists.map((list: string) => (
                <li
                  key={list}
                  className='mx-2 my-1 rounded border-4 bg-gray-100'
                >
                  <button className='inline-block h-full w-full from-violet-100 to-blue-200 text-slate-500 hover:bg-gradient-to-r hover:italic hover:text-slate-700 '>
                    {list}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
