import { useState} from 'react';

export default function ListOfTerms() {
    // #TODO alter useState to update any example object
    const [getTerm, setTerm] = useState({
        "id": 1,
        "term": "definition",
        "ref": "https://docs.servicenow.com/en-US/",
        "tags": ["tag1", "tag2", "tag3"]
    });

    // const examples = [
    //     {
    //         "id": 1,
    //         "term": "definition",
    //         "ref:" "",
    //         "tags": ["tag1", "tag2", "tag3"]
    //     },
    //     {
    //         "id": 2,
    //         "term": "definition",
    //         "ref:" "",
    //         "tags": ["tag1", "tag2", "tag3"]
    //     },
    //     {
    //         "id": 3,
    //         "term": "definition",
    //         "ref:" "",
    //         "tags": ["tag1", "tag2", "tag3"]
    //     }
    // ]

    function changeTerm(e: any) {
        setTerm({
            ...getTerm, [e.target.name]: e.target.value
        })
    }

    function changeTermTags(index: any, e: any) {
        // #TODO this function is complicated. multiple steps in order to perform functions on the term objec tag array
    }

    return (
        <div className='md:h-fit md:w-5/6 md:my-5 md:mr-5 md:ml-2 bg-slate-700 rounded-lg border border-slate-400
                        w-auto h-4/5 mx-5 mb-5 mt-1 pb-1'>
            <h2 className="text-xl m-2 bg-blue-100 border-4 border-slate-100 rounded">
                &#123;List&#125;: Terms
            </h2>
            {/** #TODO Map form to display multiple term examples */}
            <form className='flex flex-col'>
                <>
                    <div className='flex flex-col mx-2 my-1 p-1 bg-gray-200 rounded'>
                        <div className='flex flex-row bg-gray-100 rounded m-1 p-1'>
                            <label className='m-1 h-6 basis-16 grow-0 shrink-0 text-base bg-pink-100 rounded'>
                                Term:
                            </label>
                            <input
                                className='
                                    mt-1 p-0 text-left ml-1 text-sm self-center
                                    bg-gray-100 border-0'
                                type='text'
                                name='term'
                                value={getTerm.term}
                                onChange={changeTerm}
                            />
                        </div>
                        
                        <div className='flex flex-row rounded p-1 items-baseline'>
                            <div className='flex flex-row mr-1 bg-gray-100 rounded'>
                                <label className='m-1 mx-2 px-2 basis-14 text-sm
                                                bg-blue-300 rounded border-2 border-slate-400'>
                                    Ref:
                                </label>
                                <div className='m-1 text-left flex flex-row text-xs'>
                                    <div className='mr-1 py-1 pr-1'>
                                        <a className='
                                                text-xs py-1 px-2 items-baseline text-center inline whitespace-nowrap 
                                                h-6 w-12 bg-slate-200 self-baseline
                                                border-0 rounded
                                                focus:border-2 focus:border-slate-400'
                                            target="_blank"
                                            href={getTerm.ref}>
                                            ServiceNow: Product Documentation
                                        </a>                                              
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-row bg-gray-100 rounded'>
                                <label className='m-1 mx-2 px-2 basis-14 text-sm bg-blue-300 rounded border-2 border-slate-400'>Tags:</label>
                                <div className='m-1 text-left flex flex-row text-xs'>
                                    {getTerm.tags.map((tag, index) => (
                                        <>
                                            <div className='ml-1'>
                                                <input
                                                    className='
                                                        text-xs p-0 items-baseline text-center inline
                                                        h-6 w-12 bg-slate-200  
                                                        border-0 rounded
                                                        focus:border-2 focus:border-slate-400'
                                                    type='text'
                                                    name='tag'
                                                    value={tag}
                                                    onChange={(e) => changeTermTags(index, e)}
                                                />
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>                
            </form>  
        </div> 
    )
}