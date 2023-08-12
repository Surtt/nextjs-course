import { ReactNode } from 'react';

export interface LikeProps {
  number?: string;
  border?: boolean;
  size?: 'sm' | 'md';
  onClick?: () => void;
}
