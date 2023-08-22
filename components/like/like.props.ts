import { ReactNode } from 'react';

export interface LikeProps {
  amount?: number;
  border?: boolean;
  size?: 'sm' | 'md';
  onClick?: () => void;
}
