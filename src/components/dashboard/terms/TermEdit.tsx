import React, { useCallback, useEffect, useState } from 'react';
//import { useForm } from 'react-hook-form';
import ShowMore from './TermShowMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
  faStar,
  faSquareMinus,
  faTrash,
  faFile,
  faPenToSquare,
  faXmark,
  faSquareXmark
} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline, faSquareCheck} from '@fortawesome/free-regular-svg-icons'
import { GlossaryContextType } from '../../../../lib/types';

type Props = {
  index: number,
  term: GlossaryContextType
}

const TermEdit: React.FC<Props> = ({ index, term }) => {
  const [isView, setView] = useState(false);
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    setNewTerm(newTerm);
  }

  function handleEdit() {
    setEdit(!edit);
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
    if (editTags !== undefined) {
      setEditTags([...editTags.filter((tag) => editTags.indexOf(tag) !== index)]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeTags = (e: any) => {
    const { value } = e.target;
    setInputTags(value);
  };

  const [showMore, setShowMore] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newTerm, setNewTerm] = useState({});
  const [data, setData] = useState({});
  {/**<!-- Edit Text-> */ }
  const [inputTags, setInputTags] = useState('');
  const [editTags, setEditTags] = useState(term.tags);
  const [editPublic, setPublicEdit] = useState(term.public);
  const [editId, setEditId] = useState(term.id);
  const [editName, setEditName] = useState(term.name);
  const [editDef, setEditDef] = useState(term.def);
  const [editFav, setEditFav] = useState(term.favorite);
  const [editProduct, setEditProduct] = useState(term.product);
  const [editRef, setEditRef] = useState(term.ref);
  const [editVer, setEditVer] = useState(term.ver);
  
  const handleEditName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditName(e.target.value)
  }
  const handleEditDef = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditDef(e.target.value)
  }
  const handleEditFav = () => {
    setEditFav(!editFav);
  }
  const handleEditProduct = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
        setEditProduct(e.target.value)
    }
  const handleEditRef = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
      setEditRef(e.target.value)
  }
  const handleEditVer = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
      setEditVer(e.target.value)
  }

  const fetchData = useCallback(async () => {
    const newTermObj = {
          id: editId,
          public: editPublic,
          favorite: editFav,
          name: editName,
          def: editDef,
          version: editVer,
          product: editProduct,
          ref: editRef,
          tags: editTags
        };

    setData(newTermObj);
  }, [editDef, editPublic, editFav, editId, editName, editProduct, editRef, editVer, editTags])

  useEffect(() => {
    fetchData()
      .catch(console.error);
  }, [fetchData]);

  return (
    <div>
      {/***************** */}
      {/*****Edit Term*** */}
      {/***************** */}
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
          {/**All Term Information*/}
          <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1'>
            {/**Line: Term Definition */} {/**row 1 */}
            <div className='mb-1 ml-1 mt-1 flex grow flex-col justify-between rounded bg-gray-100 p-1 '>
              <div className='flex flex-row justify-between text-xs'>
                <div className='flex flex-row'>
                  {edit ? <div className='text-blue-500'><span className='px0.5'>Mode:</span>Edit</div> : <div className=''><span className='px-0.5'>Mode:</span>Display</div>}
                </div>
                <ul className='flex flex-row'>
                  <ol><button className='text-teal-500 hover:text-gray-400 place-items-center'><FontAwesomeIcon icon={faFile} size='xs' /><span className='pl-1'>Copy</span></button></ol>
                  <ol><span className='px-1'>|</span><button className='text-violet-500 hover:text-gray-400 place-items-center'><FontAwesomeIcon icon={faSquareMinus} size='xs' /><span className='pl-1'>Remove</span></button></ol>
                  <ol>
                    {!term.public &&
                      <div>
                        <span className='px-1'>|</span>
                        <button className='text-red-500 hover:text-gray-400 place-items-center'><FontAwesomeIcon icon={faTrash} size='xs' />
                          <span className='px-1'>Delete</span>
                        </button>
                        <span className='px-1'>|</span>
                        <button
                          type='submit'
                          onClick={() => handleEdit()}
                          className='text-blue-500 hover:text-gray-400 place-items-center'><FontAwesomeIcon icon={faPenToSquare} size='xs' />
                          <span className='px-1'>Edit</span>
                        </button>
                      </div>
                    }
                  </ol>
                </ul>
              </div>
              <div className='content-left grow flex flex-col lg:flex-row rounded border border-gray-300 text-sm leading-tight tracking-tighter'>
                 <div className='flex flex-row border-b xl:border-b-0 border-gray-300'>
                    <button key='favoriteButton' onClick={handleEditFav} className='w-fit px-2 border-r border-gray-300 flex flex-col justify-center'>
                      {editFav ? <FontAwesomeIcon icon={faStar} size='lg' className=''/> : <FontAwesomeIcon icon={faStarOutline} size='lg'/>}
                    </button>
                    <div key='term-index' className='w-fit px-2 border-r border-gray-300 flex flex-col justify-center'>{index}</div>
                    <input
                      disabled={edit}
                      id='name'
                      key='name'
                      maxLength={25}
                      type='text'
                      name='term'
                      placeholder='Term'
                      value={editName}
                      onChange={handleEditName}
                      className='w-full xl:w-fit p-0.5 text-sm text-center border-b-transparent border-t-transparent border-l-transparent border-r-0 xl:border-r border-gray-300 bg-slate-100 focus:border focus:border-blue-100 focus:outline-none'
                    />
                </div>
                <div className='w-full flex flex-row '>
                  {edit ?
                    <div
                      key='def'
                      placeholder='Definition'
                      className='min-h-[40px] h-auto w-full place-self-center p-1 leading-3 tracking-tighter text-sm text-left bg-gray-100 focus:border-0 active:border-0 border-0 rounded'
                    >{editDef}</div>
                    :
                    <textarea
                    disabled={edit}
                    value={editDef}
                    onChange={handleEditDef}
                    key='def'
                    maxLength={300}
                    name='def'
                    placeholder='Definition'
                    className='w-full place-self-center px-1 leading-3 tracking-tighter text-sm text-left bg-gray-100 focus:border-0 active:border-0 border-0 rounded'
                  />}
                  <button
                    key='showMore'
                    className=' px-2 '
                    onClick={() => handleMoreClick()}>
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
              </div>
            </div>
            {/** Expand/Collpase*/}
            {/**Delete/Edit Term */} {/**row-2 */}
            {isView && !term.public ?
              <div>
                {!showMore ? 
                  <div className='h-full py-1 mr-1 flex flex-row rounded px-1'>
                    {!edit ?
                      <button
                        type='submit'
                        onClick={() => handleEdit()}
                        className='w-[62px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-blue-500 bg-blue-200 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button> : <button
                          type='submit'
                          onClick={() => handleEdit()}
                        className='w-[62px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-slate-300 bg-blue-200 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button>
                    }
                  </div>
                  :
                  <div className='h-full py-1 mr-1 flex flex-row place-self-center rounded px-1'>
                    {!edit ?
                      <button
                        type='submit'
                        onClick={() => handleEdit()}
                        className='w-[62px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-blue-500 bg-blue-200 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button> : <button
                          type='submit'
                          onClick={() => handleEdit()}
                        className='w-[62px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-slate-300 bg-blue-200 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button>
                    }
                  </div>
                }
              </div> : <div/>
            } 
          </div>
          {/** */}
          {/** Term Details */}
          {/** */}
           {showMore && edit ?
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
                    {editTags?.map((tag, index) => ( 
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
            :
            <div/>
          }
          {showMore && !edit ? <ShowMore term={term} edit={edit} editFav={editFav} /> : <div/>}
        </form>
      </div>
    </div>
  );
}

export default TermEdit;
