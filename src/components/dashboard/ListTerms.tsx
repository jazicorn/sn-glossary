import TermNew from './terms/TermNew';
import Term from './terms/TermEdit';
import TermOptions from './terms/TermOptions'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDashboard } from '@/context/contextDashboard';
import TermSearch from './terms/TermSearch';

export default function ListOfTerms() {
  const { state, dispatch } = useDashboard();
  const menuItem = state.getMenuItem
  const menuProtected = menuItem === "Favorites" || menuItem === "Public Glossary" || menuItem === "Database";
  const data = state.lists;
  let dataIndex = 0;
  const getList = data.find(element => element.name === menuItem);
  function deleteList() {
    if (!menuProtected) {
      dispatch({ type: "MENU", deleteMenuItem: state.getMenuItem })
      
    }
    return
  }

  return (
    <div className='mx-5 mb-5 mt-1 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-2 xl:mr-5 xl:h-auto xl:grow'>
      <div className='custom-list-term-nav m-2 rounded border-4 border-slate-100 bg-blue-100 text-xl text-deep-blue justify-between flex h-[42px]'>
        {
          menuProtected ?
            <div className='w-full justify-between flex flex-row'>
              <div className='' />
              <h2>
                <FontAwesomeIcon icon={faStar} />
                <span className='px-2'>{menuItem}</span>
              </h2>
              <div className='' />
            </div>
          :
            <div className='w-full justify-between flex flex-row' >
              <div className='' />
              <div>{menuItem}</div>
              <div className='w-[72px] h-[54px] py-1 mr-1 flex flex-row place-self-center rounded px-1'>
                <button type='submit'
                  onClick={() => deleteList()}
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
        dataIndex += 1,
        <Term key={term.id} index={dataIndex}  term={term} />
      ))
      }
    </div>
  );
}
