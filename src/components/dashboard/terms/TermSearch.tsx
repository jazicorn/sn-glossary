import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TermSearch = () => {
  return (
    <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1 '>
      <div className='h-[40px] mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1'>
        <div className='content-left flex grow flex-row'>
          <span className='text-bold flex w-24 items-center justify-center rounded-l border-2 border-sn-dark bg-slate-300 p-1 text-sm focus:border-2 focus:border-blue-400 focus:outline-none'>
            Search
          </span>
          <span className='h-[32px] flex w-full justify-between self-center rounded-r border border-gray-300 bg-gray-100 text-sn-dark placeholder:text-sn-light focus:border-slate-400 focus:outline-none'>
            <input
              key='search'
              maxLength={50}
              className='w-full  border-none bg-transparent text-left text-sm placeholder:text-sm '
              type='text'
              name='def'
              placeholder='Type Word Here...'
            />
            <span className='mx-1 place-self-center p-2'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color='#d1d5db'
                size='lg'
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TermSearch;
