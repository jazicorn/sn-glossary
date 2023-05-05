import Image from 'next/image';
import Link from 'next/link';

export default function ListNavigator() {
  const user = {
    name: 'John',
  };

  return (
    <nav className='mx-4 flex h-14 flex-row justify-between'>
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
      {/**<!-- primary nav --> */}
      <div className='invisible flex flex-row md:visible'>
        <span className='place-self-center text-gray-700 hover:text-gray-900'>
          👋 Welcome {user.name}!
        </span>
      </div>
      {/**<!-- secondary nav --> */}
      <div className='mr-2 flex flex-row'>
        <a
          href=''
          className='text-grey-900 hover:text-grey-300 place-self-center rounded bg-blue-300 px-3 py-1 transition duration-300 hover:bg-blue-400'
        >
          Logout
        </a>
      </div>
    </nav>
  );
}
