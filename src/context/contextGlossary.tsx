import React, { createContext } from "react";
import PouchDB from 'pouchdb'
import publicGlossary from '../../utils/dataExPublicGlossary';
import { GlossaryContextType } from '../../lib/types';

const publicData:GlossaryContextType[] = publicGlossary
/**Create Public GLossary Database */
export const dbPublic = new PouchDB('glossaryPublic');
/**<!-- Seed Public Glossary Database-> */
const seedDBPublic = async (data: GlossaryContextType[]) => {
  data.forEach((item) => { item._id = item.id });
  try {
    //console.log(data)
    await dbPublic.bulkDocs(data);
  } catch (err) {
    console.log(err);
  }
}
seedDBPublic(publicData);

export const getPublicDoc = async (id: string) => { 
  try {
    const result = await dbPublic.get<Document>(id)
    return JSON.stringify(result);
  } catch (err) {
    console.log(err)
  }
}

//https://refine.dev/blog/usecontext-and-react-context/

// create context for array of glossary objects
export const GlossaryContext = createContext<GlossaryContextType[] | null>(
  publicGlossary
);

// const defaultValues: GlossaryData = {
//   glossary: publicData,
//   getGlossaryTerm: 'Favorites',
//   addGlossaryTerm: false,
//   deleteGlossaryTerm: '',
// };


// const myGlossary= {
//     state: defaultValues,
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
//     dispatch: (action: GlossaryAction) => {},
// };
  

interface Props {
  children: React.ReactNode;
}

// //export const DashboardContext = createContext(myData);
// export const GlossaryContext = createContext<{
//   state: GlossaryData;
//   dispatch: React.Dispatch<GlossaryAction>;
// }>(myGlossary); //initialize context with default value

export const GlossaryProvider: React.FC<Props> = ({ children }) => {
  // const [state, dispatch] = useReducer(GlossaryReducer, defaultValues);
  
  return (
    <GlossaryContext.Provider value={publicGlossary}>
      {children}
    </GlossaryContext.Provider>
  );
};

