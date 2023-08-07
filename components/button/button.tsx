import cn from 'classnames';
import { ButtonProps } from '@/components/button/button.props';
import styles from './button.module.css';

export const Button = ({
  variant,
  icon,
  iconPosition = 'none',
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
      {iconPosition !== 'none' && iconPosition === 'left' && icon}
      {children}
      {iconPosition !== 'none' && iconPosition === 'right' && icon}
    </button>
  );
};
