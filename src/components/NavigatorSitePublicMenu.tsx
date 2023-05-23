import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavigatorSitePublicMenu() { 
    return (
        <div className="bg-blue-100 py-4 my-4 mx-24 flex flex-col place-items-center text-slate-700 text-center border rounded-lg">
            <h1 className="text-2xl w-full border-b border-slate-300 pb-2">Links</h1>
            <div className="divide-y-2">
                <ul className="">
                    <ol className='flex flex-row p-2 justify-center' >
                        {/**<!-- ServiceNow External Link --> */}
                        <button className='flex flex-row mx-1 '>
                            <a
                            href='https://docs.servicenow.com/'
                            target='_blank'
                            className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center text-sn-light'
                            >
                            ServiceNow
                            </a>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                        </button>
                    </ol>
                </ul>
                <ul>
                    <ol className='flex flex-row p-2 justify-center'>
                        <button className='flex flex-row mx-1'>
                            <Link
                            href=''
                            className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                            >
                                F.A.Q
                            </Link>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                        </button>
                    </ol>
                    <ol className='flex flex-row p-2 justify-center'>
                        <button className='flex flex-row mx-1'>
                            <Link
                            href=''
                            className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                            >
                                Docs
                            </Link>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                        </button>
                    </ol>
                    <ol className='flex flex-row p-2 justify-center'>
                        <button className='flex flex-row mx-1'>
                            <Link
                            href=''
                            className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                            >
                                Support
                            </Link>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                        </button>
                    </ol>
                    <ol className='flex flex-row p-2 justify-center'>
                        <button className='flex flex-row mx-1'>
                            <Link
                            href=''
                            className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                            >
                                Github
                            </Link>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='' size='2xs' />
                        </button>
                    </ol>
                </ul>
            </div>
        </div>
    )
}