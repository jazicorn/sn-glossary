import Image from 'next/image'

export default function ListNavigator() {
    return (
        <nav className="flex flex-row justify-between h-14 mx-4">
                {/**<!-- logo -->*/}
                <div className="place-self-center">
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <Image
                        src="blue-book.svg"
                        alt="Home"
                        width={24}
                        height={24}
                    />
                    <span className="pl-2.5 font-bold">SN-Glossary</span>
                    </a>
                </div>
                {/**<!-- primary nav --> */}
                <div className="flex flex-row">
                    <a href="#" className="text-gray-700 hover:text-gray-900 place-self-center"></a>
                </div>
                {/**<!-- secondary nav --> */}
                <div className="flex flex-row mr-2">
                    <a href="" className="place-self-center py-1 px-3 bg-blue-300 hover:bg-blue-400 text-grey-900 hover:text-grey-300 rounded transition duration-300">
                        Logout
                    </a>
                </div>
            </nav>
    )
}