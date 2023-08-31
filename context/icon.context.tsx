'use client';

import { createContext, PropsWithChildren } from 'react';
import GitHubIcon from '@/public/icons/github.svg';

export const IconContext = createContext({});

export const IconContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <IconContext.Provider value={<GitHubIcon width={19} height={20} />}>
      {children}
    </IconContext.Provider>
  );
};
