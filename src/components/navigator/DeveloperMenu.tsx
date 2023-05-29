import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faHandshakeAngle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export default function MoreMenu() {
  return (
    <div className='shrink-0'>
      {/**More Menu */}
      <div className='z-1000 rounded-x absolute mt-2.5 flex flex-col gap-y-2 rounded-b border border-t-2 border-t-transparent bg-white px-1'>
        {/**<!-- Features--> */}
        <div className='no-wrap flex flex-row hover:text-blue-300 '>
          <button className='flex flex-row'>
            <Link
              href='/features'
              className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
            >
              <FontAwesomeIcon icon={faStar} size='sm' />
              <span className='px-0.5'></span>
            </Link>
          </button>
        </div>
        {/**<!-- Docs--> */}
        <div className='no-wrap flex flex-row hover:text-blue-300'>
          <button className='flex flex-row'>
            <Link
              href=''
              className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center'
            >
              <FontAwesomeIcon icon={faMapLocationDot} size='sm' />
              <span className='px-0.5'>Roadmap</span>
            </Link>
          </button>
        </div>
        {/**<!-- Helpful Links --> */}
        <div className='no-wrap flex flex-row hover:text-blue-300'>
          <button className='flex flex-row'>
            <Link
              href=''
              className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
            >
              <FontAwesomeIcon icon={faHandshakeAngle} size='sm' />
              <span className='px-0.5'>Helpful Links</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
