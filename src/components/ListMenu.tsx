export default function ListMenu() {
    const examples = ['List1', 'List2', 'List3'];
    return (
        <div className='md:h-fit md:basis-60 md:shrink-0 md:my-5 md:ml-5 md:mr-2  
                                    bg-slate-700 rounded-lg border border-slate-400
                                    w-auto h-1/5 mx-5 mt-5 mb-1 h-fit pb-1
                                    '>
            <h2 className="text-xl mx-2 m-2 bg-blue-100 border-4 border-slate-100 rounded">
                List: Menu
            </h2>
            <div className=''>
                <h3 className='text-l italic mx-2 mb-1 bg-violet-100 text-blue-500 rounded border-4 border-blue-200 hover:bg-gray-300
                                bg-gradient-to-r from-slate-100 to-blue-100'>
                   <a className='inline-block h-full w-full hover:bg-gray-400'>New List</a>
                </h3>
                <ul className="flex flex-col text-l">
                    {examples.map((example) => (
                        <li key={example} className='my-1 mx-2 bg-violet-100 rounded border-4 hover:bg-gray-200'>
                            <a className='inline-block h-full w-full hover:bg-gradient-to-r from-violet-200 to-blue-200'>{example}</a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>   
    )
}