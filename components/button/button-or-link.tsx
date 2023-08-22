import cn from 'classnames';
import { ButtonOrLinkProps } from '@/components/button/button-or-link.props';

interface Props extends ButtonOrLinkProps {
  href?: Url;
}
export const ButtonOrLink = ({
  variant,
  icon,
  iconPosition,
  children,
  className,
  href,
  ...props
}: Props) => {
  if (href) {
    return (
      <Link
        {...props}
        href={href}
        className={cn(styles.button, className, {
          [styles.text]: variant === 'text',
          [styles.contained]: variant === 'contained',
        })}
      >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.text]: variant === 'text',
        [styles.contained]: variant === 'contained',
      })}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  );
};

import styles from './button-or-link.module.css';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
