import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  ReactNode,
} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant: 'text' | 'contained';
  icon?: ReactElement;
  iconPosition?: 'right' | 'left' | 'none';
}
