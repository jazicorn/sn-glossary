import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`h-full min-h-full ${inter.className}`}>
      <nav className='fixed bg-{214, 219, 220} w-full'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-between'>
            <div className='flex space-x-4'>
              {/**<!-- logo -->*/}
              <div>
                <a href="#" className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900">
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
      <div className='custom-background py-24 h-screen flex flex-col place-content-center bg-slate-300 text-center'>
        <h2 className='font-extrabold text-4xl'>Welcome!</h2>
        <div>
          <input className="m-4 py-2 px-4 w-3/5 md:w-2/5 bg-blue-300 rounded-full text-center" placeholder='Type word here...'></input>
        </div>
      </div>
   </div>
  )
}
