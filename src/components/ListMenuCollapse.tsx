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
  const examples = ['List1', 'List2', 'List3'];
  return (
    <div>
      {/** Expand/Collapse*/}
      <div className='mb-1 md:mb-0'>
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
            <h2 className='text-l mx-2 mb-1 flex flex-row justify-center rounded border-4 border-blue-200 bg-gradient-to-r from-slate-100 to-violet-100 italic text-blue-500 hover:bg-emerald-100'>
              Create List
            </h2>
            <ul className='text-l flex flex-col'>
              {examples.map((example) => (
                <li
                  key={example}
                  className='mx-2 my-1 rounded border-4 bg-gray-100'
                >
                  <button className='inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                    {example}
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
