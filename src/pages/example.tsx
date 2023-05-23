import { Inter } from 'next/font/google';
import Nav from '@/components/dashboard/ListNavigator';
import Menu from '@/components/dashboard/menu/ListMenu';
import Terms from '@/components/dashboard/terms/ListTerms';

const inter = Inter({ subsets: ['latin'] });

// Admin Dashboard to add terms to glossary
export default function Example() {
  return (
    <div
      className={`flex h-screen min-h-screen w-screen flex-col bg-slate-100 xl:grow ${inter.className} bg-no-repeat `}
    >
      {/**<!-- navbar -->*/}
      <Nav />
      {/**<!-- content goes here --> */}
      <div className='flex grow flex-row bg-white bg-gradient-to-r from-gray-100 to-blue-100 text-center'>
        <div className='flex grow flex-col rounded-xl xl:flex xl:flex-row'>
          {/**React Component that shows all avaiable list; click list to generate terms to the right of this component */}
          {/**Click plus button to create new list */}
          {/**Highlight list being shown */}
          <Menu />

          {/** React Component that List all Terms from selected list */}
          {/**Replace {List} title with list name */}
          <Terms />
        </div>
      </div>
    </div>
  );
}