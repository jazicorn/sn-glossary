import { faDatabase, faFileCode, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TermOptions = () => {
  return (
    <div className='mx-2 my-1 flex flex-row justify-between rounded bg-gray-200 p-1 '>
      <div className='mb-1 ml-1 mr-2 mt-1 flex grow flex-row justify-between rounded bg-gray-100 p-1'>
        <ul className='content-left grow flex flex-row truncate text-xs'>
          <ol><button><span className="pr-1">Download:</span></button></ol>
          <ol><button><span className="text-download-json hover:text-gray-400"><FontAwesomeIcon icon={faFileCode} className="pr-1"/>Json</span><span className="px-1">|</span></button></ol>
          <ol><button><span className="text-download-excel hover:text-gray-400"><FontAwesomeIcon icon={faFileExcel} className="pr-1"/>Excel</span><span className="px-1">|</span></button></ol>
          <ol><button><span className="text-download-sql hover:text-gray-400 tracking-tight"><FontAwesomeIcon icon={faDatabase} className="pr-1"/>SQLite</span></button></ol>
        </ul>
      </div>
    </div>
  );
};

export default TermOptions;
