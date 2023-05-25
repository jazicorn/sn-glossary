import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBookOpen,
  faBars,
  faCircleUser,
  faChalkboard,
  faBook,
  faAnglesUp,
  faAnglesRight,
  faAnglesDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faSun
} from '@fortawesome/free-regular-svg-icons';
import NavigatorSitePublicMenu from './NavigatorSitePublicMenu';
import AccountMenu from './AccountMenu';
import MoreMenu from './MoreMenu';

//tw-elements: Initialization for ES Users
import { Input, Modal, Ripple, initTE } from 'tw-elements';

export default function NavigatorSitePublic() {
  useEffect(() => {
    initTE({ Input, Modal, Ripple });
  }, []);
  const [Menu, setMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);

  function moreMenuClick() {
    setMoreMenu(!moreMenu)
  }
  function menuClick() {
    setAccountMenu(false);
    setMenu(!Menu);
  }
  function accountMenuClick() {
    setMenu(false)
    setAccountMenu(!accountMenu)
  }
  return (
    <div className='z-10 relative'>
      <div className='z-20 relative flex flex-row h-10 border-b border-slate-200'>
        {/**<!-- nav bar --> */}
        <nav className='z-3 relative flex flex-row w-full justify-between px-4 h-[42px]'>
          <div className='z-4 relative w-1/3 flex flex-row justify-start place-items-center min-h-[34px] min-w-[34px] divide-x divide-x-{12px} divide-deep-blue'>
            <div className='pr-2'>
              <button
                onClick={() => menuClick()}
                className='xl:hidden items-center pl-2 py-5 text-deep-blue hover:text-slate-500'
              >
                {!Menu ? <FontAwesomeIcon icon={faBars} color='' size='xl' /> : <FontAwesomeIcon icon={faBars} color='' size='xl' rotation={90} />}
              </button>
              {/**<!-- logo -->*/}
              <Link
                href='/'
                className='hidden xl:flex items-center pl-2 py-5 text-deep-blue hover:text-blue-300'
              >
                <FontAwesomeIcon icon={faBookOpen} color='' size='xl' />
                <div className='hidden xl:flex xl:visible whitespace-nowrap pl-1.5 pt-0.5 font-medium'>
                  SN-Glossary
                </div>
              </Link>
            </div>
            {/**Site Links */}
            <div className='hidden xl:flex flex-row '>
              {/**<!-- Glossary--> */}
              <div className='flex flex-row no-wrap'>
                <button className='flex flex-row mx-1 text-blue-500'>
                  <Link
                    href='/glossary'
                    className='place-self-center flex flex-row h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                  >
                    <FontAwesomeIcon icon={faBook} size='sm' className='place-self-center'/>
                    <span className='pl-1 tracking-tighter'>Public Glossary</span>
                  </Link>
                </button>
              </div>
              {/**<!-- Features--> */}
              <div className='flex flex-row no-wrap min-w-[66px]'>
                <button className='flex flex-col mx-1' onClick={moreMenuClick}>
                  {!moreMenu ?
                    <button
                      className='hover:text-blue-300 place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                    >
                      <FontAwesomeIcon icon={faAnglesDown} size='sm' className='w-[18px]'/>
                      <span className='px-0.5'>More</span>
                    </button> :
                    <div className='flex flex-col'>
                      <button
                        className='hover:text-blue-300 place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                      >
                        <FontAwesomeIcon icon={faAnglesUp} size='sm' className='w-[18px]'/>
                        <span className='px-0.5'>More</span>
                      </button>
                      <div className=''><MoreMenu /></div>
                    </div>
                    
                  }
                </button>
              </div>
            </div>
            <div className='hidden xl:flex flex-row pr-2  hover:text-blue-300'>
              
               {/**<!-- Dashboard--> */}
              <div className='flex flex-row no-wrap'>
                <button className='flex flex-row mx-1'>
                  <Link
                    href=''
                    className='place-self-center flex flex-row h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                  >
                    <FontAwesomeIcon icon={faChalkboard} size='sm' className='place-self-center'/>
                    <span className='px-1'>Dashboard</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                  </Link>
                </button>
              </div>
              
            </div>
          </div>
          {/**Mobile: Home Link */}
          <div className='xl:hidden my-2 flex flex-row justify-center text-center w-1/3  whitespace-nowrap pt-0.5 font-medium'>
            <Link
              href='/'>
              SN-Glossary
            </Link>
          </div>
          <div className='xl:hidden my-2 flex flex-row w-1/3 justify-end whitespace-nowrap pl-1.5 pt-0.5 font-medium text-xs'>
            {/**<!-- Moblie:login/logout --> */}
            <div className=' flex flex-row px-2'>
              <Link
                href=''
                className='place-self-center h-fit p-0 mx-1 text-grey-900 hover:text-grey-300 text-center'
              >
                <FontAwesomeIcon icon={faCircleUser} color='#334155' size='2xl' className='hover:text-gray-500' onClick={() => accountMenuClick()}/>
              </Link>
          </div>
          </div>
          {/**<!-- Links large Screen --> */}
          <div className='hidden xl:visible my-2 xl:flex xl:flex-row xl:justify-end divide-x divide-x-{12px} divide-deep-blue '>
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
              <div className=' flex flex-row '>
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
            {/**<!-- Site Colors: Light/Dark --> */}
            <div className='flex flex-row'>
              <div className='bg-deep-blue rounded-full flex flex-row mx-2 my-0 pr-4 border border-deep-blue'>
                <div className='bg-slate-100 rounded-full'>
                  <button
                  className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'
                >
                  <FontAwesomeIcon
                    icon={faSun}
                    size='xl'
                  />
                </button>
                </div>
                
              </div>
            </div>
            {/**<!-- login/logout --> */}
            <div className='flex flex-row px-2'>
              <Link
                href=''
                className='place-self-center h-fit w-16 p-0 mx-1 text-sm text-grey-900 hover:text-grey-300 text-center border rounded-md border-blue-300 hover:border-blue-400 transition duration-300'
              >
                Signup
              </Link>
              <Link
                href=''
                className='place-self-center h-fit w-16 p-0 ml-1 text-sm text-grey-900 hover:text-grey-300 text-center border rounded-md border-blue-300 hover:border-blue-400 transition duration-300'
              >
                Login
              </Link>
          </div>
          </div>
        </nav>
      </div>
      {/**DropDown Menu */}
      <div className='xl:hidden absolute z-1000 bg-white sm:bg-transparent overflow-visible flex flex-col items-center sm:items-start  w-screen border-b-2 sm:border-0'>
        {Menu && <NavigatorSitePublicMenu />}
      </div>
      <div className='xl:hidden absolute z-1000 bg-white sm:bg-transparent overflow-visible flex flex-col items-center sm:items-end  w-screen border-b-2 sm:border-0'>
        {accountMenu && <AccountMenu/>}
      </div>
    </div>
  );
}
