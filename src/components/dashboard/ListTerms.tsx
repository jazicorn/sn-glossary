import TermNew from './ListTermsNew';
import TermsAll from './ListTermsAll';

export default function ListOfTerms() {
  return (
    <div className='mx-5 mb-5 mt-1 h-fit w-auto rounded-xl border border-slate-400 bg-slate-700 pb-1 xl:my-5 xl:ml-2 xl:mr-5 xl:h-auto xl:grow'>
      <h2 className='custom-list-term-nav m-2 rounded border-4 border-slate-100 bg-blue-100 text-xl'>
        List 1: Terms
      </h2>
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <TermNew />
      <hr className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100' />
      {/******************* */}
      {/**Display All Terms */}
      {/******************* */}
      <TermsAll />
    </div>
  );
}
