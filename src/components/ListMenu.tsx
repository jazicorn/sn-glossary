export default function ListMenu() {
  const examples = ['List1', 'List2', 'List3'];
  return (
    <div
      className='mx-5 mb-1 mt-5 h-fit w-auto rounded-lg
                        border border-slate-400 bg-slate-700 pb-1 md:my-5 md:ml-5 
                        md:mr-2 md:h-fit md:shrink-0 md:basis-60'
    >
      <h2 className='m-2 mx-2 rounded border-4 border-slate-100 bg-blue-100 text-xl'>
        List: Menu
      </h2>
      <div className=''>
        <h3
          className='text-l mx-2 mb-1 rounded border-4 border-blue-200 
                                bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100
                                italic text-blue-500 hover:bg-gray-300'
        >
          <a className='inline-block h-full w-full hover:bg-gray-300'>
            New List
          </a>
        </h3>
        <ul className='text-l flex flex-col'>
          {examples.map((example) => (
            <li
              key={example}
              className='mx-2 my-1 rounded border-4 bg-violet-100 hover:bg-gray-100'
            >
              <a className='inline-block h-full w-full from-violet-200 to-blue-200 hover:bg-gradient-to-r'>
                {example}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
