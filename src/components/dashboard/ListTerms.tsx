import TermNew from './terms/TermNew';
import Term from './terms/TermEdit';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDashboard } from '@/context/contextDashboard';
import TermSearch from './terms/TermSearch';

//#TODO add verion of servienow word found | ex. Rome, San Diego, Tokyo, Utah | un-editable droptown list

export default function ListOfTerms() {
  const { state } = useDashboard();
  const menuItem = state.getMenuItem
  const data = state.lists;
  let dataIndex = 0;
  const getList = data.find(element => element.name === menuItem);

  return (
    <div className='mx-5 mb-5 mt-1 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-2 xl:mr-5 xl:h-auto xl:grow'>
      <h2 className='custom-list-term-nav m-2 rounded border-4 border-slate-100 bg-blue-100 text-xl text-deep-blue'>
        {menuItem === "Favorites" || "Public Glossary" ? <div><FontAwesomeIcon icon={faStar} /><span className='px-2'>{menuItem}</span></div> : <div>{menuItem}</div>}
      </h2>
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
