import { Inter } from 'next/font/google';
import Menu from '@/components/dashboard/ListMenu';
import Terms from '@/components/dashboard/ListTerms';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import { defaultDataMenu, useDashboard } from '@/context/contextDashboard';
import { useState, useCallback, useEffect } from 'react';
import { ListType } from '../../lib/types';
// import { v4 as uuidv4 } from 'uuid';
// const getUUID = uuidv4();
const NavBar = dynamic(import('../components/navigator/NavigatorSitePublic'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

// Admin Dashboard to add terms to glossary
export default function Dashboard() {
  const { dispatch } = useDashboard();
  const [data, setData] = useState<ListType[]>([]);
    // declare the async data fetching function
  const fetchData = useCallback(async () => {
    const { getPlaygroundDocs } = await import('../../utils/db.pouch.Playground');
    const docs = await getPlaygroundDocs();
    if (docs != undefined) {
      setData(docs);
    }
  }, []);

  const setStateData = useCallback(async () => {
    //console.log(data)
    dispatch({ type: "LISTS", lists: data });
    //console.log('state.lists:', state.lists)
  }, [data, dispatch]);

  const setMenu = useCallback(async () => {
    const menuItems = defaultDataMenu(data);
    dispatch({ type: "MENU", menu: menuItems });
  }, [data, dispatch]);
  
  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
    setStateData()
    setMenu()
    .catch(console.error);
  }, [fetchData, setStateData, setMenu]);

  return (
    <div
      className={`flex h-screen min-h-screen w-screen flex-col bg-slate-100 xl:grow ${inter.className} bg-no-repeat `}
    >
      {/**<!-- navbar -->*/}
      <NavBar />
        {/**<!-- content goes here --> */}
        <div className='flex grow flex-row bg-white bg-gradient-to-r from-gray-100 to-blue-100 text-center'>
          <div className='flex grow flex-col rounded-xl xl:flex xl:flex-row'>
            {/**List Menu */}
          <Menu />
            {/**Terms */}
          <Terms data={data} />
          </div>
        </div> 
      <Footer/>
    </div>
  );
}
