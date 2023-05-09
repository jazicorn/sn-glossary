import TermNew from './ListTermsNew'
import TermsAll from './ListTermsAll'

export default function ListOfTerms() {

  return (
    <div className='mx-5 mb-5 mt-1 h-fit w-auto rounded-lg border border-slate-400 bg-slate-700 pb-1 md:my-5 md:ml-2 md:mr-5 md:w-5/6'>
      <h2 className='custom-list-term-nav m-2 rounded border-4 border-slate-100 bg-blue-100 text-xl'>
        List 1: Terms
      </h2>
      {/***************** */}
      {/**Create New Term */}
      {/***************** */}
      <TermNew />
      <hr className="my-2  h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 dark:opacity-100" />
      {/******************* */}
      {/**Display All Terms */}
      {/******************* */}
      <TermsAll/>
    </div>
  );
}
