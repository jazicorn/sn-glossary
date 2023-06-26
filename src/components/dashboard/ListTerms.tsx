import TermNew from './terms/TermNew';
import Term from './terms/TermEdit';
import TermOptions from './terms/TermOptions'
import TermSearch from './terms/TermSearch';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDashboard } from '@/context/contextDashboard';
import { GlossaryContextType, ListType } from '../../../lib/types';
import { useCallback, useState } from 'react';
import { dataMenuFindByName, findList } from '@/helpers/funcDashboard';
import { v4 as uuidv4 } from 'uuid'

export default function ListOfTerms({data}: {data:ListType[]}) {
  const { state, dispatch } = useDashboard();
  const [show, setShow] = useState(false);

  const menuItem = state.getMenuItem
  const menuProtected = menuItem === "Favorites" || menuItem === "Public Glossary" || menuItem === "Database";

  const getList = data.find(element => element.name === menuItem);
  const [text, setText] = useState('');
  const defaultTextWidth = menuItem?.length + "ch";
  const [textWidth, setTextWidth] = useState(defaultTextWidth);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textLen: number = e.target.value.length;
    const textWidth: string = e.target.value.length.toString() + "ch" as string;
    if (textLen < 1) {
      setText(e.target.value.trim());
      setTextWidth(defaultTextWidth)
    } else {
      setText(e.target.value.trim());
    setTextWidth(textWidth)
    }
  };
  
  const handleTitle = () => {
    setShow(!show)
  };

  const handleTitleEdit = useCallback(async (e: React.KeyboardEvent) => {
    if (!menuProtected && e.key === 'Enter') {
      const menuName: string = state.getMenuItem as string;
      const getList = findList(state.lists, menuName);
      console.log(getList)
      const { deletePlaygroundDoc, createPlaygroundDoc } = await import('../../../utils/db.pouch.Playground');
      const id: string | undefined = getList?.id as string;
      const items: GlossaryContextType[] | undefined = getList?.items as GlossaryContextType[];
      console.log(items);
      const itemsArr = [...items]
      const obj: ListType = {
        id: uuidv4(),
        name: text,
        items: itemsArr
      };
      await createPlaygroundDoc(obj);
      await deletePlaygroundDoc(id);
      setShow(false);
      dispatch({ type: "MENU", getMenuItem: text });
    }
  }, [state, menuProtected, text, setShow, dispatch]);

  // Delete PouchDB Data Doc
  const handleDeleteMenuItem = useCallback(async () => {
    const lists = state.menu;
    const list = state.getMenuItem as string;
    if (!menuProtected) {
      const id = dataMenuFindByName(lists, list)
      const { deletePlaygroundDoc } = await import('../../../utils/db.pouch.Playground');
      await deletePlaygroundDoc(id);
      dispatch({ type: "MENU", deleteMenuItem: state.getMenuItem });
    }
  }, [state, dispatch, menuProtected]);
  
  let dataIndex: number = getList?.items?.length as number + 1;

  return (
    <div className='mx-5 mb-5 mt-1 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-2 xl:mr-5 xl:h-auto xl:grow'>
      <div className='custom-list-term-nav m-2 rounded border-4 border-slate-100 bg-blue-100 text-xl text-deep-blue justify-between flex h-[42px]'>
        {
          menuProtected ?
            <div className='w-full justify-between flex flex-row'>
              <div />
              <h2>
                <FontAwesomeIcon icon={faStar} />
                <button className='px-2 m-0 p-0'>{menuItem}</button>
              </h2>
              <div/>
            </div>
          :
            <div className='w-full justify-between flex flex-row' >
              <div/>
              <div>
                {show ?
                  <button className='px-2' onDoubleClick={() => handleTitle()}>
                    <input
                      id="menuTitleWidth"
                      onChange={(e) => handleText(e)}
                      onKeyDown={(e) => handleTitleEdit(e)}
                      style={{ width: textWidth }}
                      placeholder={menuItem}
                      value={text}
                    />
                  </button> :
                  <button className='px-2' onDoubleClick={() => handleTitle()}>{menuItem}</button>
                }
              </div>
              <div className='w-[72px] h-[54px] py-1 mr-1 flex flex-row place-self-center rounded px-1'>
                <button type='submit'
                  onClick={() => handleDeleteMenuItem()}
                  className='w-[62px] h-[25px] my-0.5 ml-1 px-1 items-baseline place-self-center rounded border-2 border-deep-blue bg-red-200 text-sm font-medium uppercase'>
                  Delete
                </button>
              </div>
            </div>
        }
       
      </div>
      <TermOptions/>
      <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
      <TermSearch />
      <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <TermNew />
      <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
      {/******************* */}
      {/**Display All Terms */}
      {/******************* */}
      {getList?.items?.map((term) => (
        dataIndex -= 1,
        <Term key={term.id} index={dataIndex}  term={term} />
      ))
      }
    </div>
  );
}
