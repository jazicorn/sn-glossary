import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="custom-background-2 absolute grow h-fit relative flex flex-col place-content-center w-full grid-rows-2">
            <div className="text-center grid grid-col w-auto h-[26em] content-end mb-6">
                <h1 className='mt-auto text-6xl md:text-8xl font-extrabold text-sn-dark'>ServiceNow</h1>
                <h1 className='text-3xl md:text-5xl text-sn-light'>Glossary</h1>
                <div className="text-md md:text-lg text-center italic place-content-center my-2">
                    <p>...database for your ServiceNow terms</p>
                </div>
            </div>
            <hr className="my-18 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="h-full w-full mt-6 flex flex-col text-center gap-4">
                <div className="flex flex-col items-center">
                    <span className="text-lg">Looking For All ServiceNow Terms?</span>
                    <hr className="flex flex-col place-content-center my-18 h-[1px] w-[256px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                    <Link href="/glossary" className="pl-1 italic text-lg text-blue-500">
                        <FontAwesomeIcon icon={faBook} /><span className="px-1 ">Public Glossary</span>
                    </Link>
                </div>
                 <div className="flex flex-col">
                    <span className="text-base"></span>
                    <Link href="" className="pl-1 italic text-lg text-gray-500">
                        <span>...</span>
                    </Link>
                </div>
            </div>
        </div>
    )
 }