import { createContext } from "react";
import publicGlossary from '../../utils/dataExPublicGlossary';
import { GlossaryContextType } from '../../lib/types';

//https://refine.dev/blog/usecontext-and-react-context/

// create context for array of glossary objects
export const GlossaryContext = createContext<GlossaryContextType[] | null>(
  publicGlossary
);

interface Props {
  children: React.ReactNode;
}

export const GlossaryProvider: React.FC<Props> = ({ children }) => {
  
  return (
    <GlossaryContext.Provider value={publicGlossary}>
      {children}
    </GlossaryContext.Provider>
  );
};

