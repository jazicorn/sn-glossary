export default function NavBarFeatureSearch() {
    return (
        <div className="flex-initial bg-blue-100 h-full w-full flex flex-row place-content-center text-center">
            <div
                className="bg-green-100 h-full w-full opacity-100 transition-opacity duration-150 ease-linear">
                {/**<!--search bar--> */}
                <div className='custom-background h-full flex flex-col bg-slate-300 text-center'>
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
            </div>
        </div>
    )
}