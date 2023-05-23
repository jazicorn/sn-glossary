import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

const PublicSearch = () => {
    return (
       <div
          className='p-1 mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 '
        >
          <div
            className='p-1 mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100'
          >
            <div className='content-left flex flex-row grow'>
              <span
                className='flex p-1 text-sm text-bold w-24 items-center justify-center rounded-l border-2 border-sn-dark bg-sn-light focus:border-2 focus:border-blue-400 focus:outline-none'
              >
                Search
            </span>
            <span className='flex justify-between w-full self-center border border-gray-300 bg-gray-100 focus:border-slate-400 focus:outline-none placeholder:text-sn-light text-sn-dark'>
              <input
                key='search'
                maxLength={50}
                className='bg-transparent border-none text-left placeholder:text-sm text-sm '
                type='text'
                name='def'
                placeholder='Type Word Here...'/>
              <span className='place-self-center p-2 mx-1'>
                <FontAwesomeIcon icon={faMagnifyingGlass} color='#d1d5db' size='lg' />
              </span>
            </span>
              
          </div>
          </div>
        </div>
    )
}

export default PublicSearch; 