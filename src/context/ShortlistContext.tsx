import { createContext, useContext, useState } from 'react';
import { Candidate } from '@/types/Candidate';

interface Ctx {
  list: Candidate[];
  add: (c: Candidate) => void;
  remove: (email: string) => void;
}
const C = createContext<Ctx>({} as Ctx);
export const useShortlist = () => useContext(C);

export function ShortlistProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<Candidate[]>([]);

  const add = (c: Candidate) =>
    setList(prev =>
      prev.length < 5 && !prev.find(p => p.email === c.email) ? [...prev, c] : prev
    );

  const remove = (email: string) => setList(prev => prev.filter(c => c.email !== email));

  return <C.Provider value={{ list, add, remove }}>{children}</C.Provider>;
}
