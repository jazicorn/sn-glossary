import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faMapLocationDot,
  faHandshakeAngle,
  faStar,
  faChalkboard,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

export default function NavigatorSitePublicMenu() {
  return (
    <div className=''>
      <div className='mx-8 my-4 flex flex-col place-items-center rounded-lg border bg-gray-100 py-4 text-center text-slate-700'>
        <h1 className='w-full border-b border-slate-300 px-10 pb-2 text-xl'>
          {' '}
          Navigation
        </h1>
        <div className='divide-y-2 '>
          <ul>
            <ol className='flex flex-row justify-center p-2'>
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
            </ol>
            <ol className='flex flex-row justify-center p-2'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href='/features'
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  <FontAwesomeIcon icon={faStar} size='sm' />
                  <span className='px-0.5'>Features</span>
                </Link>
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center'
                >
                  <FontAwesomeIcon icon={faMapLocationDot} size='sm' />
                  <span className='px-0.5'>Roadmap</span>
                </Link>
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  <FontAwesomeIcon icon={faHandshakeAngle} size='sm' />
                  <span className='px-0.5'>Helpful Links</span>
                </Link>
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2'>
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
            </ol>
          </ul>
          <ul>
            <ol className='flex flex-row justify-center p-2'>
              {/**<!-- ServiceNow External Link --> */}
              <button className='mx-1 flex flex-row '>
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
            </ol>
            <ol className='flex flex-row justify-center p-2'>
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
            </ol>
            <ol className='flex flex-row justify-center p-2'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  Docs
                </Link>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color=''
                  size='2xs'
                />
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  Support
                </Link>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color=''
                  size='2xs'
                />
              </button>
            </ol>
            <ol className='flex flex-row justify-center p-2'>
              <button className='mx-1 flex flex-row'>
                <Link
                  href=''
                  className='text-grey-900 hover:text-grey-300 h-fit w-auto place-self-center truncate px-0.5 py-0 text-center tracking-tighter'
                >
                  Github
                </Link>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color=''
                  size='2xs'
                />
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
