// import Image from 'next/image';
// import Link from 'next/link';
import { useEffect } from "react";
//tw-elements: Initialization for ES Users
import {
    Tab,
    initTE,
} from "tw-elements";

export default function Home() {
    useEffect(() => {
        initTE({ Tab });
    }, []);
    return (
        <div className="flex flex-col basis-full">
            {/**<!--Tabs navigation-->*/}
            <div
                data-te-nav-ref role="tablist"
                className='grid flex-initial h-fit md:h-36 md:m-full grow-0 border-t-4 border-b-2 border-blue-300 pt-1 pb-2'>
                {/**Title */}
                <h1 className='place-self-center md:text-2xl m-2 md:m-1 px-2 bg-gradient-to-r from-blue-50 to-gray-200 border rounded text-xl'>Features</h1>
                {/**Tabs */}
                <div className='place-self-center justify-items-center text-center grid gap-3 grid-row-2 grid-cols-3 md:grid-row-1 md:grid-cols-4 md:gap-1'>
                    <div
                        role="presentation"
                        className='custom-feature-bar-tabs text-sm col-start-2 col-end-2 md:col-start-1 md:col-end-1'>
                        <a
                            href="#word-search"
                            className=""
                            data-te-toggle="pill"
                            data-te-target="#word-search"
                            role="tab"
                            aria-controls="word-search"
                            aria-selected="false"
                        >
                            Word Search
                        </a>
                        <p className='italic text-xs text-yellow-500'>*In Progress*</p>
                    </div>
                    <div className='custom-feature-bar-tabs text-sm col-start-1 md:col-start-2'>
                        <a
                        href="#word-list"
                            className=""
                            data-te-toggle="pill"
                            data-te-target="#word-list"
                            role="tab"
                            aria-controls="word-list"
                            aria-selected="false"
                        >
                            Customized List
                        </a>
                        <p className='italic text-xs text-rose-400'>*Coming Soon*</p>
                    </div>
                    <div className='custom-feature-bar-tabs text-sm col-start-2 md:col-start-3'>
                        <a
                        href="#flashcards"
                            className=""
                            data-te-toggle="pill"
                            data-te-target="#flashcards"
                            role="tab"
                            aria-controls="flashcards"
                            aria-selected="false"
                        >
                            Flashcards
                        </a>
                        <p className='italic text-xs text-rose-400'>*Coming Soon*</p></div>
                    <div className='custom-feature-bar-tabs text-sm col-start-3 md:col-start-4'>
                        <a
                        href="#desktop"
                            className=""
                            data-te-toggle="pill"
                            data-te-target="#desktop"
                            role="tab"
                            aria-controls="desktop"
                            aria-selected="false"
                        >
                            Desktop Support
                        </a>
                        <p className='italic text-xs text-rose-400'>*Coming Soon*</p>
                    </div>
                </div>     
            </div>
            {/** <!--Tabs content--> */}
            <div className="flex-initial bg-blue-100 h-full w-full flex flex-row place-content-center text-center">
                <div
                    className="hidden bg-green-100 h-full w-full opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="word-search"
                    role="tabpanel"
                    aria-labelledby="word-search"
                    data-te-tab-active>
                    {/**<!--search bar--> */}
                    <div className='custom-background h-full flex flex-col bg-slate-300 text-center'>
                        {/**!--landing message */}
                        <div className='flex flex-col basis-1/3'>
                            <h2 className='text-4xl text-sn-dark font-extrabold mt-auto'>ServiceNow </h2>
                            <h2 className='text-xl text-sn-light'>Glossary</h2>
                        </div>
                        {/**<!--search-->*/}
                        <div className="m-3 flex flex-row place-content-center "> 
                            <input type="search" id="word-search" placeholder="search" className="relative m-0 min-w-0 basis-96 rounded border-2 border-solid border-neutral-300 bg-grayish-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary">
                            </input>
                        </div>
                    </div>
                </div>
                <div
                    className="hidden h-full w-full place-items-center opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="word-list"
                    role="tabpanel"
                    aria-labelledby="word-list">
                    <div className="h-full flex flex-row place-content-center">
                        <h1 className="text-4xl place-self-center ">Coming Soon...</h1>
                    </div>
                </div>
                <div
                    className="hidden h-full w-full opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="flashcards"
                    role="tabpanel"
                    aria-labelledby="flashcards">
                     <div className="h-full flex flex-row place-content-center">
                        <h1 className="text-4xl place-self-center ">Coming Soon...</h1>
                    </div>
                </div>
                <div
                    className="hidden h-full w-full opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="desktop"
                    role="tabpanel"
                    aria-labelledby="desktop">
                     <div className="h-full flex flex-row place-content-center">
                        <h1 className="text-4xl place-self-center ">Coming Soon...</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}