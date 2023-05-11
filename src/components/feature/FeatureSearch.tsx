export default function NavBarFeatureSearch() {
  return (
    <div className='flex h-full w-full flex-initial flex-row place-content-center bg-blue-100 text-center'>
      <div className='h-full w-full bg-green-100 opacity-100 transition-opacity duration-150 ease-linear'>
        {/**<!--search bar--> */}
        <div className='custom-background flex h-full flex-col bg-slate-300 text-center'>
          {/**!--landing message */}
          <div className='flex basis-1/3 flex-col'>
            <h2 className='mt-auto text-4xl font-extrabold text-sn-dark'>
              ServiceNow{' '}
            </h2>
            <h2 className='text-xl text-sn-light'>Glossary</h2>
          </div>
          {/**<!--search-->*/}
          <div className='m-3 flex flex-row place-content-center '>
            <input
              type='search'
              id='word-search'
              placeholder='search'
              className='bg-grayish-100 relative m-0 min-w-0 basis-96 rounded border-2 border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-neutral-400 focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
