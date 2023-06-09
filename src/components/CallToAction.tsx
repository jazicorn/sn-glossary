import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
//tw-elements: Initialization for ES Users
import { Input, Modal, Ripple, initTE } from 'tw-elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

type FormValues = {
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: 'required',
            message: 'Valid email is required',
          },
        }
      : {},
  };
};

export default function CallToAction() {
  useEffect(() => {
    initTE({ Input, Modal, Ripple });
  }, []);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(async (data) => {
    console.log('Email sent:' + data);
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data.email);

    // API endpoint where we send form data.
    const endpoint = '/api/send-email';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (result) {
      console.log('Email received');
      setEmailSuccess(true);
    }
  });
  return (
    <div>
      {/**************************/}
      {/**<!-- mailList Modal -->*/}
      {/**************************/}
      <div
        data-te-modal-init
        className='fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        id='mailListModal'
        tab-index='-1'
        aria-labelledby='mailListModalLabel'
        aria-hidden='true'
      >
        <div
          data-te-modal-dialog-ref
          className='pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]'
        >
          {/**popup background */}
          <div className='min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-gradient-to-b from-grayish to-gray-100 bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
            <div className='flex flex-shrink-0 items-center justify-between rounded-t-md p-4 dark:border-opacity-50'>
              {/**<!--Modal title-->*/}
              <h5
                className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                id='mailListModalLabel'
              >
                <span className='text-base font-semibold text-sn-dark'>
                  SN-Glossary:{' '}
                </span>
                <span className='text-base font-light text-sn-light'>
                  Mailing List
                </span>
              </h5>
              {/**<!--Close button-->*/}
              <button
                type='button'
                name='close'
                onClick={() => setEmailSuccess(false)}
                className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                data-te-modal-dismiss
                aria-label='Close'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-line-cap='round'
                    stroke-line-join='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/**<!--Modal body-->*/}
            {/**<div className="relative flex-auto p-4 italic" data-te-modal-body-ref>
              search
            </div>*/}
            <form onSubmit={onSubmit}>
              <div
                className='relative mx-3 rounded border-0 bg-gray-100'
                data-te-input-wrapper-init
              >
                <input
                  {...register('email')}
                  onInput={() => setEmailSuccess(false)}
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                  id='exampleFormControlInput1'
                  placeholder=''
                />
                <label
                  htmlFor='exampleFormControlInput1'
                  className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] italic leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
                >
                  email
                </label>
              </div>
              {errors?.email && (
                <p className='ml-4 mt-2 text-xs text-red-500'>
                  {' '}
                  {errors.email.message}
                </p>
              )}
              {emailSuccess && (
                <p className='ml-4 mt-2 text-xs text-green-500'>Email Sent</p>
              )}

              {/**<!--Modal footer-->*/}
              <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md p-4 '>
                <button
                  type='submit'
                  onClick={onSubmit}
                  className='ml-1 inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className='pl-2'>Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/****************** */}
      {/**<!-- nav bar --> */}
      {/****************** */}
      <nav className='hidden h-10 justify-center border-b border-t-2 border-blue-300 bg-[#DDFCE5] px-4 lg:flex lg:flex-row'>
        {/**<!-- call-to-action --> */}
        <div className='hidden flex-row place-content-center place-self-center md:flex md:basis-10/12 '>
          <div className='flex flex-row items-center text-gray-600 hover:text-gray-900'>
            <span className='hidden pr-1 lg:inline'>
              Want to use this product?
            </span>
            <span className='font-semibold italic text-rose-500'>
              Pre-Register
            </span>
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
              type='button'
              className='pl-1 text-blue-400 underline hover:text-blue-900'
              data-te-toggle='modal'
              data-te-target='#mailListModal'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Mailing List
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
