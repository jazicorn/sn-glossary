import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/ListMenu'
import Terms from '@/components/ListTerms';

const inter = Inter({ subsets: ['latin'] })

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
                        <Menu/>
               
                 
                        {/** React Component that List all Terms from selected list */}
                        {/**Replace {List} title with list name */}
                        <Terms/>
                                
                </div>               
            </div>
        </div>
    )
}