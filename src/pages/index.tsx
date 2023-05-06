import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
// Initialization for ES Users
import {
  Input,
  Modal,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Input, Modal, Ripple });

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`flex h-screen min-h-full flex-col ${inter.className}`}>
      {/**************************/}
      {/**<!-- mailList Modal -->*/}
      {/**************************/}
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="mailListModal"
        tab-index="-1"
        aria-labelledby="mailListModalLabel"
        aria-hidden="true">
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
          {/**popup background */}
          <div
            className="bg-gradient-to-b from-grayish to-gray-100 min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div
              className="flex flex-shrink-0 items-center justify-between rounded-t-md p-4 dark:border-opacity-50">
              {/**<!--Modal title-->*/}
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="mailListModalLabel">
                <span className='text-base font-semibold'>SN-Glossary: </span>
                <span className='text-base font-light'>Mailing List</span>
              </h5>
              {/**<!--Close button-->*/}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    stroke-line-cap="round"
                    stroke-line-join="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/**<!--Modal body-->*/}
            {/**<div className="relative flex-auto p-4 italic" data-te-modal-body-ref>
              search
            </div>*/}
            <div className="relative m-3" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="" />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary italic"
                >email
              </label>
            </div>
            {/**<!--Modal footer-->*/}
            <div
              className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md p-4 ">
              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-4 py-1.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/****************** */}
      {/**<!-- nav bar --> */}
      {/****************** */}
      <nav className='custom-nav-background flex h-14 flex-row justify-between px-4 md:basis-1/12'>
        {/**<!-- logo -->*/}
        <div className='place-self-center'>
          <Image className='inline md:hidden' src='hamburger-menu.svg' alt='Menu' width={24} height={24} />
          <Link
            href='/'
            target='_blank'
            className='hidden md:flex items-center px-2 py-5 text-gray-700 hover:text-gray-900'
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
            {/*****************************************/}
            {/**<!-- mailList Button trigger modal -->*/}
            {/*****************************************/}
            <button
              type="button"
              className='pl-1 text-blue-400 underline hover:text-blue-900'
              data-te-toggle="modal"
              data-te-target="#mailListModal"
              data-te-ripple-init
              data-te-ripple-color="light">
              Mailing List         
            </button>
          </div>
        </div>
        {/**<!-- login/logout --> */}
        <div className='md:m-full md:justify-end flex flex-row md:basis-1/12'>
          <a href='login' className='md:w-20 text-grey-900 hover:text-grey-300 place-self-center rounded-md bg-blue-300 p-1 md:px-3 md:py-1 transition duration-300 hover:bg-blue-400'>
            Login
          </a>
        </div>
      </nav>
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
