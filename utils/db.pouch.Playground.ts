import PouchDB from 'pouchdb-browser';
import publicLists from './dataExPublicLists';
import { GlossaryContextType, ListType } from '../lib/types';

// import example lists
export const publicPlayground: ListType[] = publicLists;

/**Create Public GLossary Database */
export const dbPlayground = new PouchDB('glossaryPlayground');

/**<!-- Seed Public Glossary Database-> */
export const seedDBPlayground = async (data: ListType[]) => {
  data.forEach((list) => { list._id = list.id });
  try {
    //console.log(data)
    await dbPlayground.bulkDocs(data);
  } catch (err) {
    console.log(err);
  }
}

if (process.env.NODE_ENV === 'development') {
  // Initilize Seeding
  seedDBPlayground(publicLists);
}

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

/**<!-- Create Playground Single Doc-> */
export const createPlaygroundDoc = async (data: ListType) => {
  data._id = data.id;
  try {
    //console.log(data);
    await dbPlayground.put(data);
  } catch (err) {
    console.log(err);
  }
}

/**<!-- Delete Playground Single Doc --> */
export const deletePlaygroundDoc = async (id: string) => {
  try {
    const doc = await dbPlayground.get(id);
    await dbPlayground.remove(doc);
  } catch (err) {
    console.log(err);
  }
}

/**<!-- Update Playground Single Doc Items --> */
export const updatePlaygroundDoc = async (id: string, name: string, items: GlossaryContextType[]) => {
  try {
    const idStr = id.toString();
    const doc = await dbPlayground.get(id);
    const revStr = doc._rev.toString();
    await dbPlayground.put({
      _id: idStr,
      _rev: revStr,
      id: idStr,
      name: name,
      items: items
    });
  } catch (err) {
    console.log(err);
  }
}

