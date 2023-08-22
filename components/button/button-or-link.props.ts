import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';

export type ButtonOrLinkProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    children: ReactNode;
    variant: 'text' | 'contained';
    icon?: ReactElement;
    iconPosition?: 'right' | 'left';
  };
