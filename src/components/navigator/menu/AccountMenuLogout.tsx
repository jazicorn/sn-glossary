import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignOutButton  } from '@clerk/nextjs';
import {
  faLock,
  faKey,
  faChalkboard,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';

export default function AccountMenu() {
  return (
    <div className=''>
      <div className='ng-blue-100 mx-8 my-4 flex flex-col place-items-center rounded-lg border bg-gray-100 py-4 text-center text-slate-700'>
        <h1 className='w-full border-b border-slate-300 pb-2 text-xl text-blue-500'>
          Account Menu
        </h1>
        <div className='mx-4 mt-2 divide-y'>
          <ul className='text-xl'>
              <ol className='flex flex-row justify-center px-2 pb-1 text-blue-300 hover:text-gray-500'>
                <SignOutButton>
                  <button>
                    Logout
                  </button>
                </SignOutButton>
              </ol>
          </ul>
          <ul>
            <ol className='flex flex-row justify-center p-2 hover:text-blue-300'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  <FontAwesomeIcon icon={faKey} size='sm' />
                  <span className='px-1'>User Settings</span>
                </Link>
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2 hover:text-blue-300'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center'
                >
                  <FontAwesomeIcon icon={faChalkboard} size='sm' />
                  <span className='px-1'>Dashboard Settings</span>
                </Link>
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2 hover:text-blue-300'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size='sm' />
                  <span className='px-1'>Issue Tickets</span>
                </Link>
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2 hover:text-blue-300'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  <FontAwesomeIcon icon={faLock} size='sm' />
                  <span className='px-1'>Privacy</span>
                </Link>
              </button>
            </ol>
          </ul>
          <ul>
            <ol className='flex flex-row justify-center p-2'>...</ol>
          </ul>
        </div>
      </div>
    </div>
  );
}
