import { createContext } from 'react';
import { GlossaryContextType } from '../../lib/types';

// list interface
export interface ListType {
  id: number;
  name: string;
  terms: GlossaryContextType[];
}
// user object interface
export interface UserContextType {
  id: string;
  name: string;
  email: string;
  lists: ListType[];
}

// api call for user object using session data
//export const userObj: UserContextType
// creat context for user object
export const UserContext = createContext<UserContextType | null>(null);