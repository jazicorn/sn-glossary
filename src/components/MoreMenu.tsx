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
            <div className='mt-2.5 absolute z-1000 bg-white flex flex-col gap-y-2 border-t-2 border border-t-transparent px-1 rounded-x rounded-b'>
                {/**<!-- Features--> */}
                <div className='flex flex-row no-wrap hover:text-blue-300 '>
                    <button className='flex flex-row'>
                        <Link
                        href='/features'
                        className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                        >
                        <FontAwesomeIcon icon={faStar} size='sm'/>
                        <span className='px-0.5'>Features</span>
                        </Link>
                    </button>
                </div>
                {/**<!-- Docs--> */}
                <div className='flex flex-row no-wrap hover:text-blue-300'>
                    <button className='flex flex-row'>
                        <Link
                        href=''
                        className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center'
                        >
                        <FontAwesomeIcon icon={faMapLocationDot} size='sm'/>
                        <span className='px-0.5'>Roadmap</span>
                        </Link>
                    </button>
                </div>
                {/**<!-- Helpful Links --> */}
                <div className='flex flex-row no-wrap hover:text-blue-300'>
                    <button className='flex flex-row'>
                        <Link
                        href=''
                        className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                        >
                        <FontAwesomeIcon icon={faHandshakeAngle} size='sm'/>
                        <span className='px-0.5'>Helpful Links</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}