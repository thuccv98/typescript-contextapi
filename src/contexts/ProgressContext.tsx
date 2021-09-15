import { createContext, ReactNode } from 'react';

interface ProgressContextProviderProps {
  children: ReactNode;
}
interface ProressContextDefault {
  lastTime: string;
  status: string;
}

const progessDefault = {
  lastTime: '15/9/2021',
  status: 'In progress',
};

export const ProgressContext =
  createContext<ProressContextDefault>(progessDefault);

const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progessDefault}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
