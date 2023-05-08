// import Image from 'next/image';
// import Link from 'next/link';
import Search from './NavBarFeatureSearch'
import CustomList from './NavBarFeatureList'
import FlashCards from './NavBarFeatureCards'
import Desktop from './NavBarFeatureDesktop'
import React, { useState } from 'react';
  
export default function Home() {
    const [showComponent, setShowComponent] = useState(<Search/>);

    return (
        <div className="flex flex-col basis-full">
            {/**<!--Tabs navigation-->*/}
            <div
                className='grid flex-initial h-fit md:h-36 md:m-full grow-0 border-t-4 border-b-2 border-blue-300 pt-1 pb-2'>
                {/**Title */}
                <h1 className='place-self-center md:text-2xl m-2 md:m-1 px-2 bg-gradient-to-r from-blue-50 to-gray-200 border rounded text-xl'>Features</h1>
                {/**Tabs */}
                <div className='place-self-center justify-items-center text-center grid gap-3 grid-row-2 grid-cols-3 md:grid-row-1 md:grid-cols-4 md:gap-1'>
                    <div
                        className='custom-feature-bar-tabs text-sm col-start-2 col-end-2 md:col-start-1 md:col-end-1'>
                        <button
                            onClick={() => setShowComponent(<Search />)}
                            className="px-1 border border-transparent rounded focus:border-blue-200">
                            Word Search
                        </button>
                        <p className='italic text-xs text-yellow-500'>*In Progress*</p>
                    </div>
                    <div className='custom-feature-bar-tabs text-sm col-start-1 md:col-start-2'>
                        <button
                            onClick={() => setShowComponent(<CustomList />)}
                            className="px-1 border border-transparent rounded focus:border-blue-200">
                            Customized List
                        </button>
                        <p className='italic text-xs text-rose-400'>*Coming Soon*</p>
                    </div>
                    <div className='custom-feature-bar-tabs text-sm col-start-2 md:col-start-3'>
                        <button
                            onClick={() => setShowComponent(<FlashCards />)}
                            className="px-1 border border-transparent rounded focus:border-blue-200">
                            Flashcards
                        </button>
                        <p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
                    <div className='custom-feature-bar-tabs text-sm col-start-3 md:col-start-4'>
                        <button
                            onClick={() => setShowComponent(<Desktop />)}
                            className="px-1 border border-transparent rounded focus:border-blue-200">
                            Desktop Support
                        </button>
                        <p className='italic text-xs text-rose-400'>*Coming Soon*</p>
                    </div>
                </div>     
            </div>
            {/** <!--Tabs content--> */}
            <div className="flex-initial bg-grayish-100 h-full w-full flex flex-row place-content-center text-center">
                {showComponent}
            </div>        
        </div>
    )
}