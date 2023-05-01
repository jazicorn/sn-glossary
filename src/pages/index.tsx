import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <nav className={``}>
        <div className={`max-w-6xl mx-auto`}>
          <div className={`flex justify-between`}>
            <div className={`flex space-x-4`}>
              {/**<!-- logo -->*/}
              <div>
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
              <div className="hidden md:flex items-center space-x-1">
                  <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900"></a>
                  <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900"></a>
              </div>
            </div>
            {/**<!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">Login</a>
              <a href="" className="py-2 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-300">Signup</a>
            </div>
          </div>
        </div>
      </nav>
      {/**<!-- content goes here --> */}
      <div className={`py-32 text-center`}>
        <h2 className={`font-extrabold text-4xl`}>Welcome!</h2>
      </div>
   </div>
  )
}
