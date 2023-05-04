import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex flex-col h-screen min-h-full ${inter.className}`}>
      {/**<!-- nav bar --> */}
      <nav className='h-14 px-4 flex flex-row md:basis-1/12 custom-nav-background justify-between'>
          {/**<!-- logo -->*/}
          <div className="place-self-center">
              <Link href="/" target="_blank" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <Image
                  src="blue-book.svg"
                  alt="Home"
                  width={24}
                  height={24}
              />
              <span className="pl-2.5 font-bold whitespace-nowrap">SN-Glossary</span>
              </Link>
          </div>
          {/**<!-- call-to-action --> */}
        <div className="hidden md:flex flex-row md:basis-10/12 place-self-center place-content-center ">
          <div className="
              flex flex-row items-center         
              text-gray-600 hover:text-gray-900">
            <span className='mr-1 '>
              <Image
                  src="partying-face.svg"
                  alt="call-to-action"
                  width={24}
                  height={24}
              />
            </span> 
            <span className='mr-1 text-sm text-rose-400 font-bold italic'>**Coming Soon**</span>
            <span className='px-1 '>
              <Image
                  src="party-popper.svg"
                  alt="call-to-action"
                  width={24}
                  height={24}
              />
            </span> 
            <span className='hidden lg:inline pr-1'>Want to use this product?</span>
            <span className='italic'>Sign-up</span>
            <span className='ml-1 '>
              <Image
                  src="backhand-index-pointing-right.svg"
                  alt="pointer"
                  width={24}
                  height={24}
              />
            </span> 
          </div>
          <div className="
              flex flex-row items-center pl-1       
              text-gray-500 hover:text-gray-900">
            <span className='mx-1'>
              <Image
                  src="open-mailbox-with-raised-flag.svg"
                  alt="mailing-list"
                  width={24}
                  height={24}
              />
            </span>
            {/**#TODO Modal popup for user to a subscribe to mailing list*/}
            <a href='#' className='pl-1 text-blue-400 hover:text-blue-900 underline'>
              Mailing List</a>
          </div>
        </div>
        {/**<!-- secondary nav --> */}
        <div className="flex flex-row md:basis-1/12 mr-2">
          <a
            href=""
            className="place-self-center py-1 px-3 bg-blue-300 hover:bg-blue-400 
                      text-grey-900 hover:text-grey-300 rounded transition duration-300">
                  Login
              </a>
          </div>
      </nav>
      {/**<!-- body --> */}
      <div className='custom-background h-screen flex flex-col place-content-center bg-slate-300 text-center'>
        <h2 className='font-extrabold text-4xl'>Welcome!</h2>
        <div>
          <input className="m-4 py-2 px-4 w-3/5 md:w-2/5 bg-blue-300 rounded-full text-center" placeholder='Type word here...'></input>
        </div>
      </div>
<footer className="bg-secondary-100 text-center dark:bg-secondary-600">

  <div
    className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
    © 2023 Copyright:
    <a
      className="pl-1 text-blue-400 dark:text-blue-300"
      href="#"
      >SN-Glossary</a
    >
  </div>
</footer>
   </div>
  )
}
