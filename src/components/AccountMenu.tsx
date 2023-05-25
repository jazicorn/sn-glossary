import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faKey,
  faChalkboard,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';

export default function AccountMenu() {
    return (
        <div className="">
            <div className="ng-blue-100 py-4 my-4 mx-8 flex flex-col place-items-center text-slate-700 text-center border rounded-lg bg-gray-100">
                <h1 className="text-xl text-blue-500 w-full border-b border-slate-300 pb-2">Account Menu</h1>
                 
                <div className="divide-y mx-4">
                    <ul className="text-xl">
                        <ol className='flex flex-row px-2 py-1 justify-center text-blue-300 hover:text-gray-500' >
                            <Link href=''>Login</Link>
                        </ol>
                        <ol className='flex flex-row px-2 pb-1 justify-center text-blue-300 hover:text-gray-500' >
                            <Link href=''>Logout</Link>
                        </ol>
                    </ul>
                    <ul>
                        <ol className='flex flex-row p-2 justify-center hover:text-blue-300'>
                            <button className='flex flex-row mx-1'>
                                <Link
                                    href=''
                                    className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                                >
                                    <FontAwesomeIcon icon={faKey} size='sm'/>
                                    <span className='px-1'>User Settings</span>
                                </Link>
                            </button>
                        </ol>
                        <ol className='flex flex-row p-2 justify-center hover:text-blue-300'>
                            <button className='flex flex-row mx-1'>
                                <Link
                                    href=''
                                    className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center'
                                >
                                    <FontAwesomeIcon icon={faChalkboard} size='sm'/>
                                    <span className='px-1'>Dashboard Settings</span>
                                </Link>
                            </button>
                        </ol>
                        <ol className='flex flex-row p-2 justify-center hover:text-blue-300'>
                            <button className='flex flex-row mx-1'>
                                <Link
                                    href=''
                                    className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                                >
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} size='sm'/>
                                    <span className='px-1'>Issue Tickets</span>
                                </Link>
                            </button>
                        </ol>
                        <ol className='flex flex-row p-2 justify-center hover:text-blue-300'>
                            <button className='flex flex-row mx-1'>
                                <Link
                                    href=''
                                    className='place-self-center h-fit w-auto py-0 px-0.5 text-grey-900 hover:text-grey-300 truncate text-center tracking-tighter'
                                >
                                    <FontAwesomeIcon icon={faLock} size='sm'/>
                                    <span className='px-1'>Privacy</span>
                                </Link>
                            </button>
                        </ol>
                    </ul>
                    <ul>
                        <ol className='flex flex-row p-2 justify-center' >
                            ...
                        </ol>
                    </ul>
                </div>
            </div>
        </div>
    )
 }