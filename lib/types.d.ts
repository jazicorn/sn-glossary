// array of glossary entries interface
export interface GlossaryContextType {
  id: string;
  name: string;
  def: string;
  ref: string | null;
  product: string | null;
  tags: string[] | null;
}
