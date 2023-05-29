import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBookOpen,
  faBars,
  faCircleUser,
  faChalkboard,
  faBook,
  faAnglesUp,
  faAnglesDown,
} from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
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
    setMoreMenu(!moreMenu);
  }
  function menuClick() {
    setAccountMenu(false);
    setMenu(!Menu);
  }
  function accountMenuClick() {
    setMenu(false);
    setAccountMenu(!accountMenu);
  }
  return (
    <div className='relative z-10'>
      <div className='relative z-20 flex h-10 flex-row border-b border-slate-200'>
        {/**<!-- nav bar --> */}
        <nav className='z-3 relative flex h-[42px] w-full flex-row justify-between px-4'>
          <div className='z-4 divide-x-{12px} relative flex min-h-[34px] w-1/3 min-w-[34px] flex-row place-items-center justify-start divide-x divide-deep-blue'>
            <div className='pr-2'>
              <button
                onClick={() => menuClick()}
                className='items-center py-5 pl-2 text-deep-blue hover:text-slate-500 xl:hidden'
              >
                {!Menu ? (
                  <FontAwesomeIcon icon={faBars} color='' size='xl' />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    color=''
                    size='xl'
                    rotation={90}
                  />
                )}
              </button>
              {/**<!-- logo -->*/}
              <Link
                href='/'
                className='hidden items-center py-5 pl-2 text-deep-blue hover:text-blue-300 xl:flex'
              >
                <FontAwesomeIcon icon={faBookOpen} color='' size='xl' />
                <div className='hidden whitespace-nowrap pl-1.5 pt-0.5 font-medium xl:visible xl:flex'>
                  SN-Glossary
                </div>
              </Link>
            </div>
            {/**Site Links */}
            <div className='hidden flex-row xl:flex '>
              {/**<!-- Glossary--> */}
              <div className='no-wrap flex flex-row'>
                <button className='mx-1 flex flex-row text-blue-500'>
                  <Link
                    href='/glossary'
                    className='text-grey-900 hover:text-grey-300 flex h-fit w-auto flex-row place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                  >
                    <FontAwesomeIcon
                      icon={faBook}
                      size='sm'
                      className='place-self-center'
                    />
                    <span className='pl-1 tracking-tighter'>
                      Public Glossary
                    </span>
                  </Link>
                </button>
              </div>
              {/**<!-- Features--> */}
              <div className='no-wrap flex min-w-[66px] flex-row'>
                <button className='mx-1 flex flex-col' onClick={moreMenuClick}>
                  {!moreMenu ? (
                    <button className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter hover:text-blue-300'>
                      <FontAwesomeIcon
                        icon={faAnglesDown}
                        size='sm'
                        className='w-[18px]'
                      />
                      <span className='px-0.5'>More</span>
                    </button>
                  ) : (
                    <div className='flex flex-col'>
                      <button className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter hover:text-blue-300'>
                        <FontAwesomeIcon
                          icon={faAnglesUp}
                          size='sm'
                          className='w-[18px]'
                        />
                        <span className='px-0.5'>More</span>
                      </button>
                      <div className=''>
                        <MoreMenu />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </div>
            <div className='hidden flex-row pr-2 hover:text-blue-300  xl:flex'>
              {/**<!-- Dashboard--> */}
              <div className='no-wrap flex flex-row'>
                <button className='mx-1 flex flex-row'>
                  <Link
                    href=''
                    className='text-grey-900 hover:text-grey-300 flex h-fit w-auto flex-row place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                  >
                    <FontAwesomeIcon
                      icon={faChalkboard}
                      size='sm'
                      className='place-self-center'
                    />
                    <span className='px-1'>Dashboard</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color=''
                      size='2xs'
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/**Mobile: Home Link */}
          <div className='my-2 flex w-1/3 flex-row justify-center whitespace-nowrap pt-0.5  text-center font-medium xl:hidden'>
            <Link href='/'>SN-Glossary</Link>
          </div>
          <div className='my-2 flex w-1/3 flex-row justify-end whitespace-nowrap pl-1.5 pt-0.5 text-xs font-medium xl:hidden'>
            {/**<!-- Moblie:login/logout --> */}
            <div className=' flex flex-row px-2'>
              <Link
                href=''
                className='text-grey-900 hover:text-grey-300 mx-1 h-fit place-self-center p-0 text-center'
              >
                <FontAwesomeIcon
                  icon={faCircleUser}
                  color='#334155'
                  size='2xl'
                  className='hover:text-gray-500'
                  onClick={() => accountMenuClick()}
                />
              </Link>
            </div>
          </div>
          {/**<!-- Links large Screen --> */}
          <div className='divide-x-{12px} my-2 hidden divide-x divide-deep-blue xl:visible xl:flex xl:flex-row xl:justify-end '>
            {/**<!-- ServiceNow External Link --> */}
            <div className='flex flex-row pr-2'>
              <div className='no-wrap flex flex-row'>
                <button className='mx-1 flex flex-row'>
                  <a
                    href='https://docs.servicenow.com/'
                    target='_blank'
                    className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center text-sn-light'
                  >
                    ServiceNow
                  </a>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color=''
                    size='2xs'
                  />
                </button>
              </div>
            </div>
            {/**<!-- SN-GLossary External Links --> */}
            <div className=' flex flex-row'>
              <div className=' flex flex-row '>
                {/**<!-- FAQ--> */}
                <div className='no-wrap flex flex-row'>
                  <button className='mx-1 flex flex-row'>
                    <Link
                      href=''
                      className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                    >
                      F.A.Q
                    </Link>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color=''
                      size='2xs'
                    />
                  </button>
                </div>
                {/**<!-- Docs--> */}
                <div className='no-wrap flex flex-row'>
                  <button className='mx-1 flex flex-row'>
                    <Link
                      href=''
                      className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center'
                    >
                      Docs
                    </Link>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color=''
                      size='2xs'
                    />
                  </button>
                </div>
                {/**<!-- Support --> */}
                <div>
                  <button className='mx-1 flex flex-row'>
                    <Link
                      href=''
                      className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center'
                    >
                      Support
                    </Link>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color=''
                      size='2xs'
                    />
                  </button>
                </div>
                {/**<!-- Github --> */}
                <div className=' flex flex-row pl-1 pr-2'>
                  <a
                    href='https://github.com/jazicorn/sn-glossary'
                    target='_blank'
                    className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-auto place-self-center p-0 text-center'
                  >
                    <FontAwesomeIcon icon={faGithub} size='xl' />
                  </a>
                </div>
              </div>
            </div>
            {/**<!-- Site Colors: Light/Dark --> */}
            <div className='flex flex-row'>
              <div className='mx-2 my-0 flex flex-row rounded-full border border-deep-blue bg-deep-blue pr-4'>
                <div className='rounded-full bg-slate-100'>
                  <button className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-auto place-self-center p-0 text-center'>
                    <FontAwesomeIcon icon={faSun} size='xl' />
                  </button>
                </div>
              </div>
            </div>
            {/**<!-- login/logout --> */}
            <div className='flex flex-row px-2'>
              <Link
                href=''
                className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-16 place-self-center rounded-md border border-blue-300 p-0 text-center text-sm transition duration-300 hover:border-blue-400'
              >
                Signup
              </Link>
              <Link
                href=''
                className='text-grey-900 hover:text-grey-300 ml-1 h-fit w-16 place-self-center rounded-md border border-blue-300 p-0 text-center text-sm transition duration-300 hover:border-blue-400'
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/**DropDown Menu */}
      <div className='z-1000 absolute flex w-screen flex-col items-center overflow-visible border-b-2 bg-white sm:items-start  sm:border-0 sm:bg-transparent xl:hidden'>
        {Menu && <NavigatorSitePublicMenu />}
      </div>
      <div className='z-1000 absolute flex w-screen flex-col items-center overflow-visible border-b-2 bg-white sm:items-end  sm:border-0 sm:bg-transparent xl:hidden'>
        {accountMenu && <AccountMenu />}
      </div>
    </div>
  );
}
