export default function ListMenuCollapse() {
  const examples = ['List1', 'List2', 'List3'];
  return (
    <div>
      {/**Static Menu */}
      <div className=''>
        <div className=''>
          <div className='text-l mx-2 mb-1 flex flex-col justify-center rounded border-4 border-blue-200 bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100 italic text-blue-500 '>
            <h3 className='hover:text-bold inline-block h-full w-full grow hover:bg-emerald-100'>
              Create List
            </h3>
          </div>
          <ul className='text-l flex flex-col'>
            {examples.map((example) => (
              <li
                key={example}
                className='mx-2 my-1 rounded border-4 bg-gray-100'
              >
                <a className='inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                  {example}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
