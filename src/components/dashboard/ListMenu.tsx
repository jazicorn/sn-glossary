import { useState, useEffect, useCallback } from 'react';
import { faChevronCircleDown, faChevronCircleUp, faClipboardList, faDatabase, faRectangleList, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataMenuItems, useDashboard } from '@/context/contextDashboard';
//import { ListType } from '../../../lib/types';
import { v4 as uuidv4 } from 'uuid';
const getUUID = uuidv4();

export default function ListMenu()  {
  const { state, dispatch } = useDashboard();
  const [isView, setView] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  // set style based on window width
  useEffect(() => {
    if (window.innerWidth > 1280) {
      setView(true);
    } else {
      setView(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1280) {
        setView(true);
      } else {
        setView(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  // Create PouchDB Data Doc
  const createMenuItem = useCallback(async () => {
    const { createPlaygroundDoc } = await import('../../../utils/db.pouch.Playground');
    const lists = state.lists;
    const menu = state.menu;
    const names = dataMenuItems(menu, "names") as string[];
    const untitled = names.includes('Untitled');
    let newID = '';
    let newName = '';
      if (lists.length > 10) {
        return
      } else if (!untitled) {
        newID = getUUID;
        newName = 'Untitled';
      } else {
        let total = 0;
        for (const item of names) {
          if (item.includes('Untitled')) {
            total += 1;
          }
        }
        newID = getUUID;
        newName = 'Untitled' + total.toString();
      }
    const obj = {
      id: newID,
      name: newName,
      lists: []
    };
    await createPlaygroundDoc(obj);
  }, [state]);

  const setMenuItem = (prop: string) =>{
    dispatch({ type: "MENU", getMenuItem: prop})
  }

  return (
    <div className='mx-5 mb-1 mt-5 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-5 xl:mr-2 xl:h-auto xl:shrink-0 xl:basis-60'>
      <div className=''>
        <h2 className='m-2 pr-4 rounded border-4 border-slate-100 bg-blue-100 text-xl text-deep-blue'>
          <span className='mx-2'><FontAwesomeIcon icon={faClipboardList} /></span>Menu
        </h2>
        
        {isView ?  
          <div>
            {/**Full Menu */}
            <div className=''>
              <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
              <div className='mx-2 my-1 rounded border-4 bg-violet-100'>
                <button onClick={() => setMenuItem('Database')} className='text-menu-database text-l hover:italic text-deep-blue inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                  <FontAwesomeIcon icon={faDatabase} /><span className='px-2'>Database</span>
                </button>
              </div>
              <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
              {/**Creates New List: Untitled*/}
              <div className='text-l mx-2 mb-1 flex flex-col justify-center rounded border-4 border-blue-200 bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100 italic text-blue-500 '>
                <button
                  onClick={() => createMenuItem() }
                  className='text-bold inline-block h-full w-full grow hover:italic hover:bg-gray-300'
                >
                  <FontAwesomeIcon icon={faRectangleList} /><span className='px-2'>Create List</span>
                </button>
              </div>
              <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
               {/**Show Public Lists Favorites*/}
              <div className='text-l mx-2 mb-2 mb-1 flex flex-col justify-center rounded border-4 border-blue-200 bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100 italic text-sn-light'>
                <button
                  onClick={() => setMenuItem('Public Glossary')}
                  className='text-bold inline-block h-full w-full grow hover:italic hover:bg-gray-300'
                >
                  <FontAwesomeIcon icon={faStar} /><span className='px-2'>Public Glossary</span>
                </button>
              </div>
              <div className='mx-2 my-1 rounded border-4 bg-violet-100'>
                <button onClick={() => setMenuItem('Favorites')} className='text-l hover:italic text-deep-blue inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                  <FontAwesomeIcon icon={faStar} /><span className='px-2'>Favorites</span>
                </button>
              </div>
            <div>
            <ul className='text-l flex flex-col'>
            {state.getMenuNames?.map((list) => (
              <li key={list} className='mx-2 my-1 rounded border-4 bg-slate-100'>
                <button key={ list } onClick={() => setMenuItem(list)} className='px-2 hover:italic inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                 {list}
                </button>
              </li>
            ))}
            </ul>
          </div>
          </div>
          </div>
          :
          <div>
            {/**Collapsed Menu */}
            {/** Expand/Collapse*/}
            <div className='mb-1 xl:mb-0'>
              {!showMore ?
                <button onClick={() => handleMoreClick()}><FontAwesomeIcon icon={faChevronCircleDown} size='lg' inverse /></button>
                :
                <div className='hidden'></div>
              }
            </div>
            <div className=''>
              {showMore && (
                <div className=''>
                  <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
                  <div className='mx-2 my-1 rounded border-4 bg-violet-100'>
                    <button onClick={() => setMenuItem('Database')} className='text-menu-database text-l hover:italic text-deep-blue inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                      <FontAwesomeIcon icon={faDatabase} /><span className='px-2'>Database</span>
                    </button>
                  </div>
                  <div className='mx-2 my-1 rounded border-4 border-blue-200 bg-gradient-to-r from-slate-100 to-violet-100 '>
                    <button onClick={() => { createMenuItem() }}
                      className='text-l mr-2 w-full py-1 text-blue-500 hover:bg-emerald-100 hover:italic'
                    >
                      <FontAwesomeIcon icon={faRectangleList} /><span className='px-2'>Create List</span>
                    </button>
                  </div>
                  <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
                  {/**Show Public Lists Favorites*/}
                  <div className='text-l mx-2 mb-2 mb-1 flex flex-col justify-center rounded border-4 border-blue-200 bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100 italic text-sn-light'>
                    <button
                      className='text-bold inline-block h-full w-full grow hover:italic hover:bg-gray-300'
                    >
                      <FontAwesomeIcon icon={faStar} /><span className='px-2'>Public Glossary </span>
                    </button>
                  </div>
                  <div className='mx-2 my-1 rounded border-4 bg-violet-100'>
                    <button onClick={() => setMenuItem('Favorites')} className='text-l hover:italic text-deep-blue inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                      <FontAwesomeIcon icon={faStar} /><span className='px-2'>Favorites</span>
                    </button>
                  </div>
                  <ul className='text-l flex flex-col'>
                    {state.getMenuNames?.map((list) => (
                      <li  key='key' className='mx-2 my-1 rounded border-4 bg-gray-100'>
                        <button key={list} onClick={() => setMenuItem(list)} className='inline-block h-full w-full from-violet-100 to-blue-200 text-slate-500 hover:bg-gradient-to-r hover:italic hover:text-slate-700 '>
                          {list}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {showMore ?
                <button onClick={() => handleMoreClick()}><FontAwesomeIcon icon={faChevronCircleUp} size='lg' inverse /></button>
                :
                <div className='hidden'></div>}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
