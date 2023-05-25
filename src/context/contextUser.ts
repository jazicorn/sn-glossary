import { createContext } from 'react';
import { UserContextType } from '../../lib/types';

// api call for user object using session data
//export const userObj: UserContextType
// creat context for user object
export const UserContext = createContext<UserContextType | null>(null);
