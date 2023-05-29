// enum for ServiceNow ver
export const enum snRef {
  Utah,
  Tokyo,
  SanDiego,
  Rome
}

// array of glossary entries interface
export interface GlossaryContextType {
  id: string;
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
  id: number;
  name: string;
  items?: GlossaryContextType[];
}

// user object interface
export interface UserContextType {
  id: string;
  name: string;
  email: string;
  lists: ListType[];
}
