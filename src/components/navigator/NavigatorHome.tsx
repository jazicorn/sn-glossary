import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

//tw-elements: Initialization for ES Users
import { Input, Modal, Ripple, initTE } from 'tw-elements';

export default function NavigatorHome() {
  useEffect(() => {
    initTE({ Input, Modal, Ripple });
  }, []);

  return (
    <div className='relative z-10'>
      <div className='relative z-20 flex h-10 flex-row'>
        {/**<!-- nav bar --> */}
        <nav className='z-3 relative flex h-[42px] w-full flex-row justify-between px-4'>
          <div className='z-4 divide-x-{12px} relative flex min-h-[34px] w-1/3 min-w-[34px] flex-row place-items-center justify-start divide-x divide-deep-blue'>
            <div className='pr-2'>
              <Link
                href='/'
                className='items-center py-5 pl-2 text-deep-blue hover:text-blue-300 flex flex-row'
              >
                <FontAwesomeIcon icon={faBookOpen} color='' size='xl' />
                <div className=' whitespace-nowrap pl-1.5 pt-0.5 font-medium flex'>
                  SN-Glossary
                </div>
              </Link>
            </div>
          </div>
          {/**<!-- Links large Screen --> */}
          <div className='divide-x-{12px} my-2 divide-x divide-deep-blue xl:visible xl:flex xl:flex-row xl:justify-end '>
            {/**<!-- Site Colors: Light/Dark --> */}
            <div className='flex flex-row px-2'>
             <div className='mx-2 my-0 flex flex-row rounded-full border border-deep-blue bg-deep-blue pr-4'>
                <div className='rounded-full bg-slate-100'>
                  <button className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-auto place-self-center p-0 text-center'>
                    <FontAwesomeIcon icon={faSun} size='xl' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
