import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  amount?: number;
  border?: boolean;
  size?: 'sm' | 'md';
}
