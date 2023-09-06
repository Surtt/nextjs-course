import { InputProps } from '@/components/input/input.props';
import cn from 'classnames';
import styles from './input.module.css';
import { ForwardedRef, forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <input
          ref={ref}
          {...props}
          className={cn(styles.input, {
            [styles.error]: error,
          })}
        />
        {error && (
          <span role='alert' className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  },
);
