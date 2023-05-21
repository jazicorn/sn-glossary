// array of glossary entries interface
export interface GlossaryContextType {
  id: string;
  name: string;
  def: string;
  ref: string | null;
  product: string | null;
  tags: string[] | null;
}

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
