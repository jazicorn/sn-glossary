import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function ListNavigator() {
  const user = {
    name: 'John',
  };

  const [isView, setView] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setView(true);
    } else {
      setView(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 768) {
        setView(true);
      } else {
        setView(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <nav className='mx-4 flex h-14 flex-row justify-between'>
      {isView ? (
        <div className='flex flex-row place-self-center pl-1'>
          <Link
            href='/'
            target='_blank'
            className='flex items-center pl-2 text-gray-700 hover:text-gray-900'
          >
            <Image src='blue-book.svg' alt='Home' width={24} height={24} />
            <span className='whitespace-nowrap pl-2.5 font-bold'>
              SN-Glossary
            </span>
          </Link>
        </div>
      ) : (
        <div className='flex flex-row place-self-center pl-1'>
          <div className='md:hidden'>
            <FontAwesomeIcon icon={faBars} color='deep-blue' size='xl' />
          </div>
        </div>
      )}

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
