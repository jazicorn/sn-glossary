import { Inter } from 'next/font/google';
import dynamic from "next/dynamic";
const NavBar = dynamic(import("../components/HomeNavigator"), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      <NavBar/>
      {/****************** */}
      {/**<!--Feature bar->*/}
      {/****************** */}
      <div className='grid h-fit md:h-48 md:m-full grow-0 border-t-4 border-b-2 border-blue-300 pt-1 pb-2'>
        <h1 className='place-self-center md:text-2xl m-2 md:m-1 px-2 bg-gradient-to-r from-blue-50 to-gray-200 border rounded text-xl'>Features</h1>
        {/**feature options */}
        <div className='place-self-center justify-items-center text-center grid gap-3 grid-row-2 grid-cols-3 md:grid-row-1 md:grid-cols-4 md:gap-1'>
          <div className='custom-feature-bar-tabs text-sm col-start-2 col-end-2 md:col-start-1 md:col-end-1'><h2>Word Search</h2><p className='italic text-xs text-yellow-500'>*In Progress*</p></div>
          <div className='custom-feature-bar-tabs text-sm col-start-1 md:col-start-2'><h2>Word List</h2><p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
          <div className='custom-feature-bar-tabs text-sm col-start-2 md:col-start-3'><h2>Flashcards</h2><p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
          <div className='custom-feature-bar-tabs text-sm col-start-3 md:col-start-4'><h2>Desktop Support</h2><p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
        </div>     
      </div>
      {/****************** */}
      {/**<!--- body ----> */}
      {/****************** */}
      <div className='custom-background h-screen flex flex-col bg-slate-300 text-center'>
        {/**!--landing message */}
        <div className='flex flex-col basis-1/3'>
          <h2 className='text-4xl text-sn-dark font-extrabold mt-auto'>ServiceNow </h2>
          <h2 className='text-xl text-sn-light'>Glossary</h2>
        </div>
        {/**<!--search-->*/}
        <div className="m-3 flex flex-row place-content-center "> 
          <input type="search" id="word-search" placeholder="search" className="relative m-0 min-w-0 basis-96 rounded border-2 border-solid border-neutral-300 bg-grayish-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary">
          </input>
        </div>
      </div>
      {/****************** */}
      {/**<!----footer---> */}
      {/****************** */}
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
