//import React, { createContext } from "react";
import PouchDB from 'pouchdb-browser'
import publicGlossary from './dataExPublicGlossary';
import { GlossaryContextType } from '../lib/types';

// import public seed data
export const publicData: GlossaryContextType[] = publicGlossary;

/**Create Public GLossary Database */
export const dbPublic = new PouchDB('glossaryPublic');

/**<!-- Seed Public Glossary Database-> */
export const seedDBPublic = async (data: GlossaryContextType[]) => {
  data.forEach((item) => { item._id = item.id });
  try {
    //console.log(data)
    await dbPublic.bulkDocs(data);
  } catch (err) {
    console.log(err);
  }
}

// Initilize Seeding
seedDBPublic(publicData);

// Get Public Documents
export const getPublicDoc = async (id: string) => { 
  try {
    const result = await dbPublic.get<Document>(id)
      const docJSON = JSON.stringify(result);
      const parsed = JSON.parse(docJSON);
      return parsed
  } catch (err) {
    console.log(err)
  }
}

export const getPublicDocs = async () => {
    const docs = await dbPublic.allDocs({ include_docs: true });
    //console.log(docs);
    const docsJSON = JSON.stringify(docs.rows);
    //console.log(docsJSON);
    const result: GlossaryContextType[] = [];
    if (docsJSON != undefined) {
        const parsed = JSON.parse(docsJSON);
        //console.log(parsed);
        //console.log(parsed[0].doc);
        parsed.forEach((element: { doc: GlossaryContextType; }) => {
            //console.log(element.doc)
            result.push(element.doc)
        });
    }
    return result
}
