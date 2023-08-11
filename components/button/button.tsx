import cn from 'classnames';
import { ButtonProps } from '@/components/button/button.props';
import ArrowIcon from './arrow.svg';
import styles from './button.module.css';

export const Button = ({
  variant,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.text]: variant === 'text',
        [styles.contained]: variant === 'contained',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
