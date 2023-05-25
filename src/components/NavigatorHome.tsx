import Link from 'next/link';

export default function NavigatorHome() {
  return (
    <div>
      {/**<!-- nav bar --> */}
      <nav className='m-0 mt-1 flex h-10 flex-row justify-center gap-4 px-4 py-0 text-lg'>
        <div className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-auto place-self-center p-0 text-center'>
          <Link href=''>About</Link>
        </div>
        <div className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-auto place-self-center p-0 text-center'>
          <Link href=''>Links</Link>
        </div>
        <div className='text-grey-900 hover:text-grey-300 mx-1 h-fit w-auto place-self-center p-0 text-center'>
          <Link href=''>Contact</Link>
        </div>
      </nav>
    </div>
  );
}
