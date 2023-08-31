import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  postId: number;
  amount?: number;
  border?: boolean;
  size?: 'sm' | 'md';
}
