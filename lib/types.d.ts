// enum for ServiceNow ver
export const enum snRef {
  Utah,
  Tokyo,
  SanDiego,
  Rome
}

// array of glossary entries interface
export interface GlossaryContextType {
  _id?: string,
  _rev?: string,
  id: string;
  public: boolean;
  favorite: boolean;
  name: string;
  def: string;
  ver?: string;
  ref?: string;
  product?: string;
  tags?: string[];
}

// list interface
export interface ListType {
  _id?: string,
  _rev?: string,
  index?: number
  id: string;
  name: string;
  items?: GlossaryContextType[];
}

// menu interface
export interface Menu {
  items: MenuItem[]
}

// menu items interface
export interface MenuItem {
  id: string,
  name: string
}

// user object interface
export interface UserContextType {
  _id?: string,
  _rev?: string,
  id: string;
  name?: string;
  email: string;
  password: string;
  lists?: ListType[];
}
