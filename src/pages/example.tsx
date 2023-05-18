import { Inter } from 'next/font/google';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import Nav from '@/components/dashboard/ListNavigator';
import Menu from '@/components/dashboard/ListMenu';
import Terms from '@/components/dashboard/ListTerms';

const inter = Inter({ subsets: ['latin'] });

// array of glossary entries interface
export interface GlossaryContextType extends Array<GlossaryContextType> {
  id: string
  name: string
  def: string
  ref: string | null
  product: string | null
  tags: string[] | null
}
// api call for glossary object
//export const glossaryObj: GlossaryContextType
// create context for array of glossary objects
export const GlossaryContext = createContext<GlossaryContextType>({} as GlossaryContextType);

// list interface
export interface ListType {
  id: number
  name: string
  terms: GlossaryContextType[]
}
// user object interface
export interface UserContextType {
  id: string
  name: string
  email: string
  lists: ListType[]
}
// api call for user object using session data
//export const userObj: UserContextType
// creat context for user object
export const UserContext = createContext<UserContextType>({} as UserContextType);

// Admin Dashboard to add terms to glossary
export default function Example() {
  
  return (
    // <UserContext.Provider value={userObj}>
      // <GlossaryContext.Provider value={glossaryObj}>
        <div
          className={`flex h-screen min-h-screen w-screen xl:grow flex-col bg-slate-100 ${inter.className} bg-no-repeat `}
        >
          {/**<!-- navbar -->*/}
          <Nav />
          {/**<!-- content goes here --> */}
          <div className='flex grow flex-row bg-white bg-gradient-to-r from-gray-100 to-blue-100 text-center'>
            <div className='flex grow flex-col rounded-xl xl:flex xl:flex-row'>
              {/**React Component that shows all avaiable list; click list to generate terms to the right of this component */}
              {/**Click plus button to create new list */}
              {/**Highlight list being shown */}
              <Menu />

              {/** React Component that List all Terms from selected list */}
              {/**Replace {List} title with list name */}
              <Terms />
            </div>
          </div>
        </div>
    //  </GlossaryContext.Provider>
    // </UserContext.Provider>
  );
}
