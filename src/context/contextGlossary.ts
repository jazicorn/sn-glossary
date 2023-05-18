import { createContext } from 'react';
import { publicGlossary } from '../../utils/dataGlossary';

// array of glossary entries interface
export interface GlossaryContextType {
  id: string;
  name: string;
  def: string;
  ref: string | null;
  product: string | null;
  tags: string[] | null;
}

// create context for array of glossary objects
export const GlossaryContext = createContext<GlossaryContextType[] | null>(
  publicGlossary
);
