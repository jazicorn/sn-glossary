import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

//tw-elements: Initialization for ES Users
import { Input, Modal, Ripple, initTE } from 'tw-elements';

export default function NavigatorSitePublic() {
  useEffect(() => {
    initTE({ Input, Modal, Ripple });
  }, []);
  return (
    <div>
      {/**<!-- nav bar --> */}
      <nav className='custom-nav-background flex flex-row justify-between px-4 h-10'>
        {/**<!-- logo -->*/}
        <div className='place-self-center min-h-[34px] min-w-[34px]'>
          <Image
            className='inline lg:hidden'
            src='hamburger-menu.svg'
            alt='Menu'
            width={24}
            height={24}
          />
          <Link
            href='/'
            className='hidden items-center px-2 py-5 text-gray-700 hover:text-gray-900 lg:flex'
          >
            <Image src='blue-book.svg' alt='Home' width={24} height={24} />
            <span className='whitespace-nowrap pl-2.5 font-semibold'>
              SN-Glossary
            </span>
          </Link>
        </div>
        {/**<!-- Links --> */}
        <div className='my-2 flex flex-row justify-end divide-x divide-x-{12px} divide-deep-blue invisible lg:visible'>
          {/**<!-- Brands/Social Media --> */}
          <div className=' flex flex-row pl-2'>
            <div className=' flex flex-row px-2'>
              <div className='flex flex-row no-wrap'>
                <button className='flex flex-row mx-1'>
                  <Link
                    href=''
                    className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center'
                  >
                    Docs
                  </Link>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                </button>
              </div>
              <div>
                <button className='flex flex-row mx-1'>
                  <Link
                    href=''
                    className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center'
                  >
                    Support
                  </Link>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                </button>
              </div>
            </div>
          </div>
          {/**<!-- Brands/Social Media --> */}
          <div className=' flex flex-row'>
            <div className=' flex flex-row px-2'>
              <a
                href=''
                className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size='xl'
                />
              </a>
            </div>
          </div>
          {/**<!-- login/logout --> */}
          <div className=' flex flex-row px-2'>
            <Link
              href=''
              className='place-self-center h-fit w-20 p-0 mx-1 text-grey-900 hover:text-grey-300 text-center border rounded-md border-blue-300 hover:border-blue-400 transition duration-300'
            >
              Signup
            </Link>
            <Link
              href=''
              className='place-self-center h-fit w-20 p-0 ml-1 text-grey-900 hover:text-grey-300 text-center border rounded-md border-blue-300 hover:border-blue-400 transition duration-300'
            >
              Login
            </Link>
         </div>
        </div>
      </nav>
    </div>
  );
}
