import { useState } from "react";

export default function ListMenuCollapse() {

  
  const [lists, setList] = useState(['List1', 'List2', 'List3']);

  // Create Untitled list in list menu
  const createList = () => {
    setList(['Untitled', ...lists]);
  };
  return (
    <div>
      {/**Static Menu */}
      <div className=''>
        <div className=''>
          <div className='text-l mx-2 mb-1 flex flex-col justify-center rounded border-4 border-blue-200 bg-violet-100 bg-gradient-to-r from-slate-100 to-violet-100 italic text-blue-500 '>
            {/**Creates New List: Untitled*/}
            <button onClick={createList} className='text-bold italic inline-block h-full w-full grow hover:bg-emerald-100'>
              Create List
            </button>
          </div>
          <ul className='text-l flex flex-col'>
            {lists.map((list:string) => (
              <li
                key={list}
                className='mx-2 my-1 rounded border-4 bg-gray-100'
              >
                <button  className='inline-block h-full w-full from-violet-100 to-blue-200 hover:bg-gradient-to-r '>
                  {list}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
