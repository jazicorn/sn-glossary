import { ListType, MenuItem } from "../../lib/types";
import { nanoid } from "nanoid";

// PublicList Array 
export const defaultDataMenu = (prop:ListType[]) => {
  const menu: MenuItem[] = [];
  prop.forEach((entry:ListType) => {
    menu.push({  id: entry.id, name: entry.name });
  })
  return menu
};

// lists of menu names
export const dataMenuItems = (prop: MenuItem[], option?: string) => {
  const names: string[] = [];
  const ids: string[] = [];
  prop.forEach((item: MenuItem) => {
    names.push(item.name);
    ids.push(item.id);
  })
  if (option === 'ids') {
    return ids
  } else if (option === 'names') {
    return names
  } else {
    return { ids, names }
  }
}

// find menu item by name and return id
export const dataMenuFindByName = (prop: MenuItem[], title: string) => {
  let getId = '';
  prop.filter((item) => {
    const { id, name } = item;
    if (name === title) {
      getId = id
    }
  });
  return getId
}

// find menu item by name and return id
export const dataListFind = (lists: ListType[], prop: string, option?: string) => {
  const list = lists.find((item) => item.id === prop || item.name === prop);
  const id: string = list?._id as string;
  const rev: string = list?._rev as string;
  if (option === 'name') {
  }
  else if (option === 'rev') {
    return rev
  } else if (option === 'id') {
    return id 
  } else if (option !== 'id' && option !== 'rev') {
    return undefined
  } else {
    return [id, rev]
  }
}

export const findList = (lists: ListType[], prop: string) => {
  return lists.find((element) => {
    return prop === element.id || prop === element.name || prop === element._id
  })
}

export const deleteItem = (lists: ListType[] | MenuItem[], prop: string) => {
  const results: MenuItem[] | ListType[] = lists.filter((list) => { return list.name !== prop || list.id !== prop });
  return results
}

// true if name found in list, false if not
// returns bool
export const dataIncludesMenuName = (prop:string[], name:string) => {
  return prop.includes(name) 
}

// requests list by list name
// returns object
export const dataReducerList = (prop: ListType[], name: string) => {
  return prop.find(entry => entry.name === name)
}

// check if id already taken
const collisionCheck = (lists: ListType[], nanoID: string) => {
  let check = false;
  if (lists !== undefined && Array.isArray(lists)) {
    lists.forEach((list) => list?.items?.forEach((item) => {
      if (item.id === nanoID) {
        check = true;
      }
    }))
  }
  return check
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newTermId = (lists: ListType[], nanoID: string) => {
  const collision = collisionCheck(lists, nanoID);
  if (collision) {
    nanoID = nanoid(10);
    newTermId(lists, nanoID);
  } else {
    return nanoID;
  }
}