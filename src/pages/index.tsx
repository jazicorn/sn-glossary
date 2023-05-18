import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';

const NavBar = dynamic(import('../components/HomeNavigator'), { ssr: false });
const NavFeature = dynamic(import('../components/feature/FeatureNavigator'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    invoke('greet', { name: 'World' }).then(console.log).catch(console.error);
  }, []);
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      {/**Navbar component */}
      <NavBar />
      {/**Feature component*/}
      <NavFeature />

      {/**<!----footer---> */}
      <footer className='bg-secondary-100 text-center dark:bg-secondary-600'>
        <div className='bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-900 dark:text-secondary-200'>
          <button
            data-modal-target='defaultModal'
            data-modal-toggle='defaultModal'
            className='px-3 py-1.5 text-center text-sm font-semibold text-slate-600 dark:text-white'
            type='button'
          >
            Terms of Service |
          </button>
          © 2023 Copyright:
          <a className='pl-1 text-blue-400 dark:text-blue-300' href='#'>
            SN-Glossary
          </a>
        </div>
      </footer>
      {/**Terms of service modal */}
      <div
        id='defaultModal'
        tab-index='-1'
        aria-hidden='true'
        className='fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0'
      >
        <div className='relative max-h-full w-full max-w-2xl'>
          <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
            <div className='flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Terms of Service
              </h3>
              <button
                type='button'
                className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='defaultModal'
              >
                <svg
                  aria-hidden='true'
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>

            <div className='space-y-6 p-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div className='flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600'>
              <button
                data-modal-hide='defaultModal'
                type='button'
                className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                I accept
              </button>
              <button
                data-modal-hide='defaultModal'
                type='button'
                className='rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600'
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
