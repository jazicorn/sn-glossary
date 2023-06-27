import React, { createContext, useContext, useReducer } from "react";
//import dataLists from '../../utils/dataExPublicLists'
import { ListType, MenuItem } from '../../lib/types'
//import { getPlaygroundDocs } from "../../utils/db.PouchPlayground";
import { v4 as uuidv4 } from 'uuid';
import { dataReducerList, dataMenuItems, deleteItem } from "@/helpers/funcDashboard";
const getUUID = uuidv4();

const myData: ListType[] = [];

//console.log(myData)
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

// favorite list
const favorites = dataReducerList(myData, 'Favorites');



//lists of term definitions
type ListData = {
  menu: MenuItem[];
  getMenuIds?: string[],
  getMenuNames?: string[],
  getMenuItem?: string;
  addMenuItem?: boolean;
  deleteMenuItem?: string;
  favoriteList: ListType | undefined;
  publicFavorites?: string[];
  getFavorite?: string;
  addFavorite?: string;
  removeFavorite?: string;
  currentList: ListType | undefined;
  lists: ListType[];
};

type ListAction =
  | {
    type: "MENU";
    menu?: MenuItem[];
    getMenuIds?: string[],
    getMenuNames?: string[],
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
      if (action.menu) {
        const lists = action.menu;
        const ids = dataMenuItems(state.lists, 'ids') as string[];
        const idsMenu = [...ids].sort().filter((item) => item != 'Favorites') as string[];
        const names: string[] = dataMenuItems(lists, 'names') as string[];
        const namesMenu: string[] = [...names].sort().reverse().filter((item) => item != 'Favorites');
        return { ...state, menu: lists, getMenuIds: idsMenu, getMenuNames: namesMenu };
      } else if (action.getMenuIds) {
        const ids = dataMenuItems(state.lists, 'ids') as string[];
        const idsMenu = [...ids].sort().reverse().filter((item) => item != 'Favorites') as string[];
        return {...state, getMenuIds: idsMenu }
      } else if (action.getMenuNames) {
        const names = dataMenuItems(state.lists, 'names') as string[];
        const namesMenu = [...names].sort().reverse().filter((item) => item != 'Favorites') as string[];
        return {...state, getMenuNames: namesMenu}
      } else if (action.addMenuItem) {
        const lists = state.lists;
        const menu = state.menu;
        const names = dataMenuItems(menu, "names") as string[];
        const untitled = names.includes('Untitled');
        if (lists.length > 10) {
          return { ...state, menu: menu }
        } else if (!untitled) {
          const newID = getUUID;
          const newName = 'Untitled'
          menu.unshift({ id: newID, name: newName });
          const items = dataMenuItems(state.lists, 'names') as string[];
          items.unshift(newName);
          lists.push({ id: newID, name: newName, items: [] });
          return { ...state, menu: menu, getMenuNames: items, lists: lists } ;
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
        const lists: ListType[] = state.lists;
        //console.log(lists)
        const menu: MenuItem[] = state.menu;
        const item: string = state.getMenuItem as string;
        const filteredLists = deleteItem(lists, item) ;
        const filteredMenu = deleteItem(menu, item);
        return { ...state, menu: filteredMenu, getMenuItem: 'Favorites', lists: filteredLists };
      } else if (action.getMenuItem) {
        return {...state, getMenuItem: action.getMenuItem}
      }
      return { ...state, menu: dataMenu };
    case 'LISTS':
      const resultList = () => { if(state.getMenuItem !== undefined) return dataReducerList(myData, state.getMenuItem) };
      if (action.lists) {
        return { ...state, lists: action.lists}
      }
      else if (action.currentList && resultList) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
  getMenuIds: [],
  getMenuNames: [],
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
