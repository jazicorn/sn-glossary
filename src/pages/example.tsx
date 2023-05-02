import { Inter } from 'next/font/google'
import Nav from '@/components/ListNavigator'
import Menu from '@/components/ListMenu'
import Terms from '@/components/ListTerms';

const inter = Inter({ subsets: ['latin'] })

// Admin Dashboard to add terms to glossary
export default function Example() {
    return (
        <div className={`flex flex-col grow h-screen min-h-screen bg-slate-100 ${inter.className} bg-no-repeat `}>
            {/**<!-- navbar -->*/}
            <Nav/>
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