import PouchDB from 'pouchdb';
import publicLists from './dataExPublicLists';
import { ListType } from '../lib/types';

// import example lists
export const publicPlayground: ListType[] = publicLists;

/**Create Public GLossary Database */
export const dbPlayground = new PouchDB('glossaryPlayground');

/**<!-- Seed Public Glossary Database-> */
export const seedDBPlayground = async (data: ListType[]) => {
  data.forEach((item) => { item._id = item.id });
  try {
    //console.log(data)
    await dbPlayground.bulkDocs(data);
  } catch (err) {
    console.log(err);
  }
}

// Initilize Seeding
seedDBPlayground(publicLists);

// Get Playground Document
export const getPlaygroundDoc = async (id: string) => { 
  try {
    const result = await dbPlayground.get<Document>(id)
      const docJSON = JSON.stringify(result);
      const parsed = JSON.parse(docJSON);
      return parsed
  } catch (err) {
    console.log(err)
  }
}

// Get All Playground Lists
export const getPlaygroundDocs = async () => {
  try {
    const docs = await dbPlayground.allDocs({ include_docs: true }).then(function (resultOfAllDocs) {
      return JSON.parse(JSON.stringify(resultOfAllDocs.rows));
    });
    const result: ListType[] = [];
    docs.map((element: { doc: ListType; }) => {
        //console.log(element.doc)
        result.push(element.doc)
    });
    //console.log(result);
    return result
  } catch (err) {
    console.log(err);
  };
}
