import React, { createContext, useContext, useReducer } from "react";
import dataLists from '../../utils/dataExPublicLists'
import { ListType, MenuItem } from '../../lib/types'
//import { getPlaygroundDocs } from "../../utils/db.PouchPlayground";
import { v4 as uuidv4 } from 'uuid';
const getUUID = uuidv4();

const myData: ListType[] = dataLists

console.log(myData)
// PublicList Array 
export const defaultDataMenu = (prop:ListType[]) => {
  const menu: MenuItem[] = [];
  prop.forEach((entry:ListType) => {
    menu.push({  id: entry.id, name: entry.name });
  })
  return menu
};

// array of menu items
const dataMenu = defaultDataMenu(myData)

// lists of menu names
export const dataMenuItems= (prop: MenuItem[], option?: string) => {
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
    return [ids, names] 
  }
}

// true if name found in list, false if not
// returns bool
export const dataReducerMenu = (prop:string[], name:string) => {
  return prop.includes(name) 
}

// requests list by list name
// returns object
export const dataReducerList = (prop: ListType[], name: string) => {
  return prop.find(entry => entry.name === name)
}

// favorite list
const favorites = dataReducerList(myData, 'Favorites')

export const findList = (lists: ListType[], prop: string) => {
  return lists.find((element) => {
    return prop === element.id || prop === element.name
  })
}

export const deleteItem = (lists: ListType[] | MenuItem[], prop: string) => {
  //console.log(prop);
  const results = lists.filter((list) => { return list.name !== prop && list.id !== prop });
  //console.log(results);
  return results
}

//lists of term definitions
type ListData = {
  menu: MenuItem[];
  getMenuItem: string;
  addMenuItem: boolean;
  deleteMenuItem: string;
  favoriteList: ListType | undefined;
  publicFavorites?: string[];
  getFavorite?: string;
  addFavorite: string;
  removeFavorite: string;
  currentList: ListType | undefined;
  lists: ListType[];
};

type ListAction =
  | {
    type: "MENU";
    menu?: MenuItem[];
    getMenuItem?: string;
    addMenuItem?: boolean;
    deleteMenuItem?: string;
  }
  | {
    type: "FAVORITES";
    favoriteList?: ListType;
    publicFavorites?: string[];
    getFavorite?: string;
    addFavorite?: string;
    removeFavorite?: string;
    }
  | {
    type: "LISTS";
    currentList?: ListType;
    lists?: ListType[];
    };

// show menu
const ListReducer = (
  state: ListData,
  action: ListAction
): ListData => {
  switch (action.type) {
    case 'MENU':
      if (action.addMenuItem) {
        const lists = state.lists;
        const menu = state.menu;
        const [names] = dataMenuItems(menu, "names");
        const untitled = names.includes('Untitled');
        if (lists.length > 10) {
          return { ...state, menu: menu }
        } else if (!untitled) {
          const newID = getUUID;
          const newName = 'Untitled'
          menu.unshift({ id: newID, name: newName });
          lists.push({ id: newID, name: newName, items: [] });
          return { ...state, menu: menu, lists: lists } ;
        } else {
          let total = 0;
          for (const item of names) {
            if (item.includes('Untitled')) {
              total += 1;
            }
          }
          const newID = getUUID;
          const newName = 'Untitled' + total.toString();
          menu.unshift({ id: newID, name: newName });
          state.lists.push({ id: newID, name: newName, items: [] })
          total = 0;
          return { ...state, menu: menu }
        }
      } else if (action.deleteMenuItem) {
        const lists = state.lists;
        //console.log(lists)
        const menu = state.menu;
        const item = state.getMenuItem;
        const filteredLists = deleteItem(lists, item);
        const filteredMenu = deleteItem(menu, item);
        //console.log(filteredLists)
        return { ...state, menu: filteredMenu, getMenuItem: 'Favorites', lists: filteredLists };
      } else if (action.getMenuItem) {
        return {...state, getMenuItem: action.getMenuItem}
      }
      return { ...state, menu: dataMenu };
    case 'LISTS':
      const resultList = dataReducerList(myData, state.getMenuItem)
      if (action.currentList && resultList) {
        return { ...state, currentList: resultList };
      }
      return { ...state, lists: state.lists};
    default:
      return state;  
  }
};

interface Props {
  children: React.ReactNode;
}

const defaultValues: ListData = {
  menu: dataMenu,
  getMenuItem: 'Favorites',
  addMenuItem: false,
  deleteMenuItem: '',
  favoriteList: favorites,
  publicFavorites: [],
  getFavorite: '',
  addFavorite: '',
  removeFavorite: '',
  currentList: favorites,
  lists: myData,
};

const myLists = {
    state: defaultValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    dispatch: (action: ListAction) => {},
  };

//export const DashboardContext = createContext(myData);
export const DashboardContext = createContext<{
  state: ListData;
  dispatch: React.Dispatch<ListAction>;
}>(myLists); //initialize context with default value

export const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, defaultValues);

  return (
    <DashboardContext.Provider value={{state, dispatch}}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
