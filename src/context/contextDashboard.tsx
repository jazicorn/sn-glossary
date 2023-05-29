import React, { createContext, useContext, useReducer  } from "react";
//import dataEntries from '../../utils/dataExamplePublicGlossary'
import dataLists from '../../utils/dataExPublicLists'
import { ListType } from '../../lib/types'

const myData:ListType[] = dataLists;
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
  deleteMenuItem: boolean;
  favoriteList: ListType | undefined;
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
    deleteMenuItem?: boolean;
  }
  | {
    type: "FAVORITES";
    favoriteList?: ListType;
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
        const length = state.lists.length + 1;
        state.menu.unshift('Untitled')
        state.lists.push({ id: length, name: 'Untitled', items: [] })
        return { ...state, menu: state.menu};
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
  deleteMenuItem: false,
  favoriteList: favorites,
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
