
const PublicSearch = () => {
    return (
       <div
          key='undefined'
          className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'
        >
          <div
            key='undefined'
            className='mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1 '
          >
            <div key='undefined' className='content-left flex grow flex-row'>
              <span
                key='undefined'
                className='text-md text-bold w-24 rounded-l border-2 border-sn-dark bg-sn-light p-1 focus:border-2 focus:border-blue-400 focus:outline-none'
              >
                Search
              </span>
              <input
                key='search'
                maxLength={50}
                className='w-full self-center border border-gray-300 bg-gray-100 text-left placeholder:text-sm text-md focus:border-slate-400 focus:outline-none placeholder:text-sn-light text-sn-dark'
                type='text'
                name='def'
                placeholder='Type Word Here...'
              />
            </div>
          </div>
        </div>
    )
}

export default PublicSearch; 