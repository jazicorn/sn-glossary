import React, { useCallback, useState, useEffect } from 'react';
//import { useForm } from 'react-hook-form';
import { useDashboard } from '@/context/contextDashboard';
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
  faXmark,
  faStar,
  faSquareXmark
} from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck, faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons'
import { GlossaryContextType } from '../../../../lib/types';
import { dataListFind, findList } from '@/helpers/funcDashboard';

const TermNew: React.FC = () => {
  const { state } = useDashboard();
  const getListName = state.getMenuItem;
  const defaultFav = isListFav(getListName as string);
  
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTags = (e: any) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setEditTags([...editTags, e.target.value]);
      e.target.value = '';
    }
  };
  const removeTags = (index: number) => {
    setEditTags([...editTags.filter((tag) => editTags.indexOf(tag) !== index)]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeTags = (e: any) => {
    const { value } = e.target;
    setInputTags(value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    setNewTerm(newTerm);
  }

  // generate new nano id & collision check for id
  const nano = nanoid(10);

  const termID = nano;
  // Make default fav true if Favorite List
  function isListFav(termName:string) {
    if (termName === 'Favorites' && termName != undefined) {
      return true
    }
    return false
  };

  const [showMore, setShowMore] = useState(false);
  const [newTerm, setNewTerm] = useState({});
  const [data, setData] = useState<GlossaryContextType>();
  {/**<!-- State: Edits-> */ }
  const [inputTags, setInputTags] = useState('');
  const [editTags, setEditTags] = useState([]);
  const [editFav, setEditFav] = useState(defaultFav);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editId, setEditId] = useState(termID);
  const [editName, setEditName] = useState('');
  const [editDef, setEditDef] = useState('');
  const [editProduct, setEditProduct] = useState('');
  const [editRef, setEditRef] = useState('');
  const [editVer, setEditVer] = useState('Utah');
  
  {/**<!-- State: Handle Edits-> */ }
  const handleEditName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditName(e.target.value)
  }
  const handleEditDef = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditDef(e.target.value)
  }
  const handleEditProduct = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditProduct(e.target.value)
  }
  const handleEditRef = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditRef(e.target.value)
  }
  const handleEditVer = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditVer(e.target.value)
  }
  const handleEditFav = () => {
    if (defaultFav) {
      setEditFav(true);
    }
    setEditFav(!editFav);
  }
  const fetchData = useCallback(async () => {
    if (editId !== undefined) {
      const newTermObj = {
        id: editId,
        public: false,
        favorite: editFav,
        name: editName,
        def: editDef,
        ver: editVer,
        product: editProduct,
        ref: editRef,
        tags: editTags
      };
      setData(newTermObj);
    }
  }, [editDef, editFav, editId, editName, editProduct, editRef, editVer, editTags])

  useEffect(() => {
    fetchData()
      .catch(console.error);
  }, [fetchData]);
  
  const handleTermCreate = useCallback(async () => {
    const { updatePlaygroundDoc } = await import('../../../../utils/db.pouch.Playground');
    const menuItem = state.getMenuItem;
    console.log(menuItem);
    if (menuItem !== undefined && data !== undefined) {
      const getLists = state.lists;
      const id: string | string[] | undefined = dataListFind(getLists, menuItem, 'id');
      if (typeof id === 'string') {
        const getList = findList(getLists, id);
        if (getList !== undefined) {
          getList?.items?.unshift(data);
          const items: GlossaryContextType[] | undefined = getList?.items;
          const name: string = getList?.name;
          if (items !== undefined) {
            await updatePlaygroundDoc(id, name, items);
            const termID = nanoid(10);
            setEditId(termID);
            setEditName('');
            setEditDef('');
            setEditProduct('');
            setEditRef('');
            setEditVer('Utah');
            setEditTags([]);
          }
        }
      }
    }  
  }, [state, data]);

  return (
    <div>
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
          {/**All Term Information*/}
          <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'>
            {/**#TODO Change to flex-col and move create button to end term line */}
            {/**Line: Term Definition */} {/**row 1 */}
               <div
            key='undefined'
            className='mb-1 ml-1 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1 '
          >
            <div
              key='undefined'
              className='content-left flex grow flex-row rounded-l border border-r-0 border-gray-300 text-sm leading-tight tracking-tighter'
              >
                {/**Favorite */}
                {defaultFav ?
                  <button key='favoriteButton' className='w-fit px-2 border-r border-gray-300 flex flex-col justify-center'>
                    <FontAwesomeIcon icon={faStar} size='lg' className='' />
                  </button>
                  :
                  <button key='favoriteButton' onClick={handleEditFav} className='w-fit px-2 border-r border-gray-300 flex flex-col justify-center'>
                    {editFav ? <FontAwesomeIcon icon={faStar} size='lg' className='' /> : <FontAwesomeIcon icon={faStarOutline} size='lg' />}
                  </button>
                }
                <input
                  value={editName}
                  onChange={handleEditName}
                  key='name'
                  maxLength={25}
                  type='text'
                  name='term'
                  placeholder='Term'
                  className='w-[90px] p-0.5 rounded-l border-2 border-transparent border-r-slate-200 bg-green-100  text-sm text-center focus:border focus:border-blue-100 focus:outline-none'
                />
                <input
                  value={editDef}
                  onChange={handleEditDef}
                  key='def'
                  maxLength={300}
                  type='text'
                  name='def'
                  placeholder='Definition'
                  className='w-full self-center bg-gray-100 px-1 py-1 text-sm text-left focus:border-0 active:border-0 border-0 rounded'
                />
            </div>
            {/** Expand/Collpase*/}
            <button
              key='showMore'
              className='rounded-r border border-l-0 border-gray-300 px-2 '
              onClick={() => handleMoreClick()}
            >
              {showMore ? (
                <FontAwesomeIcon
                  icon={faChevronCircleUp}
                  size='lg'
                  color={'#334155'}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size='lg'
                  color={'#334155'}
                />
              )}
            </button>
          </div>
            {/**Create New Term */} {/**row-2 */}
            {!showMore ? 
              <div className='h-[54px] py-1 mr-1 flex flex-row place-self-center rounded px-1'>
              <button
                  type='submit'
                  onClick={() => handleTermCreate()}
                className='w-[72px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-slate-400 bg-green-100 px-2 text-sm font-medium uppercase'
              >
                Create
              </button>
            </div>
            : <div className='h-[54px] mr-1 flex flex-col place-self-center rounded px-1'>
              <button
                type='submit'
                onClick={() => handleTermCreate()}
                className='w-[72px] my-0.5 ml-1 items-baseline rounded border-2 border-slate-400 bg-green-100 px-2 text-sm font-medium uppercase'
              >
                Create
                </button>
                <button
                className='w-[72px] my-0.5 ml-1 items-baseline rounded border-2 border-slate-400 bg-slate-100 px-2 text-sm font-medium uppercase'
              >
                Clear
              </button>
            </div>}
          </div>
          {/** */}
          {/** Term Details */}
          {/** */}
          {showMore && (
            <div className='custom-term-details mx-2 flex flex-col rounded bg-gray-200 p-1'>
              {/**Lines: Details*/}
              <div className='mt-1 flex flex-col items-baseline rounded px-1 xl:m-0 xl:flex xl:flex-row'>
                {/**ID*/}
                <div className='w-full xl:w-fit mr-1 flex flex-row rounded bg-gray-100 xl:w-auto'>
                  <label className='flex-none w-[90px] mb-1 ml-1 mt-1 pl-2 pr-1 rounded-l border-2 border-blue-300 bg-slate-200 text-sm text-right'>
                    ID:
                  </label>
                  <div className='w-full xl:w-[90px] flex flex-row mb-1 mr-1 mt-1 inline text-left text-xs'>
                    <div
                      key='id'
                      placeholder='123456789'
                      className='h-6 w-full xl:w-[90px] justify-center pt-[3px] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'>{editId}
                    </div>
                  </div>
                </div>
                {/**Public */}
                <div className='mr-1 mt-1 w-full xl:w-fit flex flex-row rounded bg-gray-100 xl:mt-0'>
                  <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-slate-100 text-sm text-right'>
                    Public:
                  </label>
                  <div className='mr-1 mt-1 w-full xl:w-fit inline text-left text-xs'>
                    {/**For wrapping text have to use textarea */}
                    <div className='h-6 w-[30px] pl-1.5 pt-0.5 justify-items-center rounded-r border-l-0 border border-gray-300 bg-transparent focus:border-slate-400 focus:outline-none'><FontAwesomeIcon icon={faSquareXmark} size='xl'/></div>
                  </div>
                </div>
                {/**Favorite */}
                <div className='mr-1 mt-1 w-full xl:w-fit flex flex-row rounded bg-gray-100 xl:mt-0'>
                  <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-slate-100 text-sm text-right'>
                    Favorite:
                  </label>
                  <div className='mr-1 mt-1 w-full xl:w-fit inline text-left text-xs'>
                    {/**For wrapping text have to use textarea */}
                    <div className='h-6 w-[30px] pl-1 pt-0.5 justify-items-center rounded-r border-l-0 border border-gray-300 bg-transparent focus:border-slate-400 focus:outline-none'>{editFav ? <FontAwesomeIcon icon={faSquareCheck} size='xl' className=''/> : <FontAwesomeIcon icon={faSquareXmark} size='xl'/>}</div>
                  </div>
                </div>
                {/** Version*/}
                <div className='mr-1 mt-1 w-full xl:w-fit flex flex-row rounded bg-gray-100 xl:mt-0'>
                  <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                    Version:
                  </label>
                  <div className='w-full mr-1 mt-1 inline text-left text-xs'>
                    {/**For wrapping text have to use textarea */}
                    <input
                      value={editVer}
                      onChange={handleEditVer}
                      type='text'
                      maxLength={30}
                      name='product'
                      className='h-6 w-full pl-1 xl:w-[70px] text-left text-xs truncate rounded-r border-l-0 border border-gray-300 bg-transparent  focus:border-slate-400 focus:outline-none'
                    />
                  </div>
                </div>
                {/**Category */}
                <div className='mt-1 w-full flex flex-row rounded bg-gray-100 xl:mt-0'>
                  <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                    Product:
                  </label>
                  <div className='mr-1 mt-1 w-full inline text-left text-xs'>
                    {/**For wrapping text have to use textarea */}
                    <input
                      value={editProduct}
                      onChange={handleEditProduct}
                      type='text'
                      maxLength={30}
                      name='product'
                      placeholder='Product'
                      className='h-6 w-full pl-1 rounded-r border-l-0 border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              {/**Ref Row */}
              <div className='mt-1 flex flex-col items-baseline rounded px-1 xl:flex xl:flex-row'>
                {/**Ref*/}
                <div className='mr-1 xl:m-0 w-full flex flex-row rounded bg-gray-100 grow'>
                  <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                    Ref:
                  </label>
                  <div className='mr-1 mt-1 w-full inline text-left text-xs'>
                    <input
                      value={editRef}
                      onChange={handleEditRef}
                      type='text'
                      maxLength={200}
                      name='ref'
                      placeholder='https://docs.servicenow.com/'
                      className='pl-1 h-6 min-w-[225px] w-full rounded-r border-l-0 border border-gray-300 bg-transparent text-left text-xs focus:border-slate-400 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              {/**Lines:Tags*/}
              <div className='w-full px-1 pb-1'>
                {/**Tags*/}
                <div className='mt-1 w-full flex flex-row flex-wrap rounded bg-gray-100 rounded-r border border-transparent focus:border-slate-400 focus:outline-none'>
                  <label className='flex-none max-h-6 w-[90px] mb-1 ml-1 mt-1 pr-1 rounded-l border-2 border-slate-300 bg-slate-100 text-sm text-right '>
                    Tags:
                  </label>
                  <input
                    maxLength={25}
                    type='text'
                    name='tag'
                    placeholder="tag, tag, tag"
                    value={inputTags}
                    onKeyUp={(e) => addTags(e)}
                    onChange={onChangeTags}
                    className='mt-1 h-6 max-h-6 w-min grow items-baseline text-left text-xs bg-transparent border-0 focus:border-0 active:border-0 '
                  />
                  {/**Input-tags */}
                  <div className='mr-1 p-1 flex flex-row flex-wrap content-center items-center text-xs'>
                    {editTags.map((tag, index) => ( 
                      <div key={tag} className='mx-1 flex flex-row content-center items-center rounded border  bg-slate-200 focus:border-2 border-slate-400'>
                        <input
                          name='editTag'
                          value={tag}
                          className='mr-1 px-1 h-6 w-auto pr-2 text-sm flex flex-row content-center items-center rounded-l'
                        />
                        <span className='mr-1 px-1 text-center'>
                          <FontAwesomeIcon
                            icon={faXmark}
                            size='sm'
                            onClick={() => removeTags(index)}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default TermNew;
