import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faHouseChimney,
  faBars,
  faCircleUser
} from '@fortawesome/free-solid-svg-icons';
import {
  faSun
} from '@fortawesome/free-regular-svg-icons';
import NavigatorSitePublicMenu from './NavigatorSitePublicMenu';

//tw-elements: Initialization for ES Users
import { Input, Modal, Ripple, initTE } from 'tw-elements';

export default function NavigatorSitePublic() {
  useEffect(() => {
    initTE({ Input, Modal, Ripple });
  }, []);
  const [useMenu, setUseMenu] = useState(false);
  function menuClick() {
    setUseMenu(!useMenu);
  }
  return (
    <div className=''>
        <div className='z-0 flex flex-row h-10 border-b border-slate-200'>
        {/**<!-- nav bar --> */}
        <nav className='flex flex-row w-full justify-between px-4 h-[42px]'>
          {/**<!-- logo -->*/}
          <div className='w-1/3 flex flex-row place-items-center min-h-[34px] min-w-[34px]'>
            <button
              onClick={() => menuClick()}
              className='lg:hidden items-center pl-2 py-5 text-deep-blue hover:text-slate-500'
            >
              <FontAwesomeIcon icon={faBars} color='' size='xl' />
            </button>
            <Link
              href='/'
              className='hidden lg:flex items-center pl-2 py-5 text-deep-blue hover:text-slate-500 '
            >
              <FontAwesomeIcon icon={faHouseChimney} color='' size='lg' />
            </Link>
            <div className='hidden lg:flex lg:visible whitespace-nowrap pl-1.5 pt-0.5 font-medium'>
                SN-Glossary
            </div>
          </div>
          
          {/**Mobile: Banner */}
          <div className='lg:hidden my-2 flex flex-row justify-center text-center w-1/3  whitespace-nowrap pt-0.5 font-medium'>
                SN-Glossary
          </div>
          <div className='lg:hidden my-2 flex flex-row w-1/3 justify-end whitespace-nowrap pl-1.5 pt-0.5 font-medium text-xs'>
            {/**<!-- Moblie:login/logout --> */}
            <div className=' flex flex-row px-2'>
              <Link
                href=''
                className='place-self-center h-fit p-0 mx-1 text-grey-900 hover:text-grey-300 text-center'
              >
                <FontAwesomeIcon icon={faCircleUser} color='#334155' size='2xl' />
              </Link>
          </div>
          </div>
          {/**<!-- LinksL large Screen --> */}
          <div className='hidden lg:visible my-2 lg:flex lg:flex-row lg:justify-end divide-x divide-x-{12px} divide-deep-blue '>
            {/**<!-- ServiceNow External Link --> */}
            <div className='flex flex-row pr-2'>
              <div className='flex flex-row no-wrap'>
                  <button className='flex flex-row mx-1'>
                    <a
                      href='https://docs.servicenow.com/'
                      target='_blank'
                      className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center text-sn-light'
                    >
                      ServiceNow
                    </a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                  </button>
                </div>
            </div>
            {/**<!-- SN-GLossary External Links --> */}
            <div className=' flex flex-row'>
              <div className=' flex flex-row px-2'>
                {/**<!-- FAQ--> */}
                <div className='flex flex-row no-wrap'>
                  <button className='flex flex-row mx-1'>
                    <Link
                      href=''
                      className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                    >
                      F.A.Q
                    </Link>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                  </button>
                </div>
                {/**<!-- Docs--> */}
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
                {/**<!-- Support --> */}
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
                {/**<!-- Github --> */}
                <div className=' flex flex-row pl-1 pr-2'>
                  <a
                    href='https://github.com/jazicorn/sn-glossary'
                    target='_blank'
                    className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size='xl'
                    />
                  </a>
                </div>
              </div>
            </div>
            {/**<!-- Brands/Social Media --> */}
            <div className='flex flex-row'>
              <div className='bg-deep-blue rounded-full flex flex-row mx-2 my-0 pr-4 border border-deep-blue'>
                <div className='bg-slate-100 rounded-full'>
                  <button
                  className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'
                >
                  <FontAwesomeIcon
                    icon={faSun}
                    size='lg'
                  />
                </button>
                </div>
                
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
      {/**DropDown Menu */}
      <div className='lg:hidden'>
        {useMenu && <NavigatorSitePublicMenu/>}
      </div>
    </div>
  );
}
