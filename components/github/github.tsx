'use client';

import React, { useContext } from 'react';
import { IconContext } from '@/context/icon.context';

export const Github = () => {
  const icon = useContext(IconContext);
  return <>{icon}</>;
};
