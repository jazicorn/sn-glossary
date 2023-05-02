import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MainMenuList() {
    const examples = ['List1', 'List2', 'List3'];
    return (
        <div className='md:h-fit md:basis-60 md:shrink-0 md:my-5 md:ml-5 md:mr-2  
                                    bg-slate-700 rounded-lg border border-slate-400
                                    w-auto h-1/5 mx-5 mt-5 mb-1 h-fit pb-1
                                    '>
            <h2 className="text-xl mx-2 m-2 bg-blue-100 border-4 border-slate-100 rounded">
                Main Menu: List
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

function ListOfTerms() {
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
            <div className='flex flex-col'>
                <form></form>
                {examples.map((example) => (
                    <>
                        <div className='flex flex-col mx-2 my-1 p-1 bg-gray-200 rounded'>
                            <div key={example.term} className='flex flex-row bg-gray-100 rounded m-1 p-1'>
                                <h3 className='m-1 h-6 basis-16 grow-0 shrink-0 text-base bg-gray-200 
                                            border-b border-slate-700'>Term:</h3>
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
                ))} 
            </div>      
        </div> 
    )
}

// Admin Dashboard to add terms to glossary
export default function Example() {
    return (
        <div className={`flex flex-col grow h-screen min-h-screen m-5bg-slate-100 ${inter.className} bg-no-repeat `}>
            {/**<!-- navbar -->*/}
            <nav className="flex flex-row justify-between h-14 mx-4">
                {/**<!-- logo -->*/}
                <div className="place-self-center">
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <Image
                        src="blue-book.svg"
                        alt="Home"
                        width={24}
                        height={24}
                    />
                    <span className="pl-2.5 font-bold">SN-Glossary</span>
                    </a>
                </div>
                {/**<!-- primary nav --> */}
                <div className="flex flex-row">
                    <a href="#" className="text-gray-700 hover:text-gray-900 place-self-center"></a>
                </div>
                {/**<!-- secondary nav --> */}
                <div className="flex flex-row mr-2">
                    <a href="" className="place-self-center py-1 px-3 bg-blue-300 hover:bg-blue-400 text-grey-900 hover:text-grey-300 rounded transition duration-300">
                        Logout
                    </a>
                </div>
            </nav>
            {/**<!-- content goes here --> */}
            <div className="flex flex-row grow bg-white text-center bg-gradient-to-r from-rose-100 to-blue-100">
                <div className="md:flex md:flex-row grow rounded-lg flex flex-col">
                    
                        {/**React Component that shows all avaiable list; click list to generate terms to the right of this component */}
                        {/**Click plus button to create new list */}
                        {/**Highlight list being shown */}
                        <MainMenuList/>
               
                 
                        {/** React Component that List all Terms from selected list */}
                        {/**Replace List with list name */}
                        <ListOfTerms/>
                                
                </div>               
            </div>
        </div>
    )
}