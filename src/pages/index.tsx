import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';
import Link from 'next/link';
const NavBar = dynamic(import('../components/NavigatorSitePublic'), { ssr: false });
const CallToAction = dynamic(import('../components/CallToAction'), { ssr: false });
const NavFeature = dynamic(import('../components/feature/NavigatorFeature'), {
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

      {/**CalltoAction component */}
      <CallToAction/>
      
      {/**Feature component*/}
      <NavFeature />

      {/**<!----footer---> */}
      <footer className='bg-secondary-100 text-center dark:bg-secondary-600'>
        <div className='bg-secondary-200 px-4 text-center text-secondary-700 dark:bg-secondary-900 dark:text-secondary-200'>
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

            <div className='custom-disclaimer space-y-6 p-6 text-sm'>
              <h2 className='text-sm'>Last updated: 05/23/23</h2>
              <h1 className=''>Interpretation</h1>
              <p className='leading-relaxed text-gray-500 dark:text-gray-400'>
                The words of which the initial letter is capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h1 className=''>Definitions</h1>
              <div className='leading-relaxed text-gray-500 dark:text-gray-400'>
                For the purposes of this Disclaimer:
                <ul className='list-disc list-inside'>
                  <li>Company (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to SN-Glossary.</li>
                  <li>Service refers to the Website.</li>
                  <li>You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  <li>Website refers to SN-Glossary, accessible from https://www.sn-glossary.com</li>
                </ul>
              </div>
              <h1 className=''>Disclaimer</h1>
              <p className='leading-relaxed text-gray-500 dark:text-gray-400'>
                The information contained on the Service is for general information purposes only.
                The Company assumes no responsibility for errors or omissions in the contents of the Service.
                In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the TermsFeed Disclaimer Generator.
                The Company does not warrant that the Service is free of viruses or other harmful components.
              </p>
              <h1 className='text-base text-sn-light'>External Links Disclaimer</h1>
              <p className='leading-relaxed text-gray-500 dark:text-gray-400'>
                The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
                Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <h1 className=''>Fair Use Disclaimer</h1>
              <p className='leading-relaxed text-gray-500 dark:text-gray-400'>
                The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
                The Company believes this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the United States Copyright law.
                If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
              </p>
              <h1 className=''>&quot;Use at Your Own Risk&quot; Disclaimer</h1>
              <p className='leading-relaxed text-gray-500 dark:text-gray-400'>
                All information in the Service is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
                The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
              </p>
              <h1 className=''>Contact Us</h1>
              <div className='leading-relaxed text-gray-700 dark:text-gray-800'>
                If you have any questions about this Disclaimer, You can contact Us:
                <ul className='list-disc list-inside'>
                  <li><span className='underline'>By email</span>: <span className='text-blue-700'>legal@sn-glossary.com</span></li>
                  <li><span className='underline'>By website page</span>: <Link href='' className='text-blue-700'>https://www.sn-glossary.com/support</Link></li>
                </ul>
              </div>
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
