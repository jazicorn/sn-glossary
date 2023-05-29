import dynamic from 'next/dynamic';
const NavBar = dynamic(import('../components/navigator/NavigatorSitePublic'), {
  ssr: false,
});

export default function Custom404() {
  return (
    <div className='bg-grayish-100 flex h-screen w-full flex-col'>
      <div className='h-14'>
        <NavBar />
      </div>
      <div className='grid grow place-content-center text-center'>
        <h1 className=' text-2xl'>
          <span className='text-red-400'>404</span> | Page Not Found
        </h1>
      </div>
    </div>
  );
}
