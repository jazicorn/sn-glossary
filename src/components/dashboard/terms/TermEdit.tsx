import React, { useEffect, useState } from 'react';
//import { useForm } from 'react-hook-form';
import ShowMore from './ShowMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faChevronCircleUp,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons'
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
  
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const [newTerm, setNewTerm] = useState({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    setNewTerm(newTerm);
  }

  const [edit, setEdit] = useState(true);

  function handleEdit() {
    setEdit(!edit);
  }

  {/**<!-- Edit Text-> */ }
  const [editName, setEditName] = useState(term.name);
  const [editDef, setEditDef] = useState(term.def);
  const [editFav, setEditFav] = useState(term.favorite);
  
  const handleEditName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditName(e.target.value)
  }
  const handleEditDef = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEditDef(e.target.value)
  }
  const handleEditFav = () => {
    setEditFav(!editFav);
  }

  // const termObj = {
  //   public: false,
  //   favorite: editFav,
  //   name: editName,
  //   def: editDef,
  //   version: editVer,
  //   product: editProduct,
  //   ref: editRef,
  //   tags: tags
  // }

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
              <div className='flex flex-row text-xs'>{!edit ? <div className='text-blue-500'>Mode: Edit</div> : <div>Mode: Display</div>}</div>
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
                      className='w-full xl:w-fit p-0.5 text-sm text-center rounded-r border-b-transparent border-t-transparent border-l-transparent border-r-0 xl:border-r border-gray-300 bg-slate-100 focus:border focus:border-blue-100 focus:outline-none'
                    />
                </div>
                <div className='w-full flex flex-row'>
                  <textarea
                    disabled={edit}
                    value={editDef}
                    onChange={handleEditDef}
                    key='def'
                    maxLength={300}
                    name='def'
                    placeholder='Definition'
                    className='w-full self-center bg-gray-100 px-1 py-1 text-sm text-left focus:border-0 active:border-0 border-0 rounded'
                  />
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
            {isView &&
              <div>
                {!showMore ? 
                  <div className='h-[54px] py-1 mr-1 flex flex-row place-self-center rounded px-1'>
                    {!edit ?
                      <button
                        type='submit'
                        onClick={() => handleEdit()}
                        className='w-[72px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-blue-500 bg-blue-100 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button> : <button
                          type='submit'
                          onClick={() => handleEdit()}
                        className='w-[72px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-slate-400 bg-blue-100 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button>
                    }
                  </div>
                  :
                  <div className='h-[54px] py-1 mr-1 flex flex-row place-self-center rounded px-1'>
                    {!edit ?
                      <button
                        type='submit'
                        onClick={() => handleEdit()}
                        className='w-[72px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-blue-500 bg-blue-100 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button> : <button
                          type='submit'
                          onClick={() => handleEdit()}
                        className='w-[72px] h-[25px] my-0.5 ml-1 items-baseline place-self-center rounded border-2 border-slate-400 bg-blue-100 px-2 text-sm font-medium uppercase'
                      >
                        Edit
                      </button>
                    }
                  </div>
                }
              </div>
            }
          </div>
          {/** */}
          {/** Term Details */}
          {/** */}
          {showMore && (
            <ShowMore term={term} edit={edit} editFav={editFav} />
          )}
        </form>
      </div>
    </div>
  );
}

export default TermEdit;
