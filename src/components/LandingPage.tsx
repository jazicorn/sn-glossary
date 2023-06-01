import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='custom-background-2 absolute relative flex h-fit w-full grow grid-rows-2 flex-col place-content-center'>
      <div className='grid-col mb-6 grid h-[26em] w-auto content-end text-center'>
        <h1 className='mt-auto text-6xl font-extrabold text-sn-dark md:text-8xl'>
          ServiceNow
        </h1>
        <h1 className='text-3xl text-sn-light md:text-5xl'>Glossary</h1>
        <div className='text-md my-2 place-content-center text-center italic md:text-lg'>
          <p>...database for your ServiceNow terms</p>
        </div>
      </div>
      <hr className='my-18 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
      <div className='mt-6 flex h-full w-full flex-col gap-4 text-center'>
        <div className='flex flex-col items-center'>
          <span className='text-lg'>Looking For All ServiceNow Terms?</span>
          <hr className='my-18 flex h-[1px] w-[256px] flex-col place-content-center border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
          <Link href='/glossary' className='pl-1 text-lg italic text-blue-500'>
            <FontAwesomeIcon icon={faBook} />
            <span className='px-1 '>Public Glossary</span>
          </Link>
        </div>
        <div className='flex flex-col'>
          <span className='text-base'></span>
          <Link href='' className='pl-1 text-lg italic text-gray-500'>
            <span>...</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
