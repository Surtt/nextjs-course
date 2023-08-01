import React from 'react';
import { TypographyProps } from '@/components/typography/typography.props';
import cn from 'classnames';

import styles from './typography.module.css';

export const Typography = ({
  size = 'md',
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.xs]: size === 'xs',
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
