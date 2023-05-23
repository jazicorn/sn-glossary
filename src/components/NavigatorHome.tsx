import Link from 'next/link';

export default function NavigatorHome() {
    return (
        <div>
            {/**<!-- nav bar --> */}
            <nav className='py-0 px-4 m-0 mt-1 h-10 flex flex-row justify-center gap-4 text-lg'>
                <div className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'>
                    <Link
                        href=''
                        >
                        About
                    </Link>
                </div>
                <div className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'>
                    <Link
                        href=''
                        >
                        Links
                    </Link>
                </div>
                <div className='place-self-center h-fit w-auto mx-1 p-0 text-grey-900 hover:text-grey-300 text-center'>
                    <Link
                        href=''
                        >
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    )
}