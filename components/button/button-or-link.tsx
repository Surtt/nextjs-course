import cn from 'classnames';
import { ButtonOrLinkProps } from '@/components/button/button-or-link.props';

import styles from './button-or-link.module.css';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface Props extends ButtonOrLinkProps {
  href?: Url;
}
export const ButtonOrLink = ({
  variant,
  icon,
  iconPosition,
  children,
  className,
  ...props
}: Props) => {
  const classes = cn(styles.button, className, {
    [styles.text]: variant === 'text',
    [styles.contained]: variant === 'contained',
  });

  if (props.href) {
    return (
      <Link {...props} href={props.href} className={classes}>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  );
};
