import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      {/**<!-- nav bar --> */}
      <nav className='custom-nav-background flex h-14 flex-row justify-between px-4 md:basis-1/12'>
        {/**<!-- logo -->*/}
        <div className='place-self-center'>
          <Link
            href='/'
            target='_blank'
            className='flex items-center px-2 py-5 text-gray-700 hover:text-gray-900'
          >
            <Image src='blue-book.svg' alt='Home' width={24} height={24} />
            <span className='whitespace-nowrap pl-2.5 font-bold'>
              SN-Glossary
            </span>
          </Link>
        </div>
        {/**<!-- call-to-action --> */}
        <div className='hidden flex-row place-content-center place-self-center md:flex md:basis-10/12 '>
          <div
            className='
              flex flex-row items-center         
              text-gray-600 hover:text-gray-900'
          >
            <span className='mr-1 '>
              <Image
                src='partying-face.svg'
                alt='call-to-action'
                width={24}
                height={24}
              />
            </span>
            <span className='mr-1 text-sm font-bold italic text-rose-400'>
              **Coming Soon**
            </span>
            <span className='px-1 '>
              <Image
                src='party-popper.svg'
                alt='call-to-action'
                width={24}
                height={24}
              />
            </span>
            <span className='hidden pr-1 lg:inline'>
              Want to use this product?
            </span>
            <span className='italic'>Sign-up</span>
            <span className='ml-1 '>
              <Image
                src='backhand-index-pointing-right.svg'
                alt='pointer'
                width={24}
                height={24}
              />
            </span>
          </div>
          <div
            className='
              flex flex-row items-center pl-1       
              text-gray-500 hover:text-gray-900'
          >
            <span className='mx-1'>
              <Image
                src='open-mailbox-with-raised-flag.svg'
                alt='mailing-list'
                width={24}
                height={24}
              />
            </span>
            {/**#TODO Modal popup for user to a subscribe to mailing list*/}
            <a
              href='#'
              className='pl-1 text-blue-400 underline hover:text-blue-900'
            >
              Mailing List
            </a>
          </div>
        </div>
        {/**<!-- secondary nav --> */}
        <div className='mr-2 flex flex-row md:basis-1/12'>
          <a
            href=''
            className='text-grey-900 hover:text-grey-300 place-self-center rounded bg-blue-300 
                      px-3 py-1 transition duration-300 hover:bg-blue-400'
          >
            Login
          </a>
        </div>
      </nav>
      {/**Feature bar*/}
      <div className='grid md:h-32 grow-0 border-y-2 border-blue-200 pb-2'>
        <h1 className='place-self-center text-2xl m-2 md:m-1 px-2 bg-slate-200 border border-gray-400 rounded'>Features</h1>
        <div className='place-self-center justify-items-center text-center grid gap-3 md:grid-cols-4 md:gap-1'>
          <div className='custom-feature-bar-tabs text-sm'><h2>Word Search</h2><p className='italic text-xs text-yellow-500'>*In Progress*</p></div>
          <div className='custom-feature-bar-tabs text-sm'><h2>Word List</h2><p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
          <div className='custom-feature-bar-tabs text-sm'><h2>Flashcards</h2><p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
          <div className='custom-feature-bar-tabs text-sm'><h2>Desktop Support</h2><p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
        </div>     
      </div>
      {/**<!-- body --> */}
      <div className='custom-background flex h-screen flex-col place-content-center bg-slate-300 text-center'>
        <h2 className='text-4xl font-extrabold'>ServiceNow Terms</h2>
        <p className='color: rgba(96, 165, 250, var(--tw-text-opacity));'>all in one place</p>
        <div>
          <input
            className='m-4 w-3/5 rounded-full bg-blue-300 px-4 py-2 text-center md:w-2/5'
            placeholder='Type word here...'
          ></input>
        </div>
      </div>
      <footer className='bg-secondary-100 text-center dark:bg-secondary-600'>
        <div className='bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200'>
          © 2023 Copyright:
          <a className='pl-1 text-blue-400 dark:text-blue-300' href='#'>
            SN-Glossary
          </a>
        </div>
      </footer>
    </div>
  );
}
