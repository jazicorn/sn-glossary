import { useState, useEffect } from 'react';
import Collapse from './ListMenuCollapse';
import Static from './ListMenuStatic';

export default function ListMenu() {
  const [isView, setView] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1280) {
      setView(true);
    } else {
      setView(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1280) {
        setView(true);
      } else {
        setView(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className='mx-5 mb-1 mt-5 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-5 xl:mr-2 xl:h-auto xl:shrink-0 xl:basis-60'>
      <div className=''>
        <h2 className='m-2 mx-2 rounded border-4 border-slate-100 bg-blue-100 text-xl'>
          List: Menu
        </h2>
        {isView ? <Static /> : <Collapse />}
      </div>
    </div>
  );
}
