import React, { createContext, useContext, useReducer  } from "react";
import dataEntries from '../../utils/dataExPublicGlossary'
import dataLists from '../../utils/dataExPublicLists'
import { ListType, GlossaryContextType } from '../../lib/types'
import PouchDB from 'pouchdb'

import { v4 as uuidv4 } from 'uuid';
const getUUID = uuidv4();

// error 412 | id missing for puts
const publicData:GlossaryContextType[] = dataEntries
/**<!-- Seed Public Glossary Database-> */
const dbPublic = new PouchDB('GlossaryPublic');
const seedDBPublic = async (data: GlossaryContextType[]) => {
  try {
    const date = new Date().toISOString()
    //console.log(data)
    await dbPublic.put({ _id: date, data: data });
  } catch (err) {
    console.log(err);
  }
}
seedDBPublic(publicData);

const myData:ListType[] = dataLists;
/**<!-- Seed Private Glossary Database-> */
const dbPrivate = new PouchDB('GlossaryPrivate');
const seedDBPrivate = async (data: ListType[]) => {
  try {
    const date = new Date().toISOString()
    await dbPrivate.put({ _id: date, data: data });
  } catch (err) {
    console.log(err);
  }
}
seedDBPrivate(myData );

// PublicList Array contains Object list | Array[ Object{ id: number, name: string, items: Array[ Objects{} ] } ]
// returns string[]
export const defaultDataMenu = (prop:ListType[]) => {
  const menu: string[] = []
  prop.forEach((entry:ListType) => {
    const item: string = entry.name;
    menu.push(item);
  })
  return menu
};

// array of menu items
const dataMenu = defaultDataMenu(myData)

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

//lists of term definitions
type ListData = {
  menu: string[];
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
    menu?: string[];
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
        const menu = state.menu;
        let total = 1;
        for (const item of menu) {
          if (item.includes('Untitled')) {
            total += 1;
          }
        }
        const newItem = 'Untitled' + total.toString();
        menu.unshift(newItem);
        state.lists.push({ id: getUUID, name: newItem, items: [] })
        total = 0;
        return { ...state, menu: menu};
      } else if (action.deleteMenuItem) {
        //const deleteItem = state.deleteMenuItem;
        return { ...state, menu: state.menu};
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
