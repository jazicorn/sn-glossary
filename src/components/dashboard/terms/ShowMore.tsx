import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faSquareXmark
} from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons'
import { GlossaryContextType } from '../../../../lib/types';

type Props = {
    editFav: boolean
    edit: boolean
    term: GlossaryContextType
}

const ShowMore: React.FC<Props> = ({ term, edit, editFav }) => {
    const [tags, setTags] = useState(term.tags);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addTags = (e: any) => {
        if (e.key === 'Enter' && e.target.value !== '') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setTags([...tags, e.target.value]);
        e.target.value = '';
        }
    };
    const removeTags = (index: number) => {
        if (!edit && tags != undefined) {
        setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
        }
        return
    };

    const term_id = term.id;

    {/**<!-- Edit Text-> */ }
    const [editProduct, setEditProduct] = useState(term.product);
    const [editRef, setEditRef] = useState(term.ref);
    const [editVer, setEditVer] = useState(term.ver);
    
    const handleEditProduct = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
        setEditProduct(e.target.value)
    }
    const handleEditRef = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
        setEditRef(e.target.value)
    }
    const handleEditVer = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
        setEditVer(e.target.value)
    }

    return (
        <div className='custom-term-details mx-2 flex flex-col rounded bg-gray-200 p-1'>
            {/**Lines: Details*/}
            <div className='mt-1 flex flex-col items-baseline rounded px-1 xl:m-0 xl:flex xl:flex-row'>
            {/**ID*/}
            <div className='w-full xl:w-fit mr-1 flex flex-row rounded bg-gray-100'>
                <label className='flex-none w-[90px] mb-1 ml-1 mt-1 pl-2 pr-1 rounded-l border-2 border-blue-300 bg-slate-200 text-sm text-right'>
                    ID:
                </label>
                <div className='w-full xl:w-[90px] flex flex-row mb-1 mr-1 mt-1 inline text-left text-xs'>
                    <div key='id' placeholder='123456789' className='h-6 w-full xl:w-[90px] justify-center pt-[3px] rounded-r border border-gray-300 bg-transparent p-0 pl-1 text-left text-xs focus:border-slate-400 focus:outline-none'>
                        {term_id}
                    </div>
                </div>
            </div>
            {/**Public */}
            <div className='mr-1 mt-1 w-full xl:w-fit flex flex-row rounded bg-gray-100 xl:mt-0'>
                <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-slate-100 text-sm text-right'>
                    Public:
                </label>
                <div className='mr-1 mt-1 w-full xl:w-fit inline text-left text-xs'>
                    <div className='h-6 w-full xl:w-[30px] pl-1.5 pt-0.5 justify-items-center rounded-r border-l-0 border border-gray-300 bg-transparent focus:border-slate-400 focus:outline-none'>
                        {term.public ? <FontAwesomeIcon icon={faSquareCheck} size='xl' className='' /> : <FontAwesomeIcon icon={faSquare} size='xl' />}
                    </div>
                </div>
            </div>
            {/**Favorite */}
            <div className='mr-1 mt-1 w-full xl:w-fit flex flex-row rounded bg-gray-100 xl:mt-0'>
                <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-slate-100 text-sm text-right'>
                    Favorite:
                </label>
                <div className='mr-1 mt-1 w-full xl:w-fit inline text-left text-xs'>
                    <div className='h-6 w-full xl:w-[30px] pl-1.5 pt-0.5 justify-items-center rounded-r border-l-0 border border-gray-300 bg-transparent focus:border-slate-400 focus:outline-none'>
                        {editFav ? <FontAwesomeIcon icon={faSquareCheck} size='xl' className='' /> : <FontAwesomeIcon icon={faSquareXmark} size='xl' />}
                    </div>
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
                    disabled={edit}
                    value={editVer}
                    onChange={handleEditVer}
                    type='text'
                    maxLength={30}
                    name='product'
                    placeholder='Product'
                    className='h-6 w-full pl-1 xl:w-[70px] text-left text-xs truncate rounded-r border-l-0 border border-gray-300 bg-transparent  focus:border-slate-400 focus:outline-none'
                />
                </div>
            </div>
            {/**Category */}
            <div className='mt-1 w-full flex flex-row rounded bg-gray-100 xl:mt-0'>
                <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                    Product:
                </label>
                <div className='w-full mr-1 mt-1 inline text-left text-xs'>
                {/**For wrapping text have to use textarea */}
                <input
                    disabled={edit}
                    value={editProduct}
                    onChange={handleEditProduct}
                    type='text'
                    maxLength={30}
                    name='product'
                    placeholder='Product'
                    className='h-6 w-full pl-1 text-left text-xs truncate rounded-r border-l-0 border border-gray-300 bg-transparent  focus:border-slate-400 focus:outline-none'
                />
                </div>
            </div>
            
            </div>
            {/**Ref*/}
            <div className='w-full px-1 pt-1'>
                <div className='mr-1 xl:m-0 w-full flex flex-row rounded bg-gray-100 xl:mt-0 grow'>
                    <label className='flex-none mb-1 ml-1 mt-1 pl-2 pr-1 w-[90px] rounded-l border-2 border-slate-300 bg-violet-100 text-sm text-right'>
                        Ref:
                    </label>
                <div className='mr-1 mt-1 w-full inline text-left text-xs'>
                    <input
                        disabled={edit}
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
                    disabled={edit}
                    maxLength={100}
                    type='text'
                    name='tag'
                    placeholder="Type..."
                    onKeyUp={(e) => addTags(e)}
                    className='mt-1 h-6 max-h-6 w-[250px] items-baseline text-left text-xs bg-transparent border-0 focus:border-0 active:border-0 '
                    />
                {/**Input-tags */}
                <div className='mr-1 px-1 flex flex-row flex-wrap content-center items-center text-xs'>
                {tags?.map((tag, index) => (
                    <div
                    key='tag'
                    className='mr-1 mb-1 h-6 w-fit pr-2 text-sm flex flex-row content-center items-center rounded border-0 bg-slate-200 focus:border-2 focus:border-slate-400'
                    >
                    <span className='w-fit pb-0.5 pl-1 text-right'>
                        {tag}
                    </span>
                    <span className='w-fit pl-3 text-center'>
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
    )
}

export default ShowMore;