import cn from 'classnames';
import styles from './textarea.module.css';
import { TextareaProps } from '@/components/textarea/textarea.props';
import { ForwardedRef, forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(
  (
    { className, error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea
          {...props}
          ref={ref}
          className={cn(styles.textarea, {
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
