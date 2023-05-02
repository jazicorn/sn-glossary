export default function ListOfTerms() {
    const examples = [
        {
            "id"     : 1,
            "term"  : "definition",
            "tags"  : ["tag1", "tag2", "tag3"]
        },
        {
            "id"     : 2,
            "term"  : "definition",
            "tags"  : ["tag1", "tag2", "tag3"]
        },
        {
            "id"     : 3,
            "term"  : "definition",
            "tags"  : ["tag1", "tag2", "tag3"]
        },
        {
            "id"     : 1,
            "term"  : "definition",
            "tags"  : ["tag1", "tag2", "tag3"]
        },
        {
            "id"     : 2,
            "term"  : "definition",
            "tags"  : ["tag1", "tag2", "tag3"]
        },
        {
            "id"     : 3,
            "term"  : "definition",
            "tags"  : ["tag1", "tag2", "tag3"]
        }   
    ];
    return (
        <div className='md:h-fit md:w-5/6 md:my-5 md:mr-5 md:ml-2 bg-slate-700 rounded-lg border border-slate-400
                        w-auto h-4/5 mx-5 mb-5 mt-1 pb-1'>
            <h2 className="text-xl m-2 bg-blue-100 border-4 border-slate-100 rounded">
                &#123;List&#125;: Terms
            </h2> 
            <form className='flex flex-col'>
                {/**TODO add key={} to divs https://www.learnbestcoding.com/post/40/reactjs-form-submit*/}
                {examples.map((example) => {
                    return (
                        <>
                            <div className='flex flex-col mx-2 my-1 p-1 bg-gray-200 rounded'>
                                <div key={example.term} className='flex flex-row bg-gray-100 rounded m-1 p-1'>
                                    <label className='m-1 h-6 basis-16 grow-0 shrink-0 text-base bg-gray-200 
                                                border-b border-slate-700'>Term:</label>
                                    <div className='mt-1 text-left ml-1 text-sm self-center'>{example.term}</div>
                                </div>
                                <div className='flex flex-row bg-gray-100 rounded m-1 p-1 items-baseline'>
                                    <h3 className='m-1 basis-16 text-sm bg-blue-300 rounded'>Tags:</h3>
                                    <div className='m-1 text-left flex flex-row text-xs'>
                                        {example.tags.map((tag) => (
                                            <>
                                                <div className='ml-1'>
                                                    {tag},
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })} 
            </form>      
        </div> 
    )
}