import { createContext } from 'react';
import publicGlossary from '../../utils/dataExamplePublicGlossary';
import { GlossaryContextType } from '../../lib/types';

// create context for array of glossary objects
export const GlossaryContext = createContext<GlossaryContextType[] | null>(
  publicGlossary
);
